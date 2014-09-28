---
layout: doc
title: QVector<EntityItemID> findEntities(const glm::vec3& center, float radius) const
collection: api
category: entities
tags: functions
---

`findEntities` finds entities withing the search sphere specified by the specified radius and center point. If entities are found, the function returns the `EntityItemID`s of those entities in a JavaScript array. This function will not find any models in script engine contexts which don't have access to entities.

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
print("Created an entity with: " + JSON.stringify(Entities.getEntityProperties(Original).color));
}

// find the closes one and make it white
arrayFound = Entities.findEntities(MyAvatar.position, 100.0)
print(arrayFound.length);

for( i = 0; i < arrayFound.length; i++){
    Entities.editEntity(arrayFound[i], {color: {red:200, blue:200, green:200}});
    print("Turned a found entity to color: " + JSON.stringify(Entities.getEntityProperties(arrayFound[i]).color));
}
```
