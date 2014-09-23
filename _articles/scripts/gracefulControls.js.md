---
layout: doc
title: gracefulControls.js
collection: articles
category: scripts
---


# What it does

`gracefulControls.js` was designed to offer an alternative means of controlling your avatar and moving around in Hifi. All movement is dampened, including mouselook, so the experience might be a bit like playing an FPS design for geriatrics.


# Controls

Use **WASD** to move forward and strafe left or right, Q for brake, E takes you up, C takes you down

```js
var DEFAULT_PARAMETERS = {
    // Coefficient to use for linear drag.  Higher numbers will cause motion to
    // slow down more quickly.
    DRAG_COEFFICIENT: 0.9,
    MAX_SPEED: 40.0,
    ACCELERATION: 1.0,

    MOUSE_YAW_SCALE: -0.125,
    MOUSE_PITCH_SCALE: -0.125,
    MOUSE_SENSITIVITY: 0.5,

    // Damping frequency, adjust to change mouse look behavior
    W: 4.2,
}

var BRAKE_PARAMETERS = {
    DRAG_COEFFICIENT: 4.9,
    MAX_SPEED: DEFAULT_PARAMETERS.MAX_SPEED,
    ACCELERATION: 0,

    W: 1.0,
    MOUSE_YAW_SCALE: -0.125,
    MOUSE_PITCH_SCALE: -0.125,
    MOUSE_SENSITIVITY: 0.5,
}

var movementParameters = DEFAULT_PARAMETERS;

// Movement keys
var KEY_BRAKE = "q";
var KEY_FORWARD = "w";
var KEY_BACKWARD = "s";
var KEY_LEFT = "a";
var KEY_RIGHT = "d";
var KEY_UP = "e";
var KEY_DOWN = "c";
var KEY_ENABLE = "SPACE";
var CAPTURED_KEYS = [KEY_BRAKE, KEY_FORWARD, KEY_BACKWARD, KEY_LEFT, KEY_RIGHT, KEY_UP, KEY_DOWN, KEY_ENABLE];

```
