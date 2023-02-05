---
title: "FileMaker Gets Bento"
date: 2007-11-14
archive: sfr
---

Many people were surprised by Tuesday’s announcement from FileMaker Inc.: A new “desktop database” application called [Bento](http://bentotrial.com). Nobody I know had any idea this was in the works, and I’m pretty sure it is the first product from FMI that is not directly FileMaker Pro related since Claris Organizer was released back in 1827 or thereabouts. For a FileMaker announcement, Bento is getting [a](http://www.macworld.com/2007/11/firstlooks/bento/index.php) [lot](http://daringfireball.net/2007/11/bento) [of](http://macintouch.com/prod.2007.11.13.bnt) [coverage](http://www.appleinsider.com/articles/07/11/13/first_look_filemakers_bento_personal_database_for_leopard.html) in the Mac media. Here’s our take.

## Bento Basics

First, the basics: Bento is *not* FileMaker. It has nothing to do with FileMaker at all. But it *is* a database application. You can use Bento to build simple databases, and track even large amounts of data efficiently.

Most striking, Bento requires Mac OS X 10.5 (better known as Leopard). It won’t run on older versions of Mac OS X, and it won’t run on *any* version of Windows. This is almost certainly because it takes advantage of one of Leopard’s flagship new developer features called [Core Animation](http://en.wikipedia.org/wiki/Core_Animation). When you use bento, you quickly realize subtle (and sometimes not-so-subtle) animations are a big part of the experience.

### The Bento Way

But those are all just technicalities. The real *point* of Bento, if you will, seems to be a re-imagining of desktop database software. To whit:

1. Bento has no documents. All your data is stored somewhere in the ether of your operating system, much like your iPhoto and iTunes libraries.

2. Instead of Databases or Tables, you have Libraries. Each Library is a lot like a FileMaker Pro database with a single primary table. (Under the hood, libraries seem to employ a few tables, if you assume the whole thing is RDBMS-like, but a Library has one central entity, and is entirely themed around listing, finding, and browsing its instances.)

3. Bento treats some important system-wide data as first-class Libraries. Specifically, your Address Book, Calendar, and To Do lists are all libraries in Bento, ready to incorporate with your own creations.

4. In Bento, what you might call field controls (the little buddies you put on a layout in FileMaker) and real fields (the things in your tables) are even more intertwined than in FileMaker. When you create a Bento field, you decide if it is a checkbox, pop-up menu, date with calendar, etc. And there are no value lists. Instead, a Bento checkbox has just one value, and a pop-up menu has it’s own embedded list of choices.

For the curious, here’s my first stab at a Bento-to-FileMaker dictionary:

* Library ~= Database and a little bit Table
* Collection ~= Found Set (but saved)
* Smart Collection ~= Find Requests
* Form ~= Layout in Form View
* Field ~= Field, Sort of Relationship, Sort of Table

There’s more to Bento than this, of course. The entire system seems to try as hard as possible to dispense with complex database concepts and terminology. Gone are tables, relationships, keys, and so forth. And Bento has something called Fields, but they stretch our common notions in many ways. Fields in Bento are sometimes more analogous to relationships, value lists, and even tables. I won’t go into the whole story here (mostly because I’m still trying to fully understand it) but I will say it is certifiably *different*.

{{< mov src="bento.mov" caption="Bento in action." >}}

It is important to point out that, much more than with FileMaker, this look-and-feel is set in stone. You can change colors, patterns, and fonts by selecting a theme. (And there is [evidence](http://www.red-sweater.com/blog/435/filemaker-goes-indie) that Bento may include a theme editor in a future version.) But *every* Bento Library has a List pane just like the one you see here. And every so-called form has a banner across the top with the Library name, record navigation arrows, a big search box, and so forth. You have *a lot* less control over how your database works in Bento: You decide which fields show on the form, and roughly where they’re positioned.

It is hard for someone like me, whose brain is hopelessly embued with FileMaker expectations, to give Bento a fair shake. I honestly can’t say if it is utterly worthless or amazingly cool. The trouble is, every corner I turn in Bento, I can’t help but notice all the things it *can’t* do. No scripts. No buttons. No conditional formulas. No layout pictures. No multi-predicate joins. No sub-summary parts (can Bento even print? Haven’t tried yet…). But I’m not a good judge. I’m too familiar with FileMaker and I spend too much of my time taking it to its extremes to make it do interesting things. Bento’s obviously not a tool designed for my business and my customers.

So I’ll have to reserve judgement. Let’s see how non-FileMaker people respond. But I will go on the record with two points:

1. I’m thrilled to see FileMaker trying new things. In the best case, we get a great new app with interesting capabilities and a positive impact on the FMI bottom line. In the worst case, FileMaker gets to air some ideas, try new things, and get the creative juices flowing. I can’t see how that could possibly be a bad thing.

2. Some parts of Bento are very clever. I’m not sure how well it all comes together, but some of the ideas are, in my opinion, compelling. I’d love to see it explored more fully.

{{< note >}}
There’s been a little backlash from FileMaker developers, along the lines of “I’ve been asking FileMaker for years to add articulated portal sprockets, and instead they give us Bento!” I sympathize. I really do. But not much. FileMaker 9 was one of the best upgrades in FileMaker history. It is impossible to imagine that Bento was started on July 11th (the day after FileMaker 9’s release). Clearly, FileMaker’s been multitasking for quite a while. I would love to see my favorite features added to FileMaker, but as I’ve said before, all told, I think they’re doing a great job improving their core product. And I really am happy to see FMI flexing new muscles. I think it is *good* for FileMaker Pro.
{{< /note >}}

### Performance

For the record, I don’t think Bento’s about big data sets and high performance. I suspect 2000 records would be considered “a lot” for a typical Bento library. But reason aside, I was curious how it would perform. Here’s what I found out.

{{< note >}}
When I downloaded Bento, one of my first tasks was to see if it had any FileMaker DNA at all. I suspected it might share the core FileMaker engine (the same pile of code that FileMaker Server and FileMaker Pro have in common). But a quick perusal of Bento’s application package revealed no FMEngine.framework. So it seems Bento uses some other database for its mundane data handling tasks. I read somewhere it’s SQLite, but I have no idea if that is true.
{{< /note >}}

Now before I get in to the results, I should say emphatically that this is not a comparison between FileMaker and Bento. That’s a bit like doing a shootout between Paintbrush and Photoshop. Only, um, the other way around. In truth, I was curious if Bento would simply fall apart when presented with a lot of data. Many desktop applications that manage data have a hard time when you give them lots of data to work on (I’m thinking email clients, contact managers, and the like here). So how does Bento fair as the data grows?

To start off, I imported 10,000 records into a faux DVD Collection library I created. I was happy to see that Bento swallowed the CSV file whole and hardly skipped a beat. It took several seconds to import, and then searching, editing, adding, and deleting were on par with a small library. (I say on par here because, in its pre-release form, Bento is a tad sluggish. It is of course too soon to say if this will go away in the final release, but it wouldn’t surprise me if it did. It isn’t slow, per se. Just not snappy.)

{{< figure src="records.png" 
           width="474"
           height="127"
           alt="Screenshot of a portion of the bento window showing the total record count: 446,596."
           caption="That's a lot of recipes.">}}

Since Bento did so well with what I think will realistically be a larger-than-average library size, I decided to really stretch it. So next, I imported a 46MB CSV file with half a million people records (First Name, Last Name, Email, Phone, Address, City, State, Zip). At first I thought things were going amazingly well. Bento chomped happily on the file for just north of three minutes, then seemed to say “All done.” But in truth, it was hurting. The core problem was out-of-control memory consumption. When it finished, it was using about 2GB of RAM, and it took a good 10 minutes for it to become responsive again. It never did begin to behave reasonably, so I quit and relaunched. This time, it behaved relatively well, but memory usage was still high (500MB), I hit occasional hang-ups, and search performance was clunky. It took about 10 seconds to return results on a typical Library-wide search, and four or five seconds when searching a single field.

For comparison sake, FileMaker Pro Advanced 9 was able to create a new database from the same CSV in about one minute. The first search took about 20 seconds (while FileMaker built an index). Additional searches on the same field were instantaneous. Oh, and FileMaker’s memory footprint never passed 65MB.

I wouldn’t be surprised at all if memory consumption eased off a bit in the first release. The truth is, Bento did fairly well considering I was being mean to it. I highly doubt anybody will be tracking half a million baseball cards in Bento. But aside from a memory problem during import, Bento didn’t just roll over dead. Slowness aside, it kept working.

## The Cool Stuff

Of course Bento has nothing to do with speed. The real question is, is it cool? Does it do anything interesting? Can it teach its big brother any new tricks? It should come as no surprise that the answer is **yes**. It’s amazing how creative developers can be when they get to rethink everything. That’s something FMI hasn’t had a chance to do in 20 years. Here’s a rundown of the things I’ve discovered so far that I really like.

### Related Records Lists

First up, I totally dig Bento’s integration with OS X data. Imagine you’re creating a Projects Library — one in which you’ll track the projects you’re working on in your little home-based business. You might want to keep track of the people involved in the project: customer contacts, subcontractors, and so forth. Of course you could do all this in FileMaker easy-as-pie using two tables and some relational magic.

Bento dispenses with most of that terminology. Instead, in your Projects Library, you add something called a Related Records List. When you do, Bento asks you which library to get this data from (choose your Address Book) and what to call it (I called mine “Contacts”). When you’re done, Contacts shows up right along side all the fields in your Library in Bento’s Fields pane. (This is a little odd, since it obviously isn’t a field. Or maybe it is. In Bento, who the heck knows.)

When you drag this whatever-it-is to your form, instead of a simple input field, you get Bento’s equivalent of a Portal: a scrolling list. And here’s where the magic happens. What is this scrolling thing? Is it a portal of Address Book entries? If so, what key fields are used? How are the tables joined? Bento doesn’t even *have* key fields, and it certainly never asked me how to match records from these two libraries together.

In Bento, it turns out, a Related Records List is something clever and unique. The best FileMaker analogy I can come up with is this: Bento creates a new, anonymous join table that sits between Projects and Address Book. This join table has the power to connect any address book entry to a particular project, although none are connected when you first set things up.

There are two ways to make a connection. First, you can pick an existing person from your address book. Just click the Bento's "Choose a related record" icon. Bento shows a searchable list of Address Book records (ie: people and businesses in your address book):

{{< figure src="pick_from_library.png" 
           width="528"
           height="285"
           alt="Screenshot of an \"Address Book Library\" window showing a list of people and a search box. I have searched for \"Geoff\" and the list includes me."
           caption="Bento can search and select records straight from your system address list.">}}

You can select one or more entries in the window, and then click Add to List. Bento makes a connection: The selected people are connected to the Project record, and they show in the scrolling list.

If the person you want isn’t in your Address Book yet, you can add them directly in Bento. Just start typing in the scrolling list, much like you would in a portal based on a relationship that allows record creation. As soon as you enter some data, Bento does two things. First, it adds a new entry to your Address Book (your *real* address book). Second, it connects this new person to the project record.

This is all very hard to explain, but relatively obvious and simple in practice. Just tell Bento you want projects to have a list of Address Book records, then go to town. All the complexities of relationships are handled automatically and intelligently behind the scenes.

And Bento’s Address Book integration isn’t some kind of synchronization misadventure. It’s a very live connection, as you can see in this next clip. The Address Book window in the background shows my attempt to search for Benito. Notice it found nothing. But when I add this person to a Related Records List in Bento, it appears in Address Book immediately. And when I delete the person from my Address Book, it disappears from Bento’s list just as fast.

{{< mov src="integrated_data.mov" caption="Bento's integration with Mac OS X data sources is live and instantaneous." >}}

And of course it all applies to your iCal calendar and Mail/iCal to-do lists as well. Go ahead and add a list of related calendar events called Meetings, and a list of To Do items for you project. It is amazingly cool really: You go to your project database, add a contact, schedule a meeting, and note a few to-dos. And all the while, you calendar, address book, and global to-do list are all being updated. You get to decide which interface is best at any given moment.

I do have a few gripes with this part of Bento though. (Well, I can’t really call them gripes. This is pre-release software after all. Let’s call these wishes.):

1. For reasons I don’t quite understand, a particular library can only have *one* Related Records List for each of the other libraries. For instance, once you tell your Projects library you want a related list of Address Book records, you can’t pick Address Book again for a second Related Records List. What if I want my Projects library to have *two* lists of contacts: one for customers and one for coworkers? Seems like I ought to be able to.

2. Bento’s clever relationship handling seems stuck in a -to-many world. I can add a *list* of related Address Book entries, but I can’t add a *single* related Address Book record. Imagine you’re building a library to keep track of your DVDs. You might want a way to note who a particular DVD is out on loan to. It would seem like a perfect solution to tell Bento you want a *Related Record* tied to the Address Book. In this case, instead of a scrolling list, it might show a placard that represents a single contact (you would control which fields show, and where it lives on the form). But as far as I can tell, Bento can’t do this sort of thing. You get a scrolling list of related records, or nothing at all.

3. While I’m dreaming, it would be super-cool if I had some simple way to add data (fields) to the association. I’m not sure how Bento would present this, but here’s what I mean. Suppose you add a Related Records List of Address Book records to your DVD Collection library. In addition to noting *who* has borrowed the DVD, it would be cool to note *when* they borrowed it. Obviously a “When Borrowed” field isn’t at home in the Address Book *or* the DVD Collection libraries. After all, each person might borrow more than one DVD, and each DVD might be borrowed by more than one person. In traditional FileMaker parlance, this date field belongs in the join table. In database parlance, this is a “rich association.” In other words, there is real, honest-to-goodness data *in the association between two records*. Whatever you call it, I’d like to be able to do it in Bento.

4. This one is a stretch, but I’d love to see this integrated library stuff extended even more. For example, I wish the emails in my mail client were a library in Bento. And my music in iTunes. And my photos in iPhoto.

### Library-Wide Searching

Another nice feature (and something I really wish FileMaker had) is library-wide searching. Every Bento library has a prominent Search box in the top-right corner. Type in this box and Bento searches for matching records. You don’t have to fuss about *which* field to search in at all. It seems to search them all. Whatever it does, it’s nice.

{{< figure src="search_box.png"
           width="270"
           height="193"
           alt="Screenshot of the top-right corner of the Bento window showing a standard Mac OS X style \"Search\" field."
           caption="Bento's library-wide search is always availbale, super handy, and fits right in on the Mac." >}}

I would argue that about 90% of the time, when someone is searching a FileMaker table, they would get perfectly acceptable results by searching *every* indexed field. Find “Geoff Coffey” or “24-Toothed Titanium Sprocket, Size 2” and you’ll probably find what you want, without worrying about the First Name, Last Name, Product Name, and Size fields. After all, Google has only one search box, and it searches *billions* of records. If internet search engines have taught us anything in the last 10 years, it’s that a single search field is incredibly handy.

Of course you can mimic this in FileMaker a number of ways, but they’re all time consuming and potentially resource-wasting. Bento’s built-in search box is awesome.

### Collections

Up next is Bento’s notion of Collections. In FileMaker terms, these are saved found sets. And that’s a topic that comes up on the TechNet mailing list about every 36 hours. In Bento, you can select a handful of records and quickly add them to a collection (or make a new collection from them). This is something I’d kill for in FileMaker. All the workarounds to implement this feature are messy and slow. In Bento, it’s built in, fast, and elegant.

Bento actually has two types of collections: so called “smart” collections, and…um…regular ones. A smart collection is like a saved search. You provide the search criteria (“first name starts with G and last name ends in Y”) and Bento performs it whenever you opt to look at that collection. Of course you can do this with scripts in FileMaker, but in Bento, you can do it easily as a *user* with no coding necessary.

An ordinary Bento collection, on the other hand, is just a pile of records from one particular library. You add a record to the collection, and it stays there no matter what you do to the record itself. You can remove it later if you want. You can add more whenever you want. This concept is a lot harder to do right in FileMaker, and it is a powerful feature.

Finally, Bento’s collections have some hidden power. When you add a Related Records List to a library, you can actually choose a *collection* instead of a library. When you do, the record list is enhanced in two ways:

1. When you add a new record through the list, it is automatically added to the appropriate collection as well as the associated library.

2. When you opt to pick from a list of possible related records, Bento only shows records from the appropriate collection.

In Bento, the groups in your Address Book automatically show up as collections in the Address Book library. So if you want, you can make sure contacts you add through a Related Records List in your Projects library all go into a particular group in the Address Book. Once again, the whole concept is very elegant.

### Fresh User Interface

I can’t tell you how exciting it is to see a FileMaker product with a modern user interface. Don’t get me wrong — I *love* FileMaker Pro. But even the most die-hard fan has to admit those checkboxes look like crap.

Bento has beautiful system-standard UI widgets and elegant animated heads-up panels. I love that Media fields (Bento’s Container fields) can crop, resize, and reposition images, and even take snapshots right from my iSight camera. And the date picker is a thing of beauty.

{{< figure src="heads_up_date_picker.png" 
           width="181"
           height="236"
           alt="Screenshot of a dark floating window with a date field and calendar display you can click on to select a date instead."
           caption="Bento has a date picker that has all the gloss and polish of a modern Mac app and make entering dates a breeze." >}}

Bento also has a well-thought-out dialog box for mapping import fields (I like it *much* better than FileMaker’s). Instead of dragging countless fields up and down in mile-high lists, Bento lets you pick the source field from a pop-up for each destination.

Finally, it’s calculation editor, while a little rough around the edges, is promising. I love the way it presents aggregate functions — they automatically attach themselves to fields from a Related Records List. And the little blue field tokens are great. You can change which field your calculation uses with a single click, and fields are refreshingly easy to spot. See if you can spot them:

{{< figure src="formula1.png"
           width="361"
           height="374"
           alt="Screenshot of the \"Calculation\" window. It shows a forumal that concatenates a count of meetings with the text \"meetings. Ugh, someone complain to\ and then the Project Leader field. The field portions of the calculation show as blue rounded pills so they're easy to spot."
           caption="The calculation interface elegantly handles finding, selecting, and modifying field references." >}}


One area where Bento falls short is its built-in themes. I’m hopeful these are just placeholders in the beta, to be replaced later by nicer versions. This is especially important because you can’t escape them. All of Bento’s themes are kitschy, and you have to pick one. There’s no way to make your own, and no plain-and-simple option. (On the bright side, they’re much less awful than the choices you get in FileMaker’s New Layout Assistant. But that’s a pretty low bar. And at least in FileMaker you can opt for Standard and do your own design work.)

To be fair, Apple’s iWork and iLife apps are chock full of kitschy themes too. But they’re a much prettier, more professional brand of kitsch. To my eye, Bento’s themes look a lot like those from Claris Organizer, which was last updated in the precambrian era. In fact, they look a lot like themes you might find in Powerpoint. *Shudder*.

For instance, compare these snippets from a Bento theme and one from Keynote. In both cases, the designers are after a sort of recycled paper look. Keynote gets it right:

{{< figure src="keynote_kitsch1.png"
           width="431"
           height="182"
           alt="A textured brown paper look with the words \"Keynote Kitsch\" in a typewriter-like font. The text is nicely embossed into the \"paper\"."
           caption="Keynote themes may be kitsch but they're *pretty* kitsch." >}}


Bento…doesn't:

{{< figure src="bento_barf1.png"
           width="431"
           height="182"
           alt="A Bento theme with a similar look. But the paper texture looks less authentic and has a more anemic color. And the text is just a simple serif typeface in brown that doesn't convincingly mimic the file-folder look."
           caption="Bento themes: All the kitsch, none of the class." >}}

Somebody at FileMaker needs to buy the iLife theme designer a beer, please.

## Where Do We Go from Here?

As I said at the outset, I’m not totally sure what to make of Bento. From a FileMaker Power User’s perspective, its feature set is so limited it almost feels impossible to use. But I wonder what my wife would think about it when she needs to plan a reunion, or find a place to put recipes.

Whatever happens, though, Bento is a great chance for us FileMaker folks to think about new ways to do things. And to dream of a FileMaker with real pop-up menus.

