---
title: "Ways Coda Could Improve Rails Support"
date: 2011-10-05
archive: posterous
---

[You asked for it](https://twitter.com/#!/panic/status/121697957585227776). This is my off-the-cuff list. I'm sure I'll think of other things.

<!--more-->

## Code Editing

Coda has an annoying habit of treating < and > as angle brackets in ruby files when you have "Automatically close brackets" turned on.

{{< figure 
	src="image-1.png" 
	height="173" 
	width="601" 
	alt="A screenshot of Javascript code showing < treated properly as a less-than sign." 
	caption="Code handles < in Javascript cleanly." >}}

But…

{{< figure 
	src="image-2.png" 
	height="154" 
	width="275" 
	alt="A screenshot of Ruby code showing < treated incorrectly as an angle-bracket." 
	caption="But in Ruby code it gets confused." >}}

Note that there are no angle brackets in ruby, so there's no need to auto-close them in .rb files at all. (It is trickier in .html.erb files, but you handle switching between ruby and html well in those already.)

Also, you've got a few minor-but-annoying syntax coloring issues. The most destructive is bad handling of nested interpolations in ruby code:

{{< figure 
	src="image-3.png" 
	height="106" 
	width="527" 
	alt="A screenshot of Ruby code showing syntax highlighting treating a comment as a string after complex string interpolation." 
	caption="Nested string interpolation can cause Code to color everything after as a string." >}}
	
But there are a few others:

{{< figure 
	src="image-4.png" 
	height="308" 
	width="618" 
	alt="A screenshot of Ruby code showing several cases where ruby colors symbols and method calls like keywords." 
	caption="Coda has trouble when keywords appear in symbols and method names. And it doens't seem to understand quoted symbols." >}}
	
In a perfect world, I'd be able to mix ruby with HTML or Javascript in an ERB template and get proper output. CSS, YAML, and XML would be nice too. In fact, because of mysterious Rails magic, all .yml files should probably be treated as .yml.erb.

## Preview and Terminal Tabs Confuse Me

A rails developer almost certainly spends a lot of time on the terminal. Personally, I *like* having coda combine my terminals and code into one window. This way I can have two or three Rails projects open at the same time, each self-contained. (This is something I do a lot.)

My typical setup is:

1. A horizontally-split terminal tab; top tails my log, bottom is where I run migrations, use the console, do commits, etc...
2. A bajillion edit tabs
3. A separate browser open for testing

And a very typical use pattern is to do some work, accumulating several edit tabs in the process. Complete some work. Commit the changes. Right -click on the terminal tab and click Close Other Tabs. Then start over again with a clean slate.

Given this usage pattern, I have a few complaints:

1. I would prefer to preview in coda. But this is impractical for two reasons. Most importantly, the preview tabs get "lost" among the noise of edit tabs. Also, the whole idea of previewing a "file" doesn't really make sense in Rails. I can open a new tab, switch to preview, then navigate to my local server, but it is inconvenient.
2. I don't really "get" the idea of switching an edit tab into a terminal. It seems like the behavior is just sort of what happens when you put the Terminal button next to Edit, CSS, and Preview in an HTML editor, even though it doesn't make sense.

For me (me! me! me!) I think a more useful paradigm would be for the Preview, Terminal, and Edit buttons to act like mode switches for the whole window rather than the current tab. Then I could:

1. Click "Terminal" to see my two or three full-size open terminal tabs, do some generators, and run a migration.
2. Click "Edit" to go back to my 15 open editors and make some code changes.
3. Click "Preview" to switch to my two open preview tabs to check the results.
4. Click "Terminal" to get back to the terminals again because my code (of course) is perfect and I'm ready to commit.
5. Click "Edit" and quickly close all the tabs to get to a clean starting place for my next task.

All the while, my terminals and preview tabs stay open and ready. (For this to all work just right, the Local URL I set in the Site settings should not be augmented with the current file path.)

Of course this is really a deviation from The Way Coda Works, so take it with a grain of salt.

TL;DR version:

1. I only ever have one or two terminal tabs per window.
2. I only really want one or two preview tabs per window.
3. These tabs easily get lost in the shuffle of edit tabs.

## Speaking of Terminals: Speed

Since Rails devs spend a lot of time on the terminal, we care a lot about how well it works. Coda's terminal is, in general really nice. (It does have some coloring bugs that I am hard-pressed to describe or reproduce -- suffice it to say sometimes rails log file highlighting goes nuts.) My only real complaint is speed. Heaven forbid I run a rails console task that generates 10,000 lines of development log output while my server is open in a terminal tab. The next time I do a web action, rails built in server dumps the log up to the end, and it takes about 15 thousand hours for all those lines to scroll by in Coda's terminal. The OSX built in terminal does not have this problem.

Oh, and Command-K should clear the current Terminal. And it should work even if the Terminal isn't so full it scrolls. This is consistent with the OSX terminal and Console.app.

## Log Tailing

One of the terminal tabs I keep open is the rails log. Like a lot of Rails devs, I'm likely to start using Pow for my projects, which means I won't need to run the rails server manually in each project. (It also means I can keep the servers running for multiple projects at the same time, and I can test more complex use cases). But I still want to see my logs.

Along with its Terminal and Preview tabs, it would be lovely if Coda had a Log tab that tailed the file you point it at. Bonus points for a "Clean" command to clear its scrollback buffer quickly and easily. Double prizes if I can filter the log lines (live) with a regex pattern.

## Default Terminals

Once I open a terminal the first time in a new Site, Coda remembers that I want my terminals local instead of SSH (thanks!). It would be great if I could configure one or more terminals I always want when I open this site. (Ie, one "normal" terminal, one that runs `rails c`, and one that runs `mysql -u root`, or whatever.)

## Some Code Completion

Code Completion is understandably hard in a dynamic language like Ruby. The last thing I want is for Coda to start acting like Eclipse, cooking my lap, spinning my fans, and hiccuping during basic text entry. I keep code completion strictly optional (via Escape or F5) because I find it distracting. But it is really nice when I want it. Like here:

{{< figure 
	src="image-5.png" 
	height="124" 
	width="261" 
	alt="A screenshot showing Code offering useful code completion suggestions for CSS properties." 
	caption="Code completion works great in CSS." >}}

Along these lines, a few rails code completions would be nice, like:

{{< figure 
	src="image-6.png" 
	height="202" 
	width="250" 
	alt="A mockup of code completion suggestions for ActiveRecord \"has_many\" options." 
	caption="Code completion suggestions for common rails methods would be really nice." >}}

(I just shed a small tear of joy).

I think a great first start would be options hash completions for associations and migrations:
* has_many
* has_one
* belongs_to
* has_and_belongs_to_many
* add_column
* remove_column
* add_index
* remove_index

There are probably a few other low-hanging-fruit(s?).

## Mercurial Support

Oh wait, that has nothing to do with Rails. Never mind.

**Thank you for asking!**