---
title: "Custom Page Numbers in PDFs and Printed Reports"
date: 2007-07-18
archive: sfr
tags: 
  - Archive Post
---

[1]:../filemaker-9-tip-9-web-viewers-without-the-web

In [FileMaker 9 Tip #6][1] we explained how to use the new Append to PDF feature in FileMaker 9. With it, you can build up a PDF file over many steps in a script, to produce a much more complex and data-rich PDF than was ever possible before. One of our readers, Norman Foster, asked a very sensible question:

{{<quote cite="Norman Foster">}}
This Append looks great but can it paginate across the entire set of PDF files. I want the page numbers in footers or headers, and I want them to be sequential.
{{</quote>}}

The Append to PDF Feature doesn’t do this automatically, but with a little calculation magic, it can be done.

## The predicament

First, a little background. If you put the special symbol `##` in a text object on the layout, FileMaker will automatically replace it with the current page number when the layout is printed. It is common practice to drop this special symbol in the header or footer of a printed report so you get nice page numbering. (In fact, FileMaker’s layout creation assistants often do this for you.)

But [in a world](http://youtube.com/watch?v=ZJMGS7l0wT8) where *several* Save as PDF jobs can produce *one* PDF, this little symbol loses some of its luster. Your previously perfect page numbering now looks something like this: 1, 2, 3, 4, 1, 2, 1, 2, 3, 4, 5. Not exactly ideal.

## Changing the page number

To solve this problem, you’ll need a little *calculation* acumen. If you’re a calculation whiz, this will be easy. And if you’re not, this will be informative. Calculations are an important part of the FileMaker utility belt.

The trick lies in the `Get(PageNumber)` function. This function, when evaluated, returns the current page number if you’re in preview mode, printing, or saving a PDF. But you already know the *current* page number. The problem is you want to give it a *different* number. So first, you need a way to tell FileMaker where you want the page numbering to start. You can then create a second field that calculates the appropriate page number by adding FileMaker’s notion of the current page number to your preferred starting point.

{{<steps>}}

{{<step `Create a new number field called "Page Start". Then click Options and, in the Storage tab, turn on “Use global storage (one value for all records).”` >}}
A global field is special because it doesn’t have a distinct value in each record. Instead, you set it once and it changes in every record at once (or you might say it is separate from the records, stored in one place for the whole *table*.) Since you want this starting page number to be noticed across the entire report, it needs to be in a global field.
{{</step>}}


{{<step `Create a new calculation field called "Page Number"`>}}
When you click Create, FileMaker pops up the Specify Calculation dialog box.
{{</step>}}

{{<step "In the Specify Calculation dialog box, enter the following calculation">}}

`Page Start + Get ( PageNumber ) – 1`

This formula says this field should show the page number, plus whatever starting page you put in the global field. You subtract one because page numbers don’t start with zero. In other words, if you tell FileMaker to start on page 17, you want the *first* page to be 17, not 18.
{{</step>}}

{{</steps>}}

When you’re finished, Click OK a few times to close the open dialog boxes. You now have two new fields at your disposal: `Page Start` and `Page Number`.

The `Page Number` field will show the properly adjusted page number on any printed layout (it will just show a `?` in browse mode because the `Get(PageNumber)` function isn’t valid in browse mode.) On your layout, replace the `##` page number symbol with this new `Page Number` field.

{{<note>}}
You’ll need a `Page Number` field in *each table* that you’ll be printing from. Bummer.
{{</note>}}

## Fixing the script

If you test your reports now, you’ll notice it doesn’t quite work yet. You’re not doing anything with the `Page Start` field, so the `Page Number` field has no chance of updating itself. In your script, where you assemble the multi-part PDF, you’ll have to set the `Page Start` field appropriately before each `Save Records as PDF` script step.

But how do you know what to set it *to*? If the first PDF had seven pages, for instance, you’d want to put `8` in the `Page Start` field before you append the second part to the PDF. So you need to figure out how many pages each part has. It’s easy to do, but not as obvious as one would hope. Here’s the snippet of script code that does the job:

```
Enter Preview Mode
Go to Record/Request/Page [Last]
Set Field [Page Start, Page Start + Get ( PageNumber )]
Enter Browse Mode
```

This code finds the page count by switching to preview mode, jumping to the last page, and calling upon the now-familiar `Get(PageNumber)` function. You add the calculated page count to the `Page Start` field so the new starting page number is updated appropriately.

{{<note>}}
When you assemble your final script, don’t forget to set the `Page Start` field to `1` in the beginning. If you *do* forget, every time you run the script, you’ll push the page numbers higher and higher.
{{</note>}}

Here’s a sample script that prints three parts:

```
# Put the customer list in the report
Go to Layout [Customer List]
Set Field [Page Start, 1]
Save Records as PDF […]
#
# Update the Page Start
Enter Preview Mode
Go to Record/Request/Page [Last]
Set Field [Page Start, Page Start + Get ( PageNumber )]
#
# Now append a list of orders
Enter Browse Mode
Go to Layout [Order List]
Save Records as PDF [Append, …]
#
# Update the Page Start
Enter Preview Mode
Go to Record/Request/Page [Last]
Set Field [Page Start, Page Start + Get ( PageNumber )]
#
# And finally append a list of quotes
Enter Browse Mode
Go to Layout [Quote List]
Save Records as PDF [Append, …]
```

{{<tip>}}
If you’re a savvy scripter, you may be bugged by all the repetition in that script (I certainly am). You are, of course, free to divide this script up as you see fit. For instance, it might be nice to write a more generic *Update Page Start* script that takes care of the preview-count-pages-update-start stuff.
{{</tip>}}

## Total page count

If you want, like Norman, to show the total page count on each page, you’ll have to do a little more work. *Before* you begin saving PDFs, you need to visit each layout and count the pages, keeping track of the total as you go. You’ll need one more global field, too, to hold the total page count. Add these lines to the top of the script to get it done:

```
Go to Layout [Customer List]
Enter Preview Mode
Go to Record/Request/Page [Last]
Set Field [Total Page Count, Get ( PageNumber )]
Go to Layout [Order List]
Go to Record/Request/Page [Last]
Set Field [Total Page Count, Total Page Count + Get ( PageNumber )]
Go to Layout [Quote List]
Go to Record/Request/Page [Last]
Set Field [Total Page Count, Total Page Count + Get ( PageNumber )]
Enter Browse Mode
```

Using the techniques outlined here, you can keep your handy page numbers, and *still* use the seriously cool [append to PDF][1] feature.
