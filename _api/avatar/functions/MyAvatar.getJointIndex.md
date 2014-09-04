---
layout: doc
title: int MyAvatar.getJointIndex(const QString& name)
collection: api
category: avatars
tags: functions
---

Given a string name of a MyAvatar joint, this function returns the index of the bodypart. 

```
> MyAvatar.getJointIndex("Shoes")
< 3
> MyAvatar.getJointIndex("Invalid Joint Name")
< -1
```
