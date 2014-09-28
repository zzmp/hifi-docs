---
layout: doc
title: EntityItemID identifyEntity(EntityItemID entityID)
collection: api
category: entities
tags: functions
---

`identifyEntity` identifies a recently created entity by its `EntityItemID` and returns its true identity. 

# Example

In the script editor, create a black sphere by running the following script, and view the EntityItemID in the console log:

```
var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));  
var properties = {
  type: "Sphere",
  position: position
};
Ent = Entities.addEntity(properties);
print("Entity added");
print(Entities.identifyEntity(Ent).id);
```
