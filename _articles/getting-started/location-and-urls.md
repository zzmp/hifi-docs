---
layout: doc
title: Locations & Location URLs
collection: articles
category: getting-started
tags: basics
---

#Get in & go

After you've downloaded and installed Interface, you can launch the client and you'll automatically be connected to the alpha.highfidelity.io domain. If you're up for some exploring, [data.highfidelity.io/directory](https://data.highfidelity.io/directory) offers a list of all registered locations.

**Alternatively, press Cmnd+Enter (Mac) or Ctrl+Enter (Windows/Linux)** to bring up our address bar and enter either the name of a location, a user, or a domain.


## Locations can be reached via URLs

Here's how they work:

    hifi://LOCATION
    hifi://DOMAIN[/LOCATION[/ROTATION]]
    
Where:  
_DOMAIN_ = hostname or ip address of the Domain manager  
_LOCATION_ = _x,y,z_  (decimal points may be replaced with '\_')  
_| LOCATION_ = @username  
_| LOCATION_ = #locationname  
_| LOCATION_ = name  (search for name as either username or locationname)  
_ROTATION_ = w,x,y,z (quaternion rotation of the avatar in global coordinates)  

Thus, you might have a location that looks like this: hifi://alpha/6269.11,195.467,6807.85
