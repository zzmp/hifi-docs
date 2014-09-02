---
layout: doc
title: MyAvatar.setJointData(string jointName, Quat rotation) 
collection: api
category: avatars
tags: functions
---

Sets current body part rotation in quaternion (_Quat_). 

```
> MyAvatar.setJointData("LeftArm", {x:3, y:2, z:1, w:0})
< undefined
> JSON.stringify(MyAvatar.getJointRotation("LeftArm"))
< {"x":3,"y":2,"z":1,"w":0}
```
