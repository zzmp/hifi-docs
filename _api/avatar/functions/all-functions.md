---
layout: doc
title: Functions
collection: api
category: avatar
methods: ["MyAvatar.animation()", "MyAvatar.addThrust()", "MyAvatar.attach()", "MyAvatar.clearJointData()", "MyAvatar.decreaseSize()", "MyAvatar.detatch()", "MyAvatar.getAcceleration()", "MyAvatar.getAngularAcceleration()", "MyAvatar.getAngularVelocity()", "MyAvatar.getJointCombinedRotation()", "MyAvatar.getJointIndex()", "MyAvatar.getJointNames()", "MyAvatar.getJointPosition()", "MyAvatar.getJointRotation()", "MyAvatar.getTargetAvatarPosition()", "MyAvatar.getThrust()", "MyAvatar.goHome()", "MyAvatar.increaseSize()", "MyAvatar.position()", "MyAvatar.resetSize()", "MyAvatar.setJointData()"]
tag: functions
---


## [MyAvatar.animation()](#MyAvatar.animation())

The animation suite of functions allows you to manipulate MyAvatar via uploaded .fbx files. 

## Example

Open up the console and start exploring the animation functions by loading an fbx file that describes clapping:

`var clapAnimation = "https://s3-us-west-1.amazonaws.com/highfidelity-public/animations/ClapAnimations/ClapHands_Standing.fbx";`

Then, start the animation with some parameters, and observe MyAvatar clapping:

`MyAvatar.startAnimation(clapAnimation, 15, 1.0, true, false);`

Give MyAvatar a break by stopping the animation:

`MyAvatar.stopAnimation(clapAnimation);`


For a more in-depth look at using animation, take a look at the full `clap.js` script below:

```js
//
//  clap.js
//  examples
//
//  Copyright 2014 High Fidelity, Inc.
//
//  This sample script watches your hydra hands and makes clapping sound when they come close together fast, 
//  and also watches for the 'shift' key and claps when that key is pressed.  Clapping multiple times by pressing 
//  the shift key again makes the animation and sound match your pace of clapping. 
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

var clapAnimation = "https://s3-us-west-1.amazonaws.com/highfidelity-public/animations/ClapAnimations/ClapHands_Standing.fbx";
var ANIMATION_FRAMES_PER_CLAP = 10.0;
var startEndFrames = [];
startEndFrames.push({ start: 0, end: 10});
startEndFrames.push({ start: 10, end: 20});
startEndFrames.push({ start: 20, end: 30});
startEndFrames.push({ start: 30, end: 40});
startEndFrames.push({ start: 41, end: 51});
startEndFrames.push({ start: 53, end: 0});

var lastClapFrame = 0;
var lastAnimFrame = 0;

var claps = [];
claps.push(new Sound("http://highfidelity-public.s3-us-west-1.amazonaws.com/sounds/claps/BClap1Rvb.wav"));
claps.push(new Sound("http://highfidelity-public.s3-us-west-1.amazonaws.com/sounds/claps/BClap2Rvb.wav"));
claps.push(new Sound("http://highfidelity-public.s3-us-west-1.amazonaws.com/sounds/claps/BClap3Rvb.wav"));
claps.push(new Sound("http://highfidelity-public.s3-us-west-1.amazonaws.com/sounds/claps/BClap4Rvb.wav"));
claps.push(new Sound("http://highfidelity-public.s3-us-west-1.amazonaws.com/sounds/claps/BClap5Rvb.wav"));
claps.push(new Sound("http://highfidelity-public.s3-us-west-1.amazonaws.com/sounds/claps/BClap6Rvb.wav"));
claps.push(new Sound("http://highfidelity-public.s3-us-west-1.amazonaws.com/sounds/claps/BClap7Rvb.wav"));
claps.push(new Sound("http://highfidelity-public.s3-us-west-1.amazonaws.com/sounds/claps/BClap8Rvb.wav"));
claps.push(new Sound("http://highfidelity-public.s3-us-west-1.amazonaws.com/sounds/claps/BClap9Rvb.wav"));
claps.push(new Sound("http://highfidelity-public.s3-us-west-1.amazonaws.com/sounds/claps/BClap10Rvb.wav"));
var numberOfSounds = claps.length;

var clappingNow = false;
var collectedClicks = 0;

var clickStartTime, clickEndTime;
var clickClappingNow = false; 
var CLAP_START_RATE = 15.0;
var clapRate = CLAP_START_RATE; 
var startedTimer = false; 

function maybePlaySound(deltaTime) {
  //  Set the location and other info for the sound to play

  var animationDetails = MyAvatar.getAnimationDetails(clapAnimation);

  var frame = Math.floor(animationDetails.frameIndex);

  if (frame != lastAnimFrame) {
    lastAnimFrame = frame;
  }

  for (var i = 0; i < startEndFrames.length; i++) {
    if (frame == startEndFrames[i].start && (frame != lastClapFrame)) {
      playClap(1.0, Camera.getPosition());
      lastClapFrame = frame; 
    }
  }

  var palm1Position = MyAvatar.getLeftPalmPosition();
  var palm2Position = MyAvatar.getRightPalmPosition();
  var distanceBetween = Vec3.length(Vec3.subtract(palm1Position, palm2Position));

  var palm1Velocity = Controller.getSpatialControlVelocity(1);
  var palm2Velocity = Controller.getSpatialControlVelocity(3);
  var closingVelocity = Vec3.length(Vec3.subtract(palm1Velocity, palm2Velocity));

  const CLAP_SPEED = 0.7;
  const CLAP_DISTANCE = 0.15; 

  if ((closingVelocity > CLAP_SPEED) && (distanceBetween < CLAP_DISTANCE) && !clappingNow) {
    var volume = closingVelocity / 2.0;
    if (volume > 1.0) volume = 1.0;
    playClap(volume, palm1Position);
    clappingNow = true; 
  } else if (clappingNow && (distanceBetween > CLAP_DISTANCE * 1.2)) {
    clappingNow = false;
  }
}

function playClap(volume, position) {
  var options = new AudioInjectionOptions();
  options.position = position;
  options.volume = 1.0;
  var clip = Math.floor(Math.random() * numberOfSounds);
  Audio.playSound(claps[clip], options);
}

var FASTEST_CLAP_INTERVAL = 150.0;
var SLOWEST_CLAP_INTERVAL = 750.0;

Controller.keyPressEvent.connect(function(event) {
  if(event.text == "SHIFT") {
    if (!clickClappingNow) {
      clickClappingNow = true;
      clickStartTime = new Date();
      lastClapFrame = 0;
    } else {
      //  start or adjust clapping speed based on the duration between clicks
      clickEndTime = new Date();
      var milliseconds = Math.max(clickEndTime - clickStartTime, FASTEST_CLAP_INTERVAL);
      clickStartTime = new Date();
      if (milliseconds < SLOWEST_CLAP_INTERVAL) {
        clapRate = ANIMATION_FRAMES_PER_CLAP * (1000.0 / milliseconds);
        playClap(1.0, Camera.getPosition());
        MyAvatar.stopAnimation(clapAnimation);
        MyAvatar.startAnimation(clapAnimation, clapRate, 1.0, true, false);
      }
      collectedClicks = collectedClicks + 1;
    }
  }
});

var CLAP_END_WAIT_MSECS = 300;
Controller.keyReleaseEvent.connect(function(event) {
    if (event.text == "SHIFT") {
      collectedClicks = 0;
      if (!startedTimer) {
        collectedClicks = 0;
        Script.setTimeout(stopClapping, CLAP_END_WAIT_MSECS);
        startedTimer = true;
      }
    }
});

function stopClapping() {
  if (collectedClicks == 0) {
    startedTimer = false;
      MyAvatar.stopAnimation(clapAnimation);
        clapRate = CLAP_START_RATE;
        clickClappingNow = false;
  }  else {
    startedTimer = false;
  } 
}

// Connect a call back that happens every frame
Script.update.connect(maybePlaySound);
```


## [MyAvatar.addThrust()](#MyAvatar.addThrust())

Accepts a three-dimensional vector describing a thrust and adds the input value to MyAvatar's current thrust. 

## Example

_See the `hydraMove.js` example_


## [MyAvatar.attach()](#MyAvatar.attach())

`attach` appends an object to MyAvatar via a URL to a model file. 

## Overloads

* MyAvatar.attach(string attachmentURL, string jointName, Vec3 translation,Quat rotation, float scale, bool allowDuplicates, bool useSaved)
* MyAvatar.attach(string attachmentURL, string jointName, Vec3 translation,Quat rotation, float scale, bool allowDuplicates)
* MyAvatar.attach(string attachmentURL, string jointName, Vec3 translation,Quat rotation, float scale)
* MyAvatar.attach(string attachmentURL, string jointName, Vec3 translation,Quat rotation)
* MyAvatar.attach(string attachmentURL, string jointName, Vec3 translation)
* MyAvatar.attach(string attachmentURL, string jointName)

## Example

Attach a guitar to your avatar. 

Using the JavaScript Console, first set the attachmentURL:

```javascript
> var guitarModel = "https://s3-us-west-1.amazonaws.com/highfidelity-public/models/attachments/guitar.fst";
```

Next, attach `guitarModel` to MyAvatar's hips:

```javascript
> MyAvatar.attach(guitarModel, "Hips", {x: -0.0, y: -0.0, z: 0.0}, Quat.fromPitchYawRollDegrees(0, 0, 0), 1.0);
> MyAvatar.getAttachmentData();
```

Observe that your avatar is now being impaled by a guitar. 

To remove the guitar, run `MyAvatar.detachOne(guitarModel);`.


## [MyAvatar.clearJointData()](#MyAvatar.clearJointData())

`clearJointData` returns a joint to its default position.

## Example

Take a look at the `crazylegs.js` script. 

First, joints are wildly manipulated:

```javascript
var FREQUENCY = 5.0;
var AMPLITUDE = 45.0;
var cumulativeTime = 0.0;
var jointList = MyAvatar.getJointNames(); 
var jointMappings = "\n# Joint list start";

for (var i = 0; i < jointList.length; i++) {
    jointMappings = jointMappings + "\njointIndex = " + jointList[i] + " = " + i;
}
print(jointMappings + "\n# Joint list end");  

Script.update.connect(function(deltaTime) {
    cumulativeTime += deltaTime;
    MyAvatar.setJointData("RightUpLeg", Quat.fromPitchYawRollDegrees(AMPLITUDE * Math.sin(cumulativeTime * FREQUENCY), 0.0, 0.0));
    MyAvatar.setJointData("LeftUpLeg", Quat.fromPitchYawRollDegrees(-AMPLITUDE * Math.sin(cumulativeTime * FREQUENCY), 0.0, 0.0));
    MyAvatar.setJointData("RightLeg", Quat.fromPitchYawRollDegrees(
        AMPLITUDE * (1.0 + Math.sin(cumulativeTime * FREQUENCY)),0.0, 0.0));
    MyAvatar.setJointData("LeftLeg", Quat.fromPitchYawRollDegrees(
        AMPLITUDE * (1.0 - Math.sin(cumulativeTime * FREQUENCY)),0.0, 0.0));
});
```

Upon the conclusion of the script, the affected joint data is cleared, returning the MyAvatar to the default standing position: 

```javascript
Script.scriptEnding.connect(function() {
    MyAvatar.clearJointData("RightUpLeg");
    MyAvatar.clearJointData("LeftUpLeg");
    MyAvatar.clearJointData("RightLeg");
    MyAvatar.clearJointData("LeftLeg");
});
```



## [MyAvatar.decreaseSize()](#MyAvatar.decreaseSize())

`decreaseSize` decreases the scale of MyAvatar by the `SCALING_RATIO`, which has default value .05. The minimum scale of the avatar (`MIN_AVATAR_SCALE`) is .05.

## Example

```javascript
> MyAvatar.scale
< 1.336745023727417
> MyAvatar.decreaseSize()
< undefined
> MyAvatar.scale
< 1.2699077129364014
```


## [MyAvatar.detatch()](#MyAvatar.detatch())

`detach` removes an object from MyAvatar. 

## Overloads and Related Functions

* MyAvatar.detachOne(string attachmentURL, string jointName)
* MyAvatar.detachOne(string attachmentURL)
* MyAvatar.detachAll(string attachmentURL, string jointName)
* MyAvatar.detachAll(string attachmentURL)

## Example

Before we use `detach`, we need to attach a model to MyAvatar. 

Using the JavaScript Console, attach a guitar model to MyAvatar:

```javascript
> var guitarModel = "https://s3-us-west-1.amazonaws.com/highfidelity-public/models/attachments/guitar.fst";
> MyAvatar.attach(guitarModel, "Hips", {x: -0.0, y: -0.0, z: 0.0}, Quat.fromPitchYawRollDegrees(0, 0, 0), 1.0);
```

Observe that MyAvatar is now being impaled by a guitar. 

To remove the guitar, run `MyAvatar.detachOne(guitarModel);`.


## [MyAvatar.getAcceleration()](#MyAvatar.getAcceleration())


`getAcceleration` returns the acceleration of MyAvatar as a vector.

## Example

```javascript
> JSON.stringify(MyAvatar.getAcceleration())
<  {"x":0,"y":0,"z":0}
```


## [MyAvatar.getAngularAcceleration()](#MyAvatar.getAngularAcceleration())

`getAngularAcceleration` returns the angular acceleration of MyAvatar as a vector.

## Example

```javascript
> JSON.stringify(MyAvatar.getAngularAcceleration())
<  {"x":0,"y":0,"z":0}
```


## [MyAvatar.getAngularVelocity()](#MyAvatar.getAngularVelocity())

`getAngularVelocity` returns the angular velocity of MyAvatar as a vector.

## Example

```
> JSON.stringify(MyAvatar.getAngularVelocity())
<  {"x":0,"y":0,"z":0}
```



## [MyAvatar.getJointCombinedRotation()](#MyAvatar.getJointCombinedRotation())

`getJointCombinedRotation` accepts either a string (example, "Hips") or an integer index of a target body part, and returns a vector of the combined rotation of the body part in question. 

## Overloads

* Vec3 MyAvatar.getJointCombinedRotation(const QString& name)

## Example

```
> JSON.stringify(MyAvatar.getJointCombinedRotation("Hips"))
<  {"x":-0.000038061141822254285,"y":0.9019246697425842,"z":-0.00001822586818889249,"w":-0.4318934679031372}
> JSON.stringify(MyAvatar.getJointCombinedRotation(0))
<  {"x":-0.000038061141822254285,"y":0.9019246697425842,"z":-0.00001822586818889249,"w":-0.4318934679031372}
```


## [MyAvatar.getJointIndex()](#MyAvatar.getJointIndex())

Given the string name of a MyAvatar joint, `getJointIndex` returns the integer index of the bodypart, or -1 if inputs are invalid.

## Example

```
> MyAvatar.getJointIndex("Shoes")
< 3
> MyAvatar.getJointIndex("Invalid Joint Name")
< -1
```


## [MyAvatar.getJointNames()](#MyAvatar.getJointNames())

Returns `jointNames`, an array of strings describing the joints of MyAvatar.  

## Example

You can take a look at the list of joint names by merely running `MyAvatar.getJointNames()`:

```
> MyAvatar.getJointNames()
< Hips,BodyParts,Moustaches,Tops,Beards,Shoes,Hair,Eyewear,Hats,Bottoms,RightUpLeg,RightLeg,RightFoot,RightToeBase,RightToe_End,LeftUpLeg,LeftLeg,LeftFoot,LeftToeBase,LeftToe_End,Spine,Spine1,Spine2,RightShoulder,RightArm,RightForeArm,RightHand,RightHandPinky1,RightHandPinky2,RightHandPinky3,RightHandPinky4,RightHandRing1,RightHandRing2,RightHandRing3,RightHandRing4,RightHandMiddle1,RightHandMiddle2,RightHandMiddle3,RightHandMiddle4,RightHandIndex1,RightHandIndex2,RightHandIndex3,RightHandIndex4,RightHandThumb1,RightHandThumb2,RightHandThumb3,RightHandThumb4,LeftShoulder,LeftArm,LeftForeArm,LeftHand,LeftHandPinky1,LeftHandPinky2,LeftHandPinky3,LeftHandPinky4,LeftHandRing1,LeftHandRing2,LeftHandRing3,LeftHandRing4,LeftHandMiddle1,LeftHandMiddle2,LeftHandMiddle3,LeftHandMiddle4,LeftHandIndex1,LeftHandIndex2,LeftHandIndex3,LeftHandIndex4,LeftHandThumb1,LeftHandThumb2,LeftHandThumb3,LeftHandThumb4,Neck,Head,HeadTop_End
```

To see the command in a more practical application, take a look at the `crazylegs.js` script:

```
var FREQUENCY = 5.0;
var AMPLITUDE = 45.0;
var cumulativeTime = 0.0;
```

After some preliminaries, the script calls `MyAvatar.getJointNames()`, then prints it to the console:
```
var jointList = MyAvatar.getJointNames(); 
var jointMappings = "\n# Joint list start";
for (var i = 0; i < jointList.length; i++) {
    jointMappings = jointMappings + "\njointIndex = " + jointList[i] + " = " + i;
}
print(jointMappings + "\n# Joint list end");
```

Then the script continues, animating MyAvatar's legs

```
Script.update.connect(function(deltaTime) {
    cumulativeTime += deltaTime;
    MyAvatar.setJointData("RightUpLeg", Quat.fromPitchYawRollDegrees(AMPLITUDE * Math.sin(cumulativeTime * FREQUENCY), 0.0, 0.0));
    MyAvatar.setJointData("LeftUpLeg", Quat.fromPitchYawRollDegrees(-AMPLITUDE * Math.sin(cumulativeTime * FREQUENCY), 0.0, 0.0));
    MyAvatar.setJointData("RightLeg", Quat.fromPitchYawRollDegrees(
        AMPLITUDE * (1.0 + Math.sin(cumulativeTime * FREQUENCY)),0.0, 0.0));
    MyAvatar.setJointData("LeftLeg", Quat.fromPitchYawRollDegrees(
        AMPLITUDE * (1.0 - Math.sin(cumulativeTime * FREQUENCY)),0.0, 0.0));
});

Script.scriptEnding.connect(function() {
    MyAvatar.clearJointData("RightUpLeg");
    MyAvatar.clearJointData("LeftUpLeg");
    MyAvatar.clearJointData("RightLeg");
    MyAvatar.clearJointData("LeftLeg");
});
```


## [MyAvatar.getJointPosition()](#MyAvatar.getJointPosition())

`getJointPosition` accepts either a string (example, "Hips") or an integer index of a target body part, and returns a vector of the position of the body part in question. 

## Overloads

* Vec3 MyAvatar.getJointPosition(QString& name)

## Example

```
> JSON.stringify(MyAvatar.getJointPosition("Hips"))
<  {"x":7229.2587890625,"y":4950.5380859375,"z":5042.74951171875}
> JSON.stringify(MyAvatar.getJointPosition(0))
< {"x":7229.2587890625,"y":4950.5380859375,"z":5042.74951171875}
```


## [MyAvatar.getJointRotation()](#MyAvatar.getJointRotation())

`getJointRotation` returns current joint rotation in quaternion. 

## Example

``` javascript
> bodyPart = MyAvatar.getJointNames()[3];
< Shoes
> JSON.stringify(MyAvatar.getJointRotation(bodyPart))
< {"x":0,"y":0,"z":0,"w":1}
```


## [MyAvatar.getTargetAvatarPosition()](#MyAvatar.getTargetAvatarPosition())

`getTargetAvatarPosition` returns a three-dimensional vector describing the position of the avatar that your mouse is hovering over. If your mouse is not currently hovering over an avatar, all fields are zero. 

## Example

```javascript
> JSON.stringify(MyAvatar.getTargetAvatarPosition())
< {"x":0,"y":0,"z":0}
```


## [MyAvatar.getThrust()](#MyAvatar.getThrust())

`getThrust` returns MyAvatar's `thrust` property.

## Example

```javascript
> JSON.stringify(MyAvatar.getThrust())
< {"x":0,"y":0,"z":0}
```


## [MyAvatar.goHome()](#MyAvatar.goHome())

`goHome` sends MyAvatar back to its origin.

## Example

```javascript
> JSON.stringify(MyAvatar.position)
< {"x":7462,"y":115"z":2201}
> MyAvatar.goHome()
< JSON.stringify(MyAvatar.position)
> {"x":6270,"y":206.85147094726562,"z":6000}
```


## [MyAvatar.increaseSize()](#MyAvatar.increaseSize())

`increaseSize` increases the scale property of MyAvatar by the `SCALING_RATIO`, which has default value .05. The maximum scale of the avatar (`MAX_AVATAR_SCALE`) is 1000.

## Example

```javascript
> MyAvatar.scale
< 1.1024998426437378
> MyAvatar.increaseSize()
< undefined
> MyAvatar.scale
< 1.1576248407363892
```


## [MyAvatar.position()](#MyAvatar.position())

Lost this -- need to add it back.


## [MyAvatar.resetSize()](#MyAvatar.resetSize())

`resetSize` sets the `scale` of MyAvatar to 1. 

## Example

```javascript
> MyAvatar.scale
< 0.949999988079071
> MyAvatar.resetSize()
< undefined
> MyAvatar.scale
< 1
```


## [MyAvatar.setJointData()](#MyAvatar.setJointData())

`setJointData` sets a target bodypart's rotation in quaternion. 


## Example

Take a look at the `crazylegs.js` script. 

```javascript
var FREQUENCY = 5.0;
var AMPLITUDE = 45.0;
var cumulativeTime = 0.0;
var jointList = MyAvatar.getJointNames(); 
var jointMappings = "\n# Joint list start";

for (var i = 0; i < jointList.length; i++) {
    jointMappings = jointMappings + "\njointIndex = " + jointList[i] + " = " + i;
}
print(jointMappings + "\n# Joint list end"); 
```

After some preliminaries, the script sets `MyAvatar.setJointData()` in several fun configurations to give MyAvatar a funny walk.


```javascript
Script.update.connect(function(deltaTime) {
    cumulativeTime += deltaTime;
    MyAvatar.setJointData("RightUpLeg", Quat.fromPitchYawRollDegrees(AMPLITUDE * Math.sin(cumulativeTime * FREQUENCY), 0.0, 0.0));
    MyAvatar.setJointData("LeftUpLeg", Quat.fromPitchYawRollDegrees(-AMPLITUDE * Math.sin(cumulativeTime * FREQUENCY), 0.0, 0.0));
    MyAvatar.setJointData("RightLeg", Quat.fromPitchYawRollDegrees(
        AMPLITUDE * (1.0 + Math.sin(cumulativeTime * FREQUENCY)),0.0, 0.0));
    MyAvatar.setJointData("LeftLeg", Quat.fromPitchYawRollDegrees(
        AMPLITUDE * (1.0 - Math.sin(cumulativeTime * FREQUENCY)),0.0, 0.0));
});
```


Upon the conclusion of the script, the affected joint data is cleared, returning MyAvatar to the standing position: 
```javascript
Script.scriptEnding.connect(function() {
    MyAvatar.clearJointData("RightUpLeg");
    MyAvatar.clearJointData("LeftUpLeg");
    MyAvatar.clearJointData("RightLeg");
    MyAvatar.clearJointData("LeftLeg");
});
```
