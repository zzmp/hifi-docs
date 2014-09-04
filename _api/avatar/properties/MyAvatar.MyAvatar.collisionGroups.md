---
layout: doc
title: MyAvatar.collisionGroups
collection: api
category: avatars
tags: properties
---

The collision group setting determine what types of things the MyAvatar class instance should collide with in the physics simulation. For example, voxels would be one group and collisions between MyAvatar and voxels could enabled or disabled.

The collision group settings in the Menu can be set/unset by script or by menu, as shown below.

Using the JavaScript Console, run 

```
> MyAvatar.collisionGroups = 14
< 14
```

In the interface, look at the `Avatars\Collide with...` options. You should see `Collide with Other Avatars`, `Collide with Particles`, and `Collide with Voxels` checked. Uncheck `Collide with Other Avatars` and see that the `MyAvatar.collisionGroups` has updated:

```
> MyAvatar.collisionGroups = 14
< 12
```
