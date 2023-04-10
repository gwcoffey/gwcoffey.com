---
title: "Limiting Checkbox and Radio Button Choices"
date: 2007-09-05
archive: sfr
tags: 
  - Archive Post
---

Did you know that if you shift-click on a field formatted as radio buttons, you can select more than one choice? Even if *you* don’t know this, chances are some day some *user* will figure it out. Yuck. Here’s a short-but-sweet technique to deal with the problem. And you’ll see how to apply the same concept to do some cool stuff.

Just in case you think I’m foolin’, here’s a picture. You’re definitely not supposed to be able to do this:

{{< figure src="double-checkbox.png" 
           width="514"
           height="175"
           alt="A FileMaker database window with \"Gender\" radio buttons. Both \"Male\" and \"Female\" are selected."
           caption="Typically you would use radion buttons to force a single selection from several choices, but FileMaker actually allows the user to select more than one with the Shift key." >}}

## Where One Is Expected, Two Are Checked

Before I show the solution, it might help if I remind you how radio buttons (and checkboxes) work in FileMaker. If you turn on just “Male” in the database above, the `Gender` field will have this in it:

```
Male
```

Makes sense. If you turn on *both* `Male` and `Female`, FileMaker needs to figure out how to put *two* values in one field. It accomplishes the seemingly impossible by putting each value on its own line. So under the hood, the field has this in it:

```
Male
Female
```

Every time you check off a new item, it gets added to the end of the list.

{{< note >}}
In case it wasn’t obvious up top, you can do this with *any* field that is formatted as a radio button. Just hold down the Shift key and start clicking. Each item you click one it turns on — and the other items don’t turn off. Of course if you wanted this kind of behavior, you would have chosen the Checkbox style instead. So chances are you don’t want this to happen.
{{< /note >}}

## Stop the Madness

Of course, there are probably lots of ways to keep your users from doing this. You could, for instance, use a Validation calculation. But that just gets FileMaker to bark at your user when they make a mistake. I always favor *preventing* a mistake to complaining about one after it has happened. So how can we *stop* the user from choosing the second item in the firs place?

The trick is to use an Auto-Enter calculation. Remember that when a second item is selected, it is added to the *end* of the list. FileMaker doesn’t turn off the other selected items, but you can. Just add this Auto-Enter calculation to the field you want to protect:

```
GetValue(Self; ValueCount(Self))
```

Also, make sure you turn *off* the “Do not replace existing value (if any)” checkbox for this Auto-Enter calculation. This formula tells FileMaker to grab the last value in the field and throw out all the rest. And by *value* FileMaker means “line.”

{{< note >}}
If you’re not using FileMaker Pro 9 or later, you won’t be able to use the fantastic `Self` function shown here. Instead, just change `Self` to the name of the field you’re trying to protect against double-entry. Likewise, if you’re not using FileMaker Pro 8 or later, you won’t be able to use the `GetValue` function. In that case you’ll have to use `RightValues` instead, and make sure to remove the trailing carriage return from its result.
{{< /note >}}

When your user surreptitiously Shift-clicks the radio button, FileMaker adds their choice to the end of the list. Then the Auto-Enter calc kicks in. It keeps that last line (the one just clicked) and tosses out all the rest. The result is a radio button that works just like they didn’t have the Shift key down.

## More Tricks with Values

You can extend this technique in at least one interesting way. Suppose you have a field formatted as a *checkbox set* on your layout. Normally, of course, this means the user can pick as many items as they want. But your instructions are to “choose *three*” from the list. Or *ten*. Or *two*. Or whatever makes your socks go up and down.

There are actually two different calculations that will help with this. Here’s the first:

```
Let ( 
   vals = RightValues(Self, 3), 
   Left(vals, Length(vals) – 1 )
)
```

This calculation works a lot like the radio button version above. It keeps the last three and tosses out the oldest. In this case, though, since we want several values, we can’t use the `GetValue` function. Instead, we use `RightValues` to grab the last three. `RightValues` always tacks a carriage return on the end of the line, so we have to get rid of it to keep things clean. That’s what the whole `Left(vals, Length(vals) – 1))` thing is all about.

Here’s how it looks in action:

{{< mov src="last-three.mov" caption="The user can click as many checkboxes as they want, but only the three most recent stay checked." >}}

Because the calculation keeps the *last three* values, you can keep clicking as much as you want. FileMaker leaves the last three items checked, and clears the X on the oldest as you go.

If you use this calculation instead:

```
Let ( 
   vals = LeftValues(Self, 3), 
   Left(vals, Length(vals) – 1 )
)
```

Then FileMaker keeps the *first* three values. When you try to click a fourth, it simply refuses to accept it. (Truthfully, it accepts it, updates the field, then promptly removes it because of the Auto-Enter calculation, but from the user’s perspective, it simply won’t allow a fourth choice.) You can see this version in the flesh here:

{{< mov src="first-three.mov" caption="In this version, any attempt by the user to select more than three is simply rejected." >}}

These techniques can help prevent bad data entry, and make your database more usable. Let us know if you discover any other interesting applications.