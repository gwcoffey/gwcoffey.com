---
title: "The OnObjectValidate Trigger"
date: 2010-09-03
archive: sfr
---

FileMaker 11 added just one new object trigger, and it is a strange little dude: `OnObjectValidate`. This trigger fires after you edit a field, before it is validated. If you thought FileMaker already had enough after-you-change-a-field triggers, you were mistaken. In this article, I explain how the various field triggers fit together and why `OnObjectValidate` exits. You then get a simple example of how it can be used. And as a special bonus, I show you how to extend the technique so it can easily be reused over and over again.

{{< aside >}}
*Update {{< time "2010-09-04" "September 4, 2010" >}}*: I corrected the title of this post because, by golly, there *is no trigger called `OnBeforeValidate`*. Whoops.

Also, thanks to excellent advice from [Corn Walker][corn], I have simplified the final version of the script. Corn’s method doesn’t require a script parameter and is much less complicated. Thanks!

[corn]:https://www.geistinteractive.com/author/cornwalker/
{{< /aside >}}


## Field Triggers Demystified

FileMaker has *a lot* of triggers that are loosely related to changing a field:

1. `OnObjectKeystroke` fires when you type in a field.
2. `OnObjectModify` fires when you modify the contents of a field.
3. `OnObjectValidate` and `OnObjectSave` fire when you exit a field after making changes.
4. `OnObjectExit` fires when you exit a field, even if you haven’t made changes.

{{< note >}}
Throughout this article, I’ll be focusing on *field* triggers. Many of these triggers do different things when attached to other layout objects. But for today, assume you’ve attached these triggers to a field object.
{{< /note >}}

I wanted to make a diagram that shows how FileMaker processes field triggers in an effort to make it clearer. My [first attempt](field-trigger-diagram1.png) sort of had the opposite effect, which just demonstrates that this stuff is kind of complicated. Luckily, I went back to the drawing board and tried again.

First, this is what happens, from a trigger perspective, when you exit a field in FileMaker Pro 10:

{{< figure src="fm-10-field-triggers.png" 
           width="392"
           height="537"
           alt="A flow chart showing the series of steps, which are explained in the text of this article."
           caption="A lot goes on between pressing tab and actually getting out of the field." >}}

At the top, you start to exit the field. (This can happen in a lot of ways. You can tab to the next field in the tab order, click outside the field, change records, switch layouts, close the window, run the `Go To Field` or `Commit Records` script step, switch to Preview Mode, quit FileMaker, shutdown your computer, subject the universe to [false vacuum decay](https://en.wikipedia.org/wiki/False_vacuum_decay), …wait I got carried away. But there are lots of ways to leave a field.)

FileMaker checks to see if you made any field changes. If not, it skips right ahead to the `OnObjectExit` trigger. But if you *did* make changes, FileMaker goes through all the steps. First, it validates the field. This takes two forms:

1. FileMaker makes sure what you typed makes sense for this field. For instance, if this is a date field, and you typed “Hi Mom” you’ll get an error.

2. If you set up any validations in the field options, FileMaker runs them now as well.

As you are no doubt aware, failed validations result in an error message, something like this:

{{< figure src="error.png" 
           width="468"
           height="214"
           alt="FileMaker's standard \"The value of this field must be…\" error alert."
           caption="Trigger warning: enraging." >}}

Once a validation error happens, FileMaker drops you back in the field and the process ends. You have to fix the error or revert the field before you can really exit.

If validation passes, FileMaker goes on to run your `OnObjectModify` and `OnObjectExit` triggers. As usual, if the triggered scripts exit with a `False` result, FileMaker stops the exit and leaves you in the field. Otherwise, the exit is done. All this happens in the microsecond after you try to exit a field.

## OnObjectValidate

That is good stuff. You can inject your special scripted behavior into the field exit process, and you decide if you want it to happen only when the field was changed, or any time the field is exited (or, I suppose, both). But you don’t have quite as much control as you might want. FileMaker runs those pesky validations *before* your triggers. If you want to do something with the field value before validations run, you’re out of luck.

This limitation was, apparently, annoying enough that the FileMaker PTB decided to do something about it. In FileMaker Pro 11, the exit field process now looks like this:

{{< figure src="fm-11-field-triggers.png" 
           width="392"
           height="672"
           alt="The same diagram above, with one additional step between \"Did you modify the field\" and \"Is the new value valid\". Again, the details are explained in this article."
           caption="OnObjectValidate fires *early* in the field exit process." >}}

Sharp-eyed readers will note that the `OnObjectValidate` trigger politely fires after you start exiting the field, but *before validations run*.

Script triggers are all about inserting customized behavior into FileMaker’s normal processes, and with this new trigger, you get one more angle of attack (or, some might say, one more "hook," as in, "I can hook in to the process in a new place.") `OnObjectValidate` scripts can process field data before FileMaker validates the field, and before the user ever sees an error message.

# Put It To Use

So what can you do with it? Probably lots of things. Here’s the example I showed in my presentation at DevCon 2010. Suppose you have a date field into which you often enter dates in the near future. Someone might call and say, “I want an appointment on Thursday.” If you’re like me, this request triggers a thought process something like this:

{{< quote cite="My Psyche">}}
”Ok, so today is, um, Monday. And it is the tenth. No, the eleventh. No, what date is it? [checks]. Oh, the 28th. Wow. Where did the time go? Anyway, Monday, the 28th. And Thursday is [on my fingers] Tuesday, Wednesday, Thursday — three days from now. That’s the 31st. Wait, this is September. That has, um, [on my knuckles] January, February, March, April, May, June, July, August, September — 30 days. So the first. I’m about 75% sure Thursday is October 1st. Man, somebody should make this easier.”
{{< /quote >}}
Ok, so most of you probably aren’t quite as bad as I am at this stuff, but who wouldn’t prefer to just type “Thursday” and be done with it?

As a FileMaker power programmer, you can probably think of 42 ways to let a person type “Thursday” and have FileMaker put in the right date. But with script triggers in 11 you can do it with style:

* This method requires no extra fields or pop-up windows.
* Your date field stays a real date field, which is just better.
* You don’t have to click any special buttons, or layer buttons over the field, and rely on spurious timing assumptions.

Instead, just type a word directly in a date field, then use a script to fix it up when you exit the field. Best of all, it is pretty simple. The trickiest part is writing a calculation that turns words into dates. Here’s mine:

**SmartDate** :=
```
Case(
  value = "today"; Get(CurrentDate);
  value = "tomorrow"; Get(CurrentDate) + 1;
  value = "yesterday"; Get(CurrentDate) - 1;
  value = "sunday" or value = "sun"; DateOfDay ( 1 );
  value = "monday" or value = "mon"; DateOfDay ( 2 );
  value = "tuesday" or value = "tue"; DateOfDay ( 3 );
  value = "wednesday" or value = "wed"; DateOfDay ( 4 );
  value = "thursday" or value = "thu"; DateOfDay ( 5 );
  value = "friday" or value = "fri"; DateOfDay ( 6 );
  value = "saturday" or value = "sat"; DateOfDay ( 7 )
)
```

I put this in a custom function. As you can probably guess, it turns words like Today, Tomorrow, Yesterday, Saturday, and Mon into reasonable dates. It uses this (complicated) custom function, which figure out the date for a given day number:

**DateOfDay** :=
```
Let(
  x = dayNum - DayOfWeek ( Get(CurrentDate) );
  If(x <= 0; x + 7; x) + Get(CurrentDate) )
) 
```

{{< tip >}}
Note: You could easily extend the `SmartDate` function to handle more complex expressions like “Next Thursday” or “Last Friday” or even “Bastille Day.” Whatever makes your socks go up and down.
{{< /tip >}}

Next, I use this function in a very simple script:

```
If [ Not IsEmpty(SmartDate(My Table::My Date Field)) ]
  Set Field [ My Table::My Date Field ; SmartDate(My Table::My Date Field) ]
End If
```

Finally, set this script as the `OnObjectValidate` trigger script for the date field. Now, when you type “Thursday” into the field, FileMaker does all the thinking for you, and swaps in the right date.

{{< aside title="A Defensive If" >}}
You may be wondering why I bother with the `If` in my script. Why not have `SmartDate` return the original value if it doesn’t match one of the special conditions? This is how I first wrote it. But it has an annoying side effect: When you put something invalid in the date field, it changes to a question mark when you try to exit the field. You still see FileMaker’s date error dialog box, but you’ve lost what you typed, so it is harder to go back in and fix a typo. This happens because the script uses the `Set Field` step to insert invalid data into the date field, and FileMaker puts a question mark in the field in this case. I decided it was best to leave the field alone if I couldn’t figure out what to do with it. Hence, the `If`.
{{< /aside >}}

This kind of technique wouldn’t work at all in FileMaker 10. Because validations run before `OnObjectSave` and `OnObjectExit`, FileMaker’s invalid date error message will always appear before your script can do anything about it. This is exactly why `OnObjectValidate` exists. It gives you a little more control.

# Which to Use?

You might think I’m saying `OnObjectValidate` is *better* than `OnObjectSave`, but you’d be wrong. The truth is, in most cases, `OnObjectSave` is probably the right trigger to use. That way you can be sure you’re dealing with valid data in your trigger script. `OnObjectValidate` should only be used when you explicitly want your script to run *before* validation for some reason.

# Bonus Technique

I’m going to channel my inner [Don Levan][don] here, and propose a slight modification to the script. This is by no means a necessary change. But for the adventurous, this version of the script is *generic*. By that, I mean one script can be used with as many different date fields as you want.

[don]:https://drdonlevan.com

Here’s the script:

```
If [ Not IsEmpty(SmartDate(Get(ActiveFieldContents))) ]
  Set Field [ SmartDate(Get(ActiveFieldContents)) ]
End If
```

With these changes in place, your trigger works exactly as it did before. But now, you can wire a second, third, or 144th date field to the same script. Easy Peasy Pumpkin Squeezy. Or something like that.

Cool, huh?
