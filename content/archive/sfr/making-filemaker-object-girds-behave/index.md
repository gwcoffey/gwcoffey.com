---
title: "Making FileMaker Object Grids Behave"
date: 2007-10-06
archive: sfr
tags: 
  - Archive Post
---

There’s a lively discussion on the [TechNet](https://community.claris.com/) mailing list right now about the pros and cons of FileMaker Pro’s *Object Grids* feature. {{< ed inline="TechNet is now Claris Community. The link has been updated accordingly." >}} This is certainly an opinionated discussion, and there is clearly no “right” way. A lot of people find Object Grids *annoying* because it makes it *harder* to line things up sometimes. Here’s a quick tip to help get Object Grids to behave themselves.

I love Object Grids, and leave them on almost all the time, but I don’t think I’d feel this way without the little trick explained here.

First, an explanation. The name of this feature — Object Grids — is probably more telling than you realize (note the plural). When you get right down to it, **there is no grid** on the FileMaker Layout. To me, “grid” implies some consistent system of invisible lines that span the entire layout. Something like this:

{{< figure src="one-big-grid.png" 
           width="689"
           height="363"
           alt="A FileMaker window with a blue six-pixel grid overlayed, as an illustration."
           caption="You'd be forgiven for thinking FileMaker's Object Grids worked (conceptually) like this. But they don't." >}}

If you’re like me, you might assume that when you turn on Object Grids, FileMaker starts snapping your objects to a grid like this. But it doesn’t work that way. There is no layout-wide grid, invisible or otherwise. When you turn on Object Grids, FileMaker really just makes objects you drag around move in 6-pixel steps. Essentially, every object is on its own grid, and if you’re lucky, the objects you’re trying to line up will have the same grid. But there’s a chance they won’t.

{{< tip >}}
Although the default grid spacing in FileMaker is 6 pixels, you can actually configure it yourself. Just visit Layout mode, then choose Layouts → Set Rulers.
{{< /tip >}}

Normally, when you create a new object, duplicate an existing one, or paste one in while Object Grids is on, FileMaker is careful to keep them on a consistent grid that starts at position (0,0) on the layout. But sometimes an object gets off the normal grid, and on to a grid of its own. Maybe it was created or moved when Object Grids was turned off. Or perhaps you used the arrow keys to nudge the object a little at some point in its life. Whatever the reason, once it is off the grid, it won’t line up right anymore as you drag it around. This is especially problematic when you first created a layout with Object Grids turned off, and are trying to start using it.

The trick is to find a way to quickly re-align an object to some consistent grid used by most objects. And it turns out there *is* a way that is both quick and easy: Just drag the object into the top-left corner of the layout. When you do, FileMaker will abandon the gird and let the object land right in the corner, at position (0,0). Now, just drag it back where it belongs. As you do, it will move in 6 pixel chunks — on the *same* grid as everything else.

Note that you have to actually *drop* the object in the corner. It won’t work to move it to the corner and back in one sweeping drag. Instead, drag it to the corner, drop it, pick it back up again, and drag it back.

This short video shows the technique in action. The first object I drag is already on the grid, and you can see it aligns nicely. The second box seems to have found its own center, so to speak. Using the drag-to-the-corner technique, I quickly get it back on the normal grid.

{{< mov src="re-zero-grid.mov" caption="Some quick mouse-work can get a mis-aligned object back on the standard grid." >}}

If you’re switching from a free-form layout to one that works well with Object Grids, you may have to do this little song and dance with every object on your layout. But if you’re been using Object Grids all along, this becomes something you do every now and again to get an object back in line. I find this technique makes using Object Grids a pleasure. I can focus on the big picture, and let FileMaker worry about the pixels.