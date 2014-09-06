---
layout: doc
title: MyAvatar.detachOne(string attachmentURL)
collection: api
category: avatars
tags: functions
---

`detach` removes an object from MyAvatar. 

## Overloads and Related Functions

* MyAvatar.detachOne(string attachmentURL, string jointName)
* MyAvatar.detachOne(string attachmentURL)
* MyAvatar.detachAll(string attachmentURL, string jointName)
* MyAvatar.detachAll(string attachmentURL)

## Example

Before we use `detach`, we need to attach a model to your avatar. 

Using the JavaScript Console, attach a guitar model to your avatar:

```
> var guitarModel = "https://s3-us-west-1.amazonaws.com/highfidelity-public/models/attachments/guitar.fst";
> MyAvatar.attach(guitarModel, "Hips", {x: -0.0, y: -0.0, z: 0.0}, Quat.fromPitchYawRollDegrees(0, 0, 0), 1.0);
```

Observe that your avatar is now being impaled by a guitar. 

To remove the guitar, run `MyAvatar.detachOne(guitarModel);`.
