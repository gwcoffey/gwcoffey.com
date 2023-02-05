---
title: "Detecting Related Records"
date: 2007-09-03
archive: sfr
---

If you have a relational database (one with several connected tables) and you do any scripting at all, you’ll almost certainly ask yourself a question at some point: How can I tell if the record I’m on has related records? This article explains the scenarios you may run in to, and how *best* to deal with them.

Before I start pontificating, let’s set up a scenario. I have the simplest of all possible relational databases. The Relationships tab of my Manage Database window looks a lot like this:

{{< figure src="rgraph.png" 
           width="481"
           height="305"
           alt="Screenshot of the Relationships tab of the My Database window showing two table instances, \"Products\" and \"Parts\". There is a join between them."
           caption="The simplest of all possible relational databases has two tables and one join.">}}

I’ve got a Products table, and a related Parts table. Some products have *no* parts, some have a few, and some have *hundreds*. We’ll use this hypothetical example for the rest of the article.

## Safely Processing Related Records
When you’re scripting, you often bump in to a scenario where you need to know if you have related records or not. Maybe your script is about to jump to the *Parts* related to a *Product* and do something to them:

```
Go to Layout [Products]
Go to Related Record [From Table: “Parts”; Using Layout: “Parts List”]
Go to Record/Request/Page [First]
Loop
  // do something here
  Go to Record/Request/Page [Next; Exit After Last]
End Loop
```

This script looks pretty solid: It goes to the set of related Parts records, jumps to the first in the list, then loops through them, doing “something” to each one. But it has a pretty serious bug:

**If there are no related parts records, it will loop through all the *product* records in your found set, doing goodness only knows what to them.**

That *sounds* like a FileMaker bug at first, but it isn’t. Here’s what’s happening: Since this product has no related parts, the second line in your script (`Go to Related Record`) will *fail*. It will fail quietly, though. If you turn on FileMaker Pro Advanced 9’s Script Debugger, switch on “Pause on Error”, and run the script, it will pause on that line and inform you that error number 101 has occurred. Error 101, as luck would have it, means “Record is missing.” Since the step failed, *it doesn’t do anything*, and your script runs as though the `Go to Related Record` step weren’t there at all. Ick.

You can probably dream up a lot of ways to deal with this problem. Perhaps the most straight forward is to simply add a little error checking:

```
Go to Layout [Products]
Go to Related Record [From Table: “Parts”; Using Layout: “Parts List”]
If [Get(LastError) = 0]
  Go to Record/Request/Page [First]
  Loop
    // do something here
    Go to Record/Request/Page [Next; Exit After Last]
  End Loop
End If
```

Now, if the `Go to Related Record` step fails (for any reason), your script is smart enough to avoid the loop. I use this method in most cases because it is absolutely safe. This is especially important if the stuff in the loop is destructive (like if it changes data or—gasp—deletes records).

## Detecting Related Records in other Situations

The sample above only applies to one case: Using the `Go to Related Record` script step in a script. But there are lots of other scenarios where you might want to find out if you have related records. For example, suppose you want to turn the “Add Part” button red when there are no related records, so your users are irresistibly attracted to it. Or perhaps you have an unstored calculation field that shows the message, “No parts have been added yet.” when there are no related records. There are lots of reasons you *want* to find out, so how do you do it?

A common approach is to *count* them. For instance, in a calculation field in the `Products` table, you might use a formula like this:

```
If ( Count(PARTS::ID) = 0 ; “You need to enter some parts.” )
```

This formula looks at the `ID` field in all the related `Parts` records. If the field value is not empty, it counts the record, so the result of the expression `Count(PARTS::ID)` is the number of related parts records that have an ID. Since *every* record has an ID, in practice this technique counts the related *records*.

This formula will work swimmingly, but it has a drawback: FileMaker has to do the counting. This isn’t such a big deal. After all, FileMaker is pretty speedy. But why put it through its paces if you don’t have to?

Here is a version of the calculation that does *exactly* the same thing, with less work on FileMaker’s part:

```
If ( IsEmpty(PARTS::ID) ; “You need to enter some parts.” )
```

It may look a little counterintuitive, but if you scratch your head for a while, I think it will start to make sense. It says, “If the related Part ID field is empty, show the message.” But, you say, the ID field is *never* empty. Exactly. So if you look through the relationship at the ID field and it *is* empty, then *there must not be a related record*. Make sense?

Using `IsEmpty()` on a related field that is never really empty is a fast, sure-fire way to detect the absence of related records. It is faster than count, and completely fail safe.

{{< qna "FAQ: Someone told me I should use `IsValid()` for this instead. Doesn’t that work too?" >}}
The `IsValid()` function is a little-known function in FileMaker’s calculation system whose purpose in life is twofold: First, it tells you when you have bogus (ie: invalid) data in number, date, time, and timestamp fields. For instance, you might import from an Excel spreadsheet, and somebody put “Next Tuesday” in the Date Due column. FileMaker will import this data happily (unless you have validation to prevent it), but “Next Tuesday” is not a valid date. It is, as they say, *invalid*. The `IsValid()` function can also detect a missing table, but that’s not the sort of thing you typically code for.

For whatever reason, although the FileMaker manual says nothing about it, `IsValid()` will also return `false` when you look at a related field and their are no related records. So some people use it for this purpose. But is wasn’t *designed* to be used that way, and the folks at FileMaker can’t promise it will always work that way. What’s more there’s a (small but real) chance you might actually have invalid data in a related field. If you use `IsValid()` it *might* return false because of actual invalid data rather than no-related-records. So it isn’t completely reliable. But `IsEmpty` will *always* work so long as you stick with a field that will never be empty. And the ID field in your table is a perfect candidate for this.
{{< /qna >}}

Happy scripting :smile:
