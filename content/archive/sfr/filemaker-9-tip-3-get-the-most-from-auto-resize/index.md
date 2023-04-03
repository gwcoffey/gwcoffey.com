---
title: "FileMaker 9 Tip #3: Get the Most from Autoresize"
date: 2007-07-10
archive: sfr
tags: 
  - Archive Post
---

FileMaker Pro 9 has another awesome new feature: *Autoresize*. Now your layout elements can stretch their legs when you give them a bigger window. Auto-resize lets you tell FileMaker how different elements on the layout should stretch and move as the window is resized by the user. But it can be a little tough to understand exactly how it works. Here are three tips to help you take best advantage of this awesome new feature.

## First, the Basics

Before we dive into the tips, though, you might need a little intro on just how autoresize works. In FileMaker 9, every object on the layout has a set of *anchors* that can link it to the edge of the window. You turn these anchors on and off in the Object Info palette (View → Object Info). You can see the anchor settings in FileMaker 9’s new-and-improved Object Info palette right here:

{{< figure src="object_info_palette.png" 
           width="137"
           height="303"
           alt="Screenshot of the Object Info palette. There is a new section at the bottom with an arrangement of four checkboxes, each labeled with a boat anchor icon. They are arranged like the four compass directions."
           caption="The new Object Info palette has checkboxes to control Autoresize">}}

You turn an anchor’s check box on if you want FileMaker to hook that side of the object to the side of the window.

Chances are, if you look at any of your layout objects right now, they’ll all be anchored on the top and left. This is the way objects start out life, and it makes them work just like they did in older versions of FileMaker: no matter how big you make the window, the object stays in the same spot, as though it’s anchored to the top and left edges of the window.

If you turn on the *bottom* and *right* anchors instead, the object will *move* as you resize the window. It will stay the same distance from the bottom and right edges of the window, so when the window gets bigger, the object effectively moves down and right.

Even better, if you anchor an object on *both the right and left* it will actually get *bigger* with the window. Just picture those anchors holding tight to the sides of the window, stretching the object as they go. Of course you can anchor an object on the top and bottom to make it stretch taller. You can even turn on all four anchors to make it grow or shrink every which way.

## Resize Early, Resize Often

Our first autoresize tip is more advice than technique: Use autoresize *practically everywhere*. Even if your users are all in the same office, with the same size screens and nothing better to do on their computers than use your database, it is still worth doing. Once you get the hang of it, it only takes a few seconds to auto-resize-enhance a typical layout. And once you do, you’ve made life easier for your users.

And as you start adding new layouts, think about autoresize from the very beginning. Set anchors as you go, and test windows at multiple sizes.

Of course there are some situations where autoresize is not appropriate. For instance, layouts that are primarily destined for the printer usually have a very specific size and arrangement so things properly fit paper. Autoresize doesn’t make sense for layouts like this. You also don’t need to bother with autoresize on layouts that operate behind the scenes, where scripts get their work done.

{{< tip >}}
See Nick’s comment below about using Autoresize on printed reports to handle different paper sizes or orientations. I haven’t tried this yet but it sounds like a fantastic idea.
{{< /tip >}}

## Set the Width

When an object is anchored on any particular side, FileMaker keeps the distance between the object and that side of the layout constant. As the layout’s edge moves, so does the object.

This begs the question: where’s the right edge of a layout? After all, the other three sides are easy:

– The *top and left* are just the edges of the database window itself.
– You set the *bottom* yourself by dragging the bottom-most part boundary.

But the right edge is a real mystery. It turns out FileMaker decides on the right edge all by itself. It is an imaginary line set on the right edge of the right-most object on the layout.

When you introduce autoresize, this can be a problem. If an object is anchored on the right, and it happens to be the right-most thing on the layout, it has a nasty habit of sliding so far right that it bumps right into the side of the window. Usually, you want a little space between each object and the window border.

If you’re lucky, you have a graphical element on the layout can can establish a better right edge. For instance, you might have a decorative line that stretches all the way across the layout. If you anchor this to the left and right, it will *always* stretch across the window. And since everything else on the layout is a little less to-the-right than the end of that line, they won’t have a problem keeping away from the edge of the window.

If you *aren’t* lucky, you’ll have to set the right edge yourself using a bit of a hack. Just put an invisible line on the layout where you want the right edge to be. (Set its line thickness to None to make it invisible.) This is a lousy solution, but it is the only one that works sometimes.

## Think Small

When you do design with autoresize in mind, keep this in mind too: small is good. Within reason, you should generally design your layouts as small as possible. The reason is simple: FileMaker will never resize an element *smaller* than it is in Layout mode. If your layout is designed large, your users won’t be able to make the window smaller and still see the whole layout.

This takes getting used to. You’re accustomed to designing layouts at an *ideal* size, where each field is big enough to show typical data. As you work on a small layout in layout mode, you might begin to feel like all those tiny fields are ridiculous. “Nobody would ever want to work in my database at this size!” But keep this in mind: they won’t have to. When you design in layout mode, you’re no longer specifying the ideal size. Instead, you’re establishing the *smallest* size. It is reasonable that a layout at its smallest will be a little cramped. Once you switch to browse mode, everything will instantly adapt to a roomier window.

Here’s a layout that’s probably a little too small for regular use:

{{< figure src="small_window.png" 
           width="530"
           height="309"
           alt="Screenshot of a simple contact manager database. It has a note field that is only two lines tall, and an email address that almost doesn't fit in the field."
           caption="The note field here is definitely too small to be user-friendly. But it's big enough to see some notes in a pinch.">}}

But most users will go ahead and make the window bigger. (in fact, you can do it for them: FileMaker remembers the size of the window when you close and re-open it. And you can always use scripts to set the window size if you’re needs are more esoteric.) Here’s a more normal presentation:

{{< figure src="big_window1.png" 
           width="593"
           height="477"
           alt="The same window as above but now the window has been resized and the note field is much larger."
           caption="Make the window a little bigger and suddenly all the fields are nicely proportioned.">}}

At the same time, when a user *wants* things a little smaller for a moment (maybe they're comparing something in FileMaker with the contents of a web page), they’ll be able to momentarily shrink it down so it’s easier to work with.

## Find your Center

Have you ever built a pseudo-dialog-box in FileMaker? You know the kind: a layout that takes over the database window and forces the user to make some choices before they get back to your *normal* layouts. A lot of people like to make these things visually distinct by putting them inside a box, something like this:

{{< figure src="floatie.png"
           width="368"
           height="229"
           alt="Screenshot of a layout with a simulated dialog box with a rectangular border and title."
           caption="This layout is drawn to look like a modal dialog box, forcing the user to make a choice before continuing.">}}

Now be honest with yourself. Every time you’ve done this, you’ve *wished* you could put the thing in the *middle* of the window. Unfortunately, since you don’t know how big the window will be, you can’t.

It isn’t entirely obvious at first, but with autoresize in FileMaker 9, you can. If you *turn off all the anchors*, FileMaker splits the difference as a window resizes. If it gets 100 pixels wider, the object moves 50 pixels, so that half the new space is on one side, and half is on the other.

So an object that is centered on the layout in layout mode, and has no anchors, will be centered on any size window. I’ll prove it:

{{< figure src="centered_floatie.png" 
           width="498"
           height="370"
           alt="The same layout as above, but the window is larger and the simulated dialog box is still centered."
           caption="The user has resized the window (so it is larger) and the dialog box is still in the middle.">}}

## Two Ways to Resize Portals

Finally, you may have a portal that grows vertically thanks to autoresize. When you do, you’ll probably wonder which of these will happen:

* As the window gets bigger, the portal does too, and it can show more rows.
* As the window gets bigger, each portal row does too. The number of rows stays the same.

In fact, a perfectly reasonable developer might *want* either one. Sometimes a bigger window means you want to show *more* information about each item in the portal: bigger thumbnail images, larger notes fields, and so forth.

But it is probably more likely that you want more rows. After all, most portals just show tables of simple data, where extra height isn’t helpful. And seeing more related records is always nice.

It turns out FileMaker 9 can facilitate both needs. Here’s the scoop:

* If the *portal* is anchored to the top and bottom, but everything *on the portal* is just anchored to the top, then the portal will get new rows as it grows.
* If, on the other hand, a growing portal contains any item (it only takes one) that is anchored on the bottom, then the portal rows themselves will grow so the downward-moving item doesn’t leave its row.

{{< note >}}
The item can be anchored on the top *and* the bottom if you want. You just need at least one item that is at least bottom anchored to get growing rows.
{{< /note >}}

Now you know more than you ever wanted to about FileMaker Pro 9’s autoresize feature. Let us know if you discover any cool tricks of your own.
