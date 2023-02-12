---
title: "Use FileMaker with SQL Databases"
date: 2008-02-18
archive: advisor
---

FileMaker is a powerful database: You can build full-featured business applications with relative ease, share them with hundreds of users, and pack gigabytes of data away for easy access. Despite all its strengths, though, not everyone uses FileMaker for every database need. The truth is there are lots of situations that call for something a little more massive, either to handle a higher transactional volume, or a large number of users. And even systems that could be built in FileMaker sometimes aren't.

When you bump in to systems built in the "big databases" you may think your FileMaker system just can't communicate, or that you'll have to hire a Ph.D. programmer to make the connection. But as of FileMaker Pro 9, talking to some corporate databases is easier than you might think. FileMaker's new *External SQL Sources* feature (called *ESS* for short) takes most of the madness out of talking to many SQL databases. It isn't as easy as working with FileMaker itself, but you don't have to do any programming, and once you've made the connection, things almost work just like your used to.

Imagine you want to incorporate some data from the "corporate database" into your FileMaker Pro-based system. Your company's big database keeps track of all the products it sells. Your little FileMaker database manages all your vendor relationships, so for the most part it lives on its own, helping the buyers keep their contacts. But you know it would be a little more seamless if you could show your users which products were purchased from each vendor.

Using ESS, you can put that product data right on the Vendor layout, with no imports, exports, or SQL scripting. The table or tables from the corporate database work just like regular FileMaker tables: You can create relationships, add portals, and drag fields onto your layout.

## Gathering Information

Before you start dragging fields around, you need to get FileMaker connected to the corporate database. And before you can do that, you need to gather some information.

First, FileMaker has a limited set of databases it can communicate with. So before you bother tracking down all the right access, find out what kind of database (and version) your company is using. If it isn't on this list, you're out of luck:

- Microsoft SQL Server 2000 or 2005
- Oracle Database 9g or 10g
- MySQL 5 Community Edition

{{< aside title="Unsupported Databases" >}}
FileMaker 9's powerful ESS feature only works with a few specific databases. Luckily, the list includes the database systems you're most likely to encounter in the corporate world. But if the database you need to work with isn't on the list, you're not entirely out of luck, strictly speaking.

Since version 4.1, FileMaker has had the ability to import data directly from any database that supports ODBC. And for almost as long, FileMaker's powerful Execute SQL script step has given your scripts the power to add, edit, and delete records in an ODBC-compatible database.

If you run FileMaker on Microsoft Windows, nearly every database you can imagine works with these features through ODBC. And on Mac OS X, the list of ODBC-compatible data sources is growing all the time. Chances are pretty good that whatever database you're stuck talking too, you can use ODBC to get the job done.

The trouble with all this, though, is that it is hard. With ESS, FileMaker can talk to a corporate database for you, hiding all the complexities of SQL from you and making things almost as easy as using FileMaker itself. Using ODBC Import and the Execute SQL script step are in a league of their own, though: You have to write complicated "SQL Queries" yourself to get anything done.

If you absolutely must make this work, you'll probably need some SQL help. You might be able to consult with the database administrators at your company, for instance. Or you could find a nerdy friend to help you through the tricky parts. Worst case, you can consult on-line resources or a good book devoted to the database you're working with. SQL is tough, compared to FileMaker Pro, but it isn't impossible.
{{< /aside >}}

Once you've determined that you'll be talking to a supported database, you need to get someone to give you connection information. Connecting to a corporate database requires three critical pieces of information:

- The *hostname*. This is the name or IP address of the database server you'll be talking to.
- The *username* and *password*. You have to "log in" to a corporate database just like FileMaker Pro.
- The *database-* or *schema-name*. Most database servers can host several different databases at once. You need to determine which one you want.

Getting this information may be easy ("Hey Bill, how do I connect to the Oracle Database?") or it may be not-so-easy. In fact, in some circumstances, your database administrator may not want to give you this information at all. Bear in mind, though, that in most cases, they can give you a special username and password just for your system, that is limited to only the things they want you to do. They can even create special "views" in their database that show just the fields, records, and tables they want you to see, and prevent you from doing damage. If you have a legitimate business case for your access, you should be able to get it. Never the less, in some cases, the folks with the keys may decide your reasons aren't good enough. Once again, you're stuck. Without access privileges, you simply can't use ESS. There are no "back doors" here.

## Making the Connection

With your access information in hand, you're ready to connect your computer to the SQL database. This is really the only tricky part. FileMaker can't just talk to the database. Instead, FileMaker talks to something called ODBC, which is a part of your computer's operating system. The ODBC system then talks to the database server on FileMaker's behalf.

So before you even touch FileMaker, you have to do some computer configuration. You need to create a so-called "ODBC Data Source" (sometimes called a DSN for short). That just means you'll tell your ODBC system which database to connect to and how. And you'll give this configuration a name so you can refer to it from FileMaker later on.

Creating an ODBC data source is a two step process. First, you need to make sure you have the correct "ODBC Driver" installed. On Microsoft Windows, you can get the driver software from your database administrator, IT smartie, or directly from the web site of the database vendor. For Mac OS X, you can purchase drivers from [Actual Technologies](http://actualtech.com). In either case, run the driver's installer or setup procedure first.

Once you've got the driver installed, you're ready to create the DSN. On Windows, go to your Control Panels, and open Administrative Tools. (You may need to switch to "Classic View" first.) Then open the "ODBC Data Sources" or "Data Sources (ODBC)" control panel. Select the System tab, click Add, and then pick the driver you want to use (Figure 1).

{{< figure
    title="Figure 1"
    src="COFFG07B.png"
    width="575"
    height="507"
    alt="The \"Create New Datasource\" window in Microsoft Windows' \"ODBC Data Source Administrator\". It is on step one now, showing a list of available drivers."
    caption="On Windows, you use the ODBC Data Sources control panel to add data sources. Make sure you switch to the System tab before you click Add, or FileMaker won't be able to use your DSN." >}}

On Mac OS X, open the ODBC Administrator program (it is in your Utilities folder). Then click the padlock icon in the bottom-left corner of the window and enter an Administrator password to unlock the settings. Next, switch to the System tab and click the Add button. Select your driver, and click OK. You'll then be prompted to enter your database connection information (Figure 2).

{{< figure
    title="Figure 2"
    src="COFFG07C.png"
    width="725"
    height="629"
    alt="The \"Create New Data Source\" window in the \"ODBC Administrator\ app on Mac OS X. It is on step one now, asking for a data source name."
    caption="On Mac OS X, you use the built in ODBC Administrator utility to add a DSN. When you create the data source, make sure you choose the System type, or FileMaker won't be able to use it." >}}

Whatever your platform, once you're finished entering connection information, save your DSN and close the ODBC configuration windows. You're now ready to use your DSN in FileMaker Pro.

## Using ODBC Data Sources in FileMaker

With a supported database, and a DSN in place, using ESS is a breeze. If you've ever connected two FileMaker databases together, you've pretty much got the idea. It is a two step process:

1. Create the External Data Source in your FileMaker database.
2. Add the table or tables to your relationships graph.

First, you need to tell FileMaker you want to use the DSN. Choose File → Manage → External Data Sources. In the window that appears, click New. Enter a name for the External Data Source (you might use the same name you used for your DSN, although you can actually use any name you want.)

Next, select the ODBC radio button. This tells FileMaker you want to connect to an ODBC data source, rather than another FileMaker Pro database. Once you make this selection, a DSN box will appear. Click the Specify button, and you'll be offered a choice of DSNs on your computer, and you can select the one you want to use.

Then turn on "Specify username and password" and enter the username and password for your corporate database.

{{< note >}}
You can leave this option set to "Prompt user for username and password" instead. If you do, every time someone opens the database, he or she will have to enter the corporate database username and password again.
{{< /note >}}

Finally, turn on the "Views" checkbox under Filter by Type. This tells FileMaker you want to see any database views your database administrator has created for you. When you're done, click OK.

{{< figure
    title="Figure 3"
    src="COFFG07D.png"
    width="609"
    height="535"
    alt="FileMaker's \"Edit Data Source\" window with the ODBC radio button enabled and \"Specify username and password\" turned on."
    caption="The Edit Data Source window lets you tell FileMaker which DSN to use, what username and password to use, and what you want to see. This might seem repetitive (after all, you just entered a lot of the same info when you created the DSN). But your FileMaker database may not need to talk to all the DSNs you create. Suppose, for instance, that you use ODBC with Excel as well. You might have several DSNs, and FileMaker may only need one or two of them." >}}

Once this is done, FileMaker knows how to talk to your DSN. Now you can start working with the tables. Choose File → Manage → Database, and switch to the relationships tab. Click the Add Table button (it is in the bottom-left corner, and looks like a table icon with a green plus sign attached to it). In the Specify Table window, choose the External Data Source you just created. FileMaker will show you a list of available tables from the corporate database.

At this point, you can choose a table, add it to your relationships graph, and make connections to it just like you would any other table. You can create layouts attached to these tables, add portals and fields to your existing layouts, and even write scripts that manipulate data in the tables. They work just like a normal FileMaker table. Told you it was easy.

## Making the Most of ESS

Once you get the ODBC setup figured out, ESS is really a breeze. Everything you know about FileMaker just works. But there are a few things you should be aware of as you begin to work with external data.

First, it is important to understand that, although a corporate database is very fast, it isn't necessarily optimized for the kinds of things you can do in FileMaker. Although FileMaker does a good job of hiding all the complexities from you, there are some scenarios where you can experience poor performance. This is especially true if your corporate database has hundreds of thousands, or millions of records. In a situation like this, you can experience long delays if you work in list view or table view with very large tables. You're generally best off showing related ESS data in portals, or doing searches so you only see a small number of records.

Also, your database administrator may not give you permission to modify the corporate data. When this is the case, FileMaker will show error messages if you try to edit a field, add a new record, or delete an existing record. Design your databases with this in mind: It is better to prevent your users from doing something in the first place than to show them a confusing error message if they try.

Finally, if you need to add additional calculations to your ESS tables, you can. Just go to the Tables tab in the Manage Database window. Here, in addition to your FileMaker Pro tables, you'll see each of your ESS tables listed in italics. You can add calculation fields to these tables, just like you would with a normal FileMaker table.

FileMaker's ESS feature is astonishingly powerful. With no programming and only a little complicated setup, you can interact directly with "high end" databases with ease. It can be extremely empowering to see your corporate data appear instantly right next to your FileMaker data. Maybe today is the day you should give it a try.

