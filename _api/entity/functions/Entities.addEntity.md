---
layout: doc
title: EntityItemID addEntity(const EntityItemProperties& properties)
collection: api
category: entities
tags: functions
---

A building block of the virtual world, entities can be used to build items as simple as boxes and squares to complex animated items such as butterflies and stereo equipment. `addEntity` takes `EntityItemProperties` as argument and returns an `EntityItemID`.

# Example

In the script editor, create a black sphere by running the following script:

```
var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));  
var properties = {
  type: "Sphere",
  position: position
};
Ent = Entities.addEntity(properties);
print("Entity added");

```

Add some color by including `color` to the properties of this entity of type `Box`:

```
var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));  
var properties = {
  type: "Box",
  position: position,
  color: { red: 200, green: 0, blue: 0 }    
};
Ent = Entities.addEntity(properties);
print("Entity added");
```

Spice things up by using an animated entity of type `Model`:

```
var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));  
var properties = {
  type: "Model",
  position: position,
  modelURL: "http://business.ozblog.me/objects/butterfly/newButterfly2.fbx",
  animationURL: "http://business.ozblog.me/objects/butterfly/newButterfly2.fbx",
  animationIsPlaying: true
};
Ent = Entities.addEntity(properties);
print("Entity added");
```