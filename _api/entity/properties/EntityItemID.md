---
layout: doc
title: EntityItemID
collection: api
category: entities
---

## id
Type: string
Description: The unique `id` of the entity. It is by design that `addEntity()` will return an `id` of `{00000000-0000-0000-0000-000000000000}` as the client creates the entity locally immediately, and then returns before the server can respond with an official UUID.

## isKnownID
Type: boolean
Description: `isKnownID` returns `true` if the client knows the true identity of the entity. This is only possible after the server as authorized creation and informed the client of the true identity. It is by design that `addEntity()` will return an `isKnownID` of `false` as the client creates the entity locally immediately, and then returns before the server can respond with an official UUID.
