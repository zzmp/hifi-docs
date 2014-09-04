---
layout: doc
title: Vec3 MyAvatar.getJointPosition( parameter)
parameters: int index OR const QString& name
collection: api
category: avatars
tags: functions
---

This function accepts either a string (example, "Hips") or an integer index of a target body part, and returns a vector of the position of the body part in question. 

```
> JSON.stringify(MyAvatar.getJointPosition("Hips"))
<  {"x":7229.2587890625,"y":4950.5380859375,"z":5042.74951171875}
> JSON.stringify(MyAvatar.getJointPosition(0))
< {"x":7229.2587890625,"y":4950.5380859375,"z":5042.74951171875}
```
