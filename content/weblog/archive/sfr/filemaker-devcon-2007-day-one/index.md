---
title: "FileMaker DevCon 2007 Day One"
date: 2007-08-07
archive: sfr
---

The show has officially started. I’m seeing faces I haven’t seen in ages and having a blast. Here’s a quick recap of the highlights of DevCon so far, from my perspective.

## The Keynote

The day began with the keynote presentation. Dominique started with the classic “Here’s what we’re doing” presentation. The biggest highlight was a slide showing strong growth of [TechNet](http://filemaker.com/technet/) (vs. the old Associate FSA program). This is great news because it means more people are getting more involved in the greater FileMaker community.

And by the way, we here at SFR *love* the [FBA](http://filemaker.com/fba/index.html) even if it didn’t rate its own slide in the presentation.

Andy LeCates then gave a caffein-enfused demonstration of FileMaker 9’s new features. The highlight, without a doubt, was that he visited [sixfriedrice.com](http://sixfriedrice.com/) when he demonstrated some Web Viewer features. We put him on our favorite-people list after seeing that.

Bill Heizer did a great demo of ESS. He correctly pointed out that he was showing us stuff we already know, since ESS makes working with SQL sources seem just like using ordinary FileMaker tables. It really drove home once again how cool and seamless this feature is.

Finally, Kevin Nathanson delivered a 20 minute comedy routine about DevCon and the J. W. Marriot Resorts. With a little on the PHP Site Assistant thrown in for balance. It was a total riot and had everyone laughing. My favorite line: “Time of service will vary depending on the agility of the chicken.” I guess you had to be there.

In all seriousness, though, he showed some cool stuff with the PHP Site Assistant that I hadn’t internalized. It has a ton of flexibility. It is definitely worth a look whether you’re a PHP expert or a total newbie. It rocks.

## Getting to Know FileMaker Server

Jesse and I attended Rosemary Tietge’s (pronounced tee-gee) session on FileMaker Server. Here’s the bits I found interesting:

1. Server vs. Peer to Peer sharing isn’t about how many users you have. If you consider your application critical, you need Server, even if you only have a few users. It’s about reliability, stability, and flexibility. She said, “If you’re sharing some data with a colleague, peer to peer sharing is perfect. If you rely on your database, you need a server.” (Despite the quotation marks there, I’m paraphrasing…) I couldn’t agree more.

2. She also gave some great advice about setting up your server. She stressed the importance of real server-class hardware. Again, I agree 100%. This is super important.

3. She did a great overview of different single- and multi-machine deployment strategies for web publishing with FileMaker Server. Hopefully we can do an article in the near future about best practices here, because it is a point of confusion with a lot of users.

Finally, Rosemary let us know that **most FileMaker Server install problems happen on an improperly prepared server**. She outlined the **steps you must take** to get your server ready for the upgrade:

1. Stop all FileMaker services (web publishing engines, database server, helper services…)
2. Uninstall the Web Publishing Engine.
3. Uninstall FileMaker Server.
4. Apply all patches for your OS and web server.
5. On OSX Server, disable the performance cache.
6. On Windows Server, disable directory authentication
7. Test your web server to be sure it still starts and works.
8. Install the FileMaker Server 9 components.

It was awesome to see this spelled out so clearly. Thanks, Rosemary!

## Product Showcase

It was crowded, so I didn’t see everybody I wanted. Here are the highlights:

### Web Services Plug-in from FM::Nexus

Vince Menanno from [FM::Nexus](http://fmnexus.com) demonstrated an *amazing* new plug-in. (For the sake of full disclosure, Vince is an old and dear friend. But his plug-in still rocks big time.) It’s called the Web Services plug-in, and — I kid you not — it can analyze a web service (using its `.wsdl` file) and dynamically install external functions in FileMaker for each of the services methods. In other words, it seamlessly bridges xml web services with FileMaker’s scripts and calculations with, like, zero effort.

This might not make sense to you, so I’ll explain it this way for now: Yesterday, you had to write tons of insanely complicated code and figure out all manner of oddities to use web services. Today you drop a file in a folder and you’re done. Seriously cool.

### SuperContainer

Jesse and I watched Jesse Barnum from [360Works](http://360works.com/) demonstrate their fantastic SuperContainer product. I’ve seen it before, but never taken the time to internalize how cool it is. With SuperContainer, you can solve a very common FileMaker problem. When you want to put images in a database, you have two choices:

1. Store the images in the database, which makes file sizes huge.
2. Store references to the image, then painfully deal with paths, mounted volumes, and platform issues.

SuperContainer provides a really clever solution. It is a server you can run anywhere you want (like on your FileMaker Server computer, or on a separate image server). You then point a web viewer at the server. The web viewer shows a UI to upload, delete, preview, and download images. The pictures display right in the web viewer.

It is really slick. It is fast, easy, and you get total control over where your images are stored. I love it.

So far it’s a great show. We’ll be blogging again tomorrow about day 2.

PS: If you’re here, come by the Visionary booth between 11:00 and 12:00 to ask Jesse or me any questions about FileMaker, web development, or anything else.
