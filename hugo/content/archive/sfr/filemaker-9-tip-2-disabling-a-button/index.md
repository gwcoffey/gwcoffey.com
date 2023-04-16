---
title: "FileMaker 9 Tip #2: Disabling a Button"
date: 2007-07-10
archive: sfr
tags: 
  - Archive Post
---

In the old days, we used to joke that FileMaker’s user interface tools were stuck in the 1970s. You could make a long list of things *every application in the world did* that were hard to do in your own FileMaker-based systems. In the last several years, though, FileMaker Inc. has knocked a lot of biggies off this list: Custom Menus, Tab Controls, modern-looking check boxes and radio buttons. Oh wait, scratch that last one.

Now we’re left to fuss about things that are a lot less significant. But one area of constant annoyance in my user interface work is disabled buttons. I got my first Mac in 1986, and way back then, if some button on the screen just didn’t apply, it was sensibly grayed out, giving the user a clear indication that it wasn’t worth clicking. But in FileMaker, if you put a button on a layout, it has just one look. Even if you-the-wise-developer know exactly when it shouldn’t be clicked, you have no simple way to tell your user. Or do you?

Sometimes, when it was important enough, you may have added a calculation field to the table that you could layer over the top of the button to simulate grayed out text. But anyone whose read much on this blog knows I’m loathe to add anything but real data to my tables. So this method, while possible, is far from perfect.

Today, though, with the release of FileMaker 9, you now have a fantastic option for disabling buttons: use **Conditional Formatting**. Most of the conditional formatting examples you’ve seen have focused on fields and field labels. But FileMaker dutifully lets you assign conditional formatting to a standard button as well.

Just select the button and choose Format → Conditional. You can tell FileMaker to turn the button’s label and/or fill color to a lighter shade of *whatever* under any condition you can dream up (you use a calculation formula to decide when each custom format applies).

Here’s a closeup of one of my databases before and after this technique is applied:

{{< figure src="disabled_buttons_before.png" 
           width="183"
           height="93"
           alt="Two beveled grey buttons, one labeled \"Send Email\" and the other labeled \"Create Order\""
           caption="Two buttons. Nothing really wrong with this at first glance. But what if the email address is empty?">}}

{{< figure src="disabled_buttons_after.png"
           width="183"
           height="93"
           alt="The same buttons but this time the \"Send Email\" button has greyed out text making it look disabled."
           caption="This version makes it clear to the user that the Send Email function isn't available right now.">}}

Can you guess which one comes from a record with no email address? Thought so.

{{< aside title="Editors Note" >}}
I’m sure Geoff meant to add this but it must have slipped his mind…. This method for disabling buttons just makes the button **appear** to be disabled. Don’t confuse this for actually disabling the button completely. To kill the button completely, I would suggest using a custom function in your conditional formating. It should return `true` when the button should be clickable. Then you can just put that same custom function in an If block around your script too like so:

```
If [ my custom function ]
   // all my scripting stuff
End If
```

Now you have yourself a completely disabled button! The last nice addition would be to get that darn arrow to disappear…. but alas… the FileMaker 9 gods have chosen to keep that ability away from us mere mortals.

– Jesse
{{< /aside >}}