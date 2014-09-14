---
layout: doc
title: int MyAvatar.getJointIndex(const QString& name)
collection: api
category: avatars
tags: functions
---

Given the string name of a MyAvatar joint, `getJointIndex` returns the integer index of the bodypart, or -1 if inputs are invalid.

## Example

```
> MyAvatar.getJointIndex("Shoes")
< 3
> MyAvatar.getJointIndex("Invalid Joint Name")
< -1
```
