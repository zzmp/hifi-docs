---
layout: doc
title: Quat MyAvatar.headOrientation
collection: api
category: avatars
tags: properties
---

`headOrientation`, a quaternion, represents the rotation of MyAvatar's head in relation relative to a coordinate system. 

## Example

```
> MyAvatar.headOrientation
< {"x":0.4696423411369324,"y":0.4700500965118408,"z":-0.3286990225315094,"w":0.6711527109146118}
> JSON.stringify(Quat.getFront(MyAvatar.headOrientation))
< {"x":-0.32220885157585144,"y":0.9394134879112244,"z":-0.11697793006896973}
```