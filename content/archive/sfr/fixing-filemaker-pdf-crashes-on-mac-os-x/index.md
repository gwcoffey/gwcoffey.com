---
title: "Fixing FileMaker PDF Crashes on Mac OS X"
date: 2008-05-07
archive: sfr
tags: 
  - Archive Post
---

FileMaker’s `Save Records as PDF` script step is, like, totally awesome. But there’s one teeny tiny issue: it sure likes to crash. We use this feature *a lot* with our customers, and under the right set of circumstances, we can see crashing on half or more of the machines our scripts run on. Luckily, it turns out this problem is easy to fix. It is such a frequent problem that I thought I’d save the googlers of the world some time and write up the solution here.

{{< aside >}}
Update {{< time "2009-03-04" "3-April-2009" >}}: I added a note below about solving the same problem on Microsoft Windows.
{{< /aside >}}

## The Problem

First, let me clarify the symptoms and probable causes. Normally when your scripts use the `Save Records as PDF` script step, FileMaker thinks for a few seconds (or longer depending on your layout) and then produces a beautiful PDF document. Chances are this works perfectly every single time on your computer while you’re developing the script. But on some computers, when your script runs, FileMaker thinks for a few seconds, then “unexpectedly quits.” (Note: “Unexpectedly quit” is Mac OS X’s cute way of saying, “It did something naughty and I killed it dead.”) This almost always happens first right after you roll out the amazing new feature, leaving your users (or customers) a little peeved.

In my experience, this problem is limited to FileMaker Pro and Advanced on Mac OS X, and it seems to only happen on machines with Adobe Acrobat or Adobe Acrobat Reader installed (although it doesn’t happen on *every* machine with this configuration). Once it starts happening, it is typically consistent. Every time you try to save a PDF on that machine (even manually from the File menu) it will crash.

## The Fix

There are two potential causes, and two simple fixes. First, if you’re using FileMaker 9 prior to version 9.0v3, then all bets are off. Upgrade to the latest FileMaker maintenance release immediately. You can find out what version you’re running by choosing the FileMaker Pro → About FileMaker Pro menu command. And you can download the 9.0v3 updater free of charge from the FileMaker web site right [here](http://filemaker.com/support/downloads/index.html).

If you have upgraded to 9.0v3 already, then you have the *other* problem. A few hours of frenzied Six Fried Rice troubleshooting discovered that this file is the culprit:

```
[Your Home Folder]/Library/Application Support/Adobe/TypeSpt/AdobeFnt08.lst
```

This file gets twiddled in some invisible way, and FileMaker is no longer a happy camper. Just delete this file, and try again.

{{< note >}}
Thanks to the mad debugging skillzzz of one of our readers, [Hans](http://www.elmersystems.dk/) we now know how to fix the same problem on Windows. Look for this file:

` C:\Users\[Your Name]\AppData\Local\Adobe\TypeSpt\AdobeFnt11.lst`

In the `Adobe` folder, you’ll find a Fonts folder and a `TypeSpt` folder. They both have an `AdobeFnt11.lst` file but only the one in `TypeSpt` needs to be deleted. Thanks, Hans!
{{< /note >}}

I have encountered the PDF crashing problem about a dozen times “in the wild” and in 100% of the cases, upgrading to 9.0v3 and deleting this file has fixed the problem perfectly. Here’s hoping it helps you too.
