---
layout: doc
title: MyAvatar.decreaseSize()
collection: api
category: avatars
tags: functions
---

Decreases the scale of your avatar by the `SCALING_RATIO`, which has default value .05. The minimum scale of the avatar (`MAX_AVATAR_SCALE`) is .05.

```
> MyAvatar.scale
< 1.336745023727417
> MyAvatar.decreaseSize()
< undefined
> MyAvatar.scale
< 1.2699077129364014
```
