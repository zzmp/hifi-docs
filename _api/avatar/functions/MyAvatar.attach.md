---
layout: doc
title: MyAvatar.attach(string attachmentURL)
collection: api
category: avatars
tags: functions
---

`attach` appends an object to MyAvatar via a URL to a model file. 

## Overloads

* MyAvatar.attach(string attachmentURL, string jointName, Vec3 translation,Quat rotation, float scale, bool allowDuplicates, bool useSaved)
* MyAvatar.attach(string attachmentURL, string jointName, Vec3 translation,Quat rotation, float scale, bool allowDuplicates)
* MyAvatar.attach(string attachmentURL, string jointName, Vec3 translation,Quat rotation, float scale)
* MyAvatar.attach(string attachmentURL, string jointName, Vec3 translation,Quat rotation)
* MyAvatar.attach(string attachmentURL, string jointName, Vec3 translation)
* MyAvatar.attach(string attachmentURL, string jointName)

## Example

Attach a guitar to your avatar. 

Using the JavaScript Console, first set the attachmentURL:

```
> var guitarModel = "https://s3-us-west-1.amazonaws.com/highfidelity-public/models/attachments/guitar.fst";
```

Next, attach `guitarModel` to MyAvatar's hips:

```
> MyAvatar.attach(guitarModel, "Hips", {x: -0.0, y: -0.0, z: 0.0}, Quat.fromPitchYawRollDegrees(0, 0, 0), 1.0);
> MyAvatar.getAttachmentData();
```
Observe that your avatar is now being impaled by a guitar. 

To remove the guitar, run `MyAvatar.detachOne(guitarModel);`.
