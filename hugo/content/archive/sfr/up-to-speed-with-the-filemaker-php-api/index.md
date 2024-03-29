---
title: "Up To Speed with the FileMaker PHP API"
date: 2007-05-20
archive: sfr
tags: 
  - Archive Post
---

So you’ve heard about the new [FileMaker PHP API](https://support.claris.com/s/article/How-to-use-FileMaker-API-and-PHP-1503692791604?language=en_US). You want to put FileMaker data on the web, but you’re not sure where to start. It can be a bit overwhelming at first, but using PHP to publish FileMaker to the web is *easy*, *fun*, and *totally awesome*. This (admittedly lengthy) article tells you everything you need to know to get started.

Way back in version 4, FileMaker added built-in web publishing capabilities to FileMaker Pro. With a plug-in called the Web Companion, you could craft custom web pages that pulled data directly from a FileMaker Pro database to stay up-to-date. You could even build entire web sites that were completely managed by a database. This technology was massively popular because it let you publish your FileMaker Pro-based data and services to a broad audience in a form that _anybody_ could handle. The world of FileMaker Web Publishing was born{{< footref "1" >}}, and people loved it.

## It’s the End of the World as We Know It

But this old-school web publishing had a major weakness: it was totally proprietary. As web application development grew in popularity, the importance of standardization also grew. The CDML language used to construct web pages was limited in its capabilities. FileMaker’s built-in web server (which was the only server capable of processing CDML) was anemic. To address these concerns FileMaker introduced a more powerful and standards-compliant web publishing technology with FileMaker Server 7 Advanced: *XSLT web publishing*. This technology used industry standard Apache and IIS web server software and the open standard XSLT language. Finally you could build fast, capable web pages with fewer limitations, and sill keep a direct connection to your FileMaker Pro database.

Unfortunately, XSLT has its own major weakness: it is __hard__. XSLT is a complex and unintuitive language. It is well suited for the standardized transformation of one XML format to another (its primary purpose) but it is a poor fit for web application development. It is an especially bad choice for the FileMaker community, which is largely made up of real honest-to-goodness ordinary folks who don’t have a degree in Computer Science and just want simply powerful tools with which to get the job done.

{{< aside title="The Perl Principle" >}}
I never liked XSLT much. In what I believe is the best programming book ever written (the [Camel Book][1]), the authors outline a primary goal of the Perl programming language. They say {{< q cite="Programming Perl, by Larry Wall, Tom Christiansen, and Jon Orwant, pub. 2000 O'Reilly Media, Inc." >}}Easy things should be easy, and hard things should be possible.{{< /q >}} I tend to think this rule should be applied to any technology you plan to spend your valuable time building with. FileMaker Pro passes this test beautifully, for example. But XSLT does not. In XSLT, even the easiest and most common things are a pain in the rump. But alas, I digress.

[1]: http://www.oreilly.com/catalog/pperl3/
{{< /aside >}}

When XSLT replaced CDML back in 2004, web publishing with FileMaker came to a virtual standstill. Instead of the fun, learnable CDML development process, experienced web publishers and new users alike were forced to wade through all the complexities of XSLT and many simply gave up.

## Hope on the Horizon

These days you don’t have to look far to find easy, powerful, standards-based web technologies. For instance, something like 234 trillion people use PHP, a super-capable, super-fast, totally standard web programming language that powers everything from [Wikipedia][2] to [The Roald Dahl Fan Site][3]. Best of all, PHP is infinitely simpler than XSLT. It works the way you would expect: you write some HTML, and add a little code here and there to produce the dynamic parts{{< footref 2 >}}. Best of all, PHP is well documented on-line ([php.net][8]) and in hundreds of books, magazines, and blogs.

FileMaker noticed that nobody was bothering with XSLT anymore, so they took the plunge and created the FileMaker API for PHP, heretofor called the PHP API. It adds a series of special commands{{< footref 3 >}} to the PHP language that make it a breeze to talk to your FileMaker database right in your PHP code. This is a big deal. It means that ordinary FileMaker users now have an easy and inexpensive way to get back in to web publishing. I’m looking forward to a second renaissance: FileMaker web publishing will be loved by all again. This article will get you up to speed on the PHP API.

[2]: http://www.wikipedia.com/
[3]: http://www.roalddahlfans.com/

## Setup and Configuration

Before you can actually start writing code, you need a few critical pieces. They are:

1. _A web server_. Mac OS X users are in luck: the Apache web server is built right in to your computer. If you use Windows, you’ll need a server version with IIS.
2. _The PHP Mojo_. You next need to install PHP and the FileMaker API for PHP on your computer. You can sign up for the public beta [directly from FileMaker][4]. Once you sign up, FileMaker will email you a link to download the software. Unless you are __completely positive you know what you’re doing__ you should choose the “If you are new to PHP” version. This download will install and configure PHP for your computer, and install the API add-ons in just the right spot.
3. _FileMaker Server Advanced_. Like all FileMaker web publishing, the PHP API requires the Web Publishing Engine, which is a part of [FileMaker Server Advanced][5]. Only this (more expensive) version of FileMaker Server has the XML capabilities the PHP API depends on to do its job.

{{< aside >}}
Update {{< time "2008-05-09" "May 9, 2008" >}}: I can’t believe I haven’t mentioned this before now, but point #3 above is no longer valid. As of FileMaker Server 9.0, the PHP API can be used with the standard FileMaker Server product, so save some money and don’t bother buying the Advanced version.
{{< /aside >}}

Once you have installed and configured the Web Publishing Engine according to [the documentation][6], it will be preconfigured to allow the PHP API to work. If you have modified the configuration, though, you’ll need to log in to the Web Publishing Engine console and make sure Custom Web Publishing with XML is turned on.

This article won’t go in to setting up and configuring web servers. Before you continue, you should have PHP and the FileMaker API for PHP installed and working, and you should know where to put php files so they are accessible by the web server (/Library/WebServer/Documents on Mac OS X, usually C:/inetpub/wwwroot on Windows).

[4]: http://www.filemaker.com/developers/resources/php/index.html
[5]: http://www.filemaker.com/products/fmsa/
[6]: http://www.filemaker.com/downloads/documentation/fmsa8_web_install.pdf

## A Brief Introduction to PHP

If you are new to PHP, this section will attempt to bring you up to speed quickly. But bear in mind that PHP is a vast language with tons of functionality. The ultimate resource is [the php manual][7] at [php.net][8]. Although you’ll get enough info here to make a working PHP web page, you’ll need to do more reading to get really comfortable with the language. On the other hand, if you’re already a php whiz, you can skip right to the next section.

PHP is a template based scripting language. A `.php` file is really just an ordinary text file that tells PHP what kind of text you want to produce. In fact, this is a perfectly valid PHP file:

```php
hello world
```

If you put a file like that on your web server and view it with a web browser, you’ll see just the words “hello world” on the page. With no special instructions, PHP simply spits out all the text in the file. But that’s not terribly exciting. After all, you could avoid PHP entirely if you just wanted to put some static text on the web page. The magic of PHP comes in to play when you insert these special tags in your page: `<?php` and `?>` . The things you put between these tags are not simply sent to the browser like plain text. Rather, they are _interpreted_ by the PHP system. You put scripting code between these tags, and PHP runs your scripts. The scripts themselves can output information using the `echo` command. Here is a PHP file with an embedded script:

```php
<?php echo "hello world" ?>
```

This script does exactly the same thing as the last one. But it does it by running a snippet of script that uses the `echo` command to put the message on the page. Embedded PHP scripts can do a whole lot more than echo text to the page though. They can perform decision making logic, do math, send email, and (using the FileMaker API for PHP) they can even run a FileMaker script and extract the record data it finds. Here is a PHP file that does a little more:

```php
<?php
  $hour = date("G");
  if ($hour < 12) echo "good morning world";
  elseif ($hour < 18) echo "good afternoon world";
  else echo "good evening world";
?>
```

This sample adds some intelligence to your evolving site. Now it says “good morning world” when the hour of the day is less than 12. It gives a more appropriate “good afternoon world” between noon and 6:00 PM. Finally, after 6 it says “good evening world.” In this sample, you can see some of the basics of the PHP language. First, `$hour` is a variable (all PHP variables start with `$` just like script variables in FileMaker). The line `$hour = date("G")` creates the `$hour` variable and sets its value. It uses the `date()` function to find the current hour. You can read more about the date function [here][9]. (In fact, you can get comprehensive documentation on any function in PHP by searching the php web site). In this case, the `"G"` being passed to the `date()` function tells PHP you want just the hours, in 24 hour format.

You can also see PHP’s `if` syntax. The first line checks to see if the `$hour` variable is less than 12. If so, the first `echo` line kicks in. Just like FileMaker’s `If` script step, PHP’s has an `elseif` companion for adding additional conditions. Unfortunately, unlike ScriptMaker, with PHP you have to know what to type: you don’t get a handy point-and-click guide to all the syntax. But with a little patience, exploration of the examples in this article, and some time spent on [php.net][8] or with a good book, you too can be a PHP expert.

[7]: http://www.php.net/manual/en/
[8]: http://www.php.net/
[9]: http://www.php.net/manual/en/function.date.php

## Preparing your Database

Before PHP can talk to your particular database, you need to set up the appropriate privileges. The PHP API looks for its own special extended privilege in FileMaker before it is allowed to do its work. Your job is twofold: define the appropriate extended privilege, and grant that privilege to a privilege set.

{{< steps >}}

{{< step "Open your database in FileMaker Pro." >}}
You should see your database window.
{{< /step >}}

{{< step "Choose File → Define → Accounts & Privileges." >}}
The "Accounts and Privileges dialog box appears.
{{< /step >}}

{{< step "Switch to the Extended Privileges tab." >}}
You see a (probably empty) list of extended privileges.
{{< /step >}}

{{< step "Click New." >}}
A window appears where you can enter custom privileges.
{{< /step >}}

{{< step "In the Keyword box, enter _fmphp_." >}}
This is the keyword you need in place for the PHP API to work with your database. You can put anything you want in the Description box, for example _Access via PHP Web Publishing_.
{{< /step >}}

{{< step "Click OK." >}}
FileMaker saves this new privilege.
{{< /step >}}

{{< /steps >}}

Now that the appropriate extended privilege is defined, you need to grant this privilege to some privilege set. Here, you have a decision to make. If your site is going to be available to the public or to lots of users who don’t have accounts in FileMaker, then you should create a _new_ account and a new privilege set. Give the privilege set only the permissions it needs for your web pages to work (including the `fmphp` extended privilege and access to the records and fields that will be used on the web). Then you can hard-code the PHP code to use this username and password. This is the most common method, and the one you’ll use in this article.

On the other hand, if your web users are the same folks who use FileMaker Pro directly, you can give the `fmphp` extended privilege to your existing privilege sets. You’ll also have to use a log in form on your PHP web site to ask for the username and password so FileMaker can connect.

For this article, create a new account with the username `php` and a good password. Assign this account to a new privilege set, called `PHP Access`. When defining the privilege set, use these options:

1. In the Records pop-up menu, choose “Create, edit, and delete in all tables.”
2. In the Layouts pop-up menu, choose “All view only.”
3. In the Value Lists pop-up menu, choose “All view only.”
4. In the Scripts pop-up menu, choose “All executable only.”
5. In the Extended Privileges list, turn _off_ “Access via FileMaker Network (fmapp)” and turn _on_ your `fmphp` extended privilege.

When you’re finished setting up privileges, click OK a half-dozen times to dismiss all the open dialog boxes.

## Making the Connection to FileMaker

PHP has thousands of built in functions covering more territory than Lewis and Clark. But one thing it doesn’t have built in is a `connect_to_filemaker_pro()` function. Instead, you use the _classes_ in the PHP API to talk to your FileMaker Pro databases. Before you can do anything with FileMaker, though, you need to make a connection. It is simple:

```php
$connection =& new FileMaker('My Database', 'myserver');
```

This little snippet of PHP code creates a FileMaker object that represents the connection to the database. You pass in the name of your database, and the address of your Web Publishing Engine server. The object is stored in a variable called `$connection` (although you can call this variable anything you want). It is important to note that this command doesn’t actually talk to FileMaker. Instead, it gets _ready_ to talk to FileMaker by storing the appropriate connection information.

The first thing you probably want to do with this object is tell it what username and password to use. You do that thusly:

```php
$connection->setProperty('username', 'php');
$connection->setProperty('password', 'mypassword');
```

The object stored in `$connection` has a few _methods_, or built-in functions, that work with the connection. In this case you’re calling the `setProperty` method twice. (You call a method using the _arrow_ operator: `->`. You can see it right between `$connection` and `setProperty`.) First to set the username, and then to set the password. You’ll of course substitute your real password for `mypassword` here.

## Finding and Displaying Record Data

Now the PHP API has all the information it needs to talk to your database. You only need to tell it what to say. The most common thing you’ll do in a PHP page is find some records. You do that with the `newFindCommand` method:

```php
$cmd =& $connection->newFindCommand(‘My Layout’);
$cmd->addFindCriterion(‘First Name’, ‘Sophia’);
$cmd->addFindCriterion(‘Last Name’, ‘Coffey’);
$result = $cmd->execute();
```

The `newFindCommand` method expects just one parameter, the name of a layout in your database. FileMaker figures out which table to search and which fields to return based on this layout. `newFindCommand` returns a command object, which you store in a variable called `$cmd`.

{{< aside title="Layouts and PHP" >}}
Before you move on, think hard about what you just did. The fact that you specify a layout for PHP to use raises some important considerations:

* If you remove a field from a layout, that field is no longer sent back to PHP pages that use that layout, even if the field is still in the database. This could break the page.
* If you delete a layout, PHP pages that use it will stop working.
* If you add fields to a layout, the new data will be sent back to PHP pages, although the pages don’t do anything with it. This makes the PHP to FileMaker communication slower without adding any benefit, especially if you add summary fields, complex calculation fields, or large portals.

With these in mind, you’ll understand why it is a good idea to create special layouts specifically for PHP to use. Then you can modify your ordinary layouts without worrying about breaking the pages. And your php-specific layouts can be as trim as possible to keep things running quickly. You could, for example, add a `web_contact` layout to your contact manager database, and include only the fields you want to show on the web.
{{< /aside >}}

The second and third lines in this example tell FileMaker what to search for. Using the `addFindCriterion` method, you specify what field to search in, and what value to search for. In this case, you’re asking for records with “Sophia” in the First Name field and “Coffey” in the Last Name field.

The last line calls the `execute` method on the command object. Here, for the first time, the PHP API actually talks to FileMaker. It tells your database to go to the My Layout layout, find all the appropriate records, and send them back. The result (a result object) is stored in the `$result` variable, ready for you to access.

### Checking for Errors

When you call the `execute` method on a command object, you can actually get one of two possible responses. You _usually_ get a set of records. But you could get an error instead. Errors arise if the Web Publishing Engine isn’t reachable, the layout couldn’t be found, the find criteria was invalid, or simply if no records were found. Before you begin digging for records, then, you need to check for errors. You can make the check easily enough using the `FileMaker::isError` function. You get errors most often when you’re first building a page, as you work out mistakes in your code. When these kinds of errors crop up, it is exceptionally helpful if you get the PHP code to show you information about the error message, so you’re not left wondering what went wrong. So initially, you should use this boilerplate error handling code:

```php
if (FileMaker::isError($result)) {
  echo 'unable to find Sophia Coffey: ' . $result->message . '(' . $result->code . ')';
  die();
}
```

This code checks to see if the result represents an error (notice that your `$result` variable is being sent to the `FileMaker::isError` function). If so, it dumps out a meaningful error message to the page. This message includes the `$result->message` and `$result->code` values, which are the english-language error message numerical code associated with the error. The `die` function tells PHP to stop processing the page. The errors tend to fall in to two categories:

* Sometimes the error will have no code (in parentheses at the very end of the error message). These errors usually mention having trouble communicating with the “host”. This means the PHP API couldn’t talk to your Web Publishing Engine for some reason. Make sure the address is correct, Custom Web Publishing with XML is turned on, your username and password are correct (including case for the password) and that the account has the `fmphp` extended privilege.
* Other errors, which do have a code at the end, are FileMaker errors. FileMaker told the PHP API it couldn’t perform the requested action for some reason. This is almost always because of a typo in your code or some other mistake on your end. For example, if you misspell a field name in your find criteria, you’ll get a Field not Found error. The notable exception is error number 401. This just means no records were found, which may be a reasonable outcome for your web site. You’ll learn how to deal with this particular error shortly.

If you get a FileMaker error code, you should promptly go to Google and search for “FileMaker Error Code X” (only put the real code in place of the X). This will undoubtedly find the page on [briandunning.com][10] where you’ll find a plain-english explanation of the problem. Think about the error you’re getting and see if you can spot where in your code you made a mistake.

The one error code you probably _don’t_ want to show on the web page is FileMakers “No records found” error (401). You can easily enhance your error handling code to deal with this case:

```php
if (FileMaker::isError($result)) {
  if ($result->code != 401) {
    echo 'unable to find Sophia Coffey: ' . $result->message . '(' . $result->code . ')';
    die();
  }
  else $notFound = true;
}
```

This version only sends back an error message (and aborts the page) if the error code is not 401. If you do get a 401 error, it sets a `$notFound` variable to `true` but lets the page continue to process. You’ll use this `$notFound` variable later to avoid asking for records that don’t exist.

[10]: http://www.briandunning.com

### Accessing Record Data

Once you’ve confirmed that you didn’t get an error, you’re ready to look at the records you got back. The result object has a `getRecords` method for just this purpose. It returns a [PHP array][11] of record objects. You can then use the `getField` method on a record object to access actual field data. Here’s an example that puts information from the first record on the page:

```php
$records = $result->getRecords();
echo 'First Name: ' . $records[0]->getField('First Name') . '<br>';
echo 'Last Name: ' . $records[0]->getField('Last Name') . '<br>';
echo 'Email Address: ' . $records[0]->getField('Email Address') . '<br>';
```

In PHP, arrays start with zero, so the last three lines of this sample use the expression `$records[0]` to fetch the _first_ record. In each case, the `getField` method grabs a field value, which is echo’d onto the page. (The `.` operator in PHP is like FileMaker’s `&` operator: it concatenates text. So each `echo` line here actually prints out a label, then the field value, then an HTML `<br>` tag.)

More often than not, you want to show _all_ the records instead. To do so, you use a PHP `foreach` loop:

```php
$records = $result->getRecords();
foreach ($records as $record) {
  echo 'First Name: ' . $record->getField('First Name') . '<br>';
  echo 'Last Name: ' . $record->getField('Last Name') . '<br>';
  echo 'Email Address: ' . $record->getField('Email Address') . '<br>';
  echo '<br>';
}
```

This time, PHP loops through every record that was found, and puts the name and email information from each one on the page. Notice that inside the `foreach` loop, you have a new variable called `$record` (singular) that holds just one record object, so you no longer need the `[0]` from the previous example.

Using the information you’ve gotten so far, you can do a lot. You could build an entire web site that gets live, up-to-the-minute data right from your database and mixes it right into the web pages. But the PHP API lets you go far beyond just finding data.

[11]: http://www.php.net/manual/en/language.types.array.php

## Other Command Types

In the last section, you used the FileMaker object’s `newFindCommand` to create a command object that finds records. The PHP API has several other methods for additional command types. The more common types are explained here.

{{< tip >}}
You can also see _all_ the PHP API’s various objects and methods by viewing the “API Docs” that were installed with the API on your web server computer. On Mac OS X, this can be found in /Library/FileMaker Server/Web Publishing/FileMaker API for PHP Docs/apidoc. On Windows, look in C:\Program Files\FileMaker\FileMaker Server\Web Publishing\FileMaker API for PHP Docs\apidocs. In either folder, find the “index.html” file and open it with a web browser.
{{< /tip >}}

### Adding New Records

Use the `newAddCommand` to add records to the database. Again, you specify the layout to use. This time, though, you use the `setField` method on the command object to specify the actual field values that should go in the new record.

```php
$cmd = $connection->newAddCommand('My Layout');
$cmd->setField('First Name', 'Isabel');
$cmd->setField('Last Name', 'Coffey');
$result = $cmd->execute();
```

Just like with the find command, you need to check for errors after you execute. If all went well, the result object will hold the record that was added. You can inspect this object to see information that was auto-entered, like serial numbers.

### Deleting Records

To delete a record, use the `newDeleteCommand` method. This method expects _two_ parameters. In addition to the layout name, you must provide the record id of the record you want to delete. This is __not__ the value from you ID field or other serial number field. Instead, this is the internal id that FileMaker gives the record without your knowledge. You can find the record id for a record in PHP using the `getRecordId` method on the record object (You can also get a record id from within FileMaker itself using the `Get(RecordId)` fucntion in the Specify Calculation window):

```php
$records = $result->getRecords();
$recordId = $records[0]->getRecordId();
```

So deleting a record is usually a two-step process. First, you have to _find_ the record you want to delete, so you can ask for its ID. Then you have to _delete_ the record. Here’s an example that shows the whole process:

```php
$cmd = $connection->newFindCommand('My Layout');
$cmd->setField('First Name', 'Roger');
$cmd->setField('Last Name', 'Coffey');
$result = $cmd->execute();

if (FileMaker::isError($result)) {
  echo 'unable to find the record to delete: ' . $result->message . '(' . $result->code . ')';
  die();
}

$records = $result->getRecords();
$recordId = $records[0]->getRecordId();

$cmd = $connection->newDeleteCommand('My Layout', $recordId);
$result = $cmd->execute();

if (FileMaker::isError($result)) {
  echo 'unable to delete the record: ' . $result->message . '(' . $result->code . ')';
  die();
}
```

### Editing Existing Records

Editing a record works a little like adding a record, and a little like deleting. You need to specify the field values just like you did when you added a record. And you need to tell FileMaker which record to edit using a record id, just as with the delete command. Here’s how it works:

```php
$cmd = $connection->newFindCommand('My Layout');
$cmd->setField('First Name', 'Melinda');
$cmd->setField('Last Name', 'Coffey');
$result = $cmd->execute();

if (FileMaker::isError($result)) {
  echo 'unable to find the record to edit: ' . $result->message . '(' . $result->code . ')';
  die();
}

$records = $result->getRecords();
$recordId = $records[0]->getRecordId();

$cmd = $connection->newEditCommand('My Layout', $recordId);
$cmd->setField('First Name', 'Mamie');
$result = $cmd->execute();

if (FileMaker::isError($result)) {
  echo 'unable to edit the record: ' . $result->message . '(' . $result->code . ')';
  die();
}
```

This sample finds Melinda Coffey in the database, and changes their first name to Mamie. The result object, if successful, contains the newly edited record.

### Running a Script

No FileMaker API would be complete without the ability to run a FileMaker script. The PHP API makes this a breeze. Just tell it which layout to switch to, which script to run, and (optionally) what parameter to send to the script:

```php
$cmd = $connection->newPerformScriptCommand('My Layout', 'My Script', 'My Parameter');
$result = $cmd->execute();
```

As always, you should check the result for errors. If none occurred, the result object will hold all the records that were found after the script finished. If your script doesn’t need a parameter, you can leave that part out entirely, like this:

```php
$cmd = $connection->newPerformScriptCommand('My Layout', 'My Script');
$result = $cmd->execute();
```

### Paging Through Records

Sometimes you have so many records in your database, that it isn’t realistic to put them all on one web page. The find command object has the ability to limit how many records are returned in cases like this. You give the find command a _skip_ value and a _max_ value. For example, if you want the first 100 records, tell it to skip 0 (zero) and include a max of 100. To get the next page-full, perform the same find command again, but this time set the skip to 100. The max should be 100 again. This time FileMaker will give you records 101 through 200. You set these parameters using the `setRange` method on the command object:

```php
$cmd =& $connection->newFindCommand('My Layout');
$cmd->addFindCriterion('Last Name', 'Coffey');
$cmd->setRange(0, 100);
$result = $cmd->execute();
```

In this example, the skip value is 0 and the max value is 100. If you don’t call `setRange`, FileMaker includes _every_ record in the result. For large sets of records, this can be very slow.

## Putting it All Together

In this article you have seen the basic features of the FileMaker API for PHP. By combining the various FileMaker commands on several PHP pages, you can build a web site that can interact completely with your FileMaker database, including finding and displaying records, editing them, deleting them, and adding new records. This can come in the form of a straight-forward data management interface (that anyone with a web browser can use) or it can happen behind the scenes while your web users interact with a service-oriented web site.

***

{{< footnotes >}}

{{< footnote 1 >}}
Truth be told, FileMaker Web Publishing has a history that starts well before the Web Companion in FileMaker 4. But that’s a story for another day.
{{< /footnote >}}

{{< footnote 2 >}}
There are many other fantastic web languages available to pick from. But none of them has the official stamp of approval from FileMaker. PHP is the best choice here simply because FileMaker has done all the hard work to get it to talk to your database.
{{< /footnote >}}

{{< footnote 3 >}}
More correctly, the API is a set of _classes_ for PHP. Like many languages, PHP has a smattering of so-called object-oriented capabilities. FileMaker wrote PHP object types specifically for communicating with a FileMaker Pro database. You can read more about PHP classes in the [PHP Manual](http://php.net).
{{< /footnote >}}

{{< /footnotes >}}
