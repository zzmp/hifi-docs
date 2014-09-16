---
layout: doc
title: Audio Callbacks
collection: api
category: audio
methods: ["audio.start()", "audio.stop()", "audio.phause()", "audio.replay()"]
tag: audio-callbacks
---

Click is a Python package for creating beautiful command line interfaces in a composable way with as little code as necessary. It's the Command
Line Interface Creation Kit. It's highly configurable but comes with sensible defaults out of the box.

It aims to make the process of writing command line tools quick and fun
while also preventing any frustration caused by the inability to implement
an intended CLI API.

Click in three points:

*   arbitrary nesting of commands
*   automatic help page generation
*   supports lazy loading of subcommands at runtime

What does it look like?  Here is an example of a simple Click program:

	{% highlight python linenos %}
	@click.command()
	@click.option('--count', default=1, help='Number of greetings.')
	@click.option('--name', prompt='Your name',
		help='The person to greet.')
	def hello(count, name):
		"""Simple program that greets NAME for a total of COUNT times."""
		for x in range(count):
			click.echo('Hello %s!' % name)
			
    if __name__ == '__main__':
		hello()
	{% endhighlight %}

And what it looks like when run:

	{% highlight bash %}
	$ python hello.py --count=3
    Your name: John
    Hello John!
    Hello John!
    Hello John!
	{% endhighlight %}

It automatically generates nicely formatted help pages:

	{% highlight sh %}
	$ python hello.py --help
    Usage: hello.py [OPTIONS]
	
	Simple program that greets NAME for a total of COUNT times.
	  
    Options:
      --count INTEGER  Number of greetings.
      --name TEXT      The person to greet.
      --help           Show this message and exit.
	{% endhighlight %}


You can get the library directly from PyPI:

	{% highlight bash %}
    $ pip install click
	{% endhighlight %}
	
<a id="audio.start()">audio.start()</a><br/>
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel 


<a id="audio.stop()">audio.stop()</a><br/>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. 

<a id="audio.replay()">audio.replay()</a><br/>
One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer

