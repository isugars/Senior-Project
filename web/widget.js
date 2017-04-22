/**
 * Created by Ivy on 3/28/2017.
 * Code adapted from CodePen.io/chmood; "car speedo meters"
 */
"use-strict";
// METER

let Meter = function Meter($elm, config) {

    // DOM
    let $needle, $value;

    // Others

    let steps = (config.valueMax - config.valueMin) / config.valueStep,
        angleStep = (config.angleMax - config.angleMin) / steps;

    let margin = 10; // in %
    let angle = 0; // in degrees

    let value2angle = function(value) {
        let angle = ((value / (config.valueMax - config.valueMin)) * (config.angleMax - config.angleMin) + config.angleMin);

        return angle;
    };

    let makeElement = function(parent, className, innerHtml, style) {

        let	e = document.createElement('div');
        e.className = className;

        if (innerHtml) {
            e.innerHTML = innerHtml;
        }

        if (style) {
            for (var prop in style) {
                e.style[prop] = style[prop];
            }
        }

        parent.appendChild(e);

        return e;
    };

    // Label unit
    makeElement($elm, "label label-unit", config.valueUnit);

    for (let n=0; n < steps+1; n++) {
        let value = config.valueMin + n * config.valueStep;
        angle = config.angleMin + n * angleStep;

        // Graduation numbers

        // Red zone
        let redzoneClass = "";
        if (value > config.valueRed) {
            redzoneClass = " redzone";
        }

        makeElement($elm, "grad grad--" + n + redzoneClass, config.labelFormat(value), {
            left: (50 - (50 - margin) * Math.sin(angle * (Math.PI / 180))) + "%",
            top: (50 + (50 - margin) * Math.cos(angle * (Math.PI / 180))) + "%"
        });

        // Tick
        makeElement($elm, "grad-tick grad-tick--" + n + redzoneClass, "", {
            left: (50 - 50 * Math.sin(angle * (Math.PI / 180))) + "%",
            top: (50 + 50 * Math.cos(angle * (Math.PI / 180))) + "%",
            transform: "translate3d(-50%, 0, 0) rotate(" + (angle + 180) + "deg)"
        });

        // Half ticks
        angle += angleStep / 2;

        if (angle < config.angleMax) {
            makeElement($elm, "grad-tick grad-tick--half grad-tick--" + n + redzoneClass, "", {
                left: (50 - 50 * Math.sin(angle * (Math.PI / 180))) + "%",
                top: (50 + 50 * Math.cos(angle * (Math.PI / 180))) + "%",
                transform: "translate3d(-50%, 0, 0) rotate(" + (angle + 180) + "deg)"
            });
        }

        // Quarter ticks
        angle += angleStep / 4;

        if (angle < config.angleMax) {
            makeElement($elm, "grad-tick grad-tick--quarter grad-tick--" + n + redzoneClass, "", {
                left: (50 - 50 * Math.sin(angle * (Math.PI / 180))) + "%",
                top: (50 + 50 * Math.cos(angle * (Math.PI / 180))) + "%",
                transform: "translate3d(-50%, 0, 0) rotate(" + (angle + 180) + "deg)"
            });
        }

        angle -= angleStep / 2;

        if (angle < config.angleMax) {
            makeElement($elm, "grad-tick grad-tick--quarter grad-tick--" + n + redzoneClass, "", {
                left: (50 - 50 * Math.sin(angle * (Math.PI / 180))) + "%",
                top: (50 + 50 * Math.cos(angle * (Math.PI / 180))) + "%",
                transform: "translate3d(-50%, 0, 0) rotate(" + (angle + 180) + "deg)"
            });
        }
    }

    // NEEDLE

    angle = value2angle(config.value);

    $needle = makeElement($elm, "needle", "", {
        transform: "translate3d(-50%, 0, 0) rotate(" + angle + "deg)"
    });

    let $axle = makeElement($elm, "needle-axle");
    makeElement($elm, "label label-value", "<div>" + config.labelFormat(config.value) + "</div>" + "<span>" + config.labelUnit + "</span>");

    $value = $elm.querySelector(".label-value div");

};


// DOM LOADED FIESTA

document.addEventListener("DOMContentLoaded",	function() {

    let speedMeter = new Meter(document.querySelector(".meter--speed"), {
        value: 0,
        valueMin: 0,
        valueMax: 80,
        valueStep: 10,
        valueUnit: "<div>Speed</div><span>Km/h</span>",
        angleMin: 30,
        angleMax: 330,
        labelUnit: "Km/h",
        labelFormat: function(v) { return Math.round(v); },
        needleFormat: function(v) { return Math.round(v); }
    });

    let speedAngleMeter = new Meter(document.querySelector(".meter--speed-angle"), {
        value: 180,
        valueMin: -180,
        valueMax: 180,
        valueStep: 20,
        valueUnit: "<div>Degrees</div>",
        angleMin: 30,
        angleMax: 330,
        labelUnit: "Deg.",
        labelFormat: function (v) {
            return Math.round(v);
        },
        needleFormat: function (v) {
            Math.round(v);
        }
    });

});