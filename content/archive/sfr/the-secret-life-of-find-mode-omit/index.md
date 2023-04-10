---
title: "The Secret Life of Find Mode: Omit"
date: 2007-09-18
archive: sfr
tags: 
  - Archive Post
---

Today’s Find mode article is short-and-sweet. If you ever feel it would be easier to tell FileMaker what you *don’t* want it to find, the Omit checkbox is your friend. In fact, you can use this esoteric Find mode widget to create incredibly complex queries that target exactly what you want.

{{< aside >}}
This article is part of our series on Find mode. [Click here](../the-secret-life-of-find-mode-requests/) to visit the *first* in the series, which links to all the others.
{{< /aside >}}

Normally, Find mode is all about telling FileMaker what you want: Everyone named Bob, or every shipment to Wisconsin. But sometimes there’s no concise way to articulate what you want. Imagine, for example, you need to send a letter to the parent of each student who *doesn’t* have an extracurricular activity. You know how to find the ones who *do* (just check the “Extracurricular Activities” check box in Find mode). But how do you tell FileMaker to find the folks who *don’t* have this box checked?

The answer, my friend, is *Omit*. First, describe what you’re *not* looking for. Switch to Find mode and check that Extracurricular box, for instance. But before you actually perform the find (by pressing Enter or clicking the Find button), turn on the Omit checkbox in the status area. You can see it here:

{{< figure src="omit_checkbox.png"
           with="337"
           height="94"
           alt="Detail of FileMaker's status area showing the Omit checkbox and the Symbols popup."
           caption="Omit. It's been hiding there all along." >}}

Now, when you perform the find, FileMaker will find *everything but* what matches your find request. Put another way, it *omits* every matching record from the found set.

Here’s another example: Suppose you want to find everybody who is *not in Arizona or California*. You know how to create [multiple requests](../the-secret-life-of-find-mode-requests/), so you *could* list out all 48 other states, each in its own find request. But that sure sounds like a lot of work.

Instead, do a find with just two find requests: Put `Arizona` in the State field in one request, and `California` in the other. Also, make sure you turn on the Omit checkbox for *each request*. (Go to the first request, turn on the Omit checkbox, then navigate to the second request and turn it on again.) Now FileMaker will go through the records in the database, and omit any in California and Arizona. Whatever’s left over will be your new found set.

## Mixing Request Types

It may not be obvious at first, but you can mix requests with and without Omit in the same find. To understand how this works, think about it this way:

1. FileMaker starts with every record in the found set.
2. If your *first* request has Omit turned on, it throws out every matching record. If the request does not Omit, FileMaker instead finds each matching record.
3. It then moves on to the *next* find request. If this one should Omit, it looks in the records it found in step 2, and tosses out any that match. Otherwise, it looks through *all* the records in the database and adds any new ones it finds to the found set.

Step 3 repeats for each additional request. As you have probably guessed, order is important when you start adding omit requests. If an omit request tosses a record out of the found set, it might be added back in by another request later in the list. Likewise, a record might be found by one request, only to be tossed out by an omit request later. In an argument about a particular record, the *last* request always wins.

So for example, you might want to find everybody who has ordered from you in the last three weeks who does not live in Alaska or Hawaii. You can do this with three requests:

1. Put an appropriate date range (like `6/1/2007…`) in the related Order Date field.
2. Create a new request, turn on Omit, and put `Alaska` in the State field.
3. Create a third request, turn on Omit again, and put `Hawaii` in the State field.

When you perform this find, FileMaker first finds everybody who has ordered recently. From that list, it then omits anyone in Alaska. Finally, it kicks out the folks from Hawaii. You’re left with exactly the records you wanted.

Mastering Omit can make the seemingly impossible suddenly easy. 