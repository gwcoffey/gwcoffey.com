---
title: "Assemble Multi-Part Reports with FileMaker Pro 9"
date: 2007-09-10
archive: advisor
---

FileMaker has some pretty powerful reporting tools. You can decorate your layouts any way you see fit, control which record show, in what order, and with any particular fields arranged to your liking. You can even summarize your data in numerous ways to produce totals, subtotals, and other aggregate analysis. But until FileMaker 9, there has been one glaring restriction: A report can only show records from one table. If you want to show new products on one page, and new customers on the next, you're out of luck. Of course you can just create two reports, and print them back to back. But that is an imperfect solution:

1. If you're in a busy office, other print jobs can get mixed up with yours, and you'll have to reassemble your multi-part report by hand.

2. Even more significant, people often don't want paper anymore. Since version 8, FileMaker has had excellent PDF support, so you can take your beautiful reports digital. View them on screen, store them on the file server, and email them to your colleagues. But if your report is in several parts, you had to create different PDFs for each one. Yuck.

## Append to PDF

FileMaker 9 has a new, almost hidden feature called "Append to PDF." It is only available in ScriptMaker, so you'll have to write a script to take advantage of it. Don't worry, though — this article will show you everything you need to know.

When your script creates a PDF, you can turn on the new "Append to existing PDF" checkbox (it shows up when you use the "Save Records as PDF" script step). With this option turned on, if you save the PDF in the same folder and with the same name as an existing PDF file on your hard drive, FileMaker doesn't replace that PDF. Instead, it adds pages from this new report to the end of it. When it's done, your existing PDF file has everything it had before, plus all the pages from your new report.

That's basically it. The concept is very simple. Now your job is to put all the pieces together.

## ACME Widgets and More

Let's do a little visualization. You are a FileMaker developer working for a company called ACME Widgets and More. ACME sells stuff, and they've asked you to give them a powerful new report. It will show important recap information about the previous week. They would like to see every new customer, along with how much they have ordered. They also want to see every product that sold in the last week, compared to the week before. Finally, they want an analysis of sales across all product categories.

You already have reports that do these things. But they want them in the inboxes of each executive every monday morning, as a nicely formatted PDF.

There's no reasonable way to produce a report like this with just one layout since each report comes from a different table. And since you already have the various reports, it would be a shame to recreate them all anyway. So instead, you'll use Append to PDF to assemble all three reports in one single PDF file. For good measure, you'll also add a nice cover sheet to the report. And then, once the big wigs see the awesome report, you'll enjoy your bonus in the Bahamas. Thank you, FileMaker.

{{< figure
    title="Figure 1"
    src="COFFG05A.png"
    width="973"
    height="578"
    alt="Three overlapping database windows, each showing a different report in Preview mode. The one at the back is titled \"Product Sales Week on Week\". The next is titled \"New Customers\". And the front-most is titled \"Sales Analysis by Category\"."
    caption="You already have the reports. You just need to put a cover sheet on them and package them all together. This could be an all-day job of printing, collating, and stapling every Monday. But with Append to PDF you can script the entire process." >}}

## Getting Started

The basis of your script is really very simple:

1. Go to the appropriate layout for the first page or pages.
2. Perform any appropriate finds, sorts, and so forth.
3. Save the report as a PDF
4. Go to the next layout
5. Rinse. Repeat.

Your first task is to output the first page or pages of the report. The finding and sorting is up to you. But once you have what you want on the screen, add the Save Records as PDF script step to your script. 

When you use this script step, you have two choices for where the PDF is saved, and what it is called. You can either hard-code a file path (by turning on the "Specify output file" checkbox) or you can leave this option off and let your user decide where to save. Many PDF generating scripts choose the latter option so the script doesn't have to know where the file should go.

But your script is going to run Save Records as PDF several times. You certainly don't want your user to have to deal with the Save As dialog box repeatedly while the report runs. So in this case, you should specify the output file location in the script.

{{< aside title="Working With File Paths" >}}
Hard-coding the path for the PDF file is often easier said than done. If you're the only user of your database, then it's a no-brainer. Just click Specify, then Add File and choose an appropriate name and location for the file. But chances are the path you choose will be unique to you: It will have your system account name in it, and may refer to folders that are only on your computer.

If you have other users, you'll need to come up with some way to make the path more generic. Luckily, if you have FileMaker Pro Advanced (the more powerful version of FileMaker), it's a breeze.

In addition to hard-coded file paths, FileMaker Pro Advanced can use a "variable" for the destination of an exported file, including a PDF. First, you put the path you want in the variable, then you refer to the variable when FileMaker asks for a path.

Using this technique, you can make the exact path change appropriately for each user. In fact, this simple calculation will give you a path that saves the file on the user's desktop:

```text
"file:" & Get(DesktopPath) & "acme_weekly_report.pdf"
```

Here's how you tie it all together:

{{< steps >}}

{{< step "Add the Set Variable script step to your script." >}}
This script step is only available in FileMaker Pro Advanced.
{{< /step >}}

{{< step "With the new step selected, click the Specify button in the bottom-right corner of the Edit Script window." >}}
FileMaker pops up the Set Variable Options dialog box. Here, you can give your variable a name and a value.
{{< /step >}}

{{< step "In the Name box, enter `$path`." >}}
By starting your variable name with a dollar sign, you're telling FileMaker you want this variable to live for the duration of your script.
{{< /step >}}

{{< step "Click the Specify button next to the Value box (Not the one by the Repetition box)." >}}
FileMaker's standard Specify Calculation dialog box appears. You can use any formula you want here, but this is a good choice:

```text
"file:" & Get(DesktopPath) & "acme_weekly_report.pdf"
```

It tells FileMaker you want a file called "acme_weekly_report.pdf" on the user's desktop.
{{< /step >}}

{{< step "Click OK, then OK again to get back to the Edit Script window." >}}
Now you are ready to use your variable.
{{< /step >}}

{{< step "Add the Save Records as PDF script step to your script, then turn on its \"Specify output file\" checkbox." >}}
The Specify Output File dialog box appears. Resist the temptation to click the Add File button. This time you won't be choosing a file that way.
{{< /step >}}

{{< step "In the big Output File Path List box, type `$path`." >}}
FileMaker will look at this variable when the script runs and use its value as the path for the PDF.
{{< /step >}}

{{< /steps >}}

You can define this variable once at the top of the script, then use it in every Save Records as PDF step so you'll be sure they all refer to exactly the same file.
{{< /aside >}}

In addition to a fixed file location, you'll want to turn on the "Perform without dialog" and "Specify options" checkboxes for the Save Records as PDF script step. These setting ensure your user won't be pestered with dialog boxes as the report is assembled. But don't turn on "Append to existing PDF" for this step. You'll use that feature on the next section.

For now, when you turn on "Specify options," just make sure "Records being browsed" is selected in the Save pop-up menu, then click  OK. We will revisit the advanced PDF options shortly.

At this point, your script might look something like Figure 2.

{{< figure
    title="Figure 2"
    src="COFFG05C.png"
    width="491"
    height="195"
    alt="A FileMaker script showing a Set Variable step, a comment, a Go To Layout step, and a Save Records as PDF step."
    caption="This script isn't all that earth shattering, but its the start of a powerful report. In this case, it goes to a special layout that shows a nice cover page, and sends that layout to a PDF on the user's desktop. This version of the script uses variables, which requires FileMaker Pro Advanced. If you only have the regular version of FileMaker Pro, just hard-code a file name and location and leave out the Set Variable step." >}}

## Appending to an Existing PDF

The next steps are almost identical to the last. Go to a layout, do your finds and sorts, and save as PDF. You'll make only one small change: When you add the Save Records as PDF step to your script, turn on its new "Append to existing PDF" checkbox (Figure 3). Since you're using the same path for the output file, FileMaker will find the PDF you created in the first part of the script and add pages to it.

{{< figure
    title="Figure 3"
    src="COFFG05D.png"
    width="389"
    height="179"
    alt="Detail of the Save Records as PDF script step options showing the \"Append to existing PDF\" checkbox."
    caption="See that little checkbox called \"Append to existing PDF?\" That's it. That's the new feature in FileMaker Pro 9. It doesn't look like much, but as you're finding out right now, it packs a lot of power." >}}

Your complex report can have as many parts as you want. Just keep on calling Save Records as PDF, and make sure "Append to existing PDF" is turned on each time. Figure 4 shows a more complete script.

{{< figure
    title="Figure 4"
    src="COFFG05E.png"
    width="489"
    height="349"
    alt="The same script as before but now it has several repeated sets of steps: a comment, a Perform Script step, and a Save Records as PDF."
    caption="This script produces a single PDF from four different layouts. All the work of changing layouts and finding records is tucked away in subscripts. You only need to concern yourself with the four separate steps that save PDFs. Notice that the first Save Records as PDF step does not have the \"Append\" option turned on. It creates the initial PDF file (replacing any older version that might be there). The others then append to that one." >}}

## Fixing Page Numbers

If you have a script like the one in Figure 4, you're off to a good start, but you're not done yet. Your complex report has one significant problem: the page numbers are out of whack. Suppose the cover page is (duh) one page. Then the next report is three pages. Then two more pages, and finally four more pages. Your overall report would then be 1 + 3 + 2 + 4 = 10 pages. But if you show page numbers on the reports themselves, they won't count properly. FileMaker numbers each page starting at one for each Save Records as PDF step, so you wind up with page numbers like this: 1, 1, 2, 3, 1, 2, 1, 2, 3, 4. Chances are that's not what you had in mind.

To combat this problem, the Save Records as PDF step lets you tell it what page number to start with. Just select one of these steps, click the Specify button next to "Specify options," then click Options. FileMaker shows you the PDF Options dialog box, which you can also see in Figure 5.

{{< figure
    title="Figure 5"
    src="COFFG05F.png"
    width="441"
    height="385"
    alt="The PDF Options dialog box, where the \"Number pages from\" input is shown."
    caption="The PDF Options dialog box lets you enter all kinds of things. Most of this stuff doesn't do much (Title, Subject, Author, and Keywrods, for instance, just show up in an obscure info window in your PDF program). But the \"Number pages from\" box holds the key to proper page numbering." >}}

You can put any number you want in the "Number pages from" box. So if you know your first report is just one page, you can tell the second PDF (the one you're appending to the first) to start numbering with page 2.

But usually, you don't know ahead of time how man pages your report will be. When that's the case, you have to get creative. The only way to know how many pages a printed (or PDFed) report will be is to switch to Preview mode, go to the last page, and see for yourself. You can do all this in your script, keeping the running page count in a variable (or a global field if you don't have FileMaker Pro Advanced). 

Remember that you need to know the page count for a section after you've added it to the PDF, so you can start the numbering on the next section properly. You need to start your page numbering at 1. So add a line like this to the top of your script:

```text
Set Variable [ $page ; 1 ]
```

You'll add to this variable every time you append more pages to the PDF so it always knows how many pages you've used so far. After your first Save Records as PDF script step, add these lines to your script:

```text
Enter Preview Mode []
Go to Record/Request/Page [ Last ]
Set Variable [ $page ; $page + Get(PageNumber) ]
Enter Browse Mode []
```

These four lines of code grab the last page number from the report you just printed and add it to the `$page` variable.

Finally, select the next Save Records as PDF script step and click the Specify box next to "Specify options". In the PDF Options dialog box (Figure 5), put `$page` in the "Number pages from" box.

Repeat these for each additional section, so that every time you append, your starting page number is based on the variable, and after every section, you update the `$page` variable appropriately.

With these steps in place, your complex report now has perfect page numbers.

## The Security Gotcha

As you work with PDFs, you may be tempted by the Security tab in the PDF Options dialog box. It offers up all kinds of password protection powers for your PDF. You can, for instance, require a password to print the PDF, or copy text from it. You can also restrict "editing," which may sound a little intriguing since you can't normally edit a PDF file anyway. With the right software, though, you can edit PDF files. In fact, when FileMaker appends pages to an existing PDF file, it is editing that file. And that's the rub: FileMaker can't append pages to a PDF that doesn't allow editing.

If you turn on security restrictions for your PDF, make sure you choose either "Inserting, deleting, and rotating pages" or "Any except extracting pages" from the Editing pop-up menu for your first Save Records as PDF script step. Otherwise, FileMaker won't be able to append pages later (and you'll get an appropriate "Access denied" error message if you try).

You might be tempted to create the PDF unrestricted, then turn on the security settings as you append the last pages to the PDF. Alas, this won't work. The security settings are ignored when you're appending to a PDF that already exists. You simply can't restrict editing this way if you want to use the Append to PDF feature.

## Finishing Touches

Your original goal was to email a nicely formatted report to the honchos every Monday. FileMaker has had the ability to email a PDF file since version 8. And you can use this feature here too. The trick is to select your options for the last Save Records as PDF step. If you turn on "Create email with file as attachment" (or "Automatically open file") before you're adding the last section, you'll end up sending an incomplete report.

Using the new Append to PDF feature, you can now create stand-alone reports that are much more complex than was ever possible before. Using the techniques here, you can add as many sections as you want to the PDF. And with all the data bundled together in one file, it's a breeze to back it up, store it for later, print it out, or send it to someone else.