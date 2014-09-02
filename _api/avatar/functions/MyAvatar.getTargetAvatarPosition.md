---
layout: doc
title: Vec3 MyAvatar.getTargetAvatarPosition()
collection: api
category: avatars
tags: functions
---

Returns _MyAvatar.position_, which describes the position of the avatar that your mouse is hovering over. If your mouse is not currently hovering over an avatar, all fields are zero. 

```
> JSON.stringify(MyAvatar.getTargetAvatarPosition())
< {"x":0,"y":0,"z":0}
```
