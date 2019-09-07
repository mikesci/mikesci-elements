import React from "react";
import memoize from "memoize-one";
import "./Component.css";
import "./tmi.min.js";
import { runInThisContext } from "vm";

export default class extends React.Component {

    static manifest = {
        "name": "Hitch Wait Time Guess",
        "author": "MikeSci",
        "description": "Allows viewers to guess the time Hitch will wait for his next ride.",
        "width": 300,
        "height": 300,
        "parameters": [
            { "name": "channel", "displayName": "Channel", "type": "text", "defaultValue": "hitch" },
            { "name": "guessCommand", "displayName": "Guess Command", "type": "text", "defaultValue": "!guess" },
            { "name": "startCommand", "displayName": "Start Command", "type": "text", "defaultValue": "!start" },
            { "name": "stopCommand", "displayName": "Stop Command", "type": "text", "defaultValue": "!stop" },
            { "name": "pauseCommand", "displayName": "Pause Command", "type": "text", "defaultValue": "!pause" },
            { "name": "changeWindow", "displayName": "Guess Change Window (s)", "type": "text", "defaultValue": "15" },
            { "name": "font", "displayName": "Font", "type": "font", "defaultValue": { fontSize: "48px"} },
            { "name": "demoMode", "displayName": "Demo Mode", "type": "checkbox", "defaultValue": false },
        ]
    };

    DISPLAY_STATE_NEW = 0;
    DISPLAY_STATE_VISIBLE = 1;
    DISPLAY_STATE_HIDDEN = 2;

    _guessRegex = /!guess (?:(\d+)h ?)?(?:(\d+)m ?)?(?:(\d+)s)?.*/g;

    _tmi;
    _demoModeInterval;

    constructor(props) {
        super(props);

        this.state = {
            channel: null,
            isRunning: false,
            isPaused: false,
            guesses: [],
            timerValue: 0,
            timerInterval: null,
            displayQueueInterval: null
        };
    }

    ensureTmi = memoize(
        (channel) => {
            if (this._tmi) {
                this._tmi.disconnect();
                this._tmi = null;
            }

            if (channel) {
                this._tmi = new tmi.client({
                    connection: { secure: window.location.protocol == "https:" },
                    options: { debug: true },
                    channels: [ channel ]
                });
                this._tmi.addListener('message', this.processMessage);
                this._tmi.connect();
            }

            return this._tmi;
        }
    );

    ensureDemoMode = memoize(
        (demoMode) => {
            if (this._demoModeInterval) {
                setTimeout(() => this.onStop(), 100);
                clearInterval(this._demoModeInterval);
                this._demoModeInterval = null;
            }

            if (demoMode) {
                setTimeout(() => {
                    this.onStart();
                    this._demoModeInterval = setInterval(() => {
                        this.onGuess({ username: "test" + Math.random(), color: "red" }, "!guess " + parseInt(Math.random() * 60) + "m");
                    }, 1000);
                }, 100);
            }

            return this._demoModeInterval;
        }
    );

    processMessage = (channel, user, message, self) => {
        if (message.startsWith(this.props.guessCommand)) { this.onGuess(user, message); return; }
        // everything below here is for authorized users only.  mods or the broadcaster.
        if (!user.mod && user.username != this.props.channel) { return; }
        if (message.startsWith(this.props.startCommand)) { this.onStart(); return; }
        if (message.startsWith(this.props.stopCommand)) { this.onStop(); return; }
        if (message.startsWith(this.props.pauseCommand)) { this.onPause(); return; }
    }

    onGuess = (user, message) => {
        // dont accept guesses when paused
        if (!this.state.isRunning || this.state.isPaused) { return; }

        let guessInSeconds = this.parseGuess(message);
        if (guessInSeconds) {
            this.setState(prevState => {
                let guesses = [...prevState.guesses];
                // look up the guess for this user
                let guessIndex = guesses.findIndex(r => r.user == user.username);
                if (guessIndex > -1) {
                    // if we're in the change window, update it
                    let cutoffTime = Date.now() - (parseInt(this.props.changeWindow) * 1000);
                    if (guesses[guessIndex].created < cutoffTime) { return null; }

                    guesses[guessIndex].guessInSeconds = guessInSeconds;

                    // pull that guess out, update it, and stick it at the bottom of the list
                    /*
                    let guess = guesses.splice(guessIndex, 1)[0];
                    guess.guessInSeconds = guessInSeconds;
                    guess.displayState = this.DISPLAY_STATE_NEW;
                    guesses.push(guess);
                    */
                } else {
                    // add the new guess
                    guesses.push({
                        user: user.username,
                        color: user.color,
                        guessInSeconds: guessInSeconds,
                        created: Date.now(),
                        displayState: this.DISPLAY_STATE_NEW
                    });
                }
                return { guesses: guesses };
            });
        }
    }

    onStart = () => {
        this.setState(prevState => {

            // tick the timer once per second
            let timerInterval = setInterval(() => {
                if (!this.state.isPaused) {
                    this.setState(pState => ({ timerValue: pState.timerValue + 1 }));
                }
            }, 1000);

            // set the display queue interval to run
            let displayQueueInterval = setInterval(this.processDisplayQueue, 1000);

            return {
                isRunning: true,
                isPaused: false,
                timerValue: 0,
                guesses: [],
                timerInterval: timerInterval,
                displayQueueInterval: displayQueueInterval
            }
        });
    }

    onStop = () => {
        this.setState(prevState => {
            if (prevState.timerInterval) { clearInterval( prevState.timerInterval); }
            if (prevState.displayQueueInterval) { clearInterval(prevState.displayQueueInterval); }
            return {
                isRunning: false,
                isPaused: false,
                timerInterval: null,
                displayQueueInterval: null
            };
        });
    }

    onPause = () => {
        this.setState(prevState => ({ isPaused: !prevState.isPaused }));
    }

    processDisplayQueue = () => {
        this.setState(prevState => {
            let guesses = prevState.guesses;

            // flip any visible elements to "hidden"
            let madeChange = false;
            for(let guess of guesses.filter(r => r.displayState == this.DISPLAY_STATE_VISIBLE)) {
                console.log({ msg: "set guess to hidden", guess: guess });
                guess.displayState = this.DISPLAY_STATE_HIDDEN;
                madeChange = true;
            }

            // and pop the first new element, make it visible
            let guess = guesses.find(r => r.displayState == this.DISPLAY_STATE_NEW);
            if (guess) {
                console.log({ msg: "set guess to visible", guess: guess });
                guess.displayState = this.DISPLAY_STATE_VISIBLE;
                madeChange = true;
            }

            // return null if we changed nothing
            if (!madeChange) { return null; }
                
            return { guesses: guesses };
        });
    }

    parseGuess = message => {
        let matches = message.matchAll(this._guessRegex);
        for(let match of matches) {
            let hours = parseInt(match[1]);
            let minutes = parseInt(match[2]);
            let seconds = parseInt(match[3]);

            // check bounds, discard the guess entirely if anything fails the bounds test
            let totalSeconds = 0;
            let discard = false;
            if (!isNaN(hours)) {
                if (hours < 0 || hours > 23) { discard = true; }
                else { totalSeconds += hours * 3600; }
            }

            if (!isNaN(minutes)) {
                if (minutes < 0 || minutes > 60) { discard = true; }
                else { totalSeconds += minutes * 60; }
            }

            if (!isNaN(seconds)) {
                if (seconds < 0 || seconds > 60) { discard = true; }
                else { totalSeconds += seconds; }
            }

            if (discard) { return null; }

            return totalSeconds;
        }
    }

    getTimerString = memoize(
        (timerValue) => {
            let hours = parseInt(timerValue / 3600);
            timerValue -= (hours * 3600);
            let minutes = parseInt(timerValue / 60);
            timerValue -= (minutes * 60);
            let seconds = timerValue;
            if (hours > 0) { return `${hours}h ${minutes}m ${seconds}s`; }
            else if (minutes > 0) { return `${minutes}m ${seconds}s`; }
            return `${seconds}s`;
        }
    );

    render() {

        // have to do this first to ensure we have tmi running all the time
        let tmi = this.ensureTmi(this.props.channel);
        let demoMode = this.ensureDemoMode(this.props.demoMode);

        // render nothing if not running
        if (!this.state.isRunning) { return null; }

        let timerString = this.getTimerString(this.state.timerValue);

        let guessBoxes = this.state.guesses.filter(r => r.displayState == this.DISPLAY_STATE_VISIBLE).map(guess => 
            <div key={guess.user} className="user-guess" style={{ backgroundColor: guess.color }}>{guess.user[0]}</div>
        );

        // count the number of hidden guesses
        let hiddenCount = this.state.guesses.reduce((pv, cv) => (cv.displayState == this.DISPLAY_STATE_HIDDEN ? pv + 1 : pv), 0);

        return (
            <div className="hitch-guess" style={this.props.font}>
                <div className="count">{hiddenCount} guess{hiddenCount != 1 ? "es" : ""}</div>
                <div className="timer">{timerString} {(this.state.isPaused ? "[PAUSED]" : "")}</div>
                {guessBoxes}
            </div>
        );
    }
}