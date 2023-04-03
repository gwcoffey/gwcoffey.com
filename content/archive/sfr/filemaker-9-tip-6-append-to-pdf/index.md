---
title: "FileMaker 9 Tip #6: Append to PDF"
date: 2007-07-10
archive: sfr
tags: 
  - Archive Post
---

How many times have you wanted to produce a report that showed *two different* lists of records? Or a couple pages of summary information, then a list of raw data? Or a title page, then a few pages of charts, then one list of data, then a few more charts, then a second list? In FileMaker, reports are tied to layouts, and a layout is tied to just one table. Of course you can just print several reports one after the other, but that doesn’t help if you want to *email* the report as a PDF, or store it on the file server.

Luckily, you can do all this (and more) with the new Append to PDF feature in FileMaker 9. Once you see it in action, you’ll agree it is very useful.

{{< note >}}
An expanded version of this tip will appear in the next issue of *Advisor Basics of FileMaker Pro*, a great magazine for folks learning FileMaker. The Advisor Basics version goes in to more detail, and covers page numbering and security considerations. You can subscribe [here](http://advisorstore.com/as-ztfmfu.html). {{< ed inline="FileMaker Advisor has ceased publishing since this was posted so this link is no longer valid." >}}
{{< /note >}}

Here’s the deal: You operate a web retailer. As business grows, it becomes more and more important to get the right data in the hands of your employees, so they can make good decisions. You decide you want everybody to have a special report in their in box every monday morning. This report should show the week’s totals on the first page, then summary information about how many new customers ordered from you, broken down by region, a list of aggregate sales information for top selling products, and a list of every order that was returned.

Before FileMaker 9, this would have been a very difficult report to produce. Each individual part isn’t too hard to do: some web viewers, a sub-summary report or two, and a list report. But putting all these divergent parts together in on report is essentially impossible (at least without heroic hacks and a handful of headaches).

But with FileMaker Pro 9’s new Append to PDF feature, this is an absolute breeze. Here’s how.

## Build the Individual Parts

First, build a separate layout for each individual part. In this example, you might have one layout with web viewers displaying each chart. Another layout, based on the Customers table, would have a sub-summary parts for City and State. The aggregate product sales data would come from the Order Line Item table, again with sub-summary parts. Finally, you would build a layout showing a list of orders.

## Script the PDF

Once the layouts are in place, you can write a script that produces the final report. It might start off like this:

```
Go to Layout [Weekly Summary]
Set Field [Week Start, Get(CurrentDate)]
Save Records as PDF [Restore; No Dialog; “Weekly Report.pdf”]
```

This is *old school FileMaker 8.5* stuff here. You’re just saving the record (ie: layout) as a PDF file called `Weekly Report.pdf`.

Next, you want to export the new customer information. You add these steps to the script:

```
Go to Layout [New Customer Info]
**# find the new customers for this week**
Enter Find Mode []
Set Field [Created, “GetAsText(Get(CurrentDate) – 7) & … & GetAsText(Get(CurrentDate) – 1)”]
Perform Find []
**# and sort them for the sub-summaries
Sort [Restore; No Dialog]
```

At this point in the script, you’re ready to output the next section of the report. Just add the `Save Records as PDF` script step to your script, like you did before. If you look closely at the bottom of the Edit Script window, though, you’ll notice a new option. You can see it here:

{{< figure src="append-to-pdf.png" 
           width="573"
           height="221"
           alt="Screenshot of a portion of the Save Records as PDF window. There is an \"Append to existing PDF\" checkbox."
           caption="FileMaker 9 has added an \"Append to existing PDF\" option.">}}

To get this technique to work, you need to do two things:

1. Turn on the new “Append to existing PDF” check box
2. Click Specify next to “Specify an output file” and specify a PDF file that *already exists*.

If you do both these things, instead of *replacing* the PDF file when this step runs, FileMaker will add pages to the end of the PDF that is already there.

To complete the technique, add more steps to the script to visit additional layouts, perform the requisite finds and sorts, and append to the PDF.

## Emailing the Result

When you use this technique to build up a PDF, you perform the `Save Records as PDF` script step several times. If you turn on FileMaker’s “Create email with file as attachment” option (in the Specify Output File dialog box) every time, you’ll end up with several emails. Instead, just turn this option on in the *last* `Save Records as PDF`. Each step will add more to the PDF on your hard drive, but only the last one will email it to the users. Since the PDF was appended, the email will include the results of the entire script.

Using this technique, and FileMaker 9’s new Append to PDF feature, you can build electronic reports that are much more complex than was ever before possible. Thank you FileMaker :smile:
