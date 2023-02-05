---
title: "Set Field by Name Exposed"
date: 2009-01-05
archive: sfr
---

In our [article about FileMaker 10][fm10], we promised some tips on using the new `Set Field by Name` script step, which gives FileMaker the power of *[indirection][indirection]*. This is a complicated concept, and we’ll be posting some real world examples along the way, as well. But first, we’ll give you a full explanation of the new script step and function that make indirection possible.

[fm10]: ../welcome-filemaker-pro-10
[indirection]: http://en.wikipedia.org/wiki/Indirection

## Set Field by Name

The core of the new feature is the `Set Field by Name` script step. It works _almost_ just like the `Set Field` script you know and love. But with `Set Field` you hard code the field you want to modify. Every time your script runs, the same field is “set.”

With `Set Field by Name` you get to use a calculation to determine not only the value you put in the field, but also _which field gets set_. An example will help. Imagine you have a database of the T-shirts you sell. Each T-shirt has 5 different prices, depending on the quantity someone orders. Your SHIRTS table, thus, has these five fields:

* `Price 1`
* `Price 2`
* `Price 3`
* `Price 4`
* `Price 5`

Now imagine you have a scripted process that updates one of these price fields based on a parameter. For instance, you might call the script and pass a parameter of `3` to update the third price value. Such a script might look like this:

```
If [ #P(“which”) = 1 ]
  Set Field [ My Table::Price 1; #P(“newPrice”) ]
Else If [ #P(“which”) = 2 ]
  Set Field [ My Table::Price 2; #P(“newPrice”) ]
Else If [ #P(“which”) = 3 ]
  Set Field [ My Table::Price 3; #P(“newPrice”) ]
Else If [ #P(“which”) = 4 ]
  Set Field [ My Table::Price 4; #P(“newPrice”) ]
Else If [ #P(“which”) = 5 ]
  Set Field [ My Table::Price 5; #P(“newPrice”) ]
End If
```

{{< note >}}
The above script uses [our custom functions][params] for passing multiple script parameters. You can of course use any method you want.

[params]: http://sixfriedrice.com/wp/passing-multiple-parameters-to-scripts-advanced/
{{< /note >}}

Using `Set Field by Name`, you can make this script a lot simpler:

```
Set Field by Name [ 
  “My Table::Price ” & #P(“which”); #P(newPrice) 
]
```

This version of the script gets the same job done with a lot less work. Even better, it is automatically expandable. If you add a sixth price field, you can call this script with a `6` and it will set the new price field automagically.

{{< note >}}
That probably bears repeating because it really illustrates the power of indirection. This script, written today, can seamlessly work with fields that don’t even exist yet. With indirection, the direct coupling of scripts and fields is relaxed, enabling previously impossible powers.
{{< /note >}}

The key is that it uses a calculation to determine the field name being set:

```
“My Table::Price ” & #P(“which”)
```

It is simple really. Just a text formula that results in the name of the field we want, complete with its table occurrence name.

This ability to target a field and value works in both Browse mode and Find mode, so it can be used to manipulate data generically, and to do generic find scripting.

## GetFieldName

The script above has one substantial weakness. If, for some reason, you ever _rename_ your Price fields, your script will simply break. Normally in FileMaker, of course, renaming things is no problem. FileMaker just fixes things up for you (because it references fields by an internal ID rather than by name). But it has no way to know how to rewrite your calculation to accommodate a new name.

Many people (myself included) would consider this an unacceptable tradeoff. First and foremost, our code *should not break*. Luckily, the good folks at FMI have anticipated this problem, and they’ve come up with a clever solution in the `GetFieldName` function. When you pass a field to this function (a real field reference, not the name of a field in quotes) it will give you back its name. Assuming your Price fields will always use the same *naming convention*, you can make your script safer like this:

```
Set Field by Name [ 
  Left(
    GetFieldName(My Table::Price 1), 
    Length(GetFieldName(My Table::Price 1) – 1
  ) & #P(“which”); 
  #P(newPrice) 
]
```

This version uses the Price 1 field as an *example* of the appropriate field name. It removes the `1` from the end of the field name, then inserts the appropriate number. Now things will keep working, even if you decide to rename the fields thusly:

* `Price Per Unit 1`
* `Price Per Unit 2`
* `Price Per Unit 3`
* `Price Per Unit 4`
* `Price Per Unit 5`

## Parameters

The `GetFieldName` function isn’t only useful when hacking up field names like the example above. You can use its results directly as well. For instance, you might write a script that performs some text manipulation you often need. This script can manipulate *any* field using `Set Field by Name`:

```
Set Field by Name [ 
  Get(ScriptParameter); /** my complicated calculation **/ 
]
```

If you pass the name of a field as a parameter, this script will set the field you specify. The complicated calculation can even use the `GetField` function to reference the field in question. A simple example might be:

```
Set Field by Name [ Get(ScriptParameter); Upper(GetField(Get(ScriptParameter))) ]
```

This script converts the contents of a field to upper case, and you can pass any editable field’s name as a parameter, making it totally generic. (Of course the script could be much more complex than this sample, incorporating multiple calls to `Set Field by Name`, conditionals, looping, and so forth.)

To keep your code safe, **don’t call it like this**:

```
Perform Script [ My Script; “My Table::Some Field” ]
```

The script parameter in that example is fragile because it will break if the field name (or table occurrence name) changes. Instead, call it like this:

```
Perform Script [ 
  My Script ; 
  GetFieldName(My Table::Some Field)
]
```

This version is impervious to name changes because `GetFieldName` will *always* return the right field name, even if you change it later. You still get all the flexibility though — you can still pass any field you want to the script to operate on it.

## Calculation Fields

In the comments to our [overview article on FileMaker 10][fm10], one of our readers, Michel Vincent, asked us about using indirection inside self-referencing calculated fields. This is even more mind bending, and I don’t have a good example (I hadn’t even thought of it before), but the core capability is there. For instance, suppose you have a calculation field called “Mind Bender” with this formula:

```
GetFieldName ( Self )
```

If you look at this field in Browse mode, it will _contain its own name_. If you rename the field, the content will update accordingly. You could combine this with various as-yet-unimagined calculations to produce powerful results. The reader envisioned a system of field naming conventions to help manage XML formatting of data, as an example.

{{< note >}}
In fact, I think naming conventions combined with these indirection features will prove to be a powerful combination. In our next article on indirection, you’ll see how we use our primary key naming conventions to streamline some common script code we use ever day.
{{< /note >}}

## Wrapping Up

Indirection — the power to determine which fields are modified when the script *runs* rather than when it is *written* — is a feature of many very advanced programming environments. In fact, in a more evolved form, it is what makes [object oriented programming][oop] so flexible.

[oop]: http://en.wikipedia.org/wiki/Object+Oriented+Programming

It has been possible for years to get some semblance of indirection out of FileMaker using complicated, slow, and fragile layout-based scripting techniques. But now, these features are fully supported, reliable, and fast. We are excited to see what our readers come up with.
