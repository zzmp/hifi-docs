---
layout: doc
title: EntityItemProperties getEntityProperties(EntityItemID entityID)
collection: api
category: entities
tags: functions
---

`getEntityProperties` gets the current model properties for a specific model. This function will not find return results in script engine contexts which don't have access to models. `getEntityProperties` takes an `EntityItemID` as an argument and returns `EntityItemProperties`. 

# Example

In the script editor, create a white sphere and print its properties by running the following script:

```
var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));  
var properties = {
  type: "Sphere",
  position: position,
  color: {red:200,green:200,blue:200}
};
Ent = Entities.addEntity(properties);
print(JSON.stringify(Entities.getEntityProperties(Ent)));

```

Your output should look something like this:

```
{"id":"{00000000-0000-0000-0000-000000000000}","isKnownID":false,"type":"Sphere","position":{"x":6360.08447265625,"y":222.1766815185547,"z":9731.796875},"dimensions":{"x":0.10000000149011612,"y":0.10000000149011612,"z":0.10000000149011612},"naturalDimensions":{"x":1,"y":1,"z":1},"rotation":{"x":0,"y":0,"z":0,"w":1},"velocity":{"x":0,"y":0,"z":0},"gravity":{"x":0,"y":0,"z":0},"damping":0.5,"mass":1,"lifetime":-1,"age":0.00009899999713525176,"ageAsText":"0 hours 0 minutes 0 seconds","script":"","registrationPoint":{"x":0.5,"y":0.5,"z":0.5},"angularVelocity":{"x":0,"y":0,"z":0},"angularDamping":0.5,"visible":true,"color":{"red":0,"green":0,"blue":0},"modelURL":"","animationURL":"","animationIsPlaying":false,"animationFrameIndex":0,"animationFPS":30,"glowLevel":0,"ignoreForCollisions":false,"collisionsWillMove":false,"sittingPoints":{"length":0}}
```