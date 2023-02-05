---
title: "The Secret Life of Find Mode: Requests"
date: 2007-07-23
archive: sfr
---

FileMaker’s *find mode* is a great feature. You can tell because, like all great technologies, it is easy to understand the first time you try it, and yet has a depth of capability that can be unlocked if you know a little more. Unfortunately, many FileMaker developers (and users) never venture beyond the simplest of finds. This series of articles aims to change that.

## The Basics

Everybody knows that to do a find, you first switch to find mode (View → Find Mode). Then you type in some stuff and click Find. When you’re in find mode, all your records (along with the field data in them) disappear, but the layout otherwise stays the same. It *acts* a lot like browse mode: you can type in edit fields, choose from pop-up menus, and click off checkboxes and radio buttons. You can copy and paste. You can even use the Edit → Find/Replace command, on the off chance you want to find something *in your find criteria*.

When you fill out some fields and click Find, FileMaker goes to work, hunting down records that have data similar to the stuff you filled in. If you put “Bill” in the First Name field, FileMaker finds every customer whose name is Bill. If you know this much (and who doesn’t?) you may be able to live a long and happy FileMaker life and never know what you’re missing.

But for some of you, the time will come when you bump in to the limits of this simplistic view. Each of these presents a problem when that’s all you know about find mode:

* I have 632,788 customer records. I want to find Jo. not Joe. Not Joseph. Not Josephine. Just “Jo.”
* I need to find all the shirts that are available in red *or* blue.
* I’m looking for every order that came in on a Tuesday.
* Show me all the students that *don’t* live in town.

But each of these is actually *easy* to get if you learn the secrets of find mode. The first secret we’re going to cover is *Find Requests*. These are the bread and butter of find mode, but they’re often misunderstood. Over the coming weeks, we’ll add more to this series. In all we’ll cover:

* Find requests (this one!)
* [Find symbols](../the-secret-life-of-find-mode-symbols/)
* [Tricks with dates and times](../the-secret-life-of-find-mode-dates-times/)
* [Finds of omission](../the-secret-life-of-find-mode-omit/)

## Find Requests

As we mentioned above, find mode acts *a lot* like browse mode. This affinity goes deeper than most people realize. Did you know you can create new “records” in find mode? Of course they aren’t really records. After all, the very word *record* implies something is being recorded — put away for future reference. But the things you create in find mode are ephemeral: as soon as you switch back to browse mode, they’re gone.

{{< note >}}
Truthfully, the aren’t really *gone* just yet. You can choose Records → Modify Last Find to get them back. But the *next time* you perform a find, your previous set of find requests is lost permanently.
{{< /note >}}

In the vocabulary of FileMaker, the things you make in find mode are called *requests*. It makes sense really. You are *requesting* records. When in find mode, you can make as many requests as you want, and FileMaker will dutifully carry them all out, serving up the results when it is done. You make a new request in much the same way you make a new record:

* Choose Requests → New Request
* or Press {{< kbd char="n" with="Control" >}} (on Windows) or {{< kbd char="n" with="Command" >}} (on Mac OS X)

When FileMaker actually processes your find requests, it finds records that match *any one of them*. Consider these examples:

* If you put “Bill” in the first name field, and “California” in the state field *in the same request*, FileMaker will only find customers named Bill who live in California.

* On the other hand, if you create two requests (one with “Bill” and the other with “California”) you’ll probably get more records. FileMaker finds *everyone* named Bill (no matter what state they live in). It also finds *everyone* from California, no matter the name.

In nerdier terms, multiple requests create an *or search*: Records match either the first request *or* the second. Multiple criteria in one request makes an *and search* because records have to match the first field *and* the second.

This short (and silent) video illustrates how multiple find requests work:

{{< mov src="video_of_find_requests.mov" caption="If you put multiple criteria in one request, records must match all of them. If you put them in separate requests, records have to match any of them." >}}

Tune in next time to learn more about the secret life of find mode.

