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

{% highlight js %}
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
{% endhighlight %}


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

{% highlight js %}
> var guitarModel = "https://s3-us-west-1.amazonaws.com/highfidelity-public/models/attachments/guitar.fst";
{% endhighlight %}

Next, attach `guitarModel` to MyAvatar's hips:

{% highlight js %}
> MyAvatar.attach(guitarModel, "Hips", {x: -0.0, y: -0.0, z: 0.0}, Quat.fromPitchYawRollDegrees(0, 0, 0), 1.0);
> MyAvatar.getAttachmentData();
{% endhighlight %}

Observe that your avatar is now being impaled by a guitar. 

To remove the guitar, run `MyAvatar.detachOne(guitarModel);`.


## [MyAvatar.clearJointData()](#MyAvatar.clearJointData())

`clearJointData` returns a joint to its default position.

## Example

Take a look at the `crazylegs.js` script. 

First, joints are wildly manipulated:

{% highlight js %}
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
{% endhighlight %}

Upon the conclusion of the script, the affected joint data is cleared, returning the MyAvatar to the default standing position: 

{% highlight js %}
Script.scriptEnding.connect(function() {
    MyAvatar.clearJointData("RightUpLeg");
    MyAvatar.clearJointData("LeftUpLeg");
    MyAvatar.clearJointData("RightLeg");
    MyAvatar.clearJointData("LeftLeg");
});
{% endhighlight %}



## [MyAvatar.decreaseSize()](#MyAvatar.decreaseSize())

`decreaseSize` decreases the scale of MyAvatar by the `SCALING_RATIO`, which has default value .05. The minimum scale of the avatar (`MIN_AVATAR_SCALE`) is .05.

## Example

{% highlight js %}
> MyAvatar.scale
< 1.336745023727417
> MyAvatar.decreaseSize()
< undefined
> MyAvatar.scale
< 1.2699077129364014
{% endhighlight %}


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

{% highlight js %}
> var guitarModel = "https://s3-us-west-1.amazonaws.com/highfidelity-public/models/attachments/guitar.fst";
> MyAvatar.attach(guitarModel, "Hips", {x: -0.0, y: -0.0, z: 0.0}, Quat.fromPitchYawRollDegrees(0, 0, 0), 1.0);
{% endhighlight %}

Observe that MyAvatar is now being impaled by a guitar. 

To remove the guitar, run `MyAvatar.detachOne(guitarModel);`.



## [MyAvatar.getAcceleration()](#MyAvatar.getAcceleration())


## [MyAvatar.getAngularAcceleration()](#MyAvatar.getAngularAcceleration())


## [MyAvatar.getAngularVelocity()](#MyAvatar.getAngularVelocity())


## [MyAvatar.getJointCombinedRotation()](#MyAvatar.getJointCombinedRotation())


## [MyAvatar.getJointIndex()](#MyAvatar.getJointIndex())


## [MyAvatar.getJointNames()](#MyAvatar.getJointNames())


## [MyAvatar.getJointPosition()](#MyAvatar.getJointPosition())


## [MyAvatar.getJointRotation()](#MyAvatar.getJointRotation())


## [MyAvatar.getTargetAvatarPosition()](#MyAvatar.getTargetAvatarPosition())


## [MyAvatar.getThrust()](#MyAvatar.getThrust())


## [MyAvatar.goHome()](#MyAvatar.goHome())


## [MyAvatar.increaseSize()](#MyAvatar.increaseSize())


## [MyAvatar.position()](#MyAvatar.position())


## [MyAvatar.resetSize()](#MyAvatar.resetSize())


## [MyAvatar.setJointData()](#MyAvatar.setJointData())
