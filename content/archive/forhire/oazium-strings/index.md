---
title: øAzium Strings
date: 1998-08-17
archive: forhire
client: Waves in Motion
weblog: false
---

øAzium Strings is a FileMaker Plug-in that provides you with new calculation functions for working with text strings. Among other things you can:

* convert a text-string into your desired format
* extract an item from a list within a text string
* distinguish between upper and lower case 
* extract sub-strings

Most of what this plug-in does can be accomplished with normal FileMaker calculations, but øAzium Strings significantly simplifies common string manipulation formulas. Your calculations will be easier to write, easier to read, and easier to modify.

{{< aside title="Table of Contents" >}}
* [Installation](#installation)
* [Introduction](#introduction)
* [General Overview](#general-overview)
* [External Function Overview](#external-function-overview)
* [External Function Reference](#external-function-reference)
	* [WStr-GetPluginVersion](#function-wstr-getpluginversion)
	* [WStr-GetItemWithDelim](#function-wstr-getitemwithdelim)
	* [WStr-FormatString](#function-wstr-formatstring)
	* [WStr-Before](#function-wstr-before)
	* [WStr-After](#function-wstr-after)
	* [WStr-Between](#function-wstr-between)
	* [WStr-ConsiderCase](#function-wstr-considercase)
	* [WStr-EscapeForParam](#function-wstr-escapeforparam)
* [Troubleshooting](#troubleshooting)
{{< /aside >}}

## Installation

Before you can begin using øAzium Strings, you must:

1. Install the Plugin in your FileMaker Pro Extensions folder/directory
2. Quit and relaunch FileMaker Pro if necessary
3. Understand the use of External Functions as explained in your FileMaker Pro documentation
4. Understand the appropriate syntax for the External Functions provided by øAzium Strings (by reading this manual).

{{< note >}}
If you are an experienced FileMaker Pro developer and want to get started quickly, you may want to skip to chapter 5, External Function Reference for an in-depth explanation of the syntax and use of each function.
{{< /note >}}

## About this Manual

This manual covers everything you will need to know to fully understand and use øAzium Strings. As you are reading, keep in mind the standards used throughout this text. General explanatory text is in this typeface. Text that represents commands to and responses from the computer are in this typeface. If you are following examples, these items should be typed exactly as they appear including all quotation marks and punctuation. Finally, there are occasional notes inserted throughout the manual. Each is offset slightly and marked by a special symbol:

{{< note >}}
This kind of note indicates extra explanatory information. It is usually not vital and provides useful or helpful tips or explanations.
{{< /note >}}

{{< tip >}}
This is a tip. Although the information is not potentially harmful, it will help you avoid unnecessary difficulties or common problems.
{{< /tip >}}

{{< warning >}}
This is a warning. Failure to follow guidelines in this kind of note could result in loss of data or other serious problems. An example might be a problem which never shows up during testing and development but which plagues your users.
{{< /warning >}}

## If You Have Problems

This manual attempts to cover all the information necessary to use the øAzium Strings plugin. However, if you experience difficulties which you cannot resolve after consulting this manual, free technical support is available. Send any questions to support@wmotion.com with a full explanation of the problem. We will try to respond as quickly as possible.

If you find technical errors, typos or other mistakes in this manual, please let us know. We are eager to provide the best user experience possible to our customers.

## Introduction

øAzium Strings adds a series of External Functions to FileMaker Pro. These functions are accessible via the “Define Calculation” dialog box in FileMaker and are thus available in calculation fields and various script steps. See your FileMaker Pro documentation for general information on accessing and using External Functions.

Most of the functionality provided by these functions can be accomplished without the help of øAzium Strings, but complex string parsing and manipulations often results in long non-intuitive calculations that are hard to understand, hard to debug and include redundancies that inhibit performance. øAzium Strings aims to remedy this by facilitating clear, concise and fast string parsing calculations. As an example, if you have a field called URL which contains a Web Companion URL such as this:

```text
http://www.mydomain.com/FMPro?-db=test.fp3&-lay=web&-format=response.htm&-view
```

And you would like to determine the database name referenced in the URL, with FileMaker’s built in calculation options you have your work cut out for you. The following calculation will accomplish the task:

```text
Middle(
  URL, Position(URL, "-db=", 0, 1) + 4,
  Position(URL, "&", Position(URL, "-db=", 0, 1), 1) 
     - (Position(URL, "-db=", 0, 1) + 4)
)
```

Not only is this calculation somewhat long and complex (although it is mild in comparison to some), it is also very hard to determine at a glance what it is doing. If you later want to revise it to find the layout name (after `-lay=`), not only do you have to find and change every mention of `-db=` to `-lay=` (there are 3 of them) but you also must change in two places the addition of 4 to an addition of 5 or you will not get the correct results. 

Using øAzium Strings (and specifically the provided `WStr-Between` external function) the exact same results can be obtained from the following calculation:

```text
External("WStr-Between", "-db=|&|" & URL)
```

Once you are familiar with the øAzium Strings this calculation is easy to understand (it returns everything in URL between `-db=` and `&`), and better yet, if you want to change it to return the layout name, you simply change the starting search string from `-db=` to `-lay=`. You do not have to absorb a complex calculation to make simple changes. Despite the overhead inherent to external function calls, this calculation is only slightly slower than the native FileMaker Pro calculation both because it is highly optimized to perform one task and because the redundancy in the first calculation (finding `-db=` 3 times for instance) is eliminated. The performance difference will diminish (and may even reverse) as the complexity of the calculation increases.

### Requirements

øAzium Strings is a FileMaker Pro plugin and consequently requires FileMaker Pro 4.0 or later or FileMaker Pro Developer Edition 4.0 or later. It is available for Microsoft Windows and Macintosh and will run properly on any operating system version and hardware that is supported by FileMaker Pro. 

{{< note >}}
Unlike FileMaker Pro data files, Plugins are not inherently cross platform. Different versions of the plugin are required for Macintosh and Windows. The Macintosh version, however, is Fat-Binary, meaning will run natively on both PowerPC and older Motorola MC680x0 based Macintosh hardware.
{{< /note >}}

### License Availability

øAzium Strings is available under three licenses. The most common “General Use” license grants the purchaser the right to install and use øAzium Strings for personal use only. If you intend to use øAzium Strings for a large installation (for instance in a business setting where a FileMaker Pro solution will be networked and accessed by several clients) a site license is available. Finally, if you are a commercial solution developer and would like to include øAzium Strings in a commercial product distribution, licensing options are available. Contact Waves In Motion (http://www.wmotion.com) for more details.

## General Overview

The External Functions provided by øAzium Strings have a great deal in common with one another. This section covers the general guidelines for using these functions.

### Passing Parameters

Each external function supplied by øAzium Strings will take a series of zero or more parameters and return a single text result. A parameter is a single value that you supply to a function when you call it in a calculation. Parameters can be static text you type directly into the calculation definition within quotes:

```text
External("WStr-ConsiderCase", "Yes")
```

A field value dynamically entered during evaluation:

```text
External("WStr-EscapeForParam", A Text Field)
```

Or a combination of the two:

```text
External("WStr-EscapeForParam", "Value: " & A Text Field)
```

FileMaker Pro allows for External Functions to have only one parameter which is always a text string. Some functions in øAzium Strings require more than one parameter. When this is the case, the øAzium Strings parameters are concatenated, each separated by a “pipe” or absolute value bar — `|`, and passed as a single string. 

{{< note >}}
The `|` character is generally entered by holding down {{< kbd with="Shift" >}} and typing `\`. The back slash key is usually above the return or enter key or to the right or left of the space bar. Your keyboard may vary, but all keyboards can type this key. If you are having trouble finding this key, look closely at your keyboard. It sometimes looks like a straight vertical line, and sometimes like two vertical lines, one directly above the other. It’s bound to be there somewhere.
{{< /note >}}

Because the pipe key is used for a special purpose, if you are passing a parameter that itself contains this character, you will confuse the function. To avoid this, all functions support the notion of “escaping” (you may be familiar with this if you are a programmer or an AppleScripter). Any special character that you don’t want to be treated as such can be preceded by a backslash (\). This will tell the function to treat the character that immediately follows it as plain text and as part of the parameter rather than interpreting its special meaning. Some functions have other special characters you should be aware of as well (see the individual function explanations later in this manual).

{{< tip >}}
A function is provided specifically to help with this problem. See the description of the `WStr-EscapeForParam` function for more information.
{{< /tip >}}

### Non-Text Values as Parameters

Because parameters are combined into a single text string, all parameters must be text. FileMaker will generally handle the conversion for you, but if you are using field values in your parameters, and the field(s) are date or time type fields, you will need to explicitly cast the value to text. FileMaker Pro provides built in functions to do this (for example, `TimeToText()` will cast a time field value to text). Numbers will generally be cast correctly automatically, but it certainly won’t hurt to explicitly cast them as well.

{{< warning >}}
Container field values cannot be used with any of the External Functions.
{{< /warning >}}

### Invalid Parameter Strings

Every External Function has a clearly defined set of parameters it expects. If you pass too many or too few parameters to a function, the function will simply return no result. Also, each parameter is expected to be of a certain type. See chapter 5, External Function Reference, for an explanation of parameter types.

### Getting the Result

When a function is called, it will gather it’s parameters, perform the necessary operation and return a *result*. The result will be a text string. Essentially, FileMaker Pro will replace the function call in a calculation with the result once it is evaluated:

```text
External("WStr-Before", "is|" &
External("WStr-EscapeForParam", "This|is|a|Test"))
```

…Becomes…

```text
External("WStr-Before", "is|" & "This\|is\|a\|Test")
```

…Becomes…

```text
"This|"
```

This allows you to perform multiple function calls in one calculation, and even use function calls as parameters to other function calls. There is no limit to the number of calls or the depth of nesting in a calculation.

{{< tip >}}
As with parameters, results will always be text. If you expect a time or date result, you will want to explicitly cast the text value to that type to avoid unexpected results.  FileMaker Pro also provides built in functions to do this, such as `TextToTime()`. Generally FileMaker will convert to numbers where necessary automatically, but, again, it won’t hurt to do so explicitly.
{{< /tip >}}

## External Function Overview

The øAzium Strings plugin includes 8 external functions in all. One function is a *static* function. Static functions require no parameters and always return the same value. One is a *control* function. These functions return no result but control the state of the plugin and effect the behavior of other functions. The remaining 6 are *standard* functions, directly involved in string manipulations and parsing. They take parameters, use them and return a relevant result. The eight functions are explained briefly below.

**[WStr-GetPluginVersion](#function-wstr-getpluginversion)** : This *static* function does not require any parameters. It simply returns the version of the plugin currently installed as a decimal number.

**[WStr-GetItemWithDelim](#function-wstr-getitemwithdelim)** : This *standard* function takes three parameters. It is used to extract text items from lists. A use might be to get file or folder/directory names from a file path or to get an item from a return delimited list.

**[WStr-FormatString](#function-wstr-formatstring)** : This *standard* function takes two parameters. It is used to format strings (usually of numbers) to match a given pattern. A use might be to format telephone numbers in a contact manager.

**[WStr-Before](#function-wstr-before)** : This *standard* function takes two parameters. It is used to return the text in a string that comes before a given match string. A use might be to get the protocol of a given URL.

**[WStr-After](#function-wstr-after)** : This *standard* function takes two parameters. It is used to return the text in a string that comes after a given match string. A use might be to get the domain name from a URL.

**[WStr-Between](#function-wstr-between)** : This *standard* function takes three parameters. It is used return the text in a string that comes between two given match strings. A use might be to extract values from an Email header.

**[WStr-ConsiderCase](#function-wstr-considercase)** : This *control* function takes one parameter. It is used to turn case sensitivity on or off for other functions. It does not return a result.

**[WStr-EscapeForParam](#function-wstr-escapeforparam)** : This *standard* function takes one parameter. It is used to prepare a string to be passed as a single parameter in any other String Function without confusing the function. It will “escape” any special characters so that they are interpreted as plain text.

## External Function Reference

Each External Function expects certain parameters in a certain order. A parameter can be any of these types:

* *Character:* A single letter, number, punctuation mark etc
* *String:* A string of characters, like the value of a text field
* *Integer:* A whole number. Any decimal points or non-numerical characters will be ignored
* *Flag:* Any of a predefined set of values. Appropriate values will be specified under each relevant function

For each of the eight functions, the exact syntax, an explanation of the parameters, an explanation of the result and usage examples is given below.

### Function `WStr-GetPluginVersion`

This *static* function does not require any parameters. It simply returns the version of the plugin currently installed, as a string. It has this syntax:

```text
External("WStr-GetPluginVersion", "")
```

#### Example: checking if the plug-in is installed and enabled…

This calculation will return OK if it is executed when øAzium Strings 1.0 or later is installed. It will return Error if øAzium Strings is not installed or if it is a version prior to 1.0.

```text
If (
  External("WStr-GetPluginVersion", "") >= 1.0,
  "OK",
  "Error"
)
```


### Function `WStr-GetItemWithDelim`

This *standard* function takes three parameters. It is used to extract text items from lists. A use might be to get file or folder names from a file path or to get an item from a return delimited list. It has this syntax:

```text
External("WStr-GetItemWithDelim", 
  "<itemNum>|<delimiter>|<list>")
```

* `<itemNum>` (*Integer*) The item number to return. If the item number is positive, the function will count from the beginning of the list and return the `<itemNum>` item. If `<itemNum>` is negative, the function will count backward from the end of the list and return the `<itemNum>` item from the end.
* `<delimiter>` (*Character*) The delimiter to assume when identifying items. The delimiter must be a single character. If you use a value that is not the delimiter of the list, the function will work but you will get unexpected results.
* `<list>` (*String*) The list to search in. The list should be of text items (strings), each separated by a single character delimiter. 
                              
Specifically, it returns item number `<itemNum>` in `<list>` when using `<delimiter>` as a delimiter. If there are fewer than `<itemNum>` items in the list, the result will be empty.

{{< archive/oazium-strings-case-note >}}

#### Example: Get an item from a list…

Given the following list of colors in a field called `List`:

```text
Red
Orange
Yellow
Green
Blue
Violet
```

You can get these results:

```text
External("WStr-GetItemWithDelim", "2|¶|" & List)
# returns Orange

External("WStr-GetItemWithDelim", "-3|¶|" & List)
# returns Green (note the negative item number)
```

#### Example: Parse a DOS file path…

Given DOS path `c:\myfiles\letters\mom\jan1.doc` in a field called `Path`, you can get these results:

```text
External("WStr-GetItemWithDelim", "1|\\|" & Path)
# returns the drive letter c:

External("WStr-GetItemWithDelim", "-1|\\|" & Path)
# returns the file name jan1.doc
```

{{< note >}}
In this example, a double backslash (\\) is passed as the delimiter parameter. This is because backslash is a special character and must be escaped. See the explanation of *[WStr-EscapeForParam](#wstr-escapeforparam)* for more information.
{{< /note >}}

#### Example: Parse a Macintosh file path…

Given the Macintosh path `My Hard Disk:Documents:Letters:To Mom:January 1, 1998` in a field called `Path`, you can get these results:

```text
External("WStr-GetItemWithDelim", "1|:|" & Path)
# returns the volume name My Hard Disk

External("WStr-GetItemWithDelim", "-1|:|" & Path)
# returns the file name January 1, 1998
```

#### Example: Extracting items from value lists…

`WStr-GetItemWithDelim` can be combined with the FileMaker Pro built-in Design Function `ValueListItems()` to extract certain items from a value list. Suppose you have a value list called "Payment Methods" with these items:

* Cash
* Check
* Visa
* Master Card
* Discover

Then you can get these results:

```text
External("WStr-GetItemWithDelim", "3|¶|" &
  ValueListItems (mydb.fp3, Payment Methods)

# returns Visa
```

A looping script could be used to examine all values in a list in succession. As mentioned above, the function will return an empty string ("") when the item number requested does not exist, signaling the end of the value list.

### Function `WStr-FormatString`

This *standard* function takes two parameters. It is used to format strings (usually of numbers) to match a given pattern. A use might be to format telephone numbers in a contact manager. It has this syntax:

```text
External("WStr-FormatString", "<pattern>|<string>")
```

* `<pattern>` (*String*) The pattern to apply. The pattern can contain letters, numbers and punctuation, as well as place holders:
	* `#` place holder for a number (0-9)
	* `@` place holder for a letter (a-z or A-Z)
	* `*` place holder for a letter or a number
* `<string>` (*String*) The string of text to apply the pattern to.

The pattern is made up of literals and place holders. Literals (letters, numbers and punctuation) are copied to the result intact. Place holders are substituted with letters and/or numbers from the `<string>` parameter. If the end oif the `<string>` parameter to is reached, copying is halted and the result is returned as is. If there are more letters or numbers than the pattern expects, they are ignored. All punctuation and special characters from the `<string>` pattern are ignored.

#### Example: Format a phone number…

Given a field called `Phone` and the calculation:

```text
External("WStr-FormatString",
  "(###) ###-#### x####|" & Phone)
```

The following results will be obtained:

```text
5555551212       => (555) 555-1212
555-555-1212     => (555) 555-1212
5555551212 21    => (555) 555-1212 x21
0123456789012345 => (012) 345-6789 x0123
800SOSAPPL       => (800) 
```

If the calculation were updated to read:

```text
External("WStr-FormatString", "1-###-***-****|" & Phone)
```

Then:

```text
800SOSAPPL       => 1-800-SOS-APPL
```

#### Example: Format a social security number…

Given a field called `Social` containing `555-55-5555`:

```text
External("WStr-FormatString", "SSN: ### ## ####|" & Social
# returns 555 55 5555
```

#### Example: Extract numbers from a street address…

Given a field called `Street Address` containing `1234 East Third Street`:

```text
External("WStr-FormatString",
  '##########|" & Street Address)
# returns 1234
```

{{< warning >}}
The `<pattern>` parameter contains special characters (@, #, \*). If you want to include these characters as text in the parameter (rather than as place holders) they must be escaped. This function: `External("WStr-FormatString",  "SS#: ###-##-####|" & Social)` would return `SS5: 555-55-555` which is probably not what you intend. To fix this see the *[WStr-EscapeForParam](#wstr-escapeforparam)* function.
{{< /warning >}}


### Function `WStr-Before`

This *standard* function takes two parameters. It is used to return the text in a string that comes before a given match string. A use might be to get the protocol of a given URL. It has this syntax:

```text
External("WStr-Before", "<match>|<string>")
```

* `<match>` (*String*) The string of text to end before
* `<string>` (*String*) The string of text to search in

Specifically, this function returns the text in `<string>` before the first occurrence of `<match>`. If `<match>` is not found in `<string>` nothing will be returned. The result will not end with `<match>`.

{{< archive/oazium-strings-case-note >}}

#### Example: Get the protocol moniker from a URL…

Given `http://www.microsoft.com/` in a field called `URL`.

```text
External("WStr-Before", ":|" & URL)
```

Would return `http`. If URL contained `ftp://ftp.microsoft.com/` the same calculation would return `ftp`.

#### Example: Get the first paragraph from a block of text…

Given a field called `Letter Body` containing the body of a letter, this formula would return the first paragraph of the letter: 

```text
External("WStr-Before", "¶|" & Letter Body)
```

### Function `WStr-After`

This *standard* function takes two parameters. It is used to return the text in a string that comes after a given match string. A use might be to get the domain name from a URL. It has this syntax:

```text
External("WStr", "<match>|<string>")
```

* `<match>` (*String*) The string of text to start after
* `<string>` (*String*) The string of text to search in

Specifically this function returns the text in `<string>` before the first occurrence of `<match>`. If `<match>` is not found in `<string>` nothing will be returned. The result will not begin with `<match>`.

{{< archive/oazium-strings-case-note >}}

#### Example: Get the hostname from a URL

Given a field called `URL` containing `http://www.apple.com/`:

```text
External("WStr-After", "://|" & URL)
```

Would return `www.apple.com/`.


### Function `WStr-Between`

This *standard* function takes three parameters. It is used return the text in a string that comes between two given match strings. A use might be to extract values from an Email header. It has this syntax:

```text
External("WStr-Between", "<match1>|<match2>|<string>")
```

* `<match1>` (*String*) The string of text to start after
* `<match2>` (*String*) The string of text to begin before
* `<string>` (*String*) The string of text to search in

The text within `<string>` which comes between `<match1>` and `<match2>`. If either `<match1>` or `<match2>` is not found in `<string>` nothing will be returned. The result will neither begin with `<match1>` nor end with `<match2>`.

{{< archive/oazium-strings-case-note >}}

#### Example: Parsing a CDML URL…

Given a field called `URL` containing:

```text
http://www.yourdomain.com/FMPro?-db=mydb.fp3&-lay=web&-format=response.htm&-view
```

You can easily obtain these results:

```text
External("WStr-Between", "://|/|" & URL)
# returns www.yourdomain.com

External("WStr-Between", "-db=|&|" & URL)
# returns mydb.fp3

External("WStr-Between", "-lay=|&|" & URL)
# returns web

External("WStr-Between", "-format=|&|" & URL)
# returns response.htm
```

#### Example: Parsing SMTP email headers…

Given a field called `Header` containing an SMTP Email header:

```text
External("WStr-Between", "subject:|¶|" & Header)
```

Would return the subject of the message.

### Function `WStr-ConsiderCase`

This *control* function takes one parameter. It is used to turn case sensitivity on or off for the following functions:

* `WStr-GetItemWithDelim`
* `WStr-Before`
* `WStr-After`
* `WStr-Between`

It has this syntax:

```text
External("WStr-ConsiderCase", "<option>")
```

* `<options>` (*Flag*) The setting for case sensitivity. `<option>` itself is never case sensitive (`YeS` will work as well as `yes`). `<option>` can be `Yes`, `Y` or `1` to turn case sensitivity on; `No`, `N` or `0` (zero) to turn case sensitivity off.

This function has no result.

{{< note >}}
When case sensitivity is turned on (`Yes`, `Y`, `1`) it will remain on until it is turned off, the plugin is re-enabled (via Edit → Preferences → Application under Plugins in FileMaker Pro) or FileMaker Pro is relaunched. The change will effect all references to the effected functions in all files. Case sensitivity is always off when the plugin first loads.
{{< /note >}}

{{< warning >}}
If you are going to mix multiple files using øAzium Strings, shipping a commercial product which uses øAzium Strings or use files you did not create, it is recommended that you always set case sensitivity using `WStr-ConsiderCase`. If you do not, calculations which work in testing may fail in use.
{{< /warning >}}

{{< note >}}
FileMaker Pro can only execute one script at a time or evaluate one calculation at a time. Bearing this in mind, it is safe to set case sensitivity at the top of a script and assume that setting throughout that script and it’s subscripts. Also, if a calculation contains multiple calls to effected functions, case sensitivity needs to be set only once in the calculation. See the examples below for how to enable case sensitivity within calculations.
{{< /note >}}

#### Example: Parsing a URL without worrying about case…

Given a field called URL containing `http://www.yourdomain.com/FMPro?-DB=mydb.fp3&-LAY=web&-FORMAT=response.htm&-view`, the calculation:

```text
External("WStr-Between", "-db=|&"| & URL)
```

Will return `mydb.fp3` if case sensitivity is off, but will not return a result if case sensitivity is on, since `-db=` is not in the URL. To avoid this problem, set case sensitivity in the calculation:

```text
External(WStr-ConsiderCase", "n") &
  External("WStr-Between", "-db=|&" & URL)
```

This will return the correct result always.

{{< tip >}}
Since `WStr-ConsiderCase` returns no result it can be mixed into your calculation anywhere and will not effect the value of the calculation after evaluation.
{{< /tip >}}

#### Example: Setting case sensitivity in a script…

If you are using several effected functions in a multi-step ScriptMaker™ script, you can insert the following step at the top of your script:

```text
Set Field [ field name, 
  External("WStr-ConsiderCase)", "No") ]
```

Now all function calls in steps following this one will have case sensitivity turned off. It makes no difference what field is the target of this set field step, but bear in mind that it will empty the field (""). You can turn case sensitivity off and on as often as you want, even mixing modes within a single calculation or script. Although you will not effect the value of a field if you set it to itself and a WStr-ConsiderCase call, if that field is later deleted it will have adverse effects on seemingly unrelated scripts. For this reason, it is recommended that you create a global field in each file to be the target of this and other control functions.

{{< warning >}}
You may be tempted to try not specifying a field in the set field step. This will not work as FileMaker considers the step invalid, generates an error (102: Field Missing) and does not evaluate the calculation.
{{< /warning >}}

### Function `WStr-EscapeForParam`

This *standard* function takes one parameter. It is used to prepare a string to be passed as a single parameter in any other String Function without confusing the function. Essentially it will “escape” any special characters so that they are interpreted as plain text. It has this syntax:

```text
External("WStr-EscapeForParam", "<param>")
```

* `<param>` (*String*) The text parameter to prepare.

Specifically this function returns <param> with all special characters “escaped”; in other words, all special characters will be preceded by a backslash (\). Currently, special characters include:

* `\` Escape character
* `|` Parameter delimiter
* `@` Alpha-character place holder
* `#` Numeric character place holder
* `*` Alpha-numeric character place holder

{{< tip >}}
Generally, if you are using a field value you do not control as a parameter, or part of a parameter, you should pass it through `WStr-EscapeForParam` to be sure it will not cause problems. This includes fields whose values are entered by users. You can escape static text parameters (parameters you type directly in the calculation definition) manually or by passing it through this function. Note though that future versions of the plugin may add additional special characters, and the `WStr-EscapeForParam` function will be updated to support any additions.
{{< /tip >}}

{{< warning >}}
If you pass the `<pattern>` parameter of the `WStr-FormatString` function through this function, the pattern will be invalidated as all place holder characters will be escaped. 
{{< /warning >}}

#### Example: Work with lists that use `|` as a delimiter…

If you have a field called List which contains 	Extra Large|Large|Medium|Small|Extra Small, you may be tempted to use the following calculation:

```text
External("WStr-GetItemWithDelim", "2|||" & List)
```

But this calculation passes to the function 8 parameters (`2`, `""`, `""`, `Extra Large`, `Large`, `Medium`, `Small`, `Extra Small`) while the function expects only 3. The function call will fail and will return nothing. To avoid this problem, you must escape the `|` character in your parameters. First, the `<delimiter>` parameter needs to be escaped so that `|` is treated as the value for delimiter and not as a special character (separating parameters). Second, the field List must be treated such that the `|` characters are escaped, allowing the field value to be treated as one parameter. The following calculation accomplishes both:

```text
External("WStr-GetItemWithDelim", "2|\||" &
  External("WStr-EscapeForParam", List))
```

This calculation will produce in the correct result — `Large`. Notice that the second `|` in the function call is preceded by a backslash. This is a case of escaping the parameter manually in the text of the calculation. Also notice that the field List is passed through `WStr-EscapeForParam` before being sent to `WStr-GetItemWithDelim`.

## Troubleshooting

If you are having trouble using øAzium Strings, see if you can find the problem below.

### The plugin gives an error message when I launch FileMaker Pro and refuses to load.

Make sure you are using the full version of øAzium Strings. If you are using a Beta or Demonstration version, it will expire after a period of time. If you have not done so already, contact Waves In Motion (http://www.wmotion.com) to purchase the full version.

### The External Functions do not show in the function list in the calculation dialog box.

Like Status and Design Functions, External Functions will not show in the complete list of functions in the top right corner of the calculation dialog box. From the popup above the function list, choose External. The External Functions should now show, organized by plugin.

Make sure the function is installed and loaded. From the Edit menu, choose Preferences, then Application. Click the Plugins tab or choose Plugins from the popup menu. In the list of plugins, you should see øAzium Strings. Make sure the box next to its name is checked. If øAzium Strings is not in the list, it is not properly installed. Refer to your FileMaker Pro documentation for information on installing plugins.

If you do not have a plugins section in your FileMaker preferences, you are not using FileMaker Pro 4.0. Contact FileMaker Inc. for upgrade information.

### I am using an external function in a calculation, but nothing is being returned.

Make sure the plugin is installed and loaded (see above). If a calculation references a function that does not exist, it will not return a result. Also, make sure your function call uses the correct spelling and capitalization for the function name. It is easiest to choose the correct function from the function list than to type it in yourself.

If the plugin is installed and loaded and the function name is spelled correctly, make sure you are sending the correct number of parameters. If a function receives too many or too few parameters it will not return a result.

Occasionally there will not be enough memory for the function to work properly. This is uncommon, as the functions use a very small amount of memory, but possible. If you are using a Macintosh, try quitting FileMaker and increasing its memory allocation in the Get Info window. If you are using Windows, it is extremely unlikely that memory is the problem.

### The External Functions seem to drop some characters. Sometimes I have backslashes in my parameters and they are missing from the results.

The External Functions use the backslash character to “escape” special characters. This means that the backslash itself is a special character. If a parameter contains a backslash, it will assume it is escaping the following character and will be skipped. To avoid this problem you must escape the backslash itself by preceding it with a backslash (`\\`). See the explanation of the `WStr-EscapeForParam` function for more information.

