import React from "react";
import memoize from "memoize-one";
import "./Component.css";
import "./tmi.min.js";
import { runInThisContext } from "vm";

export default class extends React.Component {

    static manifest = {
        "name": "Grades/Ratings",
        "author": "MikeSci",
        "description": "A mechanism to grade or rate anything.",
        "width": 300,
        "height": 300,
        "parameters": [
            { "name": "scale", "displayName": "Scale", "type": "select", "options": [
                { label : "Letter Grades (A+ through F-)" , value: "letterGrades" },
                { label : "1 to 10" , value: "oneToTen" }
            ], "defaultValue": "letterGrades" },
            { "group": "Twitch Integration", "items": [
                { "name": "channel", "displayName": "Channel", "type": "text" },
                { "name": "debugMode", "displayName": "Debug Mode", "type": "checkbox", "defaultValue": false }
            ]},
            { "name": "gradeStyle", "displayName": "Grade Style", "type": "style" },
            { "name": "gradeFont", "displayName": "Grade Font", "type": "font", "defaultValue": { fontSize: "144px" } },
            { "name": "countStyle", "displayName": "Count Style", "type": "style" },
            { "name": "countFont", "displayName": "Count Font", "type": "font", "defaultValue": { fontSize: "72px" } }
        ]
    };

    _letterGradesMapping = {
        "a": 4.0,
        "a+": 4.3,
        "a-": 3.7,
        "b": 3,
        "b+": 3.3,
        "b-": 2.7,
        "c": 2,
        "c+": 2.3,
        "c-": 1.7,
        "d": 1,
        "d+": 1.3,
        "d-": 0.7,
        "f": 0
    };

    _lastProps = {};
    _tmi;

    constructor(props) {
        super(props);

        this.state = {
            channel: null,
            votes: [],
            computedGrade: null
        };

        // connect to tmi
        this.updateTmiState();
    }

    componentDidUpdate() {
        this.updateTmiState();
    }

    updateTmiState() {
        if (!this.props.channel) {
            if (this._tmi) {
                this._tmi.disconnect();
                this._tmi = null;
            }
        } else {
            if (this.props.channel != this._lastProps.channel || this.props.debugMode != this._lastProps.debugMode) {
                if (this._tmi) {
                    this._tmi.disconnect();
                    this._tmi = null;
                }
                let _tmi = new tmi.client({
                    connection: { secure: window.location.protocol == "https:" },
                    options: { debug: this.props.debugMode },
                    channels: [ this.props.channel ]
                });
                _tmi.addListener('message', this.processMessage);
                _tmi.connect();

                this._tmi = _tmi;
            }
        }
        this._lastProps = this.props;
    }

    processMessage = (channel, user, message, self) => {
        if (this.props.debugMode) { console.log({ channel, user, message }); }

        this.setState(prevState => {
            let votes = [...prevState.votes];
            // [ { user: "mikesci", grade: 4.3 } ]

            let gradePoint;
            if (this.props.scale == "letterGrades") {
                gradePoint = this.letterToNumber(message);
            } else if (this.props.scale == "oneToTen") {
                gradePoint = parseFloat(message);
                if (gradePoint < 0 || gradePoint > 10)
                    gradePoint = null;
            }

            if (gradePoint == null || isNaN(gradePoint))
                return null;

            let vote = votes.find(r => r.user == user.username);
            if (!vote) {
                vote = { user: user.username, grade: gradePoint };
                votes.push(vote);
            } else {
                vote.grade = gradePoint;
            }

            let voteAverage = 0;
            for(let vote of votes) { voteAverage += vote.grade; }
            voteAverage /= votes.length;

            let computedGrade;
            if (this.props.scale == "letterGrades")
                computedGrade = this.numberToLetter(voteAverage);
            else
                computedGrade = voteAverage.toFixed(1);

            console.log({
                votes,
                computedGrade
            });

            return {
                votes: votes,
                computedGrade: computedGrade
            };
        });
    }

    letterToNumber(message) {
        if (message.lastIndexOf("msciA") > -1) { return 4.3; }
        if (message.lastIndexOf("msciF") > -1) { return 0; }

        let lowerMsg = message.toLowerCase();
        let checkSign = (lowerMsg.length > 1);
        switch (lowerMsg[0]) {
            case "a":
                if (!checkSign) { return 4; }
                else if (lowerMsg[1] == "+") { return 4.3; }
                else if (lowerMsg[1] == "-") { return 3.7; }
                return 4;
            case "b":
                if (!checkSign) { return 3; }
                else if (lowerMsg[1] == "+") { return 3.3; }
                else if (lowerMsg[1] == "-") { return 2.7; }
                return 3;
            case "c":
                if (!checkSign) { return 2; }
                else if (lowerMsg[1] == "+") { return 2.3; }
                else if (lowerMsg[1] == "-") { return 1.7; }
                return 2;
            case "d":
                if (!checkSign) { return 1; }
                else if (lowerMsg[1] == "+") { return 1.3; }
                else if (lowerMsg[1] == "-") { return 0.7; }
                return 1;
            case "f":
                return 0;
            default:
                return null;
        }
    }

    numberToLetter(num) {
        if (num == 4.3) { return "A+"; }
        if (num >= 4.0) { return "A"; }
        if (num >= 3.7) { return "A-"; }
        if (num >= 3.3) { return "B+"; }
        if (num >= 3.0) { return "B"; }
        if (num >= 2.7) { return "B-"; }
        if (num >= 2.3) { return "C+"; }
        if (num >= 2.0) { return "C"; }
        if (num >= 1.7) { return "C-"; }
        if (num >= 1.3) { return "D+"; }
        if (num >= 1.0) { return "D"; }
        if (num >= 0.7) { return "D-"; }
        return "F";
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <div style={Object.assign({}, this.props.gradeFont, this.props.gradeStyle)}>{this.state.computedGrade}</div>
                <div style={Object.assign({}, this.props.countFont, this.props.countStyle)}>{this.state.votes.length} vote{this.state.votes.length == 1 ? "" : "s"}</div>
            </div>
        );
    }
}