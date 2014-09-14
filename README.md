## High Fidelity Documentation

This is the repository of documentation for the complete High Fidelity system. We have two main collections:

1. The **API** collection (the `_api` folder) describes the JavaScript API for interfacing with the virtual world within the High Fidelity ecosystem.
2. The **Articles** collection (the `_articles` folder) holds, well, articles and tutorials for getting startied with developing or scripting on the system.

This repo also holds the Jekyll code that generates the site. You can use this same repo for contributing to either the content of the documentation, or the code that generates the site itself.

### How to contribute content

We need your help in building robust documentation for High Fidelity. If you would like to participate, add your suggestion as a job on Worklist via http://worklist.net/job/add/ (select the hifi-docs project) -- we will pay you for your thoughtful technical writing.

To get started contributing content to the High Fidelity Documentation, you can do the following:

1. Find the page you want to edit on the [Hi-Fi Docs website](http://docs.highfidelity.io)
2. Click the "Edit this Page" link in the upper right section of the article. This will open a link to GitHub (make sure you're logged in!) and allow you to edit it right away.

If you want to add a new page entirely:

1. Note how the content is generally organized by looking at the [Hi-Fi Docs index page](http://docs.highfidelity.io)
2. Decide under which section your new page fits best, and click on one of the existing pages in that section to see an example
3. Click on the "Edit this Page" link
4. Copy the YAML front matter from that page. All pages need the proper YAML front matter to be automatically indexed and searchable on the site. This is important! It will look something like this:
```
---
layout: doc
title: Demo Article
collection: articles
category: getting-started
tags: [demo,article,help]
---
```
5. Go back to the [Hi-Fi Docs repo](https://github.com/highfidelity/hifi-docs) and click on the proper folder for the collection that your page falls under: either `_api` or `_articles`
1. Click the proper folder for the section that your page falls under
6. Click the `+` icon in the directory breadcrumb path to automatically fork the repo and add your page.
1. Type in your page content---everything is parsed in [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown)---and when you are finished click "Save". Don't forget to add a nice commit message! Your new page will be submitted as a pull request and we'll either accept it when we get a chance, or return it with some suggested improvements. 

### How to build the site locally

If you find a bug or want to add a feature, you can fork and develop the site locally. You'll need the following dependencies:

* [Node.js Package Manager](http://npmjs.org). On OSX: `brew install npm`
* [Grunt](http://www.gruntjs.com) for JS automation - `npm install grunt`
* [Bower](http://www.bower.io) for dependency management - `npm install bower`
* [Sass](http://sass-lang.com) for pretty styles - `gem install sass`
* [Jekyll](http://jekyllrb.com) for generating the site - `gem install jekyll`

After you've forked the repo and installed the dependencies:

```bash
git clone https://github.com/$USER/hifi-docs.git # Replace $USER with your username
cd hifi-docs
grunt # builds the CSS from Sass and watches for changes
```

In a second console, build the site with Jekyll and watch for changes:

```bash
jekyll serve --watch
```

Now you can find the site on localhost for development.
