---
title: "FileMaker 9 Tip #1: Hiding Something on the Layout"
date: 2007-07-10
archive: sfr
tags: 
  - Archive Post
---

One of the most exciting new features in FileMaker 9 is *Conditional Formatting*. I think this is awesome because now you can apply dynamic custom styles to layout elements without adding dozens of crufty unstored calcs to your table. When I first started playing with conditional formatting, though, I felt a little let down by one thing: There’s apparently no way to make something *disappear* using conditional formatting. I often have the need to show something to my user — an informational message, indicator icon, or even a button — only under certain conditions. It turns out that with some creative thinking, **you can show and hide layout elements with conditional formatting**. (Some restrictions apply.)

This is actually two techniques in one. The solution is simple if you’re only trying to hide some text. If you have a graphic, button, or collection of objects to hide, on the other hand, you’ll use a different method.

## Making Text Disappear

To make some text disappear — an informational label by a field, or a warning message that doesn’t apply, for example — simply change the *text color* to match the *background color*. For example, suppose you have a database that looks like this:

{{< figure src="required_fields1.png" 
           width="549"
           height="168"
           alt="Screenshot of part of a database window showing fields for First Name, Last Name, etc… Each field as the text \"[required]\" beside it in red."
           caption="This database clearly labels eash reauired filed in an attention-seeking way.">}}

You want the little “[required]” label next to a field to disappear when your user enters something in the field. This is a breeze:

{{< steps >}}

{{< step "Select the text label and choose Format → Conditional." >}}
The *Conditional Formatting for selected objects* dialog box appears.
{{< /step >}}

{{< step "Click *Add*." >}}
FileMaker adds a new line to the Condition list. In other words, you’re establishing a condition under which you want special formatting applied to this object.
{{< /step >}}

{{< step "Click *Specify* and enter `not IsEmpty(Customers::First Name)` in the Specify Calculation window." >}}
In this case, you want to format the label when the First Name field is *not empty*. When the formula you entered evaluates to a `true` value, the formatting will be applied.
{{< /step >}}

{{< step "Click *OK* to close the Specify Calculation dialog box." >}}
Now you need to tell FileMaker what kind of formatting to apply.
{{< /step >}}

{{< step "Turn on the Text Color check box and pick an appropriate color from the rainbow-colored pop-up menu beside it." >}}
Choose a color that matches your background color exactly. In the picture above, the background is FileMaker’s lighest gray color, so I picked that color here.
{{< /step >}}

{{< /steps >}}

When you’re finished with these steps, click OK in the Conditional Formatting window and switch to Browse mode. Now as you enter information in the fields on the layout, the “[required]” reminders will disappear like magic:

{{< figure src="required_fields_formatted.png"
           width="549"
           height="168"
           alt="The same database window. This time the First Name and Email Address fields have data in them and the \"[required]\" labels by those fields no longer show."
           caption="The red labels have disappeared for the fields that are no longer empty.">}}

{{< note >}}
You could also make the text invisible on the layout, then use conditional formatting to make the object appear (by applying a visible color) when you want it to show. This might make the condition formula a little more obvious because it is expressed positively instead of negatively. But having invisible items on the layout is a nuisance. If you find it easier to write a formula saying when the text *should* appear, do that. Then put `not` in front of it. It’s that easy.
{{< /note >}}

## Making Other Things Disappear

The technique above has a pretty serious limitation: it only works with a single text object. If you’re dealing with a graphic (perhaps it is an icon that marks each unpaid invoice) or some other object, you’re not going to make it disappear by turning it white. In fact, if you select most kinds of layout objects, the Format → Conditional menu command dims: FileMaker can only apply conditional formatting to text objects, fields, buttons, and web viewers.

To work around this limitation, you have to get a little creative: Use an empty text object:

{{< steps >}}

{{< step "Using the Text tool in Layout mode, create a new text object (by clicking somewhere on the layout) and type a single space. Then click outside it so it’s no longer expecting input." >}}
You now have a (mostly) empty text object that you can resize and position as you see fit. (You need the space because FileMaker will automatically delete the text object if you make it completely empty.)
{{< /step >}}

{{< step "Position this text object over the element or elements you want to hide." >}}
You may need to resize it so it covers the item completely. Also, make sure it is *in front of* the item it is hiding (use Arrange → Bring to Front if necessary).
{{< /step >}}

{{< step "Choose Format → Conditional and apply conditional formatting just like you did in the previous example." >}}
This time, though, turn on the Fill Color check box instead of Text Color. You should still choose a color that matches the background.
{{< /step >}}

{{< /steps >}}

When you’re finished, switch to Browse mode and give it a try. When your formatting condition is met, everything under the text object will disappear.

## Dealing with Buttons

The first gotcha with this technique is that although you hide an item from view, you don’t hide it from the mouse. If the thing you’re covering up is a button, it will still be clickable even when hidden. Luckily, this is easy to fix: Just modify the button’s script so it does nothing when the button is hidden. Add a snippet of code like this to the top of your script:

```
If [ IsEmpty(Customer::Email Address) ]
   Exit Script
End If
```

The formula in the `If` step should match the one you used in the Conditional Formatting dialog box exactly. Now, although the button is clickable, it won’t do anything. And since you can’t see it, you won’t be inclined to click it anyway. Problem solved.

## Other Limitations

Buttons aren’t the only layout objects that present a challenge. Fields can also be entered even when hidden. In fact, fields are even worse: You can tab into them without clicking at all. They show dotted field frame outlines when you click in a blank spot on the layout. And they sometimes show their information right over the top of your carefully placed coverup. In general, this technique is not suitable for hiding fields. Same goes for Tab controls and Web Viewers.

Finally, sometimes the color behind the thing you’re trying to hide is not consistent. The most typical example is a portal with alternating background colors. In a case like this, there’s no *straight forward* way to decide what color the empty text object should take on when it comes time to hide.

These limitations aside, this technique provides a simple way to add more dynamic behavior to your user interfaces without complicating the underlying data model. That’s almost always a win in my book.
