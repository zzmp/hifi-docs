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

Gravity ...

## Example



## [MyAvatar.handPosition](#MyAvatar.handPosition)

`handPosition`, a vector, refers to the position of MyAvatar's hand. _but which hand?_

## Example

```js
> JSON.stringify(MyAvatar.handPosition)
< {"x":7229.26318359375,"y":4950.5380859375,"z":5042.74951171875}
```


## [MyAvatar.headOrientation](#MyAvatar.headOrientation)

`headOrientation`, a quaternion, represents the rotation of MyAvatar's head in relation relative to a coordinate system. 

## Example

```js
> MyAvatar.headOrientation
< {"x":0.4696423411369324,"y":0.4700500965118408,"z":-0.3286990225315094,"w":0.6711527109146118}
> JSON.stringify(Quat.getFront(MyAvatar.headOrientation))
< {"x":-0.32220885157585144,"y":0.9394134879112244,"z":-0.11697793006896973}
```


## [MyAvatar.headPitch](#MyAvatar.headPitch)

`headPitch` is a float referring to the degree about an axis running from ear to ear of MyAvatar's head. Pitch is sometimes called 'elevation'.

## Example

Using the JavaScript Console, run 

```js
> JSON.stringify(MyAvatar.headPitch)
< 69.99995422363281
```


## [MyAvatar.headRoll](#MyAvatar.headRoll)

`headRoll` is a float referring to the degree about an axis running from the nose to the back of MyAvatar's head. Roll is sometimes called 'bank'.

## Example

Using the JavaScript Console, run 

```js
> JSON.stringify(MyAvatar.headRoll)
< 0.04965079948306084
```


## [MyAvatar.headYaw](#MyAvatar.headYaw)

`bodyYaw` is a float referring to the degree left or right about an axis running from the base to the crown of MyAvatar's head. Yaw is sometimes called 'heading'.

## Example

Using the JavaScript Console, run 

```js
> JSON.stringify(MyAvatar.bodyYaw)
< 70
```


## [MyAvatar.jointNames](#MyAvatar.jointNames)

An array of strings, `jointNames` displays the list of joints making up MyAvatar. 

## Example

```js
> MyAvatar.getJointNames
< Hips,BodyParts,Moustaches,Tops,Beards,Shoes,Hair,Eyewear,Hats,Bottoms,RightUpLeg,RightLeg,RightFoot,RightToeBase,RightToe_End,LeftUpLeg,LeftLeg,LeftFoot,LeftToeBase,LeftToe_End,Spine,Spine1,Spine2,RightShoulder,RightArm,RightForeArm,RightHand,RightHandPinky1,RightHandPinky2,RightHandPinky3,RightHandPinky4,RightHandRing1,RightHandRing2,RightHandRing3,RightHandRing4,RightHandMiddle1,RightHandMiddle2,RightHandMiddle3,RightHandMiddle4,RightHandIndex1,RightHandIndex2,RightHandIndex3,RightHandIndex4,RightHandThumb1,RightHandThumb2,RightHandThumb3,RightHandThumb4,LeftShoulder,LeftArm,LeftForeArm,LeftHand,LeftHandPinky1,LeftHandPinky2,LeftHandPinky3,LeftHandPinky4,LeftHandRing1,LeftHandRing2,LeftHandRing3,LeftHandRing4,LeftHandMiddle1,LeftHandMiddle2,LeftHandMiddle3,LeftHandMiddle4,LeftHandIndex1,LeftHandIndex2,LeftHandIndex3,LeftHandIndex4,LeftHandThumb1,LeftHandThumb2,LeftHandThumb3,LeftHandThumb4,Neck,Head,HeadTop_End
```


## [MyAvatar.orientation](#MyAvatar.orientation)

`orientation`, a quaternion, represents the rotation of MyAvatar in relation relative to a coordinate system. 

## Example

Using the JavaScript Console, run 

```js
> MyAvatar.orientation
< {"x":0.4696423411369324,"y":0.4700500965118408,"z":-0.3286990225315094,"w":0.6711527109146118}
> JSON.stringify(Quat.getFront(MyAvatar.orientation))
< {"x":-0.32220885157585144,"y":0.9394134879112244,"z":-0.11697793006896973}
```


## [MyAvatar.position](#MyAvatar.position)

`position`, a vector, refers to the position of MyAvatar.

## Example

```js
> JSON.stringify(MyAvatar.position)
< {"x":7229.26318359375,"y":4950.5380859375,"z":5042.74951171875}
```



## [MyAvatar.scale](#MyAvatar.scale)

`scale` refers to the size of MyAvatar, a float. The minimum scale of MyAvatar (`MIN_AVATAR_SCALE`) is .05, and the maximum size of MyAvatar (`MAX_AVATAR_SCALE`) is 1000.

## Example

Using the JavaScript Console, run 

```js
> MyAvatar.scale
< 1.336745023727417
> MyAvatar.decreaseSize()
< undefined
> MyAvatar.scale
< 1.2699077129364014
```


## [MyAvatar.sessionUUID](#MyAvatar.sessionUUID)

`sessionUUID`, a string, returns the session ID for the session. 

## Example

Using the JavaScript Console, run 

```js
> MyAvatar.sessionUUID
< {8ee66fdf-5dc8-4aa4-b54a-eff44a412a05}
```


## [MyAvatar.shouldRenderLocally](#MyAvatar.shouldRenderLocally)

`shouldRenderLocally` is a boolean property. Set it to `true` if you would like to see MyAvatar in your local interface, and `false` if you would not like to see MyAvatar in your local interface. 


## [MyAvatar.skeletonModelURL](#MyAvatar.skeletonModelURL)

`skeletonModelURL`, a string, returns the URL of the MyAvatar's skeleton's '.fst' file. An .fst file is just a text file that gives us information on the model, its textures, blendshape mappings, and skeleton mappings. 

## Example

Using the JavaScript Console, run 

```js
> MyAvatar.faceModelURL
< http://public.highfidelity.io/models/skeletons/Cowboy Surfer.fst
```

