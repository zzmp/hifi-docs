---
layout: doc
title: Vec3 MyAvatar.increaseSize()
collection: api
category: avatars
tags: functions
---

Increases the scale property of your avatar by the `SCALING_RATIO`, which has default value .05. The maximum scale of the avatar (`MAX_AVATAR_SCALE`) is 1000.

```
> MyAvatar.scale
< 1.1024998426437378
> MyAvatar.increaseSize()
< undefined
> MyAvatar.scale
< 1.1576248407363892
```
