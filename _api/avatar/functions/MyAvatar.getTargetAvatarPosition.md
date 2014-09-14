---
layout: doc
title: Vec3 MyAvatar.getTargetAvatarPosition()
collection: api
category: avatars
tags: functions
---

`getTargetAvatarPosition` returns a three-dimensional vector describing the position of the avatar that your mouse is hovering over. If your mouse is not currently hovering over an avatar, all fields are zero. 

## Example

```
> JSON.stringify(MyAvatar.getTargetAvatarPosition())
< {"x":0,"y":0,"z":0}
```
