---
title: "Importing Non-Standard Text Files"
date: 2007-07-11
archive: sfr
tags: 
  - Archive Post
---

This question came up on [Macintouch](http://www.macintouch.com/readerreports/filemaker9/index.html):

{{< quote cite="Macintouch Reader" >}}
Can you import an ASCII (.txt) file into Filemaker Pro 9 that uses a dollar sign ($) as a field delimiter within a record? The file is too big to bring into Excel first (on the way to filemaker).
{{< /quote >}}

{{< ed "Alas the Macintouch link seems to be dead and it appears the site was blocking [archive.org](https://archive.org). I've left the original link in place. (Aside: This is a good time to mention that I miss Roc Ford.)" >}}


Unfortunately, FileMaker 9 does not change the supported import formats, and $ delimited is *not* on the list. On the bright side, there are several ways to deal with this sort of thing in FileMaker.

## Import and Parse

You can go ahead and import the file. FileMaker will probably see each line in the file as one field value. Create a temporary text field in your table, then import the file, mapping its one line to the new field. Using a looping script, go through each record, parse the incoming text, and move it to your real fields:

```
Go to Record/Request/Page [First]
Loop
  Set Field [My Field, GetValue(Substitute(TEMP, “$”, “¶”), 3)]
  # add as many Set Field steps as you need
  Go to Record/Request/Page [Next, Exit after Last]
End Loop
```

In the above code snippet, we use this calculation to parse the incoming text:

```
GetValue(Substitute(TEMP, “$”, “¶”), 3)
```

It grabs the *third* value from the $-delimited file. Here’s how it works:

First, it turns every `$` into a newline. So instead of this:

```
Sophia$Coffey$12/29/2001
```

You now have this:

```
Sophia
Coffey
12/29/2001
```
Then, we call upon the `GetValue` function to pull one line out of this multi-line bit of text.

## Pre-clean the Data

If you prefer, you can clean the file up before import. Many text editors have powerful search and replace functions, and can handle files that bring Excel to its knees.

On Mac OS X, if you’re moderately comfortable on the command line, you can do this:

```
tr $ ‘\t’ < yourfile.txt > thecleanfile.txt
```

This command will [tr]anslate every `$` into a tab, and put the new cleaned-up data in a file called `thecleanfile.txt`. You can then import the file as a tab-delimited file.

{{< warning >}}
If the original file contains tabs, they will get in the way, so you need to convert them to something else (like spaces) first.
{{< /warning >}}

Using these techniques, you can bring many atypical data formats into FileMaker, where they’re much easier to work with.