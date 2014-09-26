---
layout: doc
title: Properties
collection: api
category: avatar
methods: ["MyAvatar.bodyRoll", "MyAvatar.bodyPitch", "MyAvatar.bodyYaw", "MyAvatar.collisionGroups", "MyAvatar.faceModelURL", "MyAvatar.gravity", "MyAvatar.handPosition", "MyAvatar.headOrientation", "MyAvatar.headPitch", "MyAvatar.headRoll", "MyAvatar.headYaw", "MyAvatar.jointNames", "MyAvatar.orientation", "MyAvatar.position", "MyAvatar.scale", "MyAvatar.sessionUUID", "MyAvatar.shouldRenderLocally", "MyAvatar.skeletonModelURL"]
tag: properties
---

## [MyAvatar.bodyPitch](#MyAvatar.bodyPitch)

`bodyPitch` is a float referring to the degree about an axis running from shoulder to shoulder of MyAvatar. Pitch is sometimes called 'elevation'.

## Example

Using the JavaScript Console, run 

```js
> JSON.stringify(MyAvatar.bodyPitch)
< 69.99995422363281
```

## [MyAvatar.bodyRoll](#MyAvatar.bodyRoll)

`bodyRoll` is a float referring to the degree about an axis running from the chest to the back of the avatar. Roll is sometimes called 'bank'.

## Example

```js
> JSON.stringify(MyAvatar.bodyRoll)
< 0.04965079948306084
```


## [MyAvatar.bodyYaw](#MyAvatar.bodyYaw)

`bodyYaw` is a float referring to the degree left or right about an axis running from the head to the feet of MyAvatar. Yaw is sometimes called 'heading'.

## Example

Using the JavaScript Console, run 

```js
> JSON.stringify(MyAvatar.bodyYaw)
< 70
```


## [MyAvatar.collisionGroups](#MyAvatar.collisionGroups)

The collision group setting determine what types of things the MyAvatar class instance should collide with in the physics simulation. For example, voxels would be one group and collisions between MyAvatar and voxels could enabled or disabled.

## Example

The collision group settings in the Menu can be set/unset by script or by menu, as shown below.

Using the JavaScript Console, run 

```js
> MyAvatar.collisionGroups = 14
< 14
```

In the interface, look at the `Avatars\Collide with...` options. You should see `Collide with Other Avatars`, `Collide with Particles`, and `Collide with Voxels` checked. Uncheck `Collide with Other Avatars` and see that the `MyAvatar.collisionGroups` has updated:

```js
> MyAvatar.collisionGroups = 14
< 12
```


## [MyAvatar.faceModelURL](#MyAvatar.faceModelURL)

`faceModelURL`, a string, returns the URL of MyAvatar head's `.fst` file. An .fst file is just a text file that gives us information on the model, its textures, blendshape mappings, and skeleton mappings. 

## Example

Using the JavaScript Console, run 

```js
> MyAvatar.faceModelURL
< http://public.highfidelity.io/meshes/defaultAvatar_head.fst
```


## [MyAvatar.gravity](#MyAvatar.gravity)


## [MyAvatar.handPosition](#MyAvatar.handPosition)


## [MyAvatar.headOrientation](#MyAvatar.headOrientation)


## [MyAvatar.headOrientation](#MyAvatar.headOrientation)


## [MyAvatar.headPitch](#MyAvatar.headPitch)


## [MyAvatar.headRoll](#MyAvatar.headRoll)


## [MyAvatar.headYaw](#MyAvatar.headYaw)


## [MyAvatar.jointNames](#MyAvatar.jointNames)


## [MyAvatar.orientation](#MyAvatar.orientation)


## [MyAvatar.position](#MyAvatar.position)


## [MyAvatar.scale](#MyAvatar.scale)


## [MyAvatar.sessionUUID](#MyAvatar.sessionUUID)


## [MyAvatar.shouldRenderLocally](#MyAvatar.shouldRenderLocally)


## [MyAvatar.skeletonModelURL](#MyAvatar.skeletonModelURL)
