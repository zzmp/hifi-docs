---
layout: doc
title: MyAvatar.clearJointData(string jointName)
collection: api
category: avatars
tags: functions
---

`clearJointData` returns a joint to its default position.

## Example

Take a look at the crazylegs script. 

First, joints wildly manipulated:

```
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

Upon the conclusion of the script, the affected joint data is cleared, returning the Avatar to the standing position: 

```
Script.scriptEnding.connect(function() {
    MyAvatar.clearJointData("RightUpLeg");
    MyAvatar.clearJointData("LeftUpLeg");
    MyAvatar.clearJointData("RightLeg");
    MyAvatar.clearJointData("LeftLeg");
});
```
