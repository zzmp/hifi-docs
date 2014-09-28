---
layout: doc
title: EntityItemID findClosestEntity(const glm::vec3& center, float radius) const)
collection: api
category: entities
tags: functions
---

`findClosestEntity` finds the closest entity to the specified center point, within a specified radius. If an entity is found, the function returns the `EntityItemID` of that entity. If no entity is found within the radius, the function will return an `EntityItemID.isKnownID = false`. This function will not find any models in script engine contexts which don't have access to entities.

# Example

In the script editor, create a bunch of spherical entities and turn the closest one to your avatar white by running the following script:

```
function randomProperites(){
var position = Vec3.sum(MyAvatar.position,{x:Math.random(),y:Math.random(), z:Math.random()});
var color = {red:Math.random()*200,green:Math.random()*100,blue:Math.random()*200};

var properties = {
  type: "Sphere",
  position: position,
  color: color
};
//print("Created some random colors" + JSON.stringify(color) + "\n at some random location" + JSON.stringify(position));
return properties;
}

//Creates a bunch of entites
for (i = 0; i < 20; i++){
Original = Entities.addEntity(randomProperites());
//print("Created  an entity with: " + JSON.stringify(Entities.getEntityProperties(Original).color));
}

// find the closes one and make it white
Found = Entities.findClosestEntity(MyAvatar.position, 100.0)
if (Entities.getEntityProperties(Found).isKnownID){
print("Found  an entity with color: " + JSON.stringify(Entities.getEntityProperties(Found).color));
Entities.editEntity(Found, {color: {red:200, blue:200, green:200}});
print("Turned it white!");
}
else{
print("no entitiy found, try again!");
}
```
