---
title: "Put Multiple Windows to Work"
date: 2007-11-20
archive: advisor
---

These days, most FileMaker Pro databases are just one file. When you open this file, you see one window on your screen, full of all the data and interface you (or your colleagues) put there. And often, this one window is enough. After all, you can freely switch layouts, perform finds, and (with FileMaker 9 or later) resize the window to get a bigger view. But the truth is, FileMaker can do a whole lot more. You can have as many windows as you want, each showing a different layout, found set, sort order, and so forth — all from the same database file.

Nobody would blame you if you never realized this. After all, the Window menu in most programs is chock full of pretty useless stuff. (Tile Horizontally? Who uses that?) But FileMaker's Window menu is a little more oomphy. You can see for yourself in Figure 1.

{{< figure
    title="Figure 1"
    src="COFFG06A.png"
    width="318"
    height="253"
    alt="Detail of the Window menu in FileMaker Pro. Items are, from top to bottom, \"New Window\", \"Show Window\" (with sub-menu not shown), \"Hide Window\", \"Minimize Window\", \"Tile Horizontally\", \"Tile Vertically\", \"Cascade Windows\", \"Bring All to Front\", and \"My Killer Database\"."
    caption="In addition to the obligatory fluff, FileMaker's Window menu has a few unexpected goodies. You can hide any window to temporarily get it out of your way, and show a window that's been hidden. And you can make a new window any time you want." >}}

## Hiding Windows

If you work with more than one database, or your database system has more than one file, then it can sometimes seem like your screen is filling up with windows. Of course your operating system has some tools to help deal with this. On Windows, you can minimize a database window, and it will turn in to a little brick in the bottom-left corner of FileMaker's application window, mostly out of the way. On Mac OS X, you can minimize the window to the dock. But we all know both of these methods are a little messy. If you're a heavy Mac user, your Dock is probably already strained to the breaking point. And those little bricks in Windows are ugly and hard to find when you need them.

Instead, try this: With a database window open in FileMaker, choose Window → Hide Window. Poof. The window is gone. But it isn't actually closed. Instead, FileMaker has simply wiped (almost) every trace of it from your screen, so it is completely out of site. If you want it back again, just choose Window → Show Window and select the name of the window in question. It will pop back on the scene, right were it was when you hid it.

This might seem a little pointless at first. After all, you could just close the window instead. But a hidden window is more convenient for a few reasons:

1. It's easier to call back up again. No trips to the Open File or Open Remote dialog boxes necessary.
2. When you hide a window, FileMaker remembers where you were. Show it again and you'll be on the same layout and record you were before. And you'll have the same found set, sort order, status area setting, zoom level, and so forth.
3. If you database is hosted remotely (on a server that isn't in your home or office) it can sometimes be slow to open. But a hidden window reappears in a snap.

{{< aside title="Two Types of Hidden Windows" >}}
Sometimes when you peek in the Window → Show Window menu, you see something surprising: Some of your window names are in parentheses, like this: (My Database). These mysterious parentheses are a source of unending confusion for people who can't stop wondering about such things. If you're one of those people, here's the full scoop.

Although you may not have done it yet, FileMaker database systems can actually be made up of multiple .fp7 files, all working together to get the job done. A table in one file can relate to a table in another, for instance. You can even write scripts in one file that run other scripts in other files. In fact, this multi-file power is what makes FileMaker capable of dealing with complex, multi-faceted problem and huge amounts of data. But that's a story for another day. The point is, one FileMaker file may "depend" on another one because it uses stuff from that file periodically.

Of course if you have this sort of setup, you don't have to manually open every file each time you want to do some work. Instead, you can open one file (whichever one you need). If it, in turn, needs something from another file, FileMaker will open that file automatically, on demand. So that you don't get vertigo, it doesn't show this second file on the screen. After all, you didn't ask to see the second file — your database did, and it doesn't have eyes. So although the file is "open" in the strictest computer science sense, it isn't actually open on your screen anywhere. 

When you have a file in this state, it shows in the Window → Show Window menu in parentheses. It's a bit misleading because it isn't a window at all. Instead, it is a database file, with no windows, that FileMaker is using. Since you might want to see it, FileMaker shows it in this menu. Choose it, and FileMaker makes a new window for that database and shows it to you.

So you may see two things in your Window → Show Window menu: Real windows that you (or some script) has hidden, and database files that don't have windows yet. Windowless files are always shown in parentheses. For the power-users out there, FileMaker never runs a database's On Open script (File  →  File Options) until a window is shown for that file. So if you select a database in parentheses in the Window → Show Window menu, and it has an On Open script, the script will run automatically.
{{< /aside >}}

## Creating New Windows

Hiding windows is all well and good, but the real power swings into play when you start making new windows. It's easy: just choose Window → New Window. FileMaker makes a brand new window, just like the one you were looking at (Figure 2). This concept is a little confusing for some users because folks tend to think of the window on the screen and the database as one-and-the-same. If it helps, think of it this way: the window is just that — a "winodw" into your database. Like any good architect, you can put as many windows in there as you want.

You can stretch this analogy too: When you look in each window, you see the database form a slightly different perspective. One window might show a list of Sprockets. And another might show a Supplier Detail layout. This way, you can be reading supplier info in one window while you type notes in the other. But the underlying database is still the same. If you change that supplier's name in one window, the change appears instantly in every other window where the same field is visible.

{{< figure
    title="Figure 2"
    src="COFFG06C.png"
    width="1032"
    height="721"
    alt="Two overlapping database windows showing the same layout. Each window shows a different record on that layout."
    caption="One database with two windows. You can look at different records — or even different layouts — in each window to compare, copy, or otherwise maximize your database productivity." >}}

You'll probably think of a lot of reasons to use multiple windows. But there are a couple of common situations where most people find them handy. Sometimes you're in the middle of some multi-step process. Maybe you are doing a series of finds with Constrain and Extend to narrow down just the right set of people for the Holiday Promotion. Now suppose someone calls, and you need to look up a customer. Of course if you just do the find, you'll loose the found set you've been working on. Instead, choose Window → New Window first. Then find the person you're looking for. When you're done, close the new window, and you'll be right back in the old one, ready to pick up where you left off.

Often, you need to compare two records. Maybe you're checking for duplicates, or trying to figure out which product is right for a particular customer. Why not make two windows? Find one product in the first, and another in the second, then compare them side-by-side. This way you can quickly compare them and make a decision without a lot of flipping back and forth.

{{< warning >}}
As long as a database has one window open, the database file itself is open. And you should never copy an open database from one place to another, or you risk getting a damages duplicate. So when you start working with multiple windows, you need to be careful. Before you copy or backup the database file, be sure you close every window for it. Usually it is easiest to just quit FileMaker first.
{{< /warning >}}

## Scripting Windows

FileMaker's multiple-window capabilities aren't limited to the menus. Your scripts have complete control over what windows appear on the screen, what they're called, where they appear, and how big they are. If you're in the mood for some heavy scripting, you can build a powerful multi-window application with FileMaker.

Although a complete explanation of the powers and pitfalls of scripted window management is beyond the scope of this article, you'll find a brief introduction to the important script steps below. You can then begin exploring for yourself how to put these capabilities to use.

All the window-specific script steps in Script Maker are conveniently consolidated in one section in the step list, called Windows. The easiest way to find them is to choose Windows from the View pop-up menu in the top-left corner of the Edit Script window. You'll see a list just like the one in Figure 3.

{{< figure
    title="Figure 3"
    src="COFFG06D.png"
    width="335"
    height="367"
    alt="Detail of the script step list in Script Maker with \"Windows\" selected in the \"View\" menu."
    caption=" FileMaker's window-related script steps cover a wide range of options. The most important steps are explained briefly in this article." >}}

To make a new window, use the New Window script step. The options it provides are shown in Figure 4. Unlike the windows you create manually from the Window menu, in Script Maker you can give your windows a name. You might call one Test List, and another Measurements.

{{< ed "Somehow this figure is missing from the original manuscript so it is not in this archived version of the post. The original caption was: \"The New Window script step offers 5 options. If you leave any of these blank, FileMaker will use a reasonable default, just like it does when you use the Window → New Window menu command.\"" >}}

When you have more than one window on the screen, your script may need to switch between them. For instance, a click on a person in the Friends List window might bring up the Detail window and show that person in full. To bring a window to the front, use Select Window. You can either choose to summon the current window, or specify a window by name. (Current Window only makes sense when your database system has multiple files, and the running script is from a database whose windows are all in the background.)

When a window is no longer useful, a script can close it with the Close Window script step. Once again, you can opt to close the current window, or any window you choose to name. This time, though, the Current Window choice is more common. When you script is running, Current Window automatically refers to the front-most window for the database. This is usually the window your user just clicked a button in.

The Adjust Window script step has a handful of useful options for controlling the front-most window. You can minimize it, hide it, or bring it back. You can also maximize it (so it fills the whole screen) or "Resize to Fit" so it is just big enough to hold its contents.

If you need more fine-grained control over an existing window, turn to the Move/Resize Window script step. This powerful step lets you change the height, width, and position of any window with pixel-perfect precision. If you don't want to change one particular attribute, just leave it blank. For instance, to move a window up or down on the screen, put something in the Distance from Top box, but leave everything else blank. As usual, you can manipulate the current window, or specify the name of a background window to move and resize.

Finally, you can rename an existing window at any time using the Set Window Title step. Just tell FileMaker which window you want to rename (or opt for the Current Window). Then enter the new name.

## Calculations and Window Scripts

Almost all the window manipulation script steps accept calculated values for their various options. For example, you can use a calculation with the Set Window Title script step. This lets you, for instance, name a window after the record it is showing.

FileMaker also offers a handful of more advanced calculation functions to help you work with windows. In particular, you can find out how big a window is, or where it is on screen, using the `Get(WindowWidth)`, `Get(WindowHeight)`, `Get(WindowTop)` and `Get(WindowLeft)` functions. These are especially handy when making new windows or moving and resizing windows.

For example, if you want to make a window larger, you can use this formula for the Move/Resize Window's Height option:

```text
Get(WindowHeight) + 10
```

This formula tells FileMaker to make the window 10 pixels taller than it already is.

Another handy (if a bit complex) formula lets you nicely center a window on the screen. Set its Distance from Left to:

```text
(Get(ScreenWidth) - Get(WindowWidth)) / 2
```

Then set its Distance from Top to:

```text
(Get(ScreenHeight) - Get(WindowHeight)) / 3
```

This puts the window smack in the middle of the screen, left to right. But it also puts the window one third down from the top of the screen. This turns out to be just where you want a window if you want your user to see it right away.

Whether you take your scripting to the next level to build a powerful multi-window database, or just use the New Window command to make your day-to-day use a little easier, you'll almost certainly find reasons to use multiple windows in FileMaker. It's a power-user feature that's well worth learning.