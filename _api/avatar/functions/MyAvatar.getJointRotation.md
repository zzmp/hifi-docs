---
layout: doc
title: Quat MyAvatar.getJointRotation(string jointName)
collection: api
category: avatars
tags: functions
---

`getJointRotation` returns current joint rotation in quaternion. 

## Example

```
> bodyPart = MyAvatar.getJointNames()[3];
< Shoes
> JSON.stringify(MyAvatar.getJointRotation(bodyPart))
< {"x":0,"y":0,"z":0,"w":1}
```
