---
title: "The Secret Life of Find Mode: Dates and Times"
date: 2007-08-28
archive: sfr
tags: 
  - Archive Post
---

Date values (and to a lesser extent, time values) are exceptionally common in database applications. And it isn’t at all unusual to want to ask you database interesting date-related questions, like “How many orders do we get on Tuesdays?” or “What was our total enrollment for the first quarter?” In fact, it is probably more common to look at ranges of dates than any particular date. Of course, if you’ve read our [previous article](../the-secret-life-of-find-mode-requests/) on Find mode, you know how to find whole ranges of dates easily using find symbols. But FileMaker Pro’s Find mode has several date-specific tricks up its sleeve. Using some not-so-obvious syntax, you can easily search for *date slices* like every tuesday, or the 5th of every month, or every January. This short article will explain how.

{{< aside >}}
This article is part of our series on Find mode. [Click here](../the-secret-life-of-find-mode-requests/) to visit the *first* in the series, which links to all the others.
{{< /aside >}}

It stands in stark contrast to the FileMaker norm that none of the tips in this article could possibly be *discovered* by a casual FileMaker user. Nowhere in its status area, menus, or dialog boxes does FileMaker *show* you how to do any of these things. I only know they exist because Jay Welshofer, the product manager for FileMaker Pro 8, told me about them when I was working on [*FileMaker Pro 8: This Missing Manual*](https://www.oreilly.com/library/view/filemaker-pro-8/0596005792/). Not that they’re a big secret: Lots of people know how to do these things. But if you’re new to FileMaker, you probably don’t. And that’s a shame, because these hidden Find mode tricks are *super cool*. {{< ed "I mean, you could *read the manual* but I agree that is essentially the same thing as \"nowhere\"." >}}

{{< note >}}
All the techniques in this article will only work with FileMaker Pro 8.0 or later. If you’re using 7, you’ll have to skip this party.
{{< /note >}}

## Abbreviate

When you’re entering dates in *Browse mode* you have to follow FileMaker’s date rules to the tee. But in *Find mode* you can cut corners. To wit:

If you want to find every event scheduled for August, 2007, don’t bother with all this:

```
8/1/2007…8/31/2007
```

You can just do this instead:

```
8/2007
```
Likewise, if it’s the whole year you’re after, just do this:

```
2007
```

FileMaker will find any date in 2007.

The same goes for time values. If you want to find orders that came in after lunch, use this:

```
12pm…
```

{{< note >}}
The elipsis there is important. It means `12pm` is the beginning of a *range*.
{{< /note >}}

## A Slice in Time

The examples above are really just time savers. You can accomplish any of them the long way with various find symbols and a lot of typing. But try this on for size: You want to find every order that was placed on a Tuesday. That’s a seriously hard find to do…or is it? Just put `Tuesday` in a date field in Find mode and FileMaker gives you just what you want. To save time, you can abbreviate instead: `Tue`.

This day-name power can be used with ranges too:

```
Mon…Fri
```

That will find all the weekday sales.

If you need a more monthly perspective, you’re still in luck. You can find every trouble ticket that came in on a pay day:

```
*/15/*
```

That find will match the 15th of any month, on any year. In fact, you can use the `*` notation in any way that makes sense. If you’re looking for Christmas day clock-ins, try this search:

```
12/25/*
```

It will find Christmas no matter the year.

Finally, if `*` is too liberal, you can use ranges in any segment of the date. This will find bookings between the 4th and 15th:

```
3/{4…15}/2007
```

Of course, you can combine `*` and the `{…}` ranges as you see fit. How about finding every first quarter sale in history:

```
{1…3}/*/*
```

## Times and Timestamps

The same powers apply to time values. Each of these is perfectly valid:

```
# fifteen minutes past the hour
*:15

# closing time
{3…4}:* pm
```

And of course what applies to dates and times also applies to timestamps. Why not find every timeclock record from the fourth quarter that falls between 5:00 and 6:00 pm on a pay day?

```
{10…12}/15/* 5pm
```

Timestamp values are a little persnickety, though. If you use a day name (`Monday` or `Mon`, for instance) FileMaker has a habit of shoving the current date in the mix, which throws things off. To compensate, add `*/*/*` after your day name, to insist on *any* date that falls on that day. For instance, why not dig up all the Friday afternoon early punch-outs {{< ed inline="Jeez this article is a cop. I regret this decision." >}}:

```
Fri */*/* {3…4}:* pm
```

These tricks, however hidden, are amazingly powerful. If you don’t know they’re there, you can spend *a lot* of time and energy scripting and calculating your way around these sorts of queries.
