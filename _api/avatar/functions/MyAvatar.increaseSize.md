---
layout: doc
title: MyAvatar.increaseSize()
collection: api
category: avatars
tags: functions
---

`increaseSize` increases the scale property of MyAvatar by the `SCALING_RATIO`, which has default value .05. The maximum scale of the avatar (`MAX_AVATAR_SCALE`) is 1000.

## Example

```
> MyAvatar.scale
< 1.1024998426437378
> MyAvatar.increaseSize()
< undefined
> MyAvatar.scale
< 1.1576248407363892
```
