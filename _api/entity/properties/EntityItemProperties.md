---
layout: doc
title: EntityItemProperties
collection: api
category: entities
---

Note: Defaults gathered by running:

```
< print(JSON.stringify(Entities.getEntityProperties(Entities.addEntity({}))));
```

This gives different results than the following:

```
< print(JSON.stringify(Entities.getEntityProperties({})));
```

## id
// TODO why is this always "{00000000-0000-0000-0000-000000000000}"? Why is it a string?
Type: string
Description:
Default Value: `{00000000-0000-0000-0000-000000000000}`

## isKnownID
//TODO is this true?
Type: boolean
Description: Returns `true` if the entity in question has been found. 
Default Value: `false`

## type
//TODO are there more types? These are the only ones I found in use
Type: string
Description: Entities are of three types, "Box", "Sphere", and "Model". "Model" types may be animated and take on more complex shapes and rigs than Boxes and Spheres. 
Default Value: `Unknown`

## position

Type: object
Description: The location of the entity in the universe. 
Default Value: `{x:0, y:0, z:0}`

## dimensions

Type: object
Description: The dimensions of the the created entity. 
Default Value: `{x:0.10000000149011612,y:0.10000000149011612,z:0.10000000149011612}`

## naturalDimensions
//TODO - why are these always `{x:1, y:1, z:1}`?
Type: object
Description: 
Default Value: `{x:1, y:1, z:1}`

## rotation

Type: object
Description: The rotation of the entity about its `registrationPoint`.
Default Value: `{x:0, y:0, z:0, w:1}`

## velocity

Type: object
Description: The velocity of the entity. 
Default Value: `{x:0, y:0, z:0}`

## gravity

Type:
Description: `gravity` refers to the direction(s) and velocity in which the entity is pulled.
Default Value: `{x:0, y:0, z:0}`

## damping

Type: number
Description: `damping` is a force synchronous with the velocity of the entity but opposite in direction to its velocity. 
Default Value `0.5`

## mass
// TODO what does this do? Is the force of gravity stronger on entities with more mass (F=ma), or does this have to do more with behavior during collisions?
Type: number
Description:
Default Value: `1`

## lifetime

Type: number
Description: `lifetime` is the number of seconds an entity will exist. Use `-1` for unlimited lifetime. 
Default Value: `-1`

## age

Type: number
Description: `age` returns the age of the entity in seconds.
Default Value: some small number

## ageAsText

Type: string
Description: `ageAsText` returns the age of the entity as a string formatted as: "X hours X minutes X seconds"
Default Value: some small age.

## script
//TODO - what does this property do? It was hard to find an example because of the ubiquity of the word
Type: string
Description:
Default Value: `""`

## registrationPoint
//TODO is this correct? I tried rotating entities but they all seemed to be rotating about the same registration point
Type: object
Description: `registrationPoint` is the default location of an entity from which its  co-ordinates are determined. It is used as the point of reference when the entity is moved or rotated.
Default Value: `{x:0.5, y:0.5, z:0.5}`

## angularVelocity

Type: obect
Description: `angularVelocity` refers to the angular velocity of the entity about an axis. 
Default Value: `{x:0, y:0, z:0}`

## angularDamping

Type: number
Description: `angularDamping` is a force synchronous with the angular velocity of the entity but opposite in direction.
Default Value: `0.5`

## visible

Type: boolean
Description: `visible` is a value determining whether or not an entity is visible. 
Default Value: `true`

## color

Type: object
Description: The `color` object contains the color settings for entities using the RGB color system. 
Default Value: `{red:0, green:0, blue:0}`

## modelURL

Type: string
Description: `modelURL` points to the URL storing the model to be used in a "Model"-type entity. 
Default Value: `""`

## animationURL

Type: string
Description: `animationURL` points to the URL storing the animation to be used in a "Model"-type entity. 
Default Value: `""`

## animationIsPlaying

Type: bool
Description: `animationIsPlaying` determines whether the animation of a "Model"-type entity is playing. 
Default Value: `false`

## animationFrameIndex
//TODO please verify
Type: number
Description: `animationFrameIndex` is the index of the animation to be played next. 
Default Value: `0`

## animationFPS

Type: number
Description: `animationFPS` refers to the number of frames per second played for the animation of a "Model"-type entity. 
Default Value: `30`

## glowLevel

Type: number
Description: `glowLevel` is number from 0 to 1 describing how much light an entity emits.
Default Value: `0`

## ignoreForCollisions

Type: boolean
Description: `ignoreForCollisions` describes how other objects collide with an entity. If `true`, other objects will pass through the entity upon collision. If `false`, other objects will collide with the entity. 
Default Value: `false`

## collisionsWillMove

Type: boolean
Description: `collisionsWillMove` determines whether an entity will move in a collision event. If `true`, if the entity is in a collision with another object, the entity will move accordingly. If `false`, the entity is equivalent to an immovable object. 
Default Value: `false`

## sittingPoints
//TODO what is sitting points?
Type: object
Description:
Default Value: `{length:0}`
