--- 
layout: doc
title: EntityItemID editEntity(EntityItemID entityID, const EntityItemProperties& properties)
collection: api
category: entities
tags: functions
---

`editEntity` takes a valid `EntityItemID` and `EntityItemProperties` as arguments and updates only the included properties of the given entity. Upon successful edit, the function returns the `EntityItemID` of the edited entity. 

# Example

In the script editor, create a white sphere and turn it into a blueish sphere by running the following script:

```
var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));  
var properties = {
  type: "Sphere",
  position: position,
  color: {red:200,green:200,blue:200}
};

var newProperties = {
  color: {red:0,green:200,blue:200}
};

Ent = Entities.addEntity(properties);
print(JSON.stringify(Entities.getEntityProperties(Ent).color));
//print(JSON.stringify("Editing properties...");
Entities.editEntity(Ent, newProperties);
print(JSON.stringify(Entities.getEntityProperties(Ent).color));
```
