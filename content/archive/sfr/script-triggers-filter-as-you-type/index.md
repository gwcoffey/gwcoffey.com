---
title: "Script Triggers: Filter as you Type"
date: 2009-01-13
archive: sfr
---

For years, FileMaker developers have been devising various *filter* techniques. The idea is that you type all or part of a name, part number, description, etc… and a list of results filters down to show relevant matches. As handy as these techniques are, they always stop just short of perfect because, before FileMaker 10, you had to *exit the field* before the filter would take effect. Using FileMaker 10’s powerful Script Triggers, you can make the impact of your filtering more immediate.

{{< aside >}}
We’ve never done this before, but the idea, scripts, and sample file for this technique come directly from FileMaker luminary and Six Fried Rice reader David Graham of [Bit Tailor][bit]. We’re publishing it here (with David’s permission) because it is an excellent example of Script Triggers solving an age-old problem in an elegant way. {{< ed inline="David's site seems to no longer exist so I've updated the link to point to Web Archive." >}}

[bit]: https://web.archive.org/web/20090502215236/http://www.bittailor.com/
{{< /aside >}}

There are as many ways to filter lists in FileMaker as there are developers implementing it. The beauty of this technique is that it doesn’t matter if you prefer exploded keys and filtered portals, aggregate text fields and a find, or (my personal favorite) scripted multi-request finds. Whatever you want, when it is fast, clean filtering you’re after, it is *always* better if the results appear as you type. This sort of thing was essentially impossible with FileMaker 9. Once a user started entering data in a field, you were hands-off until they finished.

Some people dreamed up horrifying solutions with looping scripts and all manner of wackiness. These techniques, in my opinion, *never* worked well. Consequently, we were always resigned to the “press Enter when you’re done” model. But when the results appear as you type, the user gets immediate feedback, only needs to go as far as necessary to get the result they want, and doesn’t have to click back into the field to correct or make a change. So it is clearly a better model. See for yourself:

{{< mov caption="This is what we've always wanted: fast as-you-typ narrowing of results." >}}

David’s technique relies on the handy `OnObjectModify` trigger on the filter field to kick off a script every time the field changes. This includes:

* When you add a single letter to the field by typing a key.
* When you remove something by pressing Delete or Backspace.
* When you cut text from the field or paste it in.

You may be tempted to use the `OnObjectKeystroke` trigger for something like this, but `OnObjectModify` gets you more bang for the buck: It handles cut and paste, and doesn’t require [all the complexity][key] of keystroke triggers.

[key]: http://sixfriedrice.com/wp/script-triggers-using-the-keystroke-trigger/

## The Code

I’ll let you explore David’s sample file for the full scoop, but the core of his technique can be found in two places. First, he uses an exploded key filtering technique, which I won’t cover here, except to say that the idea is to process some text data and produce a multi-line key that includes partial match values. In other words, if the value is “Test” then the key would match “T”, “Te”, “Tes” and “Test.” In this way, you can type all-or-part of the value and see the results. Look at David’s `ExplodeToMultikey` custom function to see how he accomplishes this.

If you prefer, you can use scripted finds and a list view layout to do your filtering instead.

But the interesting part is this very simple trigger script:

```
Set Variable [$currentObject; Get ( ActiveLayoutObjectName )]
Commit Records/Requests []
Go to Object [ $currentObject ]
Set Selection [ Start: Length (Get(ActiveFieldContents)) + 1]
```

That’s it. This script really just does two things:

1. It commits the record, causing anything you’ve typed in the filter field to take effect.
2. It returns you to the field, so if you type again, your keystrokes will go right on the end of the field.

In this way, as you type, your changes reflect immediately. Very cool.

{{< tip >}}
If you were using finds instead of exploded keys, you would add a a few more steps to your script to switch to Find mode, build a find request or two, and then perform the find.
{{< /tip >}}

You can [download the working file right here](spotlight-filter.fp7.zip).

Thanks to David for the great technique!
