---
layout: doc
title: stringList MyAvatar.getJointNames()
collection: api
category: avatars
tags: functions
---

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