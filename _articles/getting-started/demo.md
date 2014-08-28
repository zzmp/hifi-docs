---
layout: doc
title: Demo Article
collection: articles
category: getting-started
tags: [demo]
---

{:toc}

Here&rsquo;s an overview of Markdown syntax that you can use anywhere on GitHub.com or in your own text files.

### Headers

    # This is an <h1> tag
    ## This is an <h2> tag
    ###### This is an <h6> tag
    `</pre>

### Emphasis

    *This text will be italic*
    _This will also be italic_

    **This text will be bold**
    __This will also be bold__

    *You **can** combine them*

### Lists
	
#### Unordered

    * Item 1
    * Item 2
      * Item 2a
      * Item 2b

#### Ordered

    1. Item 1
    2. Item 2
    3. Item 3
       * Item 3a
       * Item 3b

### Images

    ![GitHub Logo](/images/logo.png)
    Format: ![Alt Text](url)

### Links

    http://github.com - automatic!
    [GitHub](http://github.com)

### Blockquotes

As Kanye West said:

    > We're living the future so
    > the present is our past.

### Inline code

I think you should use an `<addr>` element here instead.

### MathJax

We support LaTeX-style math with MathJax:

$$
\begin{align*}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{align*}
$$

The following is a math block:

$$ 5 + 5 $$

But next comes a paragraph with an inline math statement:  $$ 5 + 5 $$

The code which rendered the above is as follows:

	The following is a math block:

	$$ 5 + 5 $$

	But next comes a paragraph with an inline math statement:

	\$$ 5 + 5 $$

## GitHub Flavored Markdown

GitHub.com uses its own version of the Markdown syntax that provides an additional set of useful features, many of which make it easier to work with content on GitHub.com.

Note that some features of GitHub Flavored Markdown are only available in the descriptions and comments of Issues and Pull Requests. These include @mentions as well as references to SHA-1 hashes, Issues, and Pull Requests. Task Lists are also available in Gist comments and in Gist Markdown files.

### Syntax highlighting

Here’s an example of how you can use syntax highlighting with [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown):

    {% highlight javascript %}
    function fancyAlert(arg) {
      if(arg) {
        $.facebox({div:'#foo'})
      }
    }
    ```
    {% endhighlight %}

You can also simply indent your code by four spaces:

    {% highlight javascript %}
	function fancyAlert(arg) {
          if(arg) {
            $.facebox({div:'#foo'})
          }
        }
    {% endhighlight %}

Here’s an example of Python code without syntax highlighting:

	def foo():
		if not bar:
			return True

### Task Lists

	- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
	- [x] list syntax required (any unordered or ordered list supported)
	- [x] this is a complete item
	- [ ] this is an incomplete item

### Tables

You can create tables by assembling a list of words and dividing them with hyphens `-` (for the first row), and then separating each column with a pipe `|`:

    First Header | Second Header
    ------------ | -------------
    Content from cell 1 | Content from cell 2
    Content in the first column | Content in the second column

Would become:

    <table>
    <thead>
    <tr>
    <th>First Header </th>
    <th> Second Header</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>Content from cell 1 </td>
    <td> Content from cell 2</td>
    </tr>
    <tr>
    <td>Content in the first column </td>
    <td> Content in the second column</td>
    </tr>
    </tbody>
    </table>

### SHA references

Any reference to a commit’s [SHA-1 hash](http://en.wikipedia.org/wiki/SHA-1) will be automatically converted into a link to that commit on GitHub.

    16c999e8c71134401a78d4d46435517b2271d6ac
    mojombo@16c999e8c71134401a78d4d46435517b2271d6ac
    mojombo/github-flavored-markdown@16c999e8c71134401a78d4d46435517b2271d6ac

### Issue references within a repository

Any number that refers to an Issue or Pull Request will be automatically converted into a link.

    #1
    mojombo#1
    mojombo/github-flavored-markdown#1

### Username @mentions

Typing an `@` symbol, followed by a username, will notify that person to come and view the comment. This is called an &ldquo;@mention&rdquo;, because you&rsquo;re _mentioning_ the individual. You can also @mention teams within an organization.

### Automatic linking for URLs

Any URL (like `http://www.github.com/`) will be automatically converted into a clickable link.

### Strikethrough

Any word wrapped with two tildes (like `~~this~~`) will appear crossed out.

### Emoji

GitHub supports emoji! ![:sparkles:](https://assets.github.com/images/icons/emoji/unicode/2728.png ":sparkles:") ![:camel:](https://assets.github.com/images/icons/emoji/unicode/1f42b.png ":camel:") ![:boom:](https://assets.github.com/images/icons/emoji/unicode/1f4a5.png ":boom:")

To see a list of every image we support, check out the [Emoji Cheat Sheet](http://www.emoji-cheat-sheet.com/).