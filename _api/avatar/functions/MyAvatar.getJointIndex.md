---
layout: doc
title: int MyAvatar.getJointIndex(const QString& name)
collection: api
category: avatars
tags: functions
---

Given the string name of a MyAvatar joint, `getJointIndex` returns the index of the bodypart. 

## Example

```
> MyAvatar.getJointIndex("Shoes")
< 3
> MyAvatar.getJointIndex("Invalid Joint Name")
< -1
```
