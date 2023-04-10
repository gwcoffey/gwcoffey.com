---
title: "Script Triggers: Monitoring and Restoring Tabs"
date: 2009-01-19
archive: sfr
tags: 
  - Archive Post
---

FileMaker 10’s new Script Triggers feature just keeps delivering. You might, at first, think triggers are limited to layouts and fields, but it turns out your triggers can fire with all kinds of objects. In this article we’ll show you how to run scripts when users switch tabs on your tab controls. In the end, we’ll also revisit a common FileMaker problem: tabs switch when you switch layouts. We’ll show you how to solve this problem quickly and easily using script triggers.

## Triggers with Tabs

It is unfortunately not entirely obvious, but Script Triggers work with tab controls. Specifically:

* The `OnObjectModify` trigger fires whenever the user switches to a different tab. This is probably the most useful trigger for tab controls.

* The `OnObjectEnter` trigger fires when the tab control gets keyboard focus. This happens when it is in the tab order and you tab to it (so a tab gets the thick black border). You can see a tab control with keyboard focus here:

{{< figure src="tab-with-keyboard-focus.png" 
           width="409"
           height="291"
           alt="A FileMaker database with a three-tab tab control. (IN this illustration the tabs are empty.) The middle tab has a thick black border indicating it has keyboard focus."
           caption="In FileMaker you can tab (the key) into a tab (the user interface element). When you do, it looks like this." >}}

* The `OnObjectExit` trigger fires when the tab control *loses* focus. In other words, when you tab *away* from it.

* The `OnObjectKeystroke` trigger fires when the tab control has focus and you press any key on the keyboard.

## Watching the Tab Change

Once you know all that, keeping tabs on your tabs (sorry) is easy. For example, suppose you want to show a special message under some circumstances when someone switches to a particular tab. Setting this up couldn’t be easier:

{{< steps >}}

{{< step "Write a script that does what you want." >}}
For example, it might show a dialog box, calculate a total, set a global, or clear a selection. 
{{< /step >}}

{{< step "In Layout mode, select your tab control, then choose Format → Set Script Triggers…" >}}
The Set Script Triggers dialog box appears.
{{< /step >}}

{{< step "Turn on the OnObjectModify checkbox." >}}
You’ve just told FileMaker you want to run a script, so it asks you which script to run.
{{< /step >}}

{{< step "Select the script you created in step 1." >}}
When you’re done here, click OK, then switch to Browse mode. You’re ready to test.
{{< /step >}}

{{< /steps >}}

As this video attests, your script now runs as soon as the user switches to *any* tab:

{{< mov src="trigger-script-on-tab-change.mov" caption="FileMaker can now run scripts whenever a tab control switches tabs. And scripts can, as always, do a lot of stuff." >}}

## Which Tab

If you watched the video closely, you may have noticed that the scripted dialog box showed *which tab* was selected. With only one trigger script, how do you manage this? You just have to ask.

FileMaker’s esoteric `GetLayoutObjectAttribute` function can tell you all kinds of information about objects on your layout. Of particular interest, it can tell you if a tab panel is *front most*. To use it, though, you first need to give your tabs *object names*. We’ve [showed you how to do this before][names] but here’s a quick refresher. If you’re already an object names expert, you can [skip ahead][skip].

[names]: http://sixfriedrice.com/wp/tab-controls-without-the-tabs/
[skip]: #restoring-tab-state

{{< steps >}}

{{< step "In Layout mode, click on your tab control to select it." >}}
When you click, the first tab gets a thick black border. This tells you that specific tab panel is selected. (You can have an entire tab control selected, without selecting any of its individual panels. You’ll see this in a moment.)
{{< /step >}}

{{< step "Choose View → Object Info to show the Object Info palette." >}}
This is where you go to set object names (among other things). Since its a palette, you can simply leave it open while you work through all your tabs.
{{< /step >}}

{{< step "In the Object Name box in the Object Info palette, type a unique and identifying name for your tab." >}}
You might call it “tab1” or “customer tab” or whatever you feel is appropriate.
{{< /step >}}

{{< step "Click the second tab in your tab control." >}}
The second tab comes to the front but it is not selected. Notice it doesn’t have a thick border.
{{< /step >}}

{{< step "Click once again on the second tab." >}}
This time it gets its thick border. This is important. You can only name a tab panel once you have it properly selected.
{{< /step >}}

{{< step "Give this tab a unique name, then repeat these steps to name every tab in your tab control." >}}
If you want to find out if a particular tab panel is in the front, it must have a name, so you’re best of naming them all.
{{< /step >}}

{{< /steps >}}

Once you’ve given every tab panel a name, you’re ready to start asking FileMaker who’s in front. This part is easy. Here’s the long-but-simple formula to see if a tab is in front:

```
GetLayoutObjectAttribute ( “myTab”, “isFrontTabPanel” )
```

Notice that this formula only looks at one particular tab panel (in this case it is looking at the panel called `myTab` so be sure to put one of your tab panel object names there instead). It will return a `True` result if the tab panel is in front, and a `False` result otherwise. To determine which of all the tabs is in front, you can check them one by one:

```
Case(
  GetLayoutObjectAttribute ( “myFirstTab”, “isFrontTabPanel” ); 
  “First tab is in front”;
  
  GetLayoutObjectAttribute ( “mySecondTab”, “isFrontTabPanel” ); 
  “Second tab is in front”;
  
  GetLayoutObjectAttribute ( “myThirdtTab”, “isFrontTabPanel” ); 
  “Third tab is in front”
)
```

Or, in a script:

```
If [ GetLayoutObjectAttribute(“myFirstTab”, “isFrontTabPanel”) ]
  # do stuff for the first tab
Else If [ GetLayoutObjectAttribute ( “mySecondTab”, “isFrontTabPanel” ) ]
  # do stuff for the second tab
Else If [ GetLayoutObjectAttribute ( “myThirdtTab”, “isFrontTabPanel” ) ]
  # do stuff for the third tab
End If
```

## Restoring Tab State

Now that you know how to watch for tab changes, and figure out which tab is in front, you can take it one step further, and solve an age-old FileMaker problem in the process. Last year, we wrote up [a laborious technique][old] to remember which tab is in front before you leave a layout, then bring it back to the front when you come back. This way, if your scripts have to quickly zip to another layout to get some work done, your users don’t get distracted by tab controls that keep switching back to the first tab.

[old]: ../restoring-active-tab-state/

That technique worked, but it was tedious. You had to write two long and complicated scripts. Then you had to call one every time you *leave* the layout, and the other every time you *come back*. What a nuisance.

Using Script Triggers, you can save all the hassle. Now two very simple scripts can get the job done, and they can do it automatically every time you return to the layout.

{{< note >}}
In fact, this new, simpler version is even better than the old way. The tab will restore itself even if you manually leave the layout and come back later, making things a touch more stable for your users.
{{< /note >}}

First, you need a simple script to remember the front most tab:

```
Set Variable [ $$FRONT_TAB;
  Case(
    GetLayoutObjectAttribute(“myFirstTab”, “isFrontTabPanel” ; 
    “myFirstTab”;
    
    GetLayoutObjectAttribute(“mySecondTab”, “isFrontTabPanel”); 
    “mySecondTab”;
    
    GetLayoutObjectAttribute(“myThirdtTab”, “isFrontTabPanel”); 
    “myThirdtTab”
  )
]
```

That’s it (and its really a one line script, although we put it on a few lines here so it would be easier to read. Just set a global variable to the name of the font most tab.

{{< tip >}}
If you have multiple tab controls to keep track of, make sure you use a unique variable name (or repetition) for each one. Otherwise, changes to one set of tabs will impact the others.
{{< /tip >}}

Now attach an `OnObjectModify` trigger to your tab control and set it to run the script. With these two steps complete, a new global variable will always remember which tab you last visited.

Next, you need to make FileMaker restore the front most tab whenever you come to this layout. This part is equally easy. Start with a simple script:

```
If [ Not IsEmpty($$FRONT_TAB) ]
  Go to Object [ $$FRONT_TAB ]
End If
```

This script first checks to see if the `$$FRONT_TAB` variable has a value. If it does, it uses the `Go to Object` step to bring that tab to the front.

Finally, tell FileMaker to run *this* script whenever the layout loads. You do this with (shocker) a script trigger. Choose Layout → Layout Setup, then switch to the Script Triggers tab. Turn on the `OnLayoutLoad` trigger and point it to your script.

Here’s a video showing the tab behavior with and without the triggers:

{{< mov src="automatic-tab-restore.mov" caption="Normally FileMaker resets all tab controls to the first tab when you return to a layout. But with this technique, the user is still \"on\" the tab they last used when they come back." >}}

In the first version (before the fade-to-black) FileMaker switches back to the firs tab every time you leave the layout and come back. In the second, it seamlessly keeps things in order. This magic works whether your user leaves the layout manually, or you do it with script. Easy as pie.
