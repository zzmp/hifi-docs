---
layout: doc
title: void deleteEntity(EntityItemID entityID)
collection: api
category: entities
tags: functions
---

`deleteEntity` identifies a recently created entity by its `EntityItemID` and deletes it.

# Example

In the script editor, create a white sphere, then delete it:

```
var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));  
var properties = {
  type: "Sphere",
  position: position,
  color: {red:200,green:200,blue:200}
};
Ent = Entities.addEntity(properties);
print("position of recently created sphere: " + JSON.stringify(Entities.getEntityProperties(Ent).position));
print("Deleting sphere...");
Entities.deleteEntity(Ent);
print("position of recently deleted sphere: " + JSON.stringify(Entities.getEntityProperties(Ent).position));

```

Your output should look something like:

```
> position of recently created sphere: {"x":6362.72314453125,"y":224.3997802734375,"z":9730.65234375}
> deleting sphere
> position of recently deleted sphere: {"x":0,"y":0,"z":0}
```
