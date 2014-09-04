---
layout: doc
title: Vec3 MyAvatar.getJointCombinedRotation( parameter)
parameters: int index OR const QString& name
collection: api
category: avatars
tags: functions
---

This function accepts either a string (example, "Hips") or an integer index of a target body part, and returns a vector of the combined rotation of the body part in question. 

```
> JSON.stringify(MyAvatar.getJointCombinedRotation("Hips"))
<  {"x":-0.000038061141822254285,"y":0.9019246697425842,"z":-0.00001822586818889249,"w":-0.4318934679031372}
> JSON.stringify(MyAvatar.getJointCombinedRotation(0))
<  {"x":-0.000038061141822254285,"y":0.9019246697425842,"z":-0.00001822586818889249,"w":-0.4318934679031372}
```
