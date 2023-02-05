---
title: "FileMaker 9 Tip #5: Using the Self Function"
date: 2007-05-22
archive: sfr
---

One of the least talked about features of FileMaker 9 is a new calculation doodad called `Self`. Although the primary purpose of this function is to facilitate the Conditional Formatting feature (which can perform calculations on such unnamed items as text objects and buttons), `Self` comes in handy in lots of common situations.

The `Self` function is simple in concept: it returns the value of whatever object it lives in. For instance, if you put `Self` in a validation calculation, it will return the value in the field being validated.

This might seem a little…well..pointless. After all, there’s another way to get at that field’s value in a calculation: put the field name in the calculation.

The advantage of `Self` is subtle. Since you don’t have to refer to the field explicitly by name, you can easily copy and paste the formula somewhere else without the need to edit it. How often have you added the exact same validation calculation to several different fields? Before `Self` you had to adjust it in each field to refer to the correct value. With `Self`, the same formula — unchanged — works in each place.

Self has one more capability that’s a little less useful. When you use Conditional Formatting (Format → Conditional in layout mode), you can perform calculations on *text objects* and *buttons*. For example, if you apply conditional formatting to a text object, you can use `Self` in the condition formula. In that case, `Self` returns the contents of the text object itself. More specifically, it returns the *browse mode* contents. If the text object contains merge fields or other special symbols, the result of `Self` includes the actual replacement data.

I’m not entirely sure what you’d ever *do* with that ability (and I’ve spent far too much time trying to think of something). If you find a cool use for it, let us know in the comments :smile:
