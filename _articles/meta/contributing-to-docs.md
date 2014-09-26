---
layout: doc
title: Contributing to the High Fidelity Documentation
collection: articles
category: meta
tags: []

---

# Contributing to the High Fidelity Documentation

Would you like to share your hints, tips and techniques for exploring and scripting in High Fidelity? We welcome your contributions. 

Have you found a mistake in the documentation, or do you have a small addition that would be so easy to add yourself rather than asking us to do it? Find the [hifi-docs repo on GitHub](https://github.com/highfidelity/hifi-docs) and submit a pull request for review. 

Do you have an idea for a new tutorial, article, or walkthrough? Fork the [hifi-docs repo](https://github.com/highfidelity/hifi-docs), add your article, styled in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), to the appropriate section, following the brief guidelines below. 

Don't be afraid to ask for help or a basic review early in the process. Often things that may seem obvious to the designer of a tutorial are completely obscure to the novices for whom the tutorial is written. 

## Style Guide

### Header

At the top of your article, include the following header, filling in the relevant fields:

```
---
layout: doc
title: 
collection: articles
category: 
tags:[]

---
```

### Introduction

Include an introduction that lets the reader know the general level of the article, topics covered, and relevant prerequisites. Make sure that you include the relevant version of your High Fidelity build (and other relevant software and hardware) in your documentation. 

### Tone

As not everybody is a native speaker of English, try to use simple, easy to understand language throughout your tutorial. As beginners might benefit from a level of hand-holding that may irritate more advanced users, try to strike a balance between too much explanation and too little.  

### Code Snippets

Use the standard Markdown backtick (```) format for formatting code blocks. For example, 

```
var BUTTERFLY_GRAVITY = 0;//-0.06;
var BUTTERFLY_FLAP_SPEED = 1.0;
var BUTTERFLY_VELOCITY = 20; /*butterflies should be zooming around with you now!*/
var DISTANCE_IN_FRONT_OF_ME = 1.0;
var DISTANCE_ABOVE_ME = 1.0;

```

### Content

Limit page content to one major topic per page, where possible.

### Internal Links

Use internal link format rather than the full `http://xxxx` external link format.

### Next Steps

If your article leads logically to another page, include a 'Next Steps' section containing the appropriate link(s).

### Referring to UI Elements

Use **bold** text and **>** to keep instructions brief and easy to read. For example, **File > Save**.


### Screenshots

Although you should not add a screenshot for every step in your article, add screenshots as necessary to anchor the user.
Include your images in their own, appropriately-labeled directory.

-------------

# Reviewing Contributions to the High Fidelity Documentation

There are two sides (or perhaps more) to reviewing documentation: ensuring the documentation is easy to read, and ensuring a novice reader would be able to easily follow the instructions in the documentation. 

When reviewing (and writing) your documentation, *turn on your spellchecker* and imagine you have only the vaguest idea where anything is in the High Fidelity interface. Actually follow the instructions in the tutorial or article you are reviewing and point out places where, for example, a small hint as to the location of a menu item, would make the document easier to follow. 
