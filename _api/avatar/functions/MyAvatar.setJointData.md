---
layout: doc
title: MyAvatar.setJointData(string jointName, Quat rotation) 
collection: api
category: avatars
tags: functions
---

`setJointData` sets a target body part rotation's in quaternion. 

## Example

Take a look at the crazylegs script. 

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
```

After some preliminaries, the script sets MyAvater.setJointData() in several fun configurations to give the avatar a funny walk.

``
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
