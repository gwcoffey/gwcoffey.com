---
title: "Practical Script Triggers"
date: 2009-02-23
archive: advisor
---

FileMaker Pro 10 introduced an assortment of exciting new features but the king of the hill, so to speak, is *Script Triggers*. You could argue that this is the biggest new feature to hit FileMaker since version 7 back in the late Cretaceous period. Alas, it is also one of the most complex features you'll encounter as a budding FileMaker developer. But that doesn't mean less advanced developers should ignore these triggers all together. With a little guidance, you can put script triggers to use in almost any database, and start making FileMaker do things it never could before.

## Script Triggers Explained

A script trigger is, simply put, a way to tell FileMaker to run your script under some predetermined circumstance. In some sense FileMaker has always had this power. After all, you probably already know you can turn a layout object into a button. You're telling FileMaker to run a particular script whenever the button is clicked. If you pop in to the File → File Options dialog box, you can also configure a script to run when the file is first opened and another when it is closed. All of these have been around for ages, and they're all small examples of script triggers.

But 10 takes this to a new level by allowing you to trigger scripts under a dozen new situations. You can kick off a script whenever someone switches to a particular layout, or when they tab in to a field. Your scripts can jump in to action when your users switch tabs in a tab control, commit a record, or switch to Find mode. All these trigger points spell flexibility for you, the developer.

Do you have a report layout that should find and sort a particular way? Why make your users run a script when they can just switch to the layout. With a simple script trigger, you can make sure they always get the right data. Do you need a tab order that's more complex than FileMaker lets you define? Maybe you want to skip right past the "Have you ever been pregnant" drop-down list if the patient is very young. Or tab in to the Date and Time fields only when the "Schedule Delivery" checkbox is turned on. These kinds of things were difficult-to-impossible in FileMaker 9 because once your user started working with the database, your scripts had very little control. Now you can sprinkle your layouts with a little magic script trigger dust, and inject control exactly where you need it. Truly, the sky's the limit with this feature.

## Adding Script Triggers to your Database

Script triggers are applied at two levels. First, you can attach a trigger to an entire layout. Alternately, you can attach a trigger to a particular layout object (like a field, portal, or tab control).

FileMaker 10 has seven layout-centric script triggers in all. Each trigger has a nerdy-sounding name that tells you a little about when it will fire. The layout script triggers are:

 * *OnRecordLoad*. This trigger kicks in whenever a new record is "loaded." In other words, when the user switches to a different record by clicking the book icon, performing a find, omitting the current record, and so forth. Whatever the method, when the record appears, your script runs.
 * *OnRecordCommit*. No matter how they do it, if your user commits a record, this trigger will run your script. The user can click out of the record, press Enter, switch to a different record, change layouts, or even quit FileMaker. In every case, your script will run if there are record changes to commit.
 * *OnRecoreRevert*. This trigger fires when you revert a record. (You can do this with the Records → Revert Record menu command or the Revert Record script step.)
 * *OnLayoutKeystroke*. Both complex and exceptionally powerful, the OnLayoutKeystroke trigger fires every time a key is pressed on the keyboard. Want to delete the record when someone presses the "D" key? Didn't think so, but if you did, you could do it with this trigger.
 * *OnLayoutLoad*. Whenever your user switches to the layout, this trigger runs your script.
 * *OnModeEnter*. This trigger runs your script when the user switches to browse mode, find mode, and/or preview mode.
 * *OnModeExit*. While OnModeEnter fires when you first switch to a mode, this trigger fires right before you leave a mode.

For layout objects, you can pick from five script triggers:

 * *OnObjectEnter*. This trigger fires when a field has been entered, a button or tab has been tabbed to, or a portal row has become active. It also fires when you click on the page in a web viewer, or tab to a field on the web page.
 * *OnObjectKeystroke*. Just like OnLayoutKeystroke, this trigger fires when you press a key on the keyboard. This time, though, it only runs when you press keys while the object has focus. In other words, when you’re clicked into a field, or a button or tab control has the thick black border you see when you tab to it.
 * *OnObjectModify*. This trigger is sort of a catch all. Its behavior depends entirely on what kind of object you attach it to. For fields, it triggers whenever you’re in the field and change its value in any way (by typing, deleting, pasting, cutting, and so forth). Many times, if you think you want an OnObjectKeystroke trigger, you really want an OnObjectModify trigger instead. For instance, OnObjectModify doesn’t fire when you use the arrow keys to move around in a field, or when you tab to another field. OnObjectKeystroke does fire in these situations, making it more powerful, but also much more difficult to work with. Finally, OnObjectModify also fires for tab controls when you switch from one tab to another.
 * *OnObjectSave*. When you make changes to a field (you can type, delete, cut and paste, and otherwise mangle the field’s data to your heart’s content) and then leave the field, this trigger kicks in. It only fires if the field was actually modified, and (unlike OnObjectModify) only when the user is done editing and leaves the field.
 * *OnObjectExit*. This trigger works just like OnObjectEnter, except it fires when you leave the object instead of when you go to it. Unlike OnObjectSave, it fires even if the field wasn’t changed in any way.

To assign a trigger to a layout, just visit the Layout → Layout Setup dialog box and switch to the Script Triggers tab (Figure 1).

{{< figure
    title="Figure 1"
    src="COFFG09A.png"
    width="520"
    height="472"
    alt="The Layout Setup dialog box with the new Script Triggers tab selected. The above list of triggers is shown, which a checkbox by each. There is a section at the bottom where you can configure the selected step."
    caption="The Layout Setup dialog box (Layout → Layout Setup) has a new Script Triggers tab. Just turn on the trigger you want, then choose the script you want to run. For most triggers, you also get to decide which modes it works in. For example, you could set your OnModeEnter trigger to run in Find mode only, and it wouldn't fire when you switch to any other mode." >}}

Assigning a layout object trigger is almost as easy. First, select the object with which you want to associated the trigger. Then choose Format → Set Script Triggers. Once again, you can turn on any trigger, then pick an associated script.

## A Simple Example

Suppose you run a delivery service, and you use a FileMaker database to track your upcoming deliveries. When you view your "Delivery List" layout, you always sort it descending by time, so the oldest deliveries are at the top, and top priority. Of course you can just sort the list each time you visit it, but that gets old fast. In FileMaker 9, the best alternative was to write a script that goes to the layout and sorts the records. You could then put a button somewhere to run this script, show it in the Scripts menu, or use Custom Menus to add it to some other menu.

This method works fairly well, but it isn't perfect. You either have to script access to every layout, which is time consuming, or you have to remember that this layout is special, and get to it in a different way. 

In FileMaker 10, you can use script triggers to tell FileMaker you want to run a script every time you go to this layout. When you do this, your users have nothing new to learn. They just switch to the layout the same way they always did (and the same way they do with every other layout). And best of all, it is easy to implement:

{{< steps >}}

{{< step "Create a script with just one line: Sort Records. Configure it to sort however you like." >}}
Your script is now available to select when configuring script triggers.
{{< /step >}}

{{< step "Go to the list layout and switch to Layout mode. Then, from the Layout menu, choose Layout Setup." >}}
You see the Layout Setup dialog box.
{{< /step >}}

{{< step "Switch to the Script Triggers tab." >}}
You see the list of available script triggers. Each has a checkbox by its name.
{{< /step >}}

{{< step "Turn on the checkbox next to OnLayoutLoad." >}}
At the bottom of the window, you now see a Specify button and other configuration options.
{{< /step >}}

{{< step "In the Specify Script window, select the script you created in step 1, then click OK." >}}
FileMaker now shows your script name associated with this script trigger.
{{< /step >}}

{{< step "Click OK to close the Layout Setup window and switch back to Browse mode." >}}
Nothing looks different but now your script will run automatically every time you or your users visit this layout.
{{< /step >}}

{{< /steps >}}

That's it. Now whenever you switch to this layout, FileMaker will sort the records for you. Easy as pie.

## Keystroke Triggers

Suppose your database has a Delivery Scheduled checkbox, and an associated When field. The idea here is that you can schedule deliver for a certain date. As you tab through the layout, doing data entry, if you don't turn on the Delivery Scheduled checkbox, there's no need to enter a date. For the sake of maximum data entry efficiency, you would like the Tab key to skip right past the When field if it doesn't need to be filled in. You can see a database like this in Figure 2.

{{< figure
    title="Figure 2"
    src="COFFG09B.png"
    width="700"
    height="369"
    alt="A FileMaker database window with several fields including the checkbox and \"When\" field described above."
    caption="In this database, there's no need to tab to the When field if you haven't turned on the Delivery Scheduled checkbox." >}}

You could use this same technique in other database systems too, of course. For instance, you might have questions that are age specific in your patient database, or type specific in your product database.

To solve this problem you'll call upon the OnObjectKeystroke trigger. This is, without a doubt, the most complex of FileMaker's trigger types. Of course attaching an OnObjectKeystroke trigger to your checkbox field is a breeze. And you can probably guess what you want your script to do:

If the checkbox is turned on and the user pressed Tab, go to the When field.
Otherwise, skip to the price field.

The first challenge is figuring out which key the user pressed. Your script will be called when they press any key at all. You certainly don't want to be bouncing from field to field if they press the letter A or the space bar. The secret is the new `Get(TriggerKeystroke)` function. When a script runs because of a keystroke trigger, this function tells you which key the user pressed. For instance, if the user presses the letter *A*, then `Get(TriggerKeystroke)` returns `"A"`.

But the Tab key is a little trickier still. After all, it is hard to type a Tab into a FileMaker calculation. To make these hard-to-reach characters easier to work with, FileMaker assigns a special number to each key. It just so happens that the Tab key is number 9. The Code function turns any value into its special number code. So a calculation like this will tell you if the tab key was pressed:

```text
Code(Get(TriggerKeystroke)) = 9
```

You can find a complete list of codes for special keys in the FileMaker help. Just search for "Code."

The script in Figure 3 uses this calculation to control where the user goes when they press the Tab key. Unfortunately, if you run this script from an OnObjectKeystroke trigger attached to the Delivery Scheduled checkbox, you'll quickly discover it doesn't work properly.

{{< figure
    title="Figure 3"
    src="COFFG09C.png"
    width="628"
    height="387"
    alt="A Script 7 steps. It starts with \"If Code(Get(TriggerKeystroke)) equals 9\". If this is true, it does a second condition: \"If the Orders::Schedule Deliver field equals 1\". If this is true it goes to the When field, otherwise it goes to the Price field."
    caption="This script is designed to be used with a keystroke trigger. It checks the code of the key the user pressed. If it is 9 (the Tab key) then it takes action, navigating the user to the correct field." >}}

You were warned: keystroke triggers are tricky. This script has two problems. You'll spot the first right away: No matter how you set the checkbox, you end up on the wrong field. The problem is simple but subtle. When you press the Tab key, your script runs, putting the user in the right field. Then, after the script finishes, FileMaker processes the Tab key, taking the user to the next field in the tab order. Clearly when your script does its thing, you don't want FileMaker to see the Tab as well. Luckily, this is easy to fix. Many script triggers allow you script to "cancel" the original trigger action, and OnObjectKeystroke is one of them. (See the sidebar "Cancel an Event" for more on this power.)

{{< aside title="Cancel an Event" >}}
Several of FileMaker's script triggers can be "canceled." This means you get even more power to control how things work. The script you write can control whether or not the original action that caused the trigger to fire should continue or not. For example, if you configure an OnRecordCommit trigger, your script can tell FileMaker to cancel the commit. If it does, once your trigger script finished running, the record will still be uncommitted. In this way, you can use some script logic to check some criteria, and refuse to allow the user to commit the record until your script is satisfied.

This feature is very powerful. If your script tells FileMaker to cancel an operation, it will do so without question. If the user tries to switch layouts, but your script cancels the commit, then they layout won't change. In fact, the user can even try to quit FileMaker. Still, it won't happen until your script allows it. This give you unprecedented control over how your users interact with your database. (And of course with great power comes great responsibility. You need to think through many outcomes to avoid getting your users stuck.)

The following triggers are cancelable:

* OnRecordCommit
* OnRecordRevert
* OnLayoutKeystroke
* OnModeExit
* OnObjectKeystroke
* OnObjectSave
* OnObjectExit

The secret to canceling is the Exit Script script step. This step lets you specify a calculated "result" which is a single value the script sends back to whoever called it. In the case of a script trigger, FileMaker called you script, and it checks this result to see if the action should be canceled. To cancel an action, add a step like this at the end of your script:

```text
Exit Script [ False ]
```

When the script exits with a False result the event is canceled.
{{< /aside >}}

All you need to do is add an Exit Script script step to the end of your script. Be sure to click its Specify Result button and put 0 or False in the result calculation. This tells FileMaker to ignore the keystroke after you're done with it.

Now your script is almost perfect. The last problem requires a little testing. When you press Tab, FileMaker goes to the next field in the tab order. But if you press Shift-Tab, it goes to the *previous* field instead. For the sake of simplicity, you can just tell your script to ignore Tab keystrokes when the Shift key is down. You detect this with the `Get(TriggerModifierKeys)` function. This function returns secret codes of its own:

* {{< kbd with="Shift" >}}: 1
* {{< kbd char="Caps Lock" >}}: 2
* {{< kbd with="Control" >}} or {{< kbd char="Control" >}}: 4
* {{< kbd with="Alt" >}} or {{< kbd with="Option" >}}: 8

Since you can hold more than one modifier key down at the same time, FileMaker adds up the numbers associated with each key and gives you back the total. For instance, if you have {{< kbd char="Caps Lock" >}} and {{< kbd with="Shift" >}} down, then the result of `Get(TriggerModifierKeys)` will be `3` (1 for Shift plus 2 for Caps Lock).

In your case, you only want your script to operate if there are no modifier keys down, or if only the Caps Lock key is down. To make the change, modify the If step's condition formula to look like this:

```text
Code( Get ( TriggerKeystroke ) ) = 9 and (Get (TriggerModifierKeys) = 0 or Get(TriggerModifierKeys) = 2)
```

This version will only do its magic if the `Get(TriggerModifierKeys)` function returns `0` (no modifiers) or `2` (Caps Lock). 

With this change in place, your script trigger does its magic. As you tab through the fields on the layout, FileMaker dutifully skips the When field unless it matters. 

## The Sky's the Limit

The true power of script triggers goes well beyond making it a little easier to do what you could do before, or making slight improvements to data entry. With script triggers you can do things that simply weren't possible in FileMaker 9. This is a true developer's feature — a new tool you can use creatively to help solve complex problems. It is impossible for one article to tell you all you can do with Script Triggers. Hopefully, though, with the mechanics under your belt, and a little experimentation, you can put this power feature to use for you.