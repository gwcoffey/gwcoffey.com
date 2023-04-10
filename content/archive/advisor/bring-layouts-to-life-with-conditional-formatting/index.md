---
title: "Bring Layouts to Life with Conditional Formatting"
date: 2007-07-08
archive: advisor
tags: 
  - Archive Post
---

FileMaker Pro 9.0 made its debut a few short weeks ago, and it seems like its ability to connect directly to corporate databases is all anyone wants to talk about. ESS is great and all, but you may be wondering how 9 helps regular FileMaker folk like us. In point of fact, 9 is chock full of fantastic new features that even the most humble database can benefit from right away. Chief among them is *Conditional Formatting*.

With this new capability, your database layouts can literally come alive. Fields can change color when they contain important information. Labels can go bold if the field needs updating. With a little creativity, things can even disappear when they no longer apply. And this isn't just so much eye candy: You can easily build layouts that convey information beyond the raw data. You can guide the user in the right direction, call attention to important discrepancies, and give subtle cues about what will and won't work. (Even if you’re a calculation pro and you think conditional formatting is old news, check out the sidebar “Everything New is Old Again” to get an idea of why conditional formatting is so cool.)


{{< aside title="Everything New is Old Again" >}}
If you're a more advanced FileMaker developer, you may have scoffed at that "conditional formatting" bullet point in the New Features list. After all, the reasoning goes, you could do all this stuff before with clever calculations. But don't turn your back on conditional formatting just yet. It's got a lot going for it:

 - While it's true that calculation fields can do some of what conditional formatting does, they can't do everything. One example is fill color. There's no way to make a calc field white text on a red background when the project's due date passes, for example. With conditional formatting, this can be accomplished with just a few clicks.

 - Speaking of clicks, conditional formatting is point-and-click easy. FileMaker's text formatting functions, on the other hand, are...shall we say...not. They require fiddling with complex calculations, making mysterious piles on your layout, and hand-coding RGB values, whatever that means. When a power feature like this suddenly becomes easier, it means more people will use it. Less nerdy developers will be more productive, and FileMaker databases all over the world will become more usable. That makes FileMaker more popular, which is good for all of us. It's a circle-of-life kind of thing.

 - Most importantly, conditional formatting puts these user interface tasks right where they belong: on the layout. Calculation fields are in your tables. And tables are supposed to be for data. FileMaker has been on a long march towards better data/interface separation (which is a good thing) for several years now, and this is another great step forward. No longer do you have to clutter up your table with a handful of "display only" fields that are hard to change later and just get in the way when you're trying to do real table work.

In short, conditional formatting may not bring new power in absolute terms, but it makes old powers better, easier, and less invasive. The way I see it, that's three times better than the old way. 
{{< /aside >}}

## The Mechanics

Using conditional formatting is easy. Just remember that it applies to layout objects — the things you put on a layout. In particular, you can use conditional formatting with:

 - Text objects (like field labels, and bits of informational text on the layout)
 - Fields on the layout
 - Text-based buttons
 - Web viewers

Imagine you run a computer support hotline. Your FileMaker database keeps track of each of your customers, including their contact information, current balance, and payment information. (You can see just such a database in Figure 1).

{{< figure
    title="Figure 1"
    src="COFFG04B.png"
    width="493"
    height="278"
    alt="A FileMaker Database window in form view. It shows First Name, Last Name, Email, Phone Number, and Credit Card Number fields as well as a large Balance dollar amount and two buttons: \"New Ticket\" and \"New Payment\"."
    caption="This simple database keeps track of your customers. It's not bad either: clean, simple, and easy to use. But with conditional formatting, it can be even better." >}}

Right away, you think of a way to put conditional formatting to use. When a customer's balance is exhausted, they need to pony up before they get more support. That's why the Balance field is prominently displayed on the layout. Nevertheless, when the phone's ringing off the hook, you can easily forget to check it. It would be better if, as soon as you navigate to a drained customer's record, FileMaker could call attention to the problem.

{{< steps >}}

{{< step "In layout mode, select the Balance field. Then choose Format → Conditional." >}}
The Conditional Formatting dialog box pops up. You can see it in Figure 2.
{{< /step >}}

{{< step "Click Add (it's right below the empty white box at the top of the window)." >}}
FileMaker adds a new condition to the top list, and makes the various pop-up menus, fields, and checkboxes in the bottom half of the window available. You're about to define the condition under which you want certain field formatting to apply.

The first pop-up menu under Condition says "Value is," which is just what you want. 
{{< /step >}}

{{< step "From the second pop-up menu, choose \"less than or equal to\"." >}}
Notice that the row of menus and boxes under Condition is starting to form a little statement: "Value is less than or equal to..."
{{< /step >}}

{{< step "In the entry box to the right of the \"less than or equal to\" pop-up menu, enter \"0\" (zero)." >}}
You've told FileMaker your special formatting will kick in when the value in the field gets down to zero — in other words, when the customer's run out of balance. Now you'll tell it how to format the field when this condition is met.
{{< /step >}}

{{< step "Turn on the Fill Color checkbox and pick a dark red color from the color picker to the right of it. Then turn on the Text Color checkbox and pick white from its associated pop-up menu." >}}
When you're done, the Conditional Formatting window looks like Figure 2. 
{{< /step >}}

{{< /steps >}}

{{< figure
    title="Figure 2"
    src="COFFG04C.png"
    width="589"
    height="480"
    alt="The Conditional Formatting dialog box. The condition list has one item with condition \"Value is <= 0\" and format \"Text Color, Fill Color\"."
    caption="You visit the Conditional Formatting dialog box (Format → Conditional in layout mode) to set things up. At the top, you see a list of conditions (you can have more than one). Select one from the list, and FileMaker shows you its settings in the bottom half of the window." >}}

If you click OK and then switch back to Browse mode, you can see your conditional formatting in action. The customer named Jesse Antunes has a zero balance, as you can see in Figure 3.

{{< figure
    title="Figure 3"
    src="COFFG04D.png"
    width="493"
    height="278"
    alt="The same database window as before, but this time the balance, which is now $0, shows white text on a red background (really the background is dark-grey because the image is greyscale)."
    caption="With conditional formatting in play, the balance field really pops when it wants your attention. (It would pop more if this were a color picture — try to imagine that's bright red up there.)" >}}

## Multiple Conditions

You probably noticed that the Conditional Formatting window is topped by a list of conditions. Clearly, you can have more than one. After all, you may need to communicate more than one message to your users. For example, why wait until the balance is totally gone before taking action? It would be better if the balance field turned an equally noticeable but less red-alert shade (like yellow) when the balance starts to reach the danger zone. This is (almost) a snap.

Just follow the same steps you took to add the red color above. Make sure you click Add again to add a second condition. This time, though, choose "less than" from the second pop-up menu, and put "25" in the box. In other words, you want this formatting to take effect when the balance is under $25. Instead of red, pick a shade of yellow, and don't turn on the "Text color" checkbox this time.

If you stop right there and test your layout in browse mode, you may be surprised to discover that it doesn't work quite as you intended. Customers with a low balance get a yellow background as expected. But now, customers with a zero balance do too. Remember you told FileMaker to turn the background yellow when the balance is less than 25. Dash it all: Zero is less than 25. When more than one condition matches, FileMaker tries to apply the formatting for all of them. But in this case, both conditions specify a background color. So the one that comes last in the condition list "wins."

There are lots of ways to fix this problem. The most straight forward is this: Select the "less than 25" condition and change it to "between .01 and 24.99". (When you choose the "between" option, FileMaker gives you two boxes to fill in.) Since this new condition doesn't match the zero scenario, things work as expected.

{{< note >}}
If you're the logically minded type, you may realize that you could just as easily have moved the "less than 25" condition above the "less than or equal to 0" condition in the list. Since FileMaker applies the formatting in order, if the zero condition comes last, it would win instead. Either method will work.
{{< /note >}}

## Formatting Text Objects

Now that you've got the swing of things, you decide to put a little more condition in your formats. Another problem you have is users who forget to fill in the required fields. True, you use field validation to remind them, but when someone's in the middle of a call, it would be much better to clue them in to what still needs attention without a disruptive eleventh hour message box. How about you make the required field labels bold? That's easy to do: just select each one and choose Format → Style → Bold.

But with conditional formatting, you can do one better: Make them bold only when the field is required **and** it hasn't been filled in yet. As your user tabs through the record filling things in, the bold labels will fade away, but if they skip a required field it will be obvious since it's the only one still bold.

Applying conditional formatting to a text object (that's what a field label is) is a little tougher. You're interested in the value in the field, not the label, so you can't just add a condition that starts with "value is..." And FileMaker won't let you if you try. When you choose Format → Conditional with a text object selected, the first pop-up menu for the condition has only one choice: "Formula is."

This time, FileMaker wants you to write a formula (AKA "calculation") to describe when the formatting should be applied. If you're familiar with validation or record access calculations, this will feel familiar. Your goal is to write a calculation that expresses "truth" when the formats should apply. For example, the formula `Customer::Balance < 25` is true when the balance is less than 25. This sort of formula is sometimes called a "boolean" formula because its result is either true or false: the two boolean values.

{{< note >}}
Formula-based conditions are not limited to text objects. You can pick "Formula is" from the pop-up menu no matter what type of object you're formatting. Sometimes you need a formula to express a condition that is more complex than the built-in options can handle.
{{< /note >}}

In this case, your formula should be `IsEmpty ( Customers::First Name ).` The IsEmpty function returns true when the value you send it is empty, which is just exactly when you want your bold formatting to apply.

Once you've specified your condition formula, turn on the Bold checkbox and click OK. Since you're making text switch to bold, you'll need to make the text object a little bigger than it already is. Bold text is wider, and if the object isn't wide enough, the text will get cut off when the formatting is exercised.

You need to repeat these steps for each of the required fields. In Figure 4 you can see how it looks when first name, last name, and phone number have been formatted this way.

{{< figure
    title="Figure 4"
    src="COFFG04E.png"
    width="493"
    height="564"
    alt="Two versions of the same database window. In one, the fields are all empty and the First Name, Last Name, and Phone field labels are bold. In the second, these fields have values and the labels are no longer bold."
    caption="*Top*: The layout now has boldface field labels for each required field. *Bottom*: When you enter text in a field, the boldness goes away as soon as you tab to the next one. In this picture, you can easily see you missed a field." >}}

{{< note >}}
You may be tempted to make the fields bold on the layout, then use conditional formatting to change them back to normal once data is filled in. (You would use the formula `not IsEmpty ( Customers::First Name )` in this case). But this doesn't really work as well as you would hope. First of all, there's no option in the Conditional Formatting dialog box to specify an "unbold" style. You can only turn on the various styles. If you click More Formatting, you do get the option for a "Plain" style, but it is misleading: it doesn't actually do anything. Besides, you don't want plain text, you want italicized text. If you use conditional formatting to toggle text styles, you need to have the unstyled version on the layout and use a condition to apply the style. If you get confused trying to write your formula this way just remember you can put "not" in front of any boolean formula to reverse its meaning.
{{< /note >}}

## Background Colors

Although it isn't immediately obvious, you can use conditional formatting to put background colors on the layout to call attention to a particular section of the screen. Since conditional formatting only applies to a few select objects, the trick is to find one that you can bend to your will. Take the text object: It is rectangular, you can make it any size and aspect ratio you want, and it can be formatted conditionally.

In other words, it makes a great little layout decorator. For example, suppose you want the entire CC Number section of the layout to highlight when the credit card has expired. It's very easily done:

{{< steps >}}

{{< step "In layout mode, use the text tool to add a new text object in a convenient blank spot." >}}
It doesn't matter where you put it. You're going to size and move it in a moment.
{{< /step >}}

{{< step "Type a single space, then click outside the text object to finish editing." >}}
If you leave it entirely blank, FileMaker assumes you made a mistake and deletes it. With a single space, it will be invisible, but it won't get yanked.
{{< /step >}}

{{< step "Using the Format → Conditional command, make this text object turn pale yellow with this condition formula: `Customer::Expiration Date <= Get ( CurrentDate )`. Then click OK." >}}
This color will kick in when the card expires.
{{< /step >}}

{{< step "Position the text object over the credit card information (fields, labels, and all), resize it so it fills the available space, and choose Arrange → Send to Back so it doesn't cover the things it's trying to highlight." >}}
When you've completed these steps, switch to browse mode and find a record with an expired credit card. Figure 5 shows the result.
{{< /step >}}

{{< /steps >}}

{{< figure
    title="Figure 5"
    src="COFFG04F.png"
    width="493"
    height="278"
    alt="The same databse window. This time there is a grey background behind the credit card input area."
    caption="Using an almost-empty text object like wall paint, you can color sections of your layout for a very cool effect. In this case, since the credit card is expired, the entire credit card section of the layout highlights." >}}

{{< note >}}
If you get even more creative, you can use this technique to make things completely disappear. Just put a clear text object right over the top of them, and set it to fill with a color that matches the background when you want the items hidden. Remember, though, that elements you hide this way are only invisible. They're still there, and they can still be clicked, tabbed in to, or otherwise harassed. So this technique is really only suitable for non-enterable fields, pictures or icons, and blocks of text.
{{< /note >}}

## Disabled Buttons

One of the most frustrating symptoms of a static layout is buttons that shouldn't be clicked. Some FileMaker layouts have lots of buttons (after all, it's all about functionality). And more often than not, some of those buttons don't really make sense at any given moment. Maybe you have a button to email your student's legal guardian that won't work when the Email Address field is empty. Or perhaps the New Order button doesn't do anything when the account is on hold. In cases like this, it would be fantastic if you could show your users that the button won't work before they bother clicking it.

In your Customers database, for example, the New Ticket button already refuses to do its deed when the balance is gone (because that's how the script it runs is written — we're pretending here, remember?). But even with a zero balance, it sits there, bewitching your users with its clickable appeal. Luckily, everybody knows a button with a grayed-out label is off limits. Are you thinking what I'm thinking?

Using conditional formatting, make the button's text color turn gray when 	`Customers::Balance <= 0.` As Figure 6 attests, this small change makes the layout decidedly more obvious.

{{< figure
    title="Figure 6"
    src="COFFG04G.png"
    width="493"
    height="278"
    alt="The same databse window. This time the \"New Ticket\" button is greyed out."
    caption="You don't have to be very anal to agree this version of the layout is much better. There's no way in the world your sighted users would think they should click the New Ticket button. Tiny cues like this can mean the difference between frustration and felicity for your users." >}}

Of course you could use conditional formatting to call attention to a button instead. Maybe you want the New Payment button to brighten when in this situation. Brightly lit dynamic buttons are especially useful when your system has obvious next steps: Create Order, Post Payment, Send Shipment, for example.

## One Last Hack

There's one compelling facet of conditional formatting that may be useful to the extra-imaginative developer. Unlike calculation-based formatting, conditional formatting on a field goes away as soon as you click into that field to make changes. Chances are good that industrious FileMaker gurus will come up with all kinds of interesting ways to take advantage of this fact.

Here's one small example: If you're security-minded, that credit card number field might be making you nervous. There it sits, announcing sensitive information to any passersby. In today's connected world, what are the chances someone will use remote control software to help out one of your users, and unwittingly see what should be secret? Or maybe your user will take a picture of the funny message on their screen and email it off to a dozen friends, not noticing the private information in the background.

In older versions of FileMaker, it was not uncommon to use white text to combat this kind of casual exposure. If the credit card number is white, and the field is white too, then it can't be easily seen. But this technique has a glaring problem: You can't see it when you need it either. Whether your user is trying to edit the number that's there, or enter it into a credit card terminal, they'll need some other way to see the information, which means more work for you.

Instead, leave the text color set to black. But use conditional formatting to turn the text and fill colors light gray (or any other color you want) when the field is not empty (set the condition up to say "Value is not equal to" and leave the entry box blank.) Now the text is utterly invisible until you actually click into the field. And because the field is filled with color, your users know the number really is there when they need it. A truly empty field will be white instead. Check it out in Figure 7

{{< figure
    title="Figure 7"
    src="COFFG04H.png"
    width="493"
    height="564"
    alt="Two copies of the databse window again. On the top, the Credit Card field shows solid greay—no text is readable. On the bottom the user has clicked into the field and the credit card number is displayed.."
    caption="Top: Because conditional formatting reverses itself when you click into the field, you can use it to mask sensitive information from sight. You can tell the Credit Card Number field here is not empty, because it's filled with gray. But you can't see the data. Bottom: When you click (or tab) into the field, the data instantly appears." >}}

Conditional formatting is one of the neatest things to find its way into FileMaker in a long time. It's simple, to be sure, but it can bring tangible improvements to almost any user-oriented layout. And it's much more powerful than it might seem at first. With the skills and techniques you've learned here, you can start bringing your own layouts to life.