---
title: "A Little Math Help?"
date: 2011-02-09
archive: posterous
---

Anybody want to help me with some math? Consider:

{{< figure 
	src="image-1.png" 
	height="235" 
	width="522" 
	alt="A geometric diagram showing two parallell lines and two intersecting lines at different angles. The point at which the intersecting lines meat is labeled with a star. The angles of the interseting lines against the parallel lines are labels \"A\" and \"A-question-mark\"." 
	caption="Diagram 1" >}}

I know angle `A`, distance `D`, angle `AΔ` and distance `DΔ`. I'm trying to find angle `A`?. This is what I came up with:

{{< figure 
	src="image-2.png" 
	height="81" 
	width="345" 
	alt="A mathematical formula." 
	caption="The proposed formula." >}}

At first I thought I was all good, but this doesn't work for all `A` and `AΔ` (which is obvious in hindsight). For instance, this works fine if `A` is negative:

{{< figure 
	src="image-3.png" 
	height="226" 
	width="522" 
	alt="Another diagram similar to the one above, but the angles are negative." 
	caption="A working case with negative angles." >}}

But this doesn't work…

{{< figure 
	src="image-4.png" 
	height="229" 
	width="559" 
	alt="Another diagram similar to the one above, but the angles are now larger than 90 degrees." 
	caption="A failing case with large angles." >}}

…essentially because the range of arc tangent is `(-90,+90)` degrees. Or, put another way, because there is no right triangle with angle `A`.

Is there a single formula that will work for all `A` and `AΔ` without the need for conditionals?

