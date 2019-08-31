import React from "react";
import memoize from "memoize-one";
import "./Component.css";
import "./tmi.min.js";

export default class extends React.Component {

    static manifest = {
        "name": "Blips Background",
        "author": "MikeSci",
        "description": "An animated background that gets it's color information from Twitch chat.",
        "width": 1920,
        "height": 1080,
        "parameters": [
            { "name": "blipColor", "displayName": "Blip Color", "type": "color", "defaultValue": "rgba(255,255,255,0.5)" },
            { "name": "blur", "displayName": "Blur", "type": "slider", "defaultValue": 6, min: 1, max: 20 },
            { "name": "blipCount", "displayName": "Blip Count", "type": "slider", "defaultValue": 60, min: 1, max: 200 },
            { "name": "blipHeight", "displayName": "Blip Height", "type": "slider", "defaultValue": 4, min: 1, max: 10 },
            { "name": "blipSpeed", "displayName": "Blip Speed", "type": "slider", "defaultValue": 35, min: 1, max: 100 },
            { "name": "blipSpeedVariance", "displayName": "Speed Variance", "type": "slider", "defaultValue": 10 , min: 1, max: 20 },
            { "group": "Twitch Integration", "items": [
                { "name": "channel", "displayName": "Channel", "type": "text" },
                { "name": "debugMode", "displayName": "Debug Mode", "type": "checkbox", "defaultValue": false },
                { "name": "colorDuration", "displayName": "Color Duration (sec.)", "type": "slider", "defaultValue": 60, min: 1, max: 600 },
            ]}
        ]
    };

    _lastProps = {};
    _tmi;
    _chatBlipPointer = 0;
    _interval;

    constructor(props) {
        super(props);

        this.state = {
            channel: null,
            blips: [],
            userBlips: []
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

        if (user.color && user.color.length == 7) {
            // convert the user's color to RGB
            let r = parseInt("0x" + user.color.substr(1, 2));
            let g = parseInt("0x" + user.color.substr(3, 2));
            let b = parseInt("0x" + user.color.substr(5, 2));

            // grab a blip, round-robin style
            let blipIndex = (this._chatBlipPointer++) % this.props.blipCount;
            let blipRef = this.refs["blip" + blipIndex];

            // pull it's opacity
            let a = this.extractOpacity(blipRef.style.fill);

            // set the new color
            blipRef.style.fill = `rgba(${r}, ${g}, ${b}, ${a})`;

            // set a last-set attribute to allow the blips to be reset after a time
            blipRef.setAttribute("last-set", Date.now());
        }
    }

    extractOpacity = color => {
        let m = color.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+\.?\d*)\s*\)$/i);
        if (!m) { return 1; }
        return parseFloat(m[4]);
    }

    memoizeBlips = memoize(
        (blipCount, blipSpeed, blipSpeedVariance, blipColor, blipHeight) => {
            let blips = [];
            for(let i = 0; i < blipCount; i++) {
                let animationDuration = (110 - blipSpeed) / (1 + (Math.random() * (blipSpeedVariance / 10)));
                blips.push({
                    animationDuration: (animationDuration) + "s",
                    animationDelay: -(Math.random() * animationDuration) + "s",
                    top: (Math.random() * 95) + "%",
                    width: ((Math.random() * 10) + 5) + "%",
                    height: blipHeight + "%",
                    color: blipColor,
                    refName: "blip" + i
                });
            }
            return blips;
        }
    );

    memoizeInterval = memoize(
        colorDuration => {
            if (this._interval) { clearInterval(this._interval); this._interval = null; }
            this._interval = setInterval(() => {

                let cutOffTime = Date.now() - (colorDuration * 1000);

                for(let ref in this.refs) {
                    if (ref.startsWith("blip")) {
                        let lastSet = this.refs[ref].getAttribute("last-set");
                        if (lastSet) {
                            let lastSetDate = parseInt(lastSet);
                            if (lastSetDate < cutOffTime) {
                                let blip = this.refs[ref];
                                blip.style.fill = this.props.blipColor;
                                blip.setAttribute("last-set", null);
                            }
                        }
                    }
                }

            }, 1000); // check every second
            return this._interval;
        }
    )

    propToInt(propVal, defaultValue) {
        if (!propVal) { return defaultValue; }
        let parsedVal = parseInt(propVal);
        if (isNaN(parsedVal)) { return defaultValue; }
        return parsedVal;
    }

    render() {

        let blipCount = this.propToInt(this.props.blipCount);
        let blipHeight = this.propToInt(this.props.blipHeight);
        let blipSpeed = this.propToInt(this.props.blipSpeed);
        let blipSpeedVariance = this.propToInt(this.props.blipSpeedVariance);
        let blips = this.memoizeBlips(blipCount, blipSpeed, blipSpeedVariance, this.props.blipColor, blipHeight);

        // ensure we have an interval started
        let interval = this.memoizeInterval(this.props.colorDuration);

        let blipElements = blips.map(blip => {
            return (<rect className="blip" x={0} y={blip.top} width={blip.width} height={blip.height} ref={blip.refName} style={{ fill: blip.color, animationDuration: blip.animationDuration, animationDelay: blip.animationDelay }} key={blip.refName} />);
        });

        return (
        <svg version="1.1" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" className="blipContainer">
            <defs>
                <filter id="blur1"><feGaussianBlur in="SourceGraphic" stdDeviation={this.props.blur + ",0"} /></filter>
            </defs>
            <g filter="url(#blur1)">
                {blipElements}
            </g>
        </svg>
        );
    }
}