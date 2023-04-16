---
title: "The Secret Life of Find Mode: Symbols"
date: 2007-08-20
archive: sfr
tags: 
  - Archive Post
---

Once you’ve mastered [multiple requests](../the-secret-life-of-find-mode-requests/), you’re ready to move on to the next Find Mode gem: *Find Symbols*. Using these bits of punctuation, you can tell FileMaker, when it goes about matching records to your find criteria, to be a little more flexible, or a little more strict. In this article, you’ll learn about each one.

{{< aside >}}
This article is part of our series on Find mode. [Click here](../the-secret-life-of-find-mode-requests/) to visit the *first* in the series, which links to all the others.
{{< /aside >}}

Find Symbols are special punctuation you type right in to Find mode. FileMaker doesn’t just match these symbols directly. Instead, they serve as hints to FileMaker about how you want things to match. Luckily, you don’t have to *just know* what these symbols are. You can see them all in the status area when you’re in Find mode:

{{< figure src="find_symbols.png" 
           width="328"
           height="356"
           alt="Detail of the Status are in a FileMaker window with the Symbols menu open. It shows a list of many different symbols and their short decriptions. (These symbols are all explained further in this article.)"
           caption="FileMaker helpfully shows you all the avaialble symbols. But the descriptions here are a little terse. No worry. Read on." >}}

The Symbols pop-up menu lists every valid Find mode symbol, along with a description of what it does. Chances are you’ve used a few of these before, even if you didn’t know they were called Symbols. For instance, most FileMaker users know you can put something like this in a date field in Find mode:

```
8/11/1976…12/29/2001
```

When you do, your found set will include all records whose date value is between August 11th 1976 and December 29th, 2001.

## The Range Symbol

As you just saw, the `…` symbol — better known as the “range” symbol — lets you specify a range of values to match. It isn’t limited to dates. You can provide a range of numbers in a number field:

```
22…36
```

Or a range of times:

```
9:00 AM…5:00 PM
```

You can even provide a range in a text field:

```
Adam…Bernard
```

FileMaker thinks about text ranges *alphabetically*. In other words, if you put all your names in alphabetical order, the range above would include every name between Adam and Bernard.

It is important to remember that the range symbol is *inclusive*: A value that matches either end exactly *will* be included in the found set.

{{< tip >}}
It’s a small concession, but if you’re keystroke-conscious, you can trim one `.` from your Range symbols. It is perfectly valid to use just two dots: `3..7`
{{< /tip >}}

## Comparison Symbols

The next-most-common symbols are `<`, `≤`, `≥`, and `>`. These symbols are like the range symbol with only one end. For example, to find everyone born after Star Wars came out:

```
>5/25/1977
```

These symbols are pretty self explanatory: “Greater than 5/25/1977.” Some people prefer using the range symbol instead of `≤` or `≥`. For example, this will find every order placed after January first:

```
1/1/2007…
```

{{< note >}}
On Mac OS X, the “less than or equal” symbol looks like this: `≤`. On Windows, it looks like this instead: `<=`. But both versions have the exact same meaning. (And in fact, the Windows style symbol will work perfectly on the Mac too.) The same goes for "greater than or equal."
{{< /note >}}

## Exact Match 

One of the most useful symbols is `=`, or the "exact match" symbol. Normally, FileMaker is pretty forgiving about field matches when performing a find. For instance, if you put `San` in the City field, FileMaker will consider each of these a match:

* San Francisco
* Santa Clara 
* San Bernardino
* San Jose
* Rancho Santa Margarita
* *…basically every city in California.*

If you want to be technical, FileMaker does a *word-based prefix match*, meaning if any *word* in the field *starts with* the value you type in your find request, FileMaker considers it a match (see "Rancho Santa Margarita" in the list above). 

The "exact match" symbol lets you be more specific. If you use this find criterion: 

```
=San
```

FileMaker will still match `San Francisco` but it won't match `Santa Clara`. With `=`, it only matches whole words. 

## Field Content Match

If you want to be even *more* specific, you can use the "field content match" symbol: `==`. This little buddy tells FileMaker you know *exactly* what you're looking for, and it only finds records where the entire field matches your find criterion exactly. 

For example, if you did your San search this way: 

```
==San 
```

Then you'd only find people in the city of `San`. (More likely you'd find nothing, since San isn't a city.) You would use this symbol when you are looking for something very specific and a normal search finds too many records.

## Wildcards

Going the other direction, sometimes you want FileMaker to be less restrictive. FileMaker has three so-called *wildcard* symbols (think *Jokers Wild* not *Call of the Wild*):

* `*`: zero or more characters
* `@`: one character
* `#`: one digit 

These symbols stand in for data in the field. For example, if you want Cities that *end* with "son" you can do a search like this: 

```
*son
```

That search will find the mythical city of Son (sister to the city of San), as well as:

* Tucson
* Wilson
* Orson

{{< note >}}
As soon as you add a wildcard symbol, FileMaker starts doing an exact match as well. In other words, the whole *word prefix* mumbo jumbo no longer applies. `*son` will *not* match Watsonville.
{{< /note >}}

The `*` symbol will match any number of letters or numbers. It will even match *no* characters (that’s why `*son` finds the city of Son). The `@` symbol, on the other hand, matches *exactly one character*. Try a search like this:

```
Sant@
```

And FileMaker will find:

* Santa Clara
* Santo Domingo

But it *won’t* find “Sant” because the `@` symbol expects exactly one character (not zero or one).

{{< tip >}}
Sometimes these symbols aren’t flexible enough. For example, you might want “one or more characters.” You can combine `@` and `*` to get what you want: `San@*`. That criterion will find “San” followed by *at least* one character, and possibly more. If you want “zero or one character” your job gets a little tougher. Your best bet is to use two find requests. In the first, put `=San` and in the second, put `San@`. The first request will match every record with “San” and the second will match “Sans”, “Sand”, and “Sang.”
{{< /tip >}}

Finally, the `#` symbol works like `@` but is only matches a numerical digit. This find:

```
##
```

Will match only two-digit numbers.

## Literal Text

All these special symbols might leave you feeling a bit worried: What if you don’t want to discombobulate FileMaker’s finding. Instead, you actually want to find an @ sign? Believe it or not, another symbol comes to the rescue: The “literal text” symbol. Just put your punctuated find criteria in quotes:

```
“mr_magoo@sixfriedrice.com”
```

When FileMaker sees those quote marks, it dutifully ignores the symbols inside. In fact, this is just what you should do if you’re searching for an email address.

{{< qna "If @ means “any character” then what does it matter? The `@` in that search will happily match the @ sign in the email address, won’t it?" >}}
Unfortunately, no. The @ sign (when in regular field data) is not *indexed*. In other words, FileMaker tosses it out when it takes its speed-search notes about your records. So to FileMaker, the email address `mr_magoo@sixfriedrice.com` is really *three words*: `mr`, `magoo`, and `sixfriedrice.com` So there’s nothing in there for the @ symbol to match. You can prove this yourself: When you need to find an email address, just put a space in place of the @ sign. It will find without a hitch.
{{< /qna >}}

## Duplicates

The most esoteric find symbol is `!`: the “duplicates” symbol. You don’t put this next to any text. Instead, you put it in a field all by itself in Find mode. FileMaker will then find every record that has duplicates in that field. In other words, if your database has two Andy’s and no other duplicate first names, if you perform a find with `!` in the First Name field, FileMaker finds both Andy’s but leaves everyone else out. If you later add a second Vincenzo, it will find both Andy’s *and* both Vincenzo’s.

{{< tip >}}
This helps you *find* duplicate records. If you want help *getting rid of them*, see [this article](http://sixfriedrice.com/wp/deleting-duplicate-records-in-filemaker/).
{{< /tip >}}

## Today’s Date

The `//` symbol is really just shorthand to save you some typing. (Truthfully, it is also useful when scripting, but we’ll get to that in a future article.) When you put `//` in a find request, FileMaker acts just like you had meticulously typed out today’s date. To find every invoice due today, just bounce to Find mode, pound `//` in the Due Date field, and press Enter.

You can, of course, combine this symbol with others:

```
# find every invoice due after today
>//

# find every event between now and christmas
//..12/25/2007
```

## Invalid Date or Time

The last symbol is `?`. It’s another funny one. Sometimes (if you import data from some other system, or change field types) you might wind up with bogus data in your date field. For example, Microsoft Excel is glad to let you type “sometime next week” in a column that normally holds dates. If you then import this into a date field, FileMaker accepts it (what else is it going to do?) but considers the value *invalid*. Later, you can switch to Find mode, put `?` in the date field, and perform the find. FileMaker finds every record with an invalid date like this.

The `?` symbol works for time and timestamp fields as well.

## A Few Examples

Find symbols are flexible and powerful. Chances are you’ll dream up ways to use them that I’ve never thought of. But here are a few examples that might come in handy:

If you have a Full Name field and you want to find everyone with an initial, try this: 
```
@
```

It will find exactly one character. Since periods aren’t indexed, it will find all of these:

* J. R. R. Tolkien
* Charlotte A. Cavatica
* A. A. Milne

To quickly find everything up to today, put this in a date field:

```
..//
```

Likewise, if you want everything *today or later* try this:

```
//..
```

If you’re using [our delete duplicates technique](http://sixfriedrice.com/wp/deleting-duplicate-records-in-filemaker/), you can make your script run faster if you *find* the duplicates first. Put `!` in each of the match fields, and FileMaker will find only the records the script actually cares about.

If [37Signals](http://37signals.com/) is one of your customers, but you can’t remember if it’s 37signals or 73signals (or 737signals for that matter) search for this:

```
#*signals
```

We’ll see you soon for our next article on Find mode. Until then, enjoy your new found symbol knowledge.
