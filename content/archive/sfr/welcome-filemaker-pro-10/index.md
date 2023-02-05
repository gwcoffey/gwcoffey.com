---
title: "Welcome FileMaker Pro 10"
date: 2009-01-05
archive: sfr
---

If you thought FileMaker 9 was a big update ([and we clearly did][fm9]) you’ll be thrilled with number 10. It starts with some flagship new features like Script Triggers (_finally!_) and infinitely more useful Sub-Summary parts, plus the usual round of small tweaks and improvements. But this release takes it one step further with a total overhaul of FileMaker’s most ubiquitous interface element. Gone is the Status Area, replaced by a freshly designed, much more useful Status Toolbar. Here, we’ll introduce you to everything new in FileMaker 10. Keep an eye out for more articles about how to use all this great new stuff.

[fm9]: http://sixfriedrice.com/wp/category/filemaker-9-tips/

{{< aside >}}
Update {{< time "2009-01-05" "Jan-5-2009" >}}: Somehow I neglected to cover the new Modify Table View feature in Filemaker 10. I have updated the article with relevant information, as it is quite important.

Update {{< time "2009-01-06" "Jan-6-2009" >}}: I corrected the explanation of the [`Code`][code] function, which was stupidly dismissed in the original text.

Update {{< time "2009-01-15" "Jan-15-2009" >}}: I’ve uploaded the live sub-summaries demo file by request. Get it here: [People.fp7](people.fp7.zip).
{{< /aside >}}

[code]: #code

## Everything Old is New Again

Here’s what a basic FileMaker database window looked like yesterday (and in fact, it looked a lot like this when I started using FileMaker 15 years ago):

{{< figure src="fm9-status-area.png" 
           width="600"
           height="306"
           alt="A FileMaker window with the FileMaker 9-style Status area sidebar. Of note, the Layout popup says \"My Datab\"— the layout name is cut off."
           caption="For as long as I can remember, a FileMaker window looked like this." >}}

As of today, it looks like this:

{{< figure src="fm10-status-toolbar.png"
           width="600"
           height="318"
           alt="The same database window, but now it shows a Mac OS X style toolbar at the top of the page instead of the Status area along the side. In this case the Layout popup has more space so the full name is displayed: \"My Database\"."
           caption="But as of FileMaker 10, it looks much more modern and consistent with other applications." >}}

As my mother would say…{{< q cite="Brenda Coffey" >}}holy catfish{{< /q >}}. The most striking change, of course, is that the tools are on top now instead of along the side. This will almost certainly rub a lot of people the wrong way because carefully designed layouts that fit in perfectly sized windows on small screens will now be the wrong size and shape. After all, the maximum window size just got a little wider and a little shorter.

{{< note >}}
Of course, if you keep the status area hidden in your solution, your database windows are significantly smaller than the screen, or you make heavy use of [auto-resize][resize], then you won’t have to worry about the size change.

[resize]: http://sixfriedrice.com/wp/filemaker-9-tip3-get-the-most-from-autoresize/
{{< /note >}}

I hope the uproar over this annoyance doesn’t overwhelm the chorus of praise, though. After all, the new Status toolbar (it’s not called the Status Area anymore) beats the old version in several important ways:

* It does lots more. In the picture above, you can see buttons to manipulate the found set, perform finds, and bring up the sort dialog box. Switching between views (you know, Form, List, and Table) is now a quick click away, and the Edit Layout button makes quick work for mousers.
* Its horizontal configuration makes better use of space. Finally, the Layout pop-up menu is wide enough to show reasonable layout names. You can see the difference by comparing the layout pop-up menu in both pictures above. The new version is clearly much bigger.
* It is customizable. Your more adept users can now add buttons to the status toolbar for common FileMaker functions, move things around, switch between large and small icons, and so on. The changes they make will apply to every database they use, introducing a little consistency for folks who use several different databases.
* This is probably a matter of opinion, but to my eye, it is a lot prettier. And I like [pretty things](https://hello.boygirlparty.com).
* Finally, it is more consistent with other applications, especially on Mac OS X. In fact, Mac OS X users will recognize this as a stock-standard toolbar that works just like other applications. And Windows users will still be comfortable with the more common buttons-across-the-top arrangement.

{{< note >}}
Before you get your hopes up, you should know that the status toolbar can be customized by the _user_, not by the _developer_. You can’t script the placement of buttons, add new buttons, or otherwise control how your users see things. They get to decide how their toolbar is arranged. Of course you can still hide the status toolbar, and keep it locked away from your users, so you haven’t _lost_ any control here.
{{< /note >}}

A full discussion of the new status toolbar would require an entire article, so for now it will suffice to say it really represents a massive refinement and rethink of the way people interact with FileMaker, both as users and as developers.

It is not simply a cosmetic change. Instead, things have been reconsidered in intelligent, friendly ways. It makes common tasks easier to get to, and helps new users discover FileMaker’s features more naturally. On the thoughtful side, consider the black-ish layout bar which attaches itself under the status toolbar whenever you’re in layout mode:

{{< figure src="layout-bar.png" 
           width="600"
           height="144"
           alt="Detail of the toolbar when in Layout mode. A dark grey bar rests under the toolbar and offers information about the layout and buttons and tools for working with layouts."
           caption="The Layout toolbar shows more than ever before without sacrificing much space at all." >}}

It politely shows you the context of the current layout (right after “Table:”) which is important information, and was squirreled away in a dialog box in FileMaker 9. And its little pencil icon gives you one-click access to the Layout Setup dialog box.

One final staff favorite: In Browse mode, when you click the clever pie-chart representation of the found set, FileMaker runs the Records → Show Omitted Only command. You can quickly click to swap the found set in and out, and the pie chart makes it clear what is happening.

New users will quickly discover the Edit Layout button when in Browse mode. In truth, it is simply another way to get to Layout mode, but it is presented here in a way that saves first-timer’s a trip to the online help. It switches to an Exit Layout button once you get to Layout mode, so getting back is just as easy and obvious.

Individually, these may seem like inconsequential things, but FileMaker 10 is full of subtle refinements like this, and all together, they really make for a more sensible, approachable, and convenient interface. Once you get used to using 10, you’ll find yourself missing the new arrangement whenever you switch back to 9.

{{< note >}}
Although the interface redesign is a significant positive step, I don’t want to over sell it. Visually, nothing has changed _inside_ the database window. Pop-up menus still look retro-80’s. Radio buttons still render funny on Windows. Checkboxes still look like something my 7 year old drew in KidPix. Alas, we get no shiny on our layouts in this release. Just a much better experience in the parts FileMaker controls directly.
{{< /note >}}

## Loaded and Ready

Without a doubt, Filemaker 10’s most significant new feature is script triggers. This fabled hero has, over the years, gone by many names: events, triggers, actions, behaviors… Whatever you call it, here’s the scoop: In FileMaker 10, you can cook things up so scripts run automatically in response to various actions. For instance, imagine you want some scripted magic to happen whenever someone clicks to a certain tab in your tab control. In FileMaker 9, the intrepid developer would have to delve into [hidden tabs][hidden-tabs], masked buttons, and who knows what else to pull this off. After all, scripts run when people click buttons, so you have to trick the user into clicking a button when they really want to select a tab.

[hidden-tabs]: http://sixfriedrice.com/wp/tab-controls-without-the-tabs/

Imagine you could turn that reasoning upside down, though. Instead of thinking about clicks, think about actions. As in: When the user switches tabs, run this script. That’s the gist of triggers. FileMaker runs your script in response to something. In this example, you can tell FileMaker to run your script when the tabs are _modified_—when someone changes which tab is selected.

Triggers are associated either with the layout (choose Layouts → Layout Setup, then switch to the Script Triggers tab) or a single layout object (select the object, then choose Format → Set Script Triggers). Some triggers even have the power to cancel the original action by exiting the script with a result of `False`. For instance, if a script triggers when a record is committed, and it exits with a result of `False`, then FileMaker won’t commit the record. In this way, your scripts can gain a little control over the under-the-hood behavior of the application itself.

On the layout, you can trigger scripts in these scenarios:

* `OnRecordLoad` fires when a new record is “loaded” when the user is on the layout. In other words, when the user flips to a new record with the book icon, performs a find, makes a new record, and so forth.
* `OnRecordCommit` triggers when a record is committed. As mentioned before, this action can be canceled by the triggered script.
* `OnRecordRevert` kicks in when a record is reverted. This one is cancelable too.
* `OnLayoutLoad` fires when you switch to the layout. Imagine leaving the Status toolbar unlocked, and performing special finds, sorts, and so on automatically as your users switch layouts.
* `OnLayoutKeystroke` has the power to act with every keystroke. This is sort of the super-power trigger, allowing you to build single-stroke navigation systems, filter keystrokes based on criteria, and probably a thousand other as-yet-unimagined things. As you probably guessed, your script can cancel the keystroke, as though it was never pressed.
* `OnModeEnter` runs a script when the user switches to one or more specified modes. You could switch to a print-formatted layout automatically whenever the user goes to Preview mode, or use a special layout for Find mode, for instance.
* `OnModeExit` is a slight variation on `OnModeEnter`: it fires right before you leave a mode. This way your script can see which mode the user is switching _from_ and can even cancel the switch if you want.

The triggers for layout objects are:

* `OnObjectEnter` lets you know when a field has been entered, a button or tab has been tabbed to, or a portal row has become active. It also fires when you click on the page in a web viewer, or tab to a field on the page.
* `OnObjectKeystroke` is just like `OnLayoutKeystroke`, except it only jumps to action when you press keys while the object has focus. In other words, when you’re clicked into a field, or a button or tab control has the thick black border you see when you tab to it. As before, you can cancel keystrokes.
* `OnObjectModify` is the swiss army knife of triggers. For fields, it triggers whenever you’re in the field and change its value in any way (by typing, deleting, pasting, cutting, and so forth). Incidentally, it does not fire if you drag text from one field to another since, by definition, you’re not in the field you drag to. Bummer really. Many times, if you think you want an `OnObjectKeystroke` trigger, you really want an `OnObjectModify` trigger instead. For instance, `OnObjectModify` doesn’t fire when you use the arrow keys to move around in a field, or when you tab to another field. `OnObjectKeystroke` does fire in these situations, making it more powerful, but also much more difficult to work with. Finally, `OnObjectModify` also fires for tab controls when you switch from one tab to another.
* `OnObjectSave` does its thing when you finish making changes to a field. You can type, delete, cut and paste, and otherwise mangle the field’s data to your heart’s content without firing scripts. Then, when you tab out of the field, commit the record, or otherwise cause FileMaker to get you out of the field, the `OnObjectSave` trigger kicks in. It only fires if the field was actually modified, and it can cancel, meaning the user is not able to exit the field until they satisfy the demands of your script.
* `OnObjectExit` works just like `OnObjectEnter`, except it fires when you leave the object instead of when you go to it. Once again, it is cancelable, which prevents the user from moving on to something else.

It is worth noting that the power to _cancel_ runs deep. If you write an `OnObjectSave` script that exits with a `False` result, FileMaker won’t let the user leave the field. Period. Even if they try to switch to a different record, change layouts, close the window, or even quit FileMaker. In every case, the action will simply not happen at all. It is up to your script to provide reasonable feedback to the user (like a custom dialog box or a beep). And of course, if you make a mistake and your script always exits this way, you’ll essentially be stuck in the field forever, so you really need to be careful. (Luckily, triggered scripts work perfectly with the script debugger in FileMaker Pro Advanced, so you can just turn on the debugger, exit the field, then kill the trigger script to work around your troublesome code.)

I’d be a fool to try and predict the kinds of techniques we’ll see popping up [here][fm-mag] and [there][sfr] once people really begin to explore script triggers. I think this is one of those game-changer features: Ball’s in the air and it’s anyone’s guess where it will come down.

[fm-mag]: http://filemakermagazine.com/
[sfr]: http://sixfriedrice.com/

{{< tip >}}
A new View → Show → Script Triggers menu command was also added in Layout mode. Turn this on to see a little red star icon attached to any object on the layout that has script triggers. This is super useful, for instance, to help keep you from accidentally duplicating a trigger-happy field for some unrelated use.
{{< /tip >}}

## Sub-Summaries Like Never Before

This is a feature that’s easy to explain, requires almost no new learning, and will knock your socks off. Everything you know about sub-summary reporting now works in Browse mode. It’s almost magical to see elegant grouped lists instantly adapt as you edit records, and change the sort order, all the while remaining fully clickable. In this case, a video says it better than words:

{{< mov src="browse-mode-sub-summaries.mov" caption="In FileMaker 10, summary parts work in browse mode, massively expanding the usefulness of these already-very-useful tools." >}}

{{< aside >}}
You can download the sample database used in the video here: [People.fp7](people.fp7.zip).
{{< /aside >}}

## The Persistent Sort

If you paid close attention to the video above, you may have noticed something else new: Records stay sorted. If you sort your contact list by City, for instance, then update the address for someone who moved, the record you edit will instantly jump to the correct sorted position. In other words, the storied state of “semi-sorted” is almost a thing of the past. (“Almost” because it can still crop up when importing records into a sorted list, or when using the Replace Field Contents and Relookup Field Contents commands.)

In truth, once you get used to this behavior, you’ll probably wonder why it didn’t work this way all along. It just feels natural. Best of all, you don’t have to do anything as a developer to take advantage of this feature. It Just Works™.

## Find and Find Again

Here’s another feature that’s more for the users than the developers, but it’s still super cool. The Records menu now has a Saved Finds submenu, where FileMaker keeps track of the most recent find requests you’ve used, lets you perform them over again, and even lets you save a frequent find with a special name. You get the same menu if you click-and-hold on the Find button in the status toolbar:

{{< figure src="saved-finds.png" 
           width="555"
           height="508"
           alt="Detail of a database window where the user has held the mouse button down on the Find button in the toolbar, revealing a popup menu of recent searches they've performed, and options to save them."
           caption="You users get powerful new saved find request features out of the box." >}}

If your users often perform the same finds over and over, they no longer need to beg you to write them a script. Instead, they can do the find once, then choose Save Current Find… to add it to this menu. Now, the same find (with as many requests and criteria as they want) is just a few clicks away.

The list of saved finds is stored with the user’s account, so if your users each log in with a separate account (even with External Authentication), they’ll have their own persistent set of saved finds. What could be simpler?

## Send Mail the Old Fashioned Way

There are two kinds of people in the world: Those who see the following picture and think, “It’s about time!” and those who…don’t. Which one are you?

{{< figure src="send-via-smtp.png" 
           width="560"
           height="209"
           alt="Detail of the Send Email dialog box showing the new \"Send via SMTP Server\" option."
           caption="FileMaker can now send email directly via the server rather than relying on an installed email program." >}}

Starting with FileMaker 10, your scripts (and users, if you so desire) can send email directly through a so called SMTP Server (in other words, an industry standard email handling system). When you send an email this way, it bypasses the mail program on the local computer completely. You don’t have to worry about configuring an email client on a robot computer, or supporting Lotus Notes version 9.2.8.8.3.1.3, or confusing your users with mysterious pop-ups. Instead, your FileMaker solutions can act just like real email programs, delivering any message you want to anybody you want with no interference.

You can even customize the email address the message comes from, so long as it is allowed by your mail server. Put another way, you can now send email quickly, cleanly, and reliably without special plug-ins. As an added bonus, when you use this option in your scripts, they can be run by FileMaker Server as a scheduled script.

Don’t be lulled into thinking you should always use the SMTP Server option in your scripts though. The older behavior is still available (and the default) by way of the E-mail Client option. And it is still the right choice if you want your users to customize the message before it sends, or if it is best for them to see it in their Sent Mail folder. Now, you get to decide which model works best in each situation.
And remember, this feature should be used only for good, never for [evil][spam].

[spam]: http://www.spam.com/

## All Hail the Tab Order

Have you ever had to add a new field to a layout that has lots of fields and a very particular tab order. If so, you have, no doubt, cursed the engineers at FileMaker Inc. a time or two, while you click…every…darn…field…over…again. Apparently one of those engineers ran in to the same problem when helping their partner keep track of their antique Pez dispensers. Because that person, bless them, stayed late one saturday night and fixed the problem.

As of today, my friends, you can now insert a field into the tab order. For example, suppose you already have fields numbered 1, 2, 3, 4, and 5. You then add a sixth field to the layout, which really should go right between 2 and 3. No problem: Just choose Layout → Set Tab Order, put a 3 in the arrow by the new field, and marvel as FileMaker renumbers the rest for you. 3 becomes 4. 4 becomes 5. And yes, ladies and gentleman, for a limited time only, 5 becomes 6.

We’d call this feature a great leap forward, but seriously, when you have nowhere to go but up, it’s more of an obligatory lurch forward. None the less, thank you engineer person. You’ve given us our lives back.


## Customizable Table View

Hold on to your socks. In FileMaker 10, _users_ can now add fields to table view without visiting the layout. This adds a level of dynamic data access that has never existed before, which is a great step. Now you can configure a table view layout for your users, and let them add or remove fields as they see fit:

{{< figure src="edit-table-view.png" 
           width="308"
           height="363"
           alt="A window called \"Modify Table View\" showing a list of fields with checkboxes by each one, and an Add button."
           caption="FileMaker's Table view now gives *end users* control over which fields display." >}}

Many of you will gasp in horror at this, though. Now it is painfully obvious that a field that is not restricted by a Privilege Set is wide open for view *and* edit by a logged in user. That means someone can go to a table view layout, click Modify and add the Password field to the list, or drop in the Cost field and modify it. (If you keep the status area hidden and locked, then this feature is locked away too, so nothing has changed for you.)

Of course this was always possible in a more round about way: If you have access to a database, you can use its tables in a *new* database of your creation, where your access to fields is limited only by your privilege set. But a lot of people ignored this problem either because they were unaware or considered it too abstruse to worry about. Now poor access privilege settings can lead to trouble much more easily.

The _correct_ solution to this problem is the same as it always has been: Depend on privilege sets to control who can see and edit what data. And “Run with full access” scripts to work around the restrictions as needed.

Alas, this is a difficult change to make. If you are willing to live with the sort of half-baked security you’ve had all along, the simpler solution is to turn off Table view access for all relevant layouts. This can easily be done in the Layout Setup dialog box. Once you do this, users will no longer be able to pry in to fields without the level of effort required in 9. (And remember, if you have the status area hidden and locked, the user won’t be able to get to the Modify button in the first place.)

{{< warning >}}
To reiterate, blocking table view **is not secure**. But if this new feature causes you trouble, then **your system isn’t secure in 9 either**. So it is a quick method to get back to the slightly more obscure insecurity you had before. As always, we recommend you use proper security if security really matters.
{{< /warning >}}

## Indirection

FileMaker 10 has one new feature that will almost certainly prove to be a sleeper sensation. At first it seems so weird, so obscure, that many will wonder why in the world they would ever use it. But in time, as clever developers put it to use and share their experiences, I’m confident we’ll begin to understand its true power. I’m talking about a new script step called `Set Field by Name`, and its companion function, `GetFieldName`. The first works just like the `Set Field` script step you know and love, except that instead of choosing the field you want to set from a list, you use a calculation formula. For instance, if you want to set the First Name field, you could use a formula like this:

```
“Customers::First Name”
```

Or this:

```
Get ( ActiveFieldTableName ) & “First Name”
```

Or even this, if you like this sort of thing:

```
“Customers::” & LeftWords(“First things first”, 1) & ” ” & Filter(“Nxaxmxex”, “abcdefghijklmNopqrstuvwyz”)
```

To put it succinctly, the result of the calculation is the name of the field you want to set. So if you do this mind-bender:

```
Set Field by Name [ Globals::Name, “Something” ]
```

It is not the Name field itself that gets modified, but rather the field whose name is _in the Name field_.

Because storing field names in literal text values in your calculations is inherently fragile (if you rename a field, you script will break), FileMaker 10 also introduces the `GetFieldName` function. This function, at first blush, seems even weirder. Consider this formula:

```
“You have a field called ” &
  GetFieldName(Customers::First Name) & “.”
```

If you put this in a calculation field or a Show Custom Dialog script step, you’ll see this: “You have a field called Customers::First Name.” When a field is inside `GetFieldName` in a calculation, you get its _name_ instead of its _value_.

If this just confuses you, don’t worry. You’re not alone. The popular name for this feature seems to be “indirection” or “field indirection.” This is probably because it is tangentially related to a [computer science concept][indirection] of the same name. But I like the dictionary definition better:

[indirection]: http://en.wikipedia.org/wiki/Indirection

{{< quote cite="New Oxford American Dictionary" >}}
_indirection_: indirectness or lack of straightforwardness
{{< /quote >}}

That about sums it up. Truthfully, although its use will be rare, it is an exceptionally powerful feature. You’ll see an article or two appearing here on SFR soon showing techniques that take advantage of indirection.

## Where to Print

When you use the Print script step, you can turn on the “Specify print options” checkbox to hard-code printer-related settings like the number of pages, the page range, collation, and so forth. In FileMaker 9 on Windows, in some cases, this checkbox would also cause FileMaker to automatically select the correct printer for you. In other words, if you wired the script to the printer called Sales Office Laser, then anybody who ran your script would get output on that printer too.

This printer selection never worked on Mac OS X, and it was a little flaky on Windows. As of FileMaker 10, it is an officially supported feature, and works seamlessly with any printer and on any platform. Now you can force the Fax printer driver in your script, or send bar code labels to the thermal printer, with no user interaction, and no messy plug-ins.

## File Recovery and Maintenance

The Recover process has long been a source of anxiety for even the most capable FileMaker developers. Nobody knows quite what it does, everybody swears off recovered files like plague-stricken corpses, and you have zero control over the process. All that changes in FileMaker 10. Witness:

{{< figure src="recover-dialog.png" 
           width="583"
           height="372"
           alt="A window titled Advanced Recover Options with several radio buttons and checkboxes to select from."
           caption="FileMaker's new Advanced Recover Options let you pick which esoteric and terrifying steps the recovery process uses." >}}

We’ll have an entire article devoted to all these knobs and switches, but as you can see, you have a much greater (and possibly more confusing) degree of control over the recovery process. What’s more, FileMaker now produces a comprehensive log of the entire recovery process, so you can see exactly what (if anything) it changed. On the down side, these logs are somewhat mystifying—you have to know a lot about FileMaker database internals to really make sense of them. Luckily, FMI has promised a whitepaper to help us mortals make the most of it. We’ll provide a link as soon as we find it.

On a related note, we should mention the [Milli Vanilli][milli] of FileMaker features: File Maintenance. This handy command made its debut in or around FileMaker 7, to the cheers of FileMaker developers everywhere. Its compress and optimize operations seemed to speed up our databases while at the same time making the files smaller. Many of us started performing file maintenance as a part of our regular upkeep.

But a couple years ago at the FileMaker Developer’s Conference, FileMaker personnel made an apparently official about face, suggesting that we should never use these commands. It turns out the ancient Save a Copy As command, with its “compacted copy” option, performs the same basic service. The difference is that file maintenance operates directly on the open database, which means if anything goes wrong, you can damage your file permanently. If you use Save a Copy As instead, you get a compressed and optimized copy. If a problem arises, the original file is still OK.

[milli]: http://en.wikipedia.org/wiki/Milli_Vanilli

Once this became clear, nobody wanted to use file maintenance anymore, and a few folks began to wonder why the feature even exists. Why offer an appealing, but unsafe version of an existing useful command? FileMaker apparently agrees. As of FileMaker 10, the File Maintenance command no longer exists.

## Miscellaneous Changes

No new version would be complete without a laundry list of relatively minor changes. Here it is.

### ESS enhancements…

FileMaker 9’s flagship feature was External SQL Sources, or ESS, so it is unsurprising that it ESS got a little love in 10:

* Value lists based on fields from ESS tables are now supported.
* ESS now supports Single Signon authentication with Microsoft SQL Server. If you don’t know what that means, you also don’t need it.
* DATETIME columns are now handled more intelligently with Microsoft SQL Server. You get to decide if you want just the Date portion of the value, just the Time portion, or both.
* You can now use the latest versions of MySQL and Oracle with ESS.

### A few good functions…

FileMaker 10 adds five more calculation functions we haven’t yet mentioned, and makes a subtle change to a sixth:

* The `Char` function creates a text character from its numerical equivalent. Now you can insert a Line Feed character in your calculation easily: `Char(10)`

* The `Code` function works opposite to `Char`. It gives you back the numerical equivalent of the text value you pass in. This is critical information when building scripts for Keystroke triggers. It allows you to handle complex keys like `escape`, `enter`, function keys, and so forth.
* The `Get(TriggerKeystroke)` and `Get(TriggerModifierKeys)` functions tell you which keys someone pressed to fire you `OnLayoutKeystroke` or `OnObjectKeystroke` script triggers.
* The `Get(DocumentPathListings)` function returns a list of paths to every file in the user’s Documents or My Documents folder. Again, I’m not sure what inspired this function. It seems odd that it is limited to just the Documents folder, but I’m sure there’s a reason in there somewhere.
* The `Get(TemporaryPath)` function has changed just a touch. It now returns a path to a special folder *inside* the user’s temporary items folder. Anything you store here will automatically be deleted by FileMaker when it quits. Before, files would stick around until the operating system decided to clean them up, potentially wasting space. In general, this should not effect your scripts at all, unless they make the (faulty) assumption that files created in the temporary folder will be there across restarts of FileMaker.

### Import and export formats…

FileMaker can now import data directly from [Bento][bento], the Mac OS X only consumer database program FileMaker Inc. released last year. Time will tell if it proves useful, but this means you can now import data from the Mac OS X address book and calendar into FileMaker by way of Bento. Let us know if you come up with any cool uses for this.

[bento]: ../filemaker-gets-bento/

In addition, a few prehistoric formats are no longer supported for import or export: SYLK, DBF, DIF, WKS, and BASIC. Honestly, we might miss DBF a little, but the rest we haven’t used in years, if ever.

Finally, FileMaker can now import and export the new .xslx format used by Microsoft Excel 2007 for Windows and 2008 for Mac OS X.

### Edit scripts tweaks…

The Manage Scripts window has seen some minor changes too. Script groups, which were first introduced in FileMaker 9, are now called _folders_ in keeping with their function and icon. Also, you can now create an empty script (just like before), or a so called Default Script, which, in homage to FileMaker 5-ish, is a script with a few pointless steps already inserted. I guess the idea here is to show people what a really small script will look like. Thankfully, Empty Script is still the default, so that’s what you’ll get if you just click New.

### Etcetera…

Some things really only warrant a bullet point:

* FileMaker now supports IPv6 for database sharing. We don’t have enough expertise here to comment, except to say, “sounds good to us.”
* The QuickStart panel, another FileMaker 9 newbie, has been redesigned a touch. It now includes recent database, a favorites list, and more. In other words, I haven’t turned it off yet, which is a first for me.
* A new Launch PHP Site Assistant command in the Tools menu gives you quick access to this web site builder if you have it installed.
* The Database Design Report has (duh) been enhanced to cover script triggers and the other new FileMaker 10 features.
* The Starter Solution (template) databases included with FileMaker are now a little less embarrassing. For instance, they actually use real tab controls now. And normalized tables. And other features introduced in the last five years.
* My notes say there is no longer a hard copy User Guide in the box. I suppose someone out there will care, and with you, I condole.

## Another Year(ish), Another Release

FileMaker has been progressing so steadily since the 7 release, that it would be easy to get a little jaded. But when you look at it objectively, you can’t help but be impressed. I find it heartening that FMI put time into big new power features like script triggers and a less bullet-point-worthy but equally important user interface overhaul. This release certainly looks different, but it also has enough new power to keep people like us busy finding new solutions for a good while.

Also, I don’t talk about this much, but because I write [books on FileMaker][amazon], I typically get to play with the software a little bit before release. I’ve been lucky enough to get pre-release access to most versions of FileMaker since 5.5, so I have a lot of experience toying with new releases at night while I use last year’s model all day. It took me a few days to get used to the new interface in 10 (I kept trying to show the already-visible status area, for instance). But once I was in the groove, I suddenly found FileMaker 9 to be aggravating in ways I’d never noticed before. I think this is the first time that’s happened.

The new release completely supplanted my subconscious expectations almost over night. The Layout bar, the Preview button, the Formatting bar, the Status toolbar—all these little changes seem, to me, to fit the way my body wants to work better than FileMaker ever has before. I now feel like 9 is clunkier, like my workflow in 9 just isn’t as smooth as it is in 10. And for a software product I’ve been using almost daily for 15 years, that’s really saying something. I wasn’t convinced at first glance, but now I’m impressed.

[amazon]: http://www.amazon.com/exec/obidos/search-handle-url/ref=ntt_athr_dp_sr_1?%5Fencoding=UTF8&search-type=ss&index=books&field-author=Geoff%20Coffey

Only one question remains: Where do they go from here? You almost never see a Version 11 in major software. CompuGlobal Hyper FileMega Pro 1.0, anyone? Cheers, FMI, and cheers, FileMaker community. Let us know what you think in the comments.
