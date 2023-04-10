---
title: "Pop Goes the Variable"
date: 2010-08-26
archive: sfr
tags: 
  - Archive Post
---

We start our return to semi-regular writing with a small-but-awesome custom function: `Pop`. If you grew up in the American mid-west like me you might think I’m talking about [ soda | soda pop | coke | soft drinks ]. But I’m actually talking about [stacks][pop]. In the computer science world, `pop` means to take something off the top of a list, and it is exceptionally handy to add this to your FileMaker scripting toolkit.

[pop]:http://en.wikipedia.org/wiki/Stack_(data_structure)

## Looping Through Lists

Imagine you have a list of values. (I know, what a weird concept in a database).

```
Isabel
Sophia
Mamie
Geoff
Jesse
```

And you want to do something with these items in a script. Typically, for example, you might want to make a new record for each item in the list. You probably already know that FileMaker has several functions designed to make working with return-separated lists easier. For instance, suppose the list above was in a variable called `$names`. Here are some functions you might use, and their results:

```
GetValue($names, 3) => returns “Mamie”
LeftValues($names, 2) => returns “Isabel¶Sophia¶”
MiddleValues($names, 3, 2) => returns “Mamie¶Geoff¶”
RightValues($names, 2) => returns “Geoff¶Jesse¶”
```

Writing our script using these functions isn’t particularly difficult. Here’s the form we normally use:

```
# assume $names has a return-separated list of names
# …
Loop
  Exit Loop If [ValueCount($names) = 0]
  Set Variable [$name, GetValue($names, 1)]
  New Record/Request
  Set Field [The Name Field; $name]
  # set other fields, do more with $name, or whatever*
  Set Variable [$names, MiddleValues($names, 2, 999999)]
End
```

{{< tip >}}
You might wonder whey I have the `Exit Loop If` step right after the start of my loop. I do this a lot. It means my loop won’t run even once if the $names variable happens to be empty, which saves me an `If` step around the loop.
{{< /tip >}}

## Pop: For the Lazy Programmer In Your Life

We write scripts like this a lot. We pull the first item out of the variable, use it or store it, and then re-set the variable to remove that first item again. Although it is minor, this is non-ideal for a few reasons:

1. The code is kind of strange. What does this code do? Why all those magic nines?

2. Any time you write the same couple of lines over and over again, your inner-time-saver-alert should start buzzing.

3. Call me lazy, but I’m always happy to save a few clicks and/or keystrokes.

And so, we wrote `Pop`. Here it is:

```
Pop(variableName) :=
  Evaluate(
    “let([
      top = getValue( ” & variableName & ” ; 1 );
      ” & variableName & ” = 
      middlevalues(” & variableName & ” ; 2 ; 999999999999999)];

    top)”
  )
```
In a nutshell, this function takes the *name* of a variable as its parameter. It returns the first value in the variable *and* removes that value from the variable all in one step.

{{< warning >}}
Pay attention to the previous sentence. The parameter you pass to `Pop` is the *name* of a variable, not the variable itself. You want this: `Pop(“$variable”)`, not this: `Pop($variable)`.
{{< /warning >}}

For the curious, I’ll explain how it works in a moment. But first let’s see it in action. We can now re-write our loop like this:

```
Loop
  Exit Loop If [ValueCount($names) = 0]
  Set Variable [$name, Pop(“$names”)]
  New Record/Request
  Set Field [The Name Field; $name]
  # set other fields, do more with $name, or whatever
End
```

Instead of using `GetValue` to get the first item in the list, and then removing it later, we do it all in one step using `Pop`. In fact, since `Pop` is a *function* instead of a script step, we can use it right inside other expressions, so we can simplify our loop even more:

```
Loop
  Exit Loop If [ValueCount($names) = 0]
  New Record/Request
  Set Field [The Name Field; Pop(“$names”)]
  # *set other fields, do more with $name, or whatever*
End
```

This time, we get the value, remove it from the variable, and put it in the field all in one step. As a function, `Pop` can be used in other places too, like inside larger expressions:

```
Substitute(
  $something;
  [Pop(“$to_remove”); “”];
  [Pop(“$to_remove”); “”];
  [Pop(“$to_remove”); “”]
)
```

Or in recursive custom functions:

```
If (
  ValueCount($whatever) = 0; 
  “”; 
  Pop(“$whatever”) & AmazingFunction
)
```

It is often really handy to be able to combine fetching and removing into one tiny expression.

## How It Works

The `Pop` function uses an oft-overlooked FileMaker power-function called `Evaluate`. This is another one of those *meta*-features in FileMaker. ("That was me. That was I. That was the formula of this calculation.") `Evaluate` lets you process calculations inside your calculations.

When you write a calculation, you combine functions, values, fields, and operators to produce some useful result. Normally that result is some new data to display or use in your scripts. As you no-doubt know, FileMaker’s calculation engine provides some very powerful tools to process input and produce interesting results.

When you use `Evaluate`, the *result* of one calculation can be a calculation formula itself. Here’s a trivial example:

```
Evaluate(“1 + 2”)
```

In this case, the parameter we’re passing to `Evaluate` is the text value “1 + 2”. Since this is a valid FileMaker calculation, `Evaluate` will, well, evaluate it, and the final result of the formula will be `3`.

Of course that example is silly. If I wanted to add `1` and `2` in a calculation, I’d just write it like this, and save a lot of trouble:

```
1 + 2
```

But since this is a calculation, you can get as complicated as you want:

```
Evaluate(
  Choose($something, “Average”, “Min”, “Max”) & “(1, 2, 3)”
)
```

That equally-ridiculous formula will return either an average, minimum, or maximum of the values `1`, `2`, and `3` depending on the value of `$something`.

*But why?! Why would I ever do that?*

Well, you wouldn’t. But using those techniques, you can do all kinds of other cool things, like, oh, for instance, write `Pop`. All `Pop` does is generate a new calculation formula that looks like this:

```
Let(
  [
    top = GetValue($my_variable, 1);
    $my_variable = MiddleValues($my_variable, 2, 99999999)
  ];

  top
)
```
In other words, it makes a calculation that removes the first item from a variable and returns it. Since we don’t know the name of the variable ahead of time, we have to work the variable name into the calculation *using a calculation*. (I know, meta…). Once we’ve built this little formula, we use `Evaluate` to run it for us.

Easy as pie (wrapped in cake, wrapped in an enigma).

## Why Would I Ever Use This

If you’re like me, right now you’re thinking this is a lot of work for a very little payoff. It saved a line or two in my loop. But I encourage you to try it out the next time you need to process lists of values. Like all custom functions, it is easy to abstract the complicated part away in your database and never worry about it again, calling on it here and there with an easy name. And that, truth be told, is the core power of programming.
