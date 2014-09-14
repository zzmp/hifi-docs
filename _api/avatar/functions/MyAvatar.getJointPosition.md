---
layout: doc
title: Vec3 MyAvatar.getJointPosition(int index)
collection: api
category: avatars
tags: functions
---

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
