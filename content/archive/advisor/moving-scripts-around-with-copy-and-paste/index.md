---
title: "Moving Script Around with Copy and Paste"
date: 2008-04-21
archive: advisor
---

Most FileMaker Pro developers know the real power of FileMaker can be found in the Manage Scripts window. In all but the simplest cases, a database without scripts is like a four year old's take on the Mona Lisa: "What does it do, daddy?" If you want your database to actually do something, FileMaker's scripting tools are your best friends.

Of course if you're reading this, chances are good you already know that. You've probably been pointing and clicking your way to database automation for a while. Inevitably, though, as your database powers grow, you spend more and more time finding, creating, editing, and managing scripts. Eventually, it becomes really important to take advantage of some of the less obvious powers of FileMaker's script editor so you can save some serious time.

## The Basics

The primary tool in the power-scripter's kit is a pretty simple concept: Copy and Paste. The process is easy as pie: Select something, choose Edit → Copy, go somewhere else, and finally choose Edit → Paste. You can apply this process in two ways:

First, you can copy entire scripts in the Manage Scripts window (Figure 1). Then you can go to another database, open its Manage Scripts window, and paste. Every script you copied from the first database is added to the second, complete with the same names, groups, "Show in Scripts menu" setting, and, of course, all the individual script steps. There's nothing stopping you from pasting the scripts into the same database you copied them from. It will work as expected: You'll end up with a duplicate of each copied script. 

{{< note >}}
The pasted script may differ from the original in one small way: If you're not logged in to the destination database with a [Full Access] account, and the original script has its "Run script with full access privileges" box checked, this box will not be checked in the copy. This is a security feature, and keeps your database safe. It's also a very rare problem.
{{< /note >}}

{{< figure
    title="Figure 1"
    src="COFFG00A.png"
    with="445"
    height="432"
    alt="FileMaker's Manage Scripts window with a list of scripts."
    caption="The Manage Scripts window (File → Manage → Scripts) shows a list of all the scripts in your database. Don't confuse this with the Edit Script window, which shows all the lines in one particular script." >}}

Second, if you open up a particular script, you can also copy one or more individual steps. These can then be pasted into the same script (in a different place), into another script in the same database, or even into a script in another database.

{{< figure
    title="Figure 2"
    src="COFFG00B.png"
    with="770"
    height="488"
    alt="A script window with several steps selected."
    caption="You can copy and paste script steps in the Edit Scripts window. This is the window you see when you open up an individual script." >}}

In both cases, you can copy as many items as you want in a single shot. See Unnatural Selection for a little guidance.

{{< aside title="Unnatural Selection" >}}
FileMaker is chock full of dialog boxes with long lists of items. With a little poking, you can find scrolling lists of tables, fields, value lists, layouts, scripts, script steps, external data sources, and more. Sometimes you need to select items in these lists so you can, say, copy them to your clipboard.

You might think this is a one-at-a-time proposition. But FileMaker (like most applications) recognizes an assortment of secret handshakes. With the right gyrations, you can get FileMaker to do your bidding.

The most common is the shift-click. Say you have 11 scripts in a row that all work together. You want to move them all to another database. Start by selecting the first script in the list. Then, with the {{< kbd with="Shift">}} key held down, click on the last script in the list. When you do, FileMaker highlights all 11 of them. More generally, when you click with the Shift key down, FileMaker will select the item you click on, plus everything between it and whatever is already selected. If you mess up, just start over by clicking one script without the Shift key.

Sometimes the scripts you want aren't conveniently assembled in one contiguous list. If you're a Mac OS X user, you can use the {{< kbd with="Command">}} key (sometimes called the {{< kbd char="Command" >}} key) to work around this problem. Microsoft Windows aficionados use the {{< kbd with="Control">}} key instead. In either case, with the appropriate key held down, you can click on several scripts one at a time. When you're done, all the scripts will be selected. If you click a script that is already selected, it will be deselected, so its a breeze to fix up mistakes.

Finally, if you're a keyboard junkie, you can combine the {{< kbd with="Shift" >}} key with your arrow keys to speed your way through multiple selections. First select the first script you want (with the mouse or arrow keys). Then hold down {{< kbd with="Shift" >}} and press the down-arrow key. Each time you press the arrow key, FileMaker will add one more script to the selection. There's no way to select or deselect individual scripts with the keyboard though.

Of course you can combine these techniques if it makes your life easier. For instance, use the Shift-click method to select 20 scripts in a row, then deselect a couple in the middle. This is loads faster than clicking 18 tiny lines in turn.

All the techniques describe here work equally well in all of FileMaker's list-based windows. So you can select multiple individual script steps when editing a script, for instance.
{{< /aside >}}

## The Trouble with Tribbles

Like the fuzzy Tribbles of Star Trek fame, rapidly duplicating scripts aren't nearly so cuddly as they might seem at first. A FileMaker script is a lot more complex than a word or two in your word processor, where Copy and Paste reign supreme.

Consider this: You have a script in your Contact Manager database that helps your users find records. After performing a find, it goes to either a list layout (if multiple records were found) or a form layout (for just one found record). You decide this same logic would make sense in your Invoicing database.

A few clicks and a copy/paste later, your Find script is now in the Invoicing system. When you run it, you discover the layout switching behavior doesn't work as expected. If this is an exact copy of the original script, how could it stop working? Here's how this script might look:

```text
Enter Find Mode [Pause]
Perform Find []
If [ Get(FoundCount) = 1]
  Go to Layout [ Contact Form ]
Else
  Go to Layout [ Contact List ]
End
```

When you paste this script into another database, FileMaker gets hung up on the two Go to Layout steps. After all, there are no layouts called "Contact Form" and "Contact List" in your Invoicing database. When this happens, FileMaker does the only thing it can do: It moves on. If you open up the script in the Invoicing file it will look a lot like the one in Figure 3.

{{< figure
    title="Figure 3"
    src="COFFG00D.png"
    with="770"
    height="488"
    alt="A script window with several steps, including two instances of the \"Go to Layout\" step. In each case, the step says \"Go to Layout <unknown>\"."
    caption="Sometimes when you paste a script, FileMaker can't figure how to hook things up. The two Go to Layout steps in this script are broken because they referred to layouts that don't exist in the database into which they were pasted." >}}

This sort of problem is exceptionally common. Most scripts, when moved to a different database, simply can't be used without some editing. In this case, spotting the problem is relatively easy, and the fix is too: Just select each Go to Layout step and choose an appropriate target layout.

But imagine the problem were buried deep in a complex calculation that refers to a field that doesn't exist. Or suppose you have a 200 line script. It is all too easy to completely miss the problem spots until your user runs the script and it accidentally launches a Space Shuttle full of teenagers.

## Check the Log

To avoid these sorts of tax-dollar-wasting joy rides, you need to develop a habit right away: Whenever you paste a script or script step, ask FileMaker if anything went wrong. It knows, and it is willing to tell if you know where to look. But the onus is on you to go looking. (Some would argue that FileMaker ought to pop up a message letting you know things went wrong and where to find details. Actually, everyone would argue that. But alas, it does not.)

It turns out, every time you paste a script, FileMaker records comprehensive information about the process in a log file in your database folder. This file is always called "Import.log" and it is always created in the same folder as the database that receives the pasted scripts. (If you paste more than once, FileMaker just keeps adding more info to the end of this file, so it serves as a running history of all your paste operations.)

After pasting the Find script above, your Import.log would look a lot like the one in Figure 4.

{{< figure
    title="Figure 4"
    src="COFFG00E.png"
    with="600"
    height="279"
    alt="A window showing the contents of a log text file. Each line has a date and time, and message. On the second line the message ends with \"Layout 'Contact Form' missing.\""
    caption="FileMaker creates an Import.log file when you paste scripts or script steps. It can be a little obtuse, but this file tells you everything you need to fix before your script is up to snuff. Treat this file as your checklist for pasted script fix-ups." >}}

Each line in the file gives you one piece of important information. It starts with the date and time the action took place. This helps you weed out the old stuff and find information related to the paste you're interested in. Next, you see where the action took place, followed by an error number (or zero if that line doesn't represent a problem). Finally, you get a terse explanation of the problem.

For instance, consider this line:

```text
8/11/2007 2:42:04 PM, Invoicing.fp7, 0, Import of scripts from clipboard started
```

That line tells you that at 2:42 PM on August 11th, you pasted a script into the Invoicing.fp7 file. Every paste operation starts with a line just like this, so you can be sure you've found where the interesting information begins.

Next, you see these two lines:

```text
8/11/2007 2:42:04 PM, My Find Script::4::Go to Layout, 105, Layout “Contact Form” missing.
8/11/2007 2:42:04 PM, My Find Script::6::Go to Layout, 105, Layout “Contact List” missing.
```

Again, you see the relevant date and time. This put-the-date-on-every-line is a bit redundant, but it is the way of the log file, so you just have to let your eyes roll past it. This time, instead of telling you the database name, FileMaker gets more specific. It tells you exactly which script, and line number had the problem (My Find Script, lines 4 and 5 in this case). The mysterious 105 on each line is the FileMaker error code. 105 means "Layout Missing" (see for yourself by searching FileMaker's on line help for "FileMaker Pro Error Codes"). Finally, FileMaker gives you a plain-english explanation of the problem. It tells you what is wrong (a missing layout) and which item was missing.

You may have several more lines like this, depending on how many problems FileMaker had with the script. But eventually, you'll see a line like this:

```text
8/11/2007 2:42:04 PM, My Find Script, 0, script steps imported : 7
```

This indicates you've reached the end of the problems for the "My Find Script" script. If you pasted more than one script. FileMaker will then list out problems for any additional scripts. Finally, the entire paste operation is wrapped up with these two lines:

```text
8/11/2007 2:42:04 PM, Invoicing.fp7, 0, scripts imported : 1
8/11/2007 2:42:04 PM, Invoicing.fp7, 0, Import completed
```

They tell you how many scripts were imported in all, and that you've reached the end of the info about this particular process.

Whenever you paste a script or script steps, it is imperative that you check the Import.log file and check for problems. You can print the log and use it as a checklist: each time you fix a problem, mark it off the list so you're sure you've fixed everything.

## Tips

Aside from fixing problems, Copy and Paste couldn't be simpler. But there are a few tricks that can make the process as smooth and painless as possible.

The first tip is a simple one: There's no reason you have to use copy and paste to move script steps from one script to another. It is sometimes useful to copy and paste steps inside a single script. This is especially true when you have a handful of steps you want to move to a different place in the script. While FileMaker only lets you drag one step at a time (making the move tedious) you can copy them all, delete them, then paste them in the new location.

When you paste a step or a group of steps, they are added directly after whichever step you have selected. So if you're using copy and paste to move steps, just be sure you select the step right before the new home before you paste.

Next up is a tip to save a lot of extra work and potential problems. Whenever you want to copy several connected scripts, you should do them all at once. It might seem like these two processes are identical, but they're not:

1. Select all the scripts, copy them, and then paste them in the new database.
2. Select one script, copy it, then paste. Repeat for each script.

Aside from being quicker, method one is more trouble-free. When one script runs another one (via the Perform Script step), FileMaker will automatically keep this connection in tact if you copy and paste both scripts together. If you were to copy them one at a time, you might wind up with a broken Perform Script step to fix. It is not uncommon to have several interconnected scripts you want to move en masse. If you do them all at once, you'll have far fewer problems to fix.

If you have a particularly complex script to copy, and you know you're going to have lots of cleanup to do, you can also help FileMaker keep things connected for you. Here's the trick:

Working in a backup copy of the file you're copying scripts from, rename the critical elements in the database to match the names in the destination database. For instance, if your script references a layout called Customer Details several times, and the equivalent layout in the new file is called Invoice Details, then you can rename the Customer Details layout before you copy. That way, when you paste, FileMaker will see the names it expects, and you won't have to fix all the problems manually.

This rename trick works for layouts, table occurrences, scripts, and fields. So in some cases you can save loads of time by renaming things before you copy. (Imagine, for instance, a script that has dozens of If/Else If steps and Set Field steps targeting a particular field. You can either rename that field once, or fix dozens of problems after you paste.)

Remember to do the renaming in a backup copy of the original database though. It can be easy to forget to clean things up when you're done, and it is never a good idea to make unnecessary changes to a real system.

## Importing Scripts

FileMaker has one more script-moving feature, but really it's just a rehash of the Copy/Paste technique you now know all about. If you prefer, instead of copying a script from one file, and pasting it in another, you can import the script or scripts directly. Here's how:

1. In the database where you want the scripts added, choose File → Manage Scripts.
2. In the Manage Scripts window, click the Import button (it looks like a blue arrow pointing to a document icon).
3. Choose the file you want to import scripts from.
4. In the window that appears, turn on the checkbox by each script you want to import.

Moving scripts this way is identical in every way to copying the scripts and pasting them. The scripts are copied over, the Import.log file is updated, and any problems have to be fixed manually. This feature is really just a hold-out from the days when FileMaker didn't support copy and paste of scripts, but if you find it more intuitive, feel free to use it.

Also note that although you can import entire scripts this way, there is no way to import parts of scripts, or groups of script steps. If it's just a chunk of code you're after, you need to use Copy and Paste.

Scripting is FileMaker's most powerful — and complex — feature. When you write a lot of scripts, you can be in for a lot of clicking and a lot of work. Using Copy and Paste (or Import), you can reuse the code you've already written in other places, saving countless hours and minimizing mistakes. 