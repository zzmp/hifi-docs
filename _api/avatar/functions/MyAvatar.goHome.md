---
layout: doc
title: MyAvatar.goHome()
collection: api
category: avatars
tags: functions
---

`goHome` sends MyAvatar back to its origin.

## Example

```
> JSON.stringify(MyAvatar.position)
< {"x":7462,"y":115"z":2201}
> MyAvatar.goHome()
< JSON.stringify(MyAvatar.position)
> {"x":6270,"y":206.85147094726562,"z":6000}
```
