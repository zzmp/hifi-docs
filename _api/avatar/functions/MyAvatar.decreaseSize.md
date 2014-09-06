---
layout: doc
title: MyAvatar.decreaseSize()
collection: api
category: avatars
tags: functions
---

`decreaseSize` decreases the scale of MyAvatar by the `SCALING_RATIO`, which has default value .05. The minimum scale of the avatar (`MIN_AVATAR_SCALE`) is .05.

## Example

```
> MyAvatar.scale
< 1.336745023727417
> MyAvatar.decreaseSize()
< undefined
> MyAvatar.scale
< 1.2699077129364014
```
