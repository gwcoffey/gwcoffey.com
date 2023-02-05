---
title: "Getting Started with External SQL Sources"
date: 2007-10-17
archive: sfr
---

[1]:http://www.mysql.com/
[2]:http://www.oracle.com/
[3]:http://www.microsoft.com/sql/default.mspx

On the off chance you’ve been hiding under an old Microsoft Access box for the last couple weeks, let me be the first to tell you that FileMaker now supports direct links to SQL databases. In other words, you can use table from a [MySql][1], [Oracle][2], or [Microsoft SQL Server][3] database right in FileMaker with no synchronization, no imports, and *no messy SQL programming*. This is A Big Deal&trade; and many of you are justifiably very excited about it.

And you probably have one burning question: “How the heck do I set this thing up?” The sad truth is that, for reasons well beyond FileMaker’s control, setting up a connection to a SQL database is the opposite of simple. Here’s the skinny on how to get your FileMaker database talking to a SQL database in as few steps as possible.

## What is SQL?

External SQL Sources (ESS for short) is a technology by which FileMaker can talk to a so-called SQL database. Think of it this way: FileMaker is like a nice SUV: powerful, elegant, and full of amenities. A SQL database, on the other hand, is more like an Abrams Tank. Sure, it’s a heck of a lot more powerful, but do you really want to ride in one every day? The truth is, SQL databases *are* a lot faster, leaner, meaner, and more oomphy than FileMaker. But they’re sole focus is data: They don’t know a thing about user interface, scripting, printing, PDFs, or any of the other high-level features you use every day.

To illustrate, here is what MySql looks like:

{{< figure src="mysql.png"
           width="531"
           height="235"
           alt="Screenshot of a terminal window. It is almost entirely empty, but for the promt \"mysql>\" and a text cursor."
           caption="This baby can hold *so much data* [slaps empty terminal window]." >}}

Um… ok.

To do anything with a SQL database, you typically write *queries* in a programming language called Structured Query Language, or **SQL**. So when we say FileMaker supports SQL databases, we mean it can automatically formulate the SQL commands necessary to get data out of and in to a SQL database on your behalf. From your perspective, it works just like any other FileMaker table. But behind the scenes, FileMaker is speaking a whole different language.

## The parts

When your FileMaker database starts using ESS, the number of moving parts in your little system goes up significantly. Instead of a simple `.fp7` file, you now have several pieces to consider:

* The SQL database server
* The ODBC driver
* The Data Source Name (or DSN)

{{< tip >}}
Before you dive in, think about where you want to *put* all this stuff. If you’re using ESS in a standalone database, you’ll install the ODBC driver and set up the Data Source Name on *your computer* (or the local computer from which you’ll be accessing the data). This applies if you’re just testing, too. On the other hand, if you’re using a shared database, and every connected user needs access to the SQL database, install the driver and Data Source Name *on your FileMaker Server*. That way it will be accessible to everyone with the minimum fuss.
{{< /tip >}}

You’ll learn about each of these right…about…now.

### The SQL database server

All SQL databases are hosted with special server software (this *is* the SQL database, in fact…there is no client-only database like you get with FileMaker Pro or FileMaker Pro Advanced). FileMaker supports MySQL 5.0, Oracle 9g and 10g, and Microsoft SQL Server 2000 and 2005. You must have one of these servers up and running before you can get anywhere with ESS.

{{< tip >}}
If you *don’t* have one, and you really want to get familiar with this technology, don’t fear! MySQL 5.0 is free free free. Just slide over to [the MySQL web site](http://dev.mysql.com/downloads/mysql/5.0.html) and download the MySQL Community Server 5.0 or later. It’s easy to install right on your own computer. Just make sure you choose the right download for your operating system.
{{< /tip >}}

### The ODBC Driver

In the early days of SQL databases, you had to write special computer code for each and every database. Even though the SQL language itself is fairly standardized, the actual communication protocols used to send those queries to the database were totally different in each system. This was, for obvious reasons, not entirely ideal. So the Open Database Connectivity system was born. You probably know this technology by its more common abbreviation: ODBC. ODBC says, “Listen, you talk to me, and I’ll talk to the database on your behalf.” Now, companies like FileMaker only have one set of programming interfaces to use.

{{< qna "If everything is so darned standard, why does FileMaker care what database system I use? Why can’t it talk to Sybase, Postgres, or Oracle 9 3/4?" >}}
While ODBC is a solid standard, you’ll note above, I said *SQL* is “fairly standardized.” Unfortunately, to get the kind of deep and automatic integration ESS provides, you need something a little better than fair. FileMaker needs to know about the intricate nuances of each database it supports so it can produce just the right SQL.
{{< /qna >}}

But how does ODBC know how to talk to each individual database system? It uses special *drivers*. You need an ODBC driver designed specifically for the database you’re talking to. If you’re on Windows, this is a breeze. Each of the database servers FileMaker supports has a free ODBC driver ready for you to download and install. If you use MySQL, you can get the driver [here](http://dev.mysql.com/downloads/connector/odbc/3.51.html). For the others, consult your documentation. The drivers should be available from your software CDs or from the vendor’s web site.

Mac OS X users have to work a little harder (or, better put, they have to spend a little dough.) Most vendors don’t provide a Mac OS X compatible ODBC driver. (The notable exception is MySQL: They pretend to offer a Mac OS X driver on their web site. But it doesn’t work well at all. It isn’t supported by FileMaker. Or anybody else for that matter.)

Instead, Mac users should head right over to [Actual Technologies](https://actualtech.com/products.php). This company has high quality, inexpensive drivers available for every database FileMaker supports (and a few others it doesn’t support).

### The data source name

The ODBC driver represents the potential for your computer to talk to a SQL database. But it doesn’t know *which* database to talk to. So your next step is to configure it to point to your SQL database server. Since you might have *several* of these, your ODBC system lets you add as many configurations as you want. Each configuration is called a Data Source Name, or DSN. This funny name stems from the fact that the DSN is like a *name* for your *data source*. FileMaker will use that name to refer to the particular configuration. That way, you can *change* the configuration later and FileMaker won’t mind. (For example, if you move your database server, or rename the database itself.)

These three pieces—the database server, the ODBC driver, and the DSN—come together to give your FileMaker database direct access to the back end SQL database. The rest of this article will focus on how to set up the DSN and make the connection in FileMaker.

## Creating a DSN

The DSN setup process is entirely different from Mac OS X to Windows. So skip ahead to the section that is right for you.

### Creating a DSN on Windows

You manage your ODBC data sources in the Administrative Tools control panel. Getting there varies from one version of windows to the next. But you start by choosing Start → Control Panel.

* If you use Windows Vista, look for a category called System and Maintenance. Open it up and click the link for Administrative Tools. If you don’t see System and Maintenance, you will instead find an Administrative Tools icon right in the Control Panel window. Open it now.

* If you use Windows XP, look for a category called Performance and Maintenance. Open it up and click the link for Administrative Tools. If you don’t see the Performance and Maintenance category, look for an Administrative Tools icon in the Control Panel window itself. Either way, open Administrative Tools now.

Once you’ve opened the Administrative Tools window, look for something called Data Sources. This is where you configure data sources. It looks a heck of a lot like this:

{{< figure src="win_odbc.png" 
           width="499"
           height="413"
           alt="Screenshot of the ODBC Data Source Administrator window, with the User DSN tab selected."
           caption="This is where you connect the ODBC system to your SQL databse server." >}}

To create a DSN, first switch to the System tab (FileMaker only works with so-called System DSN’s). Then click Add. You’ll see a list of all the ODBC drivers installed on your computer. Find the driver you installed in the list, select it, and click Finish. Setup from this point forward is the same on Mac and Windows, so skip ahead to [Configuring your DSN](#configure) below.

### Creating a DSN on Mac OS X

On Mac OS X, you manage your ODBC data sources in an application called ODBC Administrator. You can find it in the Utilities folder, which itself is in your Applications folder. Open it, and you’ll see something like this:

{{< figure src="mac_odbc.png" >}}

Before you can do anything in this program, you need to unlock it. Click the inconspicuous padlock icon in the bottom left-hand corner (you may have to enter an Administrator password). Then click Add. You’ll be asked to select an ODBC driver from a list. Pick the one you want, then click OK. In the window that pops up, **make sure you choose System when asked to pick a DSN type.**


## Configuring your DSN

At this point, you have created a DSN, but you haven’t finished configuring it. The exact steps for configuration vary from driver to driver (and platform to platform), but in general, you’ll need to provide this information:

* The host name or address of the SQL database server.
* The username and password needed to connect to the database.
* For some database systems, the name of the database you’ll be connecting to.

You may be asked to provide other information, but you can usually accept the answers it suggests. When you get to the last screenful of options, you’ll get the chance to test the connection. Click this button and make sure it tells you the test was successful. This is how you know you’ve made the right choices.

## Accessing a DSN in FileMaker

You have just two steps left. First, you need to tell FileMaker about the DSN you created. Then you’re ready to start accessing tables and defining relationships.

### Create an external data source

Thankfully, the hard part is over. Now you just need to tell FileMaker about your DSN, and point-and-click your way to SQL database bliss. First, open your FileMaker database. Then choose File → Manage → External Data Sources. The new Edit Data Source dialog box appears. Give your data source a name, and turn on the ODBC radio button. When you do, the window will instantly change to look like this:

{{< figure src="edit_data_source.png"
           width="536"
           height="508"
           alt="Screenshot of the Edit Data Source window in FileMaker. It has many options, buttons, and input fields."
           caption="Now you're ready to tell FileMaker about your DSN." >}}


Next, click the Specify button across the window from DSN. FileMaker shows you a list of system DSNs on your computer. Choose the one you want, then click OK.

Next, you need to decide how your usernames and passwords will be handled. If you choose “Prompt user for user name and password,” FileMaker will ask the user of your FileMaker database to enter a SQL database username and password. If that’s not your cup of tea, you can choose “Specify user name and password” instead, and key in the username and password to use. FileMaker will then automatically log in to the SQL database with these credentials when it needs to access the data.

{{< tip >}}
Both the “User name” and Password boxes have a Specify button beside them. You can use a FileMaker calculation to derive the exact values if necessary.
{{< /tip >}}

The last section in this window is a bit of an enigma. These settings let you control which tables FileMaker is willing to show you when you start to work with this data source. Normally, you see all tables accessible through the DSN. If you want to see Views (which are kind of like stored queries that provide specialized results), turn on the Views checkbox under Filter by Type. Some database systems have special tables created by the system itself. To see these, turn on “System tables.”

You can also filter using some confusing criteria called “Catalog name,” and “Schema name.” The exact meaning of these boxes varies from one database system to the next. Here are the details:

For Oracle:
* Catalog: Not used
* Schema: The name of the user who owns the tables

For Microsoft SQL Server:
* Catalog: The name of the database
* Schema: The name of the collection of tables/views/etc

For MySQL:
* Catalog: Not used
* Schema: The name of the user who owns the tables

To limit FileMaker to only the tables in a particular “catalog,” whatever that means to your database, enter the appropriate name in the “Catalog name” box.

Finally, you can restrict FileMaker to just one table by typing the table name in the same-named box.

{{< note >}}
You might wonder why you should bother restricting the tables in these ways. The answer is speed. The less FileMaker has to wade through to do its job, the faster it will run.
{{< /note >}}

Once you’re finished making choices, click OK. You now have a link between FileMaker and your SQL database.

### Accessing a table through ESS

With the external data source defined, FileMaker now shows you SQL tables just like it would tables from another FileMaker Pro database. Choose File → Manage → Database and switch to the Relationships tab. Then click the Add Table button. In the window that pops up, choose your new external data source from the Data Source pop-up menu. After a short pause, you should see a list of available tables. Choose one and click OK.

The SQL table appears on your relationships graph just like any other table. You can drag lines to and from it to create relationships. When you leave the Manage Database window, you can make new layouts based on this table. You can perform finds using find mode, add new records, delete records, and edit the records that are there. In short, this table feels pretty normal.

There are many nuances to ESS development that you’ll need to familiarize yourself with as you go along. We’ll cover *using* ESS in a future article. But hopefully at this point you’ve got ESS up and running, and you’re ready to experiment.
