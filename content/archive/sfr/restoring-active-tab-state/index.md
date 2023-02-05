---
title: "Restoring Active Tab State"
date: 2007-11-23
archive: sfr
---

{{< aside >}}
This article is out of date now. If you’re using FileMaker Pro 10 or later, you can accomplish this goal more easily using script triggers. See [this newer article](../script-triggers-monitoring-and-restoring-tabs/) for details.
{{< /aside >}}

If you use Tab Controls a lot (and don’t we all?) then you may have run into a little snag: When you switch to a different layout, then come back again, the default tab panel comes back to the front. This is usually not a big deal. But sometimes you have a script that switches layouts just for a moment. When this script runs, the user never sees the layout change, but they *do* see the tab control mysteriously bounce back to its home base. This article shows you how to fix this problem once-and-for-all.

{{< note >}}
As usual, I’m going to pontificate here a bit before I get to the solution. If you just want the goods, [scroll to the end](#a-generalized-solution) where you’ll find the relevant scripts and sample usage. If, on the other hand, you enjoy my ramblings, just keep on readin’
{{< /note >}}

## The Problem

If you’re wondering what, exactly, we’re talking about here, consider this. You have a tab control on your layout that looks something like this:

{{< figure src="tab_control.png" 
           width="347"
           height="197"
           alt="A FileMaker tab control with two tabs: \"Address\" and \"Notes\". (In this illustration the tab content is empy—just a blank grey box."
           caption="A basic tab control." >}}

Now suppose you have a button in the Note tab to add a new note record. It runs this script:

```
Freeze Window
Set Variable [ $contact_id, CONTACT::ID ]
Go to Layout [ #Note ]
New Record / Request
Set Field [ NOTE::CONTACT_ID ; $contact_id ]
Go to Layout [ Original Layout ]
```

When your user clicks this button, they won’t see much happen on the screen at all, since the script happens quickly, behind the scenes. But unfortunately, because of the layout change, FileMaker will switch back to the default Address tab:

Ick.

## A Specific Solution

[In the end](#a-generalized-solution), we’re going to solve this problem very generically, using some lesser-known FileMaker features. But before we get there, we’ll solve this one case the so-called *easy* way. What we want is a way to switch our tab control *back* to the Notes tab at the end of the script. This, it turns out, isn’t really that hard.

FileMaker 8.5 introduced a new script step called `Go to Object` for just this purpose.

{{< figure src="go_to_object_options.png" 
           width="458"
           height="222"
           alt="The \"To To Object Options\" window in FileMaker. It has two input fields: \"Object Name\" and \"Repetition\". Each input field has a \"Specify\" button next to it."
           caption="FileMaker 8.5 introduced the Go To Object script step when you need to \"go to\" something that isn't a field." >}}

But this script step wants an *Object Name*. In 8.5 and later, it turns out you can name any object on the layout, including individual tab panels. Once you give the Notes tab panel an object name, this script step will cause it to come to the front.

{{< aside title="What's in a name?" >}}
You might be thinking, “But the Notes tab panel already has a name: Notes.” Confusing? Yes. But in truth, “Notes” is the tab panel’s *label*. Its name is something completely different, and for good reason. Suppose you decide to abbreviate a tab panel label, or translate it to French, or improve its wording for clarity. Whatever the reason, you can change tab panel labels all you want, and never worry that you’re breaking a script. Because your scripts use the object name, which your user never sees, and you are unlikely to need to change.
{{< /aside >}}

To change an object’s name, you use the Object Info palette (View → Object Info):

{{< figure src="object_info.png" 
           width="137"
           height="303"
           alt="FileMaker's Object Info palette, showing, among other things, an input field at the very top labeled \"Object Name\"."
           caption="The Object Info palette gives you lots of control over an object. You can precisely enter its size and position, configure its [Auto-resize](../filemaker-9-tip-3-get-the-most-from-auto-resize) behavior, and—most important for this technique—edit the \"Object Name\"." >}}

In Layout mode, just select the object you want to name, then type something in the Object Name box in this window. Tab controls are a little tricky though: You need to be sure you select the tab panel itself. This usually requires two clicks on the tab — one to bring it to the front, and a second to select it. When a tab panel is selected, the tab itself will have a heavy black outline:

{{< figure src="selected_tab.png" 
           width="347"
           height="68"
           alt="Detail of the same tab panel as above. The \"Notes\" tab button itself has a heavy black outline."
           caption="In Layout Mode you can select individual tab panel buttons by clicking a second time after bringing the tab to the front." >}}

Once you select a tab like this, you can name it in the Object Info palette. In this example, I named the tab `notes_tab`.

{{< note >}}
There’s no rule that you have to use underscores, or can’t use spaces or capital letters. You can name an object just about anything you want. I like geeky names like this to remind me that these names are not user-visible.
{{< /note >}}

Finally, just add the `Go to Object` step to the end of the script:

```
…
Go to Object [ Object Name: “notes_tab” ]
…
```

Now, when the script runs, it switches layouts, does its job, switches back, and then brings up the Notes tab. From the user’s perspective, it all *just works*:

## A Generalized Solution

The solution above works well in a simple case like this. But it has a few flaws:

1. This script assumes we always want the Notes tab to appear. What if this button were unrelated to the tabs? Then we wouldn’t really want to go to the Notes tab every time. Instead, when we return to the original layout, our script would have to switch to whatever tab was showing before. That would require more complicated scripting.

2. This layout only has one tab control. What if it had two? Or five? The script makes sure the Notes tab is showing, but what about all the others? It would be annoying to the user to have other tab controls switching by themselves, and it would be annoying to the developer to have to hand-code a solution for each and every tab control in each and every script.

3. If you solved both these problems, you’d have to think pretty hard. And I don’t like to think hard any more than absolutely necessary. It is, in my mind, not ideal to have to repeat complicated tab-management scripting in every script that changes layouts.

Now, imagine a more generic solution. Suppose there were a way to get FileMaker to “memorize” the state of each and every tab on the layout. Then, later, you could ask FileMaker to restore those states. This way, you wouldn’t have to worry yourself about *which* tabs are showing in particular. And you could have as many tab controls as you want on a layout. In fact, you could add and remove tabs and tab controls at any time, and never have to modify any tab management scripting.

Best of all, it is *easy* to add a Memorize step to the top of your script, and a Restore step to the end each time you need it. No thinking necessary.

So how would you go about implementing such a thing? It is possible, but a touch tricky. Of course you’ll have two scripts. The first will memorize tab states, and the second will restore them. So let’s take them one at a time.

### Memorizing tab states…

To memorize all the front-most tabs, you’ll need some way to look at each one. This, it turns out, is pretty easy. FileMaker has a function called `LayoutObjectNames` that gives you back the name of every object on the layout. Unfortunately, it gives it to you in a rather odd format, chock full of `<` and `>` signs to indicate how things are nested. For this solution we don’t care about any of that, so we simply get rid of it. Our script, then, starts like this:

```
Set Variable [ $object_names, Value: 
  Substitute(
    LayoutObjectNames(Get(FileName); Get(LayoutName)) & ¶; 
    [“>¶”; “”]; 
    [“<¶"; ""]
  )
] 
```

In other words, we ask FileMaker for the `LayoutObjectNames` and then substitute out all the `>` and `<` so we're left with a clean list. When we're done, the `$object_names` variable contains a return-separated list of every named object on the current layout. 

{{< note >}}
That’s an important sentence. This technique only deals with *named* objects. So for this script to work, you’ll have to give all your tabs names. This is a small price to pay, though, for a user interface that works properly. Just remember, whenever you add a new tab panel, be sure to give it a unique name in the Object Info palette.
{{< /note >}}

Next, for each object in the list, we can ask FileMaker if it’s the selected tab panel for its particular tab control. Of course this list of object names could include *all kinds of objects*. You might have named portals, web viewers, fields, or even lines and rectangles. Technically we’re only concerned with the names in the list that refer to tab panels. But in practice it doesn’t really matter. We’ll say, “Hey FileMaker, is this the front tab panel?” and FileMaker will answer `True` if the object is, in fact, a tab panel *and* it is selected. So when FileMaker says `True` we’ll know *both* that we have a tab panel, *and* it is selected.

It’s easier to explain in code:

```
Set Variable [ $object_names, Value: 
  Substitute(
    LayoutObjectNames(Get(FileName); Get(LayoutName)) & ¶; 
    [“>¶”; “”]; 
    [“<¶"; ""]
  )
] 
Set Variable [ $i, Value: 1 ] 
Loop 
  Set Variable [ $object, Value: GetValue($object_names, $i) ] 
  Exit Loop If [ IsEmpty($object) ] 
  If [ GetLayoutObjectAttribute($object, "isFrontTabPanel") = True ] 
    Set Variable [ $front_tabs, Value: $front_tabs & $object & ¶ ] 
  End If 
  Set Variable [ $i, Value: $i + 1 ] 
End Loop 
Set Variable [ $$memorized_tab_states; Value: $front_tabs ] 
```

This snippet of script needs to loop through a return-separated list. To do that, it uses a counter variable called `$i`. This variable starts at `1` and goes up, one by one, until it gets to the end of the list. Hence, the first line sets this variable to `1`. Then, this line puts the first object name in a new variable: 

```
Set Variable [ $object, Value: GetValue($object_names, $i) ] 
```
Later in the loop, we set `$i` to itself, plus `1`, and do the whole loop over again. So the second time through the loop, we'll grab the *second* object name. Then the *third*, and so forth. Eventually, of course, we'll get to the end of the list. When we do, the `$object` variable will be empty. So in that case, we exit the loop: 

```
Exit Loop If [ IsEmpty($object) ] 
```

Next up, these lines do the real work: 

```
If [ GetLayoutObjectAttribute($object, "isFrontTabPanel") = True ] 
  Set Variable [ $front_tabs, Value: $front_tabs & $object & ¶ ] 
End If 
```

First, we use FileMaker's `GetLayoutObjectAttribute` function with its `isFrontTabPanel` parameter to find out if `$object` is the name of a front-most tab panel. If it is, we add it to a new list in a variable called `$front_tabs`. When the loop is finished, `$front_tabs` is a list of all the named tab panels on the layout that are front-most. If you name *all* your tabs (and you should) then it's a nice list of all the front tabs. Finally, to "memorize" this information, just put it in a global variable: 

```
Set Variable [ $$memorized_tab_states; Value: $front_tabs ] 
```

### Restoring tab states…

With a variable listing the front-most tabs, we can pretty easily restore things. We just need to loop through each name in the `$$memorized_tab_states` variable, and use `Go to Object` on each one. Here's how the script looks: 

```
Set Variable [ $i, Value: 1 ] 
Loop 
  Exit Loop If [ IsEmpty(GetValue($$memorized_tab_states, $i)) ] 
  Go to Object [ Object Name: GetValue($$memorized_tab_states, $i) ] 
  Set Variable [ $i, Value: $i + 1 ]
End Loop 
```

This script uses a loop with a counter variable just like before. The rest is relatively self-explanatory. 

### The Full Solution

To recap, here are the two scripts.

**Memorize Tab States** :=

```
Set Variable [ $object_names, Value: 
  Substitute(
    LayoutObjectNames(Get(FileName); Get(LayoutName)) & ¶; 
    [“>¶”; “”]; 
    [“<¶"; ""]
  )
] 
Set Variable [ $i, Value: 1 ] 
Loop 
  Set Variable [ $object, Value: GetValue($object_names, $i) ] 
  Exit Loop If [ IsEmpty($object) ] 
  If [ GetLayoutObjectAttribute($object, "isFrontTabPanel") = True ] 
    Set Variable [ $front_tabs, Value: $front_tabs & $object & ¶ ] 
  End If 
  Set Variable [ $i, Value: $i + 1 ] 
End Loop 
Set Variable [ $$memorized_tab_states; Value: $front_tabs ] 
```

**Restore Tab States** := 

```
Set Variable [ $i, Value: 1 ] 
Loop 
  Exit Loop If [ IsEmpty(GetValue($$memorized_tab_states, $i)) ] 
  Go to Object [ Object Name: GetValue($$memorized_tab_states, $i) ] 
  Set Variable [ $i, Value: $i + 1 ]
End Loop 
```

Using these in your own scripts is a breeze. First, memorize before you *leave* a layout. Then restore when you come back. 

```
Perform Script [ Memorize Tab States ] 
Go to Layout [ Whatever ] 
... do some stuff ... 
Go to Layout [ original layout ] 
Perform Script [ Restore Tab States ]
```

Easy as pie.

## The Enhanced Solution 

The solution above will work fine in nearly every case. But here at Six Fried Rice, we like things that work fine **every time**. This usually involves a tad more complexity. If you're a stickler for safety, like us, you might worry about one tiny detail here. Suppose your script looks more like this: 

```
Perform Script [ Memorize Tab States ] 
Go to Layout [ Whatever ] 
... do some stuff ... 
Perform Script [ Some Other Script ] 
... do some more stuff ... 
Go to Layout [ original layout ] 
Perform Script [ Restore Tab States ] 
```

Notice that, in the midst of its work, this script performs *another* script called Some Other Script. Now suppose Some Other Script looks like this: 

```
Perform Script [ Memorize Tab States ] 
Go to Layout [ Who Cares ] 
... do some stuff ... 
Go to Layout [ original layout ] 
Perform Script [ Restore Tab States ] 
```

Do you see the problem? When Some Other Script calls Memorize Tab States, it blows away the `$$memorized_tab_states` global variable. Now the Restore Tab States call in *your* script won't work. This problem is even more pernicious if you consider that when you write your script, Some Other Script might *not* do any memorizing. In that case, your script works just fine. ("I tested this! I *really did*!") Later, you or someone else might *add* memorizing to the sub script. When you do, you have no obvious way of knowing which scripts might be effected, so you would probably never guess you were breaking things. That, my friends, is how bugs happen even when you test things very thoroughly. In the Six Fried Rice labs, we call upon [our dictionary functions](http://sixfriedrice.com/wp/filemaker-dictionary-functions/) to solve this problem. 

Instead of storing the list of front-most tabs in the `$$memorized_tab_states` global variable, we store a *dictionary* of tab states. We use the layout name as the key, and the list of front tabs as the value. This way, the global variable can hold a tab list for *each layout*. Now, if two scripts use these functions, and they call one another, they won't hurt things. Either they're working on different layouts, in which case they'll keep separate lists. Or they're on the same layout, in which case the list of active tabs is the same. Here are the revised scripts. Bear in mind, though, that these use the dictionary functions linked above. 

**Memorize Tab States** := 

```
Set Variabls [ $object_names, Value: Substitute(
  LayoutObjectNames(Get(FileName); Get(LayoutName)) & ¶; 
  [">¶”; “”]; 
  [“<¶"; ""]
) ] 
Set Variable [ $i, Value: 1 ] 
Loop 
  Set Variable [ $object, Value: GetValue($object_names, $i) ] 
  Exit Loop If [ IsEmpty($object) ] 
  If [ GetLayoutObjectAttribute($object, "isFrontTabPanel") = True ] 
    Set Variable [ $front_tabs, Value: $front_tabs & $object & ¶ ]
  End If 
  Set Variable [ $i, Value: $i + 1 ]
End Loop 
Set Variable [ $$memorized_tab_states; Value: 
  DictReplace($$memorized_tab_states, Get(LayoutName), $front_tabs) 
] 
```

**Restore Tab States** := 

```
Set Variable [ $front_tabs, DictGet($$memorized_tab_states, Get(LayoutName)) ] 
Set Variable [ $i, Value: 1 ] 
Loop 
  Exit Loop If [ IsEmpty(GetValue($front_tabs, $i)) ] 
  Go to Object [ Object Name: GetValue($front_tabs, $i) ] 
  Set Variable [ $i, Value: $i + 1 ] 
End Loop 
```

These are just like the simpler versions except they use `DictReplace` and `DictGet` when dealing with the `$$memorized_tab_states` global variable. Whichever method you prefer, these scripts are an essential tool for FileMaker UI work.
