---
title: "Use Tooltips to Guide Your Users"
date: 2007-03-19
archive: advisor
tags: 
  - Archive Post
---

If you've used a computer sometime in the last five years, chances are you've seen tooltips. These informational little  boxes pop up to help you out when you point at just about anything on the computer screen, from a toolbar icon to a truncated file name (Figure 1). Tooltips are so common, in fact, that many users know to look for them whenever they're not sure what a particular button, icon, slider, or knob will do.

{{< figure
    title="Figure 1"
    src="COFFG03A.png"
    width="432"
    height="380"
    alt="Detail of the Finder window in Mac OS X, and the Internet Explorer window in Microsoftw Windows. In each case the mouse arrow is pointing at an element in the window toolbar, and a tooltip is shown explaining the button. The tooltips are floating rectangles with text in them. Yellow on the Mac and grey on Windows."
    caption="Whether your users are on Mac OS X or Windows, they are exposed to tooltips every day. The top picture shows a tooltip in the Finder on Mac OS X. The bottom picture has a tooltip in Internet Explorer on Windows Vista." >}}

You've probably seen tooltips in FileMaker Pro before too: they pop up when you point to items in the tool bar. What you may not realize, though, is that with FileMaker Pro Advanced 8.0 or later, you can add your own custom tooltips to your database solutions. If you have icons to represent different sections of your system, for example, you can tell FileMaker to show a tooltip with the text you specify whenever the user holds her mouse arrow over the icon. 

Tooltips are a fantastic user interface enhancement because they make your database easier for beginners to learn by providing targeted help for any item that might need explaining. At the same time, they don't clutter the interface for more advanced users. In fact, your power users can cruise through your layouts and never know the tooltips are there. And best of all, they're super easy to add to your existing databases.

## Adding Tooltips to Your Layouts

Before you start adding tooltips, you need to make sure you have FileMaker Pro Advanced. Although users with the basic version of FileMaker Pro can see the tooltips you define, you must have the Advanced version to define them in the first place. Once you have your database open in Advanced, you can assign a tooltip to any element on any layout. The simplest example is a button. Suppose you have a button on your layout that is a picture of a letter and envelope. You know that this button creates a new email message for the person in the database, but your user may not know this. To add a helpful tip to this button, follow these steps:

{{< steps >}}

{{< step "Switch to Layout Mode, navigate to the correct layout, and select the button." >}}
When the button is selected, FileMaker will show little square \"handles\" on its four corners.
{{< /step >}}

{{< step "From the Format menu, choose Set Tooltip..." >}}
The "Set Tooltip" dialog box appears.
{{< /step >}}

{{< step "Enter \"Create a new email message for this person.\" in the Set Tooltip dialog box, then click OK" >}}
The dialog box closes and you're back on the layout. Nothing has changed yet because tooltips only show in Browse mode.
{{< /step >}}

{{< /steps >}}

Now if you switch back to browse mode, point to the button with your mouse, and wait a few seconds, the tooltip will appear. You can see it in Figure 2 as well.

{{< figure
    title="Figure 2"
    src="COFFG03B.png"
    width="704"
    height="333"
    alt="A database window showing a company record with a portal of contacts. Each contact has a name, phone number, and email address. There is a small envelope icon next to each email address. The mouse arrow is pointing to one of these, and the tooltip is showing with the text entered above."
    caption="Using a custom tooltip, this FileMaker database now teaches the user what the Email button does. Without the tooltip, the simple icon could confuse a new user." >}}

## Dynamic Data in Tooltips

Often, a tooltip is just as simple as this: a single piece of text that always shows when you point to a button. But your tooltips can be more dynamic if you want. For example, the tooltip you just created might be better if it told the user who the email would be addressed to. FileMaker provides the full power of its calculation engine to tooltip text, so this is easily done. Just select the button and choose Format → Set Tooltip... again. This time, though, don't simply type in the empty box. Instead, click the Specify... button. FileMaker shows you the standard Specify Calculaiton dialog box. You can use any calculation you want. When FileMaker shows the tooltip, it will evaluate the calculaiton and display the result. For example, you could use this calculation for your Email button:

```text
"Create a new email message for " 
   & Contacts::First Name 
   & " " 
   & Contacts::Last Name 
   & "."
```

Now when you test your tooltip, it will include the name of the person who will be emailed, giving the user a little more information.

## Turning Tooltips On and Off Dynamically

Occasionally a tooltip that makes sense most of the time doesn't make sense in certain situations. For example, your email button doesn't work if the person has no email address. If the user points to the button by an empty email address field, the tooltip will incorrectly claim that the button will create an email message.

You may be tempted to make the tooltip slightly more dynamic; In other words, you can include a different message if the Email Address field is empty. You already know how to do this using a calculation like this:

```text
If (IsEmpty(Email Address),
  "This person has no Email Address.",
  "Create a new email message for " 
     & Contacts::First Name 
     & " " 
     & Contacts::Last Name 
     & "."
)
```

The tooltip will now show one of two different messages, depending on what's in the Email Address field.

But in some cases, it would be better if the tooltip simply didn't show up in a case like this. In other words, it would be nice if you could turn the tooltip off if the email address field is empty. In fact, this is easy to do: Whenever your tooltip calculation has no result (or results in just "") FileMaker won't show the tooltip at all. This way your user only sees a tooltip when the button will actulaly do something. To get this behavior, you can use a calculation like this:

```text
If (Not IsEmpty(Email Address)),
  "Create a new email message for " 
     & Contacts::First Name 
     & " " 
     & Contacts::Last Name 
     & "."
)
```

As you can see, this calculation has no result if the Email Address field is empty. Similarly, if you want to remove the tooltip for an object, return to the Set Tooltip dialog box and empty out the Tooltip calculaiton. An empty calculation never has a value, and so the tooltip never shows.

## Advanced Tooltips

It is also important to note that tooltips aren't limited to buttons. You can put a tooltip on any object on a FileMaker layout. For example, you could include special instructions for a specific field by assigning a tooltip to the field itself, or explain what records are showing in a portal by assiging a tooltip to it.

As you add tooltips to your database, it can quickly get difficult to keep track of what has a tooltip and what doesn't. To deterine if an item has a tooltip, it seems like you have to select it, choose the Format → Set Tooltip menu command, and check the contents of the Tooltip box. That's a lot of work, and a layout can have hundreds of objects. Luckily, FileMaker makes it much easier. When in layout mode, choose View → Show → Tooltips. When this option is turned on, FileMaker puts a little yellow sticky note icon next to each object that has a tooltip. These icons only show in Layout mode, so you don't have to worry about them disrupting your pristine user interface, but they serve as a handy reminder as you customize the layout. This is especially useful when you duplicate an item. If you duplicate a field with a tooltip, the tooltip comes along with it, but this is rarely what you want. When tooltips are showing in Layout mode, you are reminded to remove the tooltip from the new copy.

## When to Use Tooltips

Some say that tooltips should only be used to provide help or tips about the use of the system. For example, explanations of what to type in a field, what a button does, and where a piece of information comes from are all good tooltip candidates. On the other hand, most user interface experts caution that a tooltip should not be the source of actual information. Your email program probably doesn't use tooltips to show you how many email messages you have, or who wrote a particular message.

This guideline is based on two simple facts: First, there is no way to tell by looking whether a particular element will have a tooltip or not. For example, the Email button looks just the same now as it did before you gave it a tooltip. So it isn't obvious to the user that more information might exist under the covers. Second, tooltips can be slow since you can't click anything to make them show. Instead you have to point and wait. That little two second wait can seem like an eternity if you have to do it all day long to get at critical information you need to do your job. On the other hand, if the tooltip only shows information useful for new users, it is easily accessible, but will never slow down a power user.

This rule makes good sense for database systems that you sell to end users. After all, this is how most desktop applications work, and it is better for you and your users if your application feels familiar to a novice. So if you don't work directly with your end users, you should probably stick to help-only tooltips.

On the other hand, if your database is used by people in your company, and will be a major part of their day-to-day activities (as is often the case with a FileMaker database) you might be able to bend this rule somewhat. Most systems in this category are used by a small number of people all day long, and those users have ample opportunity to train on the ideosyncrasies of the system. As such, it might make sense to make more liberal use of tooltips. You can always train the user to know where to look, making the first tooltip concern a non-issue. And as long as the data in the tooltip is not the most critical and often-needed information, the user won't need to visit it often, making the short delay acceptable.

In an environment like this, it might make sense to include record access information (last modified by, and so forth), extra details about a record (lesser-needed fields that don't fit on the portal, for example), and other non-critical data in your tooltips. They are a super-convenient way to tuck some information out of site and leave it in an easy-to-reach spot. Best of all, when your user gets the data they need from a tooltip, they don't have to leave the current layout and potentially lose track of where they are in the system.

Tooltips are powerful, user-friendly, and familiar user interface elements that are drop-dead easy to take advantage of with FileMaker Pro Advanced 8.0 or 8.5. If you have lots of users, or value efficiency, chances are you can find a handful of ways to make your solution easier to understand and use with a sprinkling of tooltips on your layouts.