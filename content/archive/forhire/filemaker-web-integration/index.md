---
title: FileMaker Web Integration
date: 2007-02-27
archive: forhire
tags: 
  - Archive Post
client: FileMaker Inc
---

The fastest growing platform for data-rich interactive applications is not Microsoft Window, Mac OS X, or Linux. Instead, more and more businesses turn to the Web to deploy software systems. Theses so-called “Web Applications” are not limited to high-traffic public Internet services (like Google, MapQuest, or the Internet Movie Database). A web-based system can be made available only to key partners, clients, off-site employees, or even just in-office users.

Although developing a web-enabled database is sometimes not as simple, straightforward, or inexpensive as a traditional FileMaker database, in certain circumstances, it is an excellent option. For example:

* Since the Web is built on free open standards, a web enabled database can be made accessible to anybody on just about any platform, with no special software requirements (aside from a good web browser). In other words, your clients can get access to parts of your database without installing FileMaker Pro.
* Because the Web was designed with slow connections in mind, a web based system can perform equally well for employees in the building and salespeople on the road with less-than-perfect wide band internet access.
* Web enabled systems can make it possible to tie different systems together through internet standards like XML, RSS, and REST.

If you want to get started making these ideas work for you, your best first step is this Whitepaper. Here you’ll learn exactly what FileMaker can do on the web, and how to get your databases there. 

Luckily, as a FileMaker developer, you are positioned perfectly to take advantage of all these technologies. FileMaker actually has four distinct web-enabling technologies readily available. Each is designed to meet a particular need; from the one-click simplicity of Instant Web Publishing to an XML publishing option only a true geek could love. And you can rest assured FileMaker is up to the task. Because of its industry-leading ease of use, FileMaker Pro has been powering web sites since before your webmaster was out of high school. FileMaker has had built-in web powers for almost 10 years, and FileMaker 8 is the most web-capable version yet.

{{< aside title="Table of Contents" >}}
* [FileMaker Pro on the Web](#filemaker-pro-on-the-web)
	* [Instant Web Publishing](#instant-web-publishing)
	* [Custom Web Publishing](#custom-web-publishing)
	* [XML Publishing](#xml-publishing)
* [Setup and Configuration](#setup-and-configuration)
	* [FileMaker Web Publishing Components](#filemaker-web-publishing-components)
	* [Assembling the Pieces](#assembling-the-pieces)
	* [Performing the Installation](#performing-the-installation)
	* [Web Publishing Configuration](#web-publishing-configuration)
* [Instant Web Publishing](#instant-web-publishing-1)
	* [Using Instant Web Publishing with FileMaker Pro](#using-instant-web-publishing-with-filemaker-pro)
	* [Using Instant Web Publishing with FileMaker Server Advanced](#using-instant-web-publishing-with-filemaker-server-advanced)
	* [Using Your Database in Instant Web Publishing](#using-your-database-in-instant-web-publishing)
	* [Instant Web Publishing Tips](#instant-web-publishing-tips)
* [Custom Web Publishing with PHP](#custom-web-publishing-with-php-1)
	* [Installing the FileMaker API for PHP](#installing-the-filemaker-api-for-php)
	* [Setting up a Database for the PHP API](#setting-up-a-database-for-the-php-api)
	* [Serving a PHP File](#serving-a-php-file)
	* [Using the FileMaker API for PHP](#using-the-filemaker-api-for-php)
	* [Learning More About the FileMaker API for PHP](#learning-more-about-the-filemaker-api-for-php)
* [Custom Web Publishing with XSLT](#custom-web-publishing-with-xslt-1)
	* [Enabling Custom Web Publishing with XSLT](#enabling-custom-web-publishing-with-xslt)
	* [Understanding XML](#understanding-xml)
	* [Preparing a Database for XSLT Publishing](#preparing-a-database-for-xslt-publishing)
	* [Writing an XSLT Template](#writing-an-xslt-template)
	* [Building More Complex XSLT Web Applications](#building-more-complex-xslt-web-applications)
	* [The XSLT Site Assistant](#the-xslt-site-assistant)
* [XML Publishing](#xml-publishing-1)
	* [XML Publishing Commands](#xml-publishing-commands)
	* [Common URL Parameters](#common-url-parameters)
	* [Additional Parameters](#additional-parameters)
* [Conclusion](#conclusion)
{{< /aside >}}


## FileMaker Pro on the Web

As you plan your web database strategy, your first task is to decide which of FileMaker’s web options makes the most sense for you. It can be daunting at first, because any discussion of web technologies inevitably ends up tripping over its own acronyms. But FileMaker’s web technologies are, for the most part, actually quite distinct, and choosing the right one is usually easy once you know the strengths and weaknesses of each.

FileMaker 8 supports four web publishing technologies: Instant Web Publishing, Custom Web Publishing with PHP, Custom Web Publishing with XSLT, and XML Publishing. Read on to find out how each one works.

### Instant Web Publishing

The first option for putting your database on the web is *Instant Web Publishing*, often called simply *IWP*. As its name implies, this method makes web publishing exceptionally fast and easy: Click on a checkbox and your database is on the web.

As Figure 1 shows, when you turn on IWP, your users can see a browser-based version of your database that looks and acts an awful lot like the real thing. FileMaker takes care of all the Dynamic HTML, JavaScript, and server communications for you, producing near-perfect copies of your layouts on a web page.

{{< figure
    title="Figure 1"
    src="FIG01-IWP.png"
    width="1300"
    height="816"
    alt="A FileMaker database window showing a nicely designed layout. Beside it, overlapping slightly, is a web browser window showing the same layout."
    caption="The window in the back shows this database open in FileMaker Pro. In front, the same database is open in a web browser with Instant Web Publishing." >}}
    
Also, unlike the other web technologies in FileMaker, IWP requires no special software. If your needs are modest (five or fewer simultaneous web users), you can IWP-enable your database right from your desktop computer with your stock copy of FileMaker Pro or FileMaker Pro Advanced. Of course if your needs grow beyond this five-user limit, you can upgrade to the industrial-strength FileMaker Server Advanced (and a dedicated server computer) which can handle 100 web users at the same time.

If you stopped reading here, you might wonder why anyone would ever use anything but IWP. After all, what more do you need than a no-programmer-necessary one-click method to automatically web-enable your database? It is true that IWP is often the most obvious choice, but it has some significant weaknesses that make it unsuitable in some cases.

First, IWP takes on the heroic task of duplicating your FileMaker layout (buttons, body parts, backgrounds and all) on a web page. And it augments those pages with the web equivalent of the status area, from which you can switch layouts, alternate between list and form views, perform finds, and create new records. If you want a more stylized web interface (a traditional shopping car for instance, or a super-simplified page for searching your product catalog, or an employee directory that looks just like the rest of your web site), you’ll find IWP isn’t up to the task.

IWP is also a wholly proprietary piece of technology. Since FileMaker takes care of all the web code for you, there’s no way for you to supplement that code to take advantage of other web technologies like PHP, XML, or web services. If you’re looking for that degree of flexibility, you’ll need to keep reading.

In practice, IWP is an ideal choice if your goal is to take the database you’ve already built, and make it accessible to people who don’t have FileMaker Pro, or to remote users with slower Internet connections.

### Custom Web Publishing

If IWP lacks the flexibility you need, FileMaker offers a much more powerful web publishing option called *Custom Web Publishing*, or *CWP*.

{{< note >}}
Prior versions of FileMaker included a similar but unrelated web publishing technology called CDML. Custom Web Publishing has replaced CDML, which is no longer supported.
{{< /note >}}

CWP stands in stark contrast to IWP. Most importantly, it gives you as the developer complete control over the look and behavior of the web pages. But this flexibility comes with a price: Significantly more effort on your part. While IWP works “out of the box” with just one click, CWP generally requires that you write code to tell FileMaker how to create the required web pages. These web pages may incorporate data from the FileMaker Pro database, but they are completely independent of the look (Layouts) of your database.  Of course you can also create web pages that change the data in your database by adding, deleting, and editing records.

To take advantage of CWP, you must purchase and install FileMaker Server Advanced on a dedicated server computer. This extended version of FileMaker Server has the power to talk to the web server software on the computer and to process the code that makes up your CWP site.

#### Custom Web Publishing with XSLT

Historically, the code behind CWP has been written in a web-standard language called XSLT (an abbreviation for Extensible Stylesheet Language Transformations, whatever that means). You’ll get a primer on XSLT shortly, but it is worth pointing out that XSLT, while extremely powerful and well suited to certain tasks, is much more complicated than anything else in FileMaker. For this reason, many expert FileMaker developers have struggled to master its nuances. Never the less, CWP with XSLT is an excellent choice for web publishing if you are well versed in XML or XSLT, or have a programming background. 

But you should not assume that web publishing is limited to producing pretty web pages. An entire field of web publishing centers around so-called web services, which are web sites designed to be used not by human beings, but by other computer programs. If you’ve used the Windows Update or Software Update feature of your operating system, you’ve seen web services in action: your computer automatically discovers when new software is available by visiting a web site custom crafted for it, behind the scenes and without bothering you about it until it needs your input. Web service data is not formatted for style or beauty; rather, it is designed to be concise, consistent, and often to comply with some agreed-upon standard. It turns out many of these standards are built around XML, and XSLT is particularly suited to producing XML output. If you want to publish your FileMaker data as an RSS feed, make it available to XML-based EDI clearinghouses, or serve up customized Microsoft Office 2007 documents full of data, XSLT is probably the best choice.

#### Custom Web Publishing with PHP

More recently, FileMaker has addressed the XSLT brain-freeze by opening CWP up to a much more common and straightforward language called PHP. This uber-popular web programming language is relatively easy to learn. And if you’re averse to coding of any kind, you can probably find a dozen expert PHP programmers in your neighborhood. Finally, PHP is tremendously flexible. It has built in capabilities that range from automated email to file processing, and what it doesn’t have built in can easily be added by downloading add-ons from thousands of sites on line. These attributes make PHP a fantastic choice when you want to publish your FileMaker data as custom web pages. 

### XML Publishing

The final web publishing technology in FileMaker is a bit of an enigma to most FileMaker developers. Like IWP, you can start using XML Publishing with the click of a button. But what you get is not the sort of thing you’d want to show your users. XML Publishing presents your FileMaker data in its most raw form: as a list of records in a specialized XML format accessible on the web. It provides simple commands to find, create, delete, and edit records via the web. This can be thought of as the least common denominator of data exchange: nearly every programming environment in the world, from Java to Visual Basic to Ruby, can read XML data and talk to a web page. And if your particular system can’t read XML, you can always have a programmer create a tool that reads FileMaker’s XML and converts it into just about any format that system could want. So XML Publishing exists to make a FileMaker database available to the larger software world, and is primarily the domain of programmers.

As an example of the power of XML Publishing, consider this: CWP is built on top of XML Publishing. Whether you use XSLT or PHP, when your code starts to interact with the FileMaker database, it does so by sending XML Publishing commands and processing XML data.



## Setup and Configuration

If you intend to publish on the web with FileMaker Server Advanced, your first task is to install and configure the software. Remember that you must use FileMaker Server Advanced to use Custom Web Publishing (CWP) or XML Publishing, or to use Instant Web Publishing (IWP) with more than five users.

{{< note >}}
Even if you have five or fewer users, there are advantages to using FileMaker Server Advanced with IWP. First, IWP is faster and more responsive for the users when run on a server. Also, because FileMaker Server Advanced installs on a dedicated server machine, you don’t have to worry about disrupting other uses if you reboot your computer or if it crashes.
{{< /note >}}

Also note that on Windows, FileMaker Server Advanced requires Windows 2003 Server or Windows 2000 Server. You cannot install it on Windows XP or Vista. Mac users, on the other hand, can use any recent version of Mac OS X. 

### FileMaker Web Publishing Components

FileMaker Server Advanced is not just a single program, and it does not handle all aspects of web publishing. In fact, there are four separate components to a FileMaker web publishing system: The FileMaker Server, the Web Server, the Web Publishing Engine, and the Web Server Module.

#### FileMaker Server

In order to publish FileMaker data, you need a FileMaker database. FileMaker Server Advanced includes the same software as the standard FileMaker Server. This software manages the actual FileMaker database, ensuring that every connected user can access and modify the database as efficiently as possible. An installed FileMaker Server can share databases between connected FileMaker users and web publishing users at the same time.

{{< note >}}
The word server can be misleading because it has two different meanings in relation to computers. First of all, a server is a specialized computer designed to host databases, web sites, streaming video, and other content that multiple computers can access at the same time. But server also refers to the software programs that actually do the serving. You generally install server software on a server computer. Here, both Web Server and FileMaker Server refer to software you install on a server computer. Later you’ll learn about the hardware required.
{{< /note >}}

You may have more than one FileMaker Server, but each FileMaker database (or file) must exist on only one FileMaker Server.

#### The Web Publishing Engine

The actual web side of FileMaker web publishing is the domain of the aptly named Web Publishing Engine. It processes the XML Publishing commands, converts FileMaker data to XML, and processes any XSLT stylesheets you may have created. 

A web publishing engine can access as many FileMaker databases as you want, and can publish data using IWP, CWP, and XML Publishing all at once.

#### The Web Server

Although it is not a part of FileMaker Server Advanced, web server software is an essential component to a FileMaker web publishing setup. The web server is what actually talks to the web browser that your user connects with. It also talks to the Web Publishing Engine when it needs to access FileMaker content. FileMaker Server Advanced supports these web servers:

* The web server component of Microsoft Internet Information Services, better known as IIS. As luck would have it, this is exactly the system that is built right in to Windows.
* The Apache web server on Mac OS X. Again, Apache is built right in.

Normally, the web server is not a major concern since it is included with either supported operating system. But if you have replaced your web server for any reason, you may have difficulty. FileMaker supports only these two configurations. So, for instance, you cannot use Apache on Windows with FileMaker Server Advanced.

#### The Web Server Module

The final piece in a FileMaker Server Advanced installation is the web server module. This small piece of software is essentially a plug-in for the web server software that allows it to communicate with the Web Publishing Engine. You rarely give this piece much thought, except to install it when you first set things up.

### Assembling the Pieces

The FileMaker Server, Web Publishing Engine, and Web Server can be installed on separate computers or the same computer in any combination, so you have a lot of options. (The web server module is not mentioned in this discussion because it always installs along side the web server itself.)

#### Simple Single-Computer Configuration

The simplest and least expensive option is to install all three components on a single computer. This is simple for two reasons. First, installation is a breeze: the FileMaker Server Advanced installer program will put everything in the right place for you, assuming the appropriate web server software is already installed. Second, it is easy to manage because you have only one computer to sit down at or log in to when you need to make changes to your configuration, install XSLT or PHP pages, or add new FileMaker databases.

But the all-for-one approach is also the least efficient since you are asking one computer to do three jobs at once. This means each task has less memory and less CPU time to spend doing its work. But don’t let this frighten you away from this approach. For many installations, with few users, small databases, and a reasonable number of web connections, the single-machine setup can perform well. Exactly how much is too much is very dependent on what your database and web pages do, but in general if you have less than 20 users, a single server configuration should perform well.

#### Multiple-Computer Configurations

If you decide you need more than one server computer to support your web publishing, you then need to decide how many computers, and which software goes where. To help with the decision, here are the relative performance characteristics of each component.

* **FileMaker Server** *demands* fast hard disk access, can use a lot of CPU and has modest memory requirements.
* **Web Publishing Engine** does not require fast disk access; with XSLT and large data sets, can use a fair amount of CPU and lots of memory.
* **Web Server** likes a fast disk and a modest amount of memory, but uses very little CPU; When using PHP, your web publishing code runs on the web server, making it more CPU-intensive.

For example, if you know you will be doing heavy-duty XSLT processing, it may not make sense to have the Web Publishing Engine and the FileMaker Server on the same machine: they can both be CPU-heavy. Also, the FileMaker Server computer needs a fast disk system, an expensive resource that is wasted on the Web Publishing Engine. On the other hand, if your web publishing is limited to XML or PHP, the Web Publishing Engine will see relatively little load, and may not interfere with FileMaker Server much.

You could elect to put each component on its own machine. As long as a fast network connects the three machines, this will give you maximum performance. Each component has dedicated hardware and plenty of breathing room. But this is also the most expensive configuration, and is often not necessary. 

A reasonable compromise is a two-computer configuration, with two components on one computer and the third on another. If you’re logically inclined, you’ve probably realized there are exactly three possibilities here:

1. Put FileMaker Server and the Web Publishing Engine on one computer, and the web server on the second. You might choose this configuration if you already have a web server you intend to use and you want to publish FileMaker data through it with minimal impact on the web server itself. This model keeps all the FileMaker-specific software off the web server (with the exception of an inconsequential connector the web server uses to talk to the Web Publishing Engine).

2. Put FileMaker Server on its own computer, and share the second between the Web Publishing Engine and the web server. This model is wise if your FileMaker Server is also handling a heavy load of standard FileMaker users. It allows you to add web publishing capabilities without installing additional software on the critical FileMaker Server computer.

3. Put FileMaker Server and the web server on one computer and the Web Publishing Engine on the second. This is generally not a good configuration because the web server and FileMaker Server will contend for the same resources. If you have split FileMaker Server and the Web Publishing Engine onto separate machines, it makes sense to put the web server with the Web Publishing Engine.

### Performing the Installation

Like all things FileMaker, installing the parts of FileMaker Server Advanced starts with running a simple installer program. The entire installation process is explained in depth in the FileMaker Server 8 Advanced Web Publishing Installation Guide, which comes with FileMaker Server Advanced and is also available online at this address:

http://www.filemaker.com/downloads/documentation/fmsa8_web_install.pdf

You really do yourself a favor by reviewing the information in this manual before you dive in and click Install. It covers important changes to your web server configuration you may need to make (Chapter 2) and has instructions for installing all components at once (Chapter 2), or performing a more complex multi-computer installation (Chapter 4).

At its heart, though, the three FileMaker-provided components in FileMaker Server Advanced are available as installation options, and your job is to go to each server computer and install the correct pieces. Also note that if you already have a FileMaker Server running, you only need to make a configuration change to get it connected to the Web Publishing Engine (this is explained below). There is no need to reinstall the FileMaker Server itself.

### Web Publishing Configuration

Once you have all the components installed and have performed the requisite reboots, you still need to configure your server(s) before you can get to work.

{{< note >}}
You might be thinking this process is very complex compared to installing FileMaker Pro itself, and you’re right. This is partly because FileMaker Server Advanced needs to fit in with various server configurations, and can’t make all the decisions for you during installation. But it is also important to remember that web published data is by definition open to a wide audience, so security is a paramount concern. Server software of all kinds generally requires configuration immediately after installation so you can establish necessary security settings (passwords and the like) before you begin to make your data available. 
{{< /note >}}

First, you need to set up the Web Publishing Engine. Remember that this software handles the web side of FileMaker’s publishing powers: it processes you XML requests and XSLT stylesheets. It also performs all the magic of IWP, converting FileMaker layouts into web pages on the fly.

uckily, FileMaker makes this configuration fairly easy: you do it by connecting to the web publishing engine with your web browser. FileMaker shows you the Administration Console, a web application in its own right that makes all the configuration options available by point-and-click. To access the administration console, you first need to know the URL that points to your web server. Then you just append some mysterious goo on the end of that URL. For example, if the web server you’ve configured for web publishing is at http://web.mycompany.com/, you would access the administration console at this address:

http://web.mycompany.com/fmi/config

By accessing a URL with “/fmi/config” after the server name, you instruct the server to pull up the administration console.

{{< aside title="Understanding FileMaker URLs" >}}
If you’re not a URL expert, this part can be confusing. A web URL (or web address) consists of a few key parts. It starts with “http://” or “https://” which just tells your browser you are requesting a regular web page.

Next comes the name of the server computer where the web server software is installed. In this example, the server name is “web.mycompany.com” but you’ll need to get the correct name for your web server.

Sometimes you’ll need to add a port number after the server name. If your web server is listening on port number 8000, for instance, your URL would look like this: http://web.mycompany.com:8000/fmi/config. Notice that the port number is separated from the server name by a colon (:). You only need to list the port number in this way if it your web server is not using port 80, the standard port for the http, or 443, the standard port for https. If you’re not sure what server name or port number to use, try 80 or consult your system administrator.

Finally, after the server name is something called the path component. In a typical URL, the path component refers to some file on the hard drive of the web server computer. But in the world of web applications and dynamic web content, the path rarely refers to a file. In this case, for example, you will not find a file at “/fmi/config” on your computer. Instead, the web server software uses this path to figure out how to handle your request. The first pat (“/fmi”) tells the web server to forward the request as-is to the FileMaker Web Publishing Engine (“fmi” stands for FileMaker Inc.). The Web Publishing Engine then further inspects the path, and sees the “/config” part, which tells it to serve up its administration console so you can configure it. You’ll see many other URLs with paths that start with “/fmi” as you read on. This is how the web server knows you want to talk to FileMaker rather than to any other files or servers it may be configured to work with.
{{< /aside >}}

When you enter the correct address in your web browser, you should arrive at the page pictured in Figure 2.

{{< figure
    title="Figure 2"
    src="FIG02-Admin-Console.png"
    width="774"
    height="614"
    alt="A web browser showing the FileMaker Server Advanced Web Publishing Administration Console. This page input fields to set the server username and password."
    caption="You know you have the FileMaker Web Publishing components properly installed when you can reach the Administration Console. On your first visit to this page, you are asked to make some one-time settings." >}}

As you progress through the administration console’s initial configuration, most of the information requested is obvious: You need to provide a username and password to secure access to the console itself, and to the Web Publishing Engine component. You also need to describe how you have configured your deployment, by either entering the address of the server computer where the Web Publishing Engine and FileMaker Server are installed, or by indicating that they’re on the same machine as the web server. 

The only tricky part of the setup comes when the administration console asks you to enter your FileMaker Server Identifier and Passcode. Because of the public nature of many web publishing installations, it could be possible for someone you don’t know to install a Web Publishing Engine on their computer and configure it to interact with your FileMaker Server. To prevent this, you have to assign your FileMaker Server a private identifier and password (or passcode) that only you know. This information is required to get a Web Publishing Engine to talk to the server. So to complete the configuration process you need to visit the FileMaker Server Admin application that was installed on your FileMaker Server computer. To set an identifier and passcode, on Mac OS X click the Configure toolbar icon. On Windows, right-click on the server name on the left-hand side and choose Properties. In either case, you then switch to the Clients tab. Here you will see an empty list labeled FileMaker Web Publishing Engines. Click the Add button by this list and enter the identifier and passcode of your choice. You are now ready to return to the administration console and enter these same values.

Once the basic configuration is complete, the Web Publishing Engine is up and running, and all forms of FileMaker web publishing are turned on. If at any time you want to change the configuration (for instance, if you decide to move your FileMaker Server to a different computer) you can log back in to the administration console and make the required changes.

While you’re here, you should also decide which services you will be using and turn off and you don’t need (you can always turn them back on later). First, click the grey Publishing Engine tab in the bar across the top of the page. You will see the information shown in Figure 3.

{{< figure
    title="Figure 3"
    src="FIG04-Publishing-Options.png"
    width="774"
    height="614"
    alt="The same browser-based console. The page now shows radio buttons for various logging options as well as links to sections for Instant Web Publishing, XML Publishing, and XSLT Publishing."
    caption="The Publishing Engine section in the administration console lets you control logging and, more importantly, which web publishing technologies are enabled." >}}

In the second grey bar, below the primary tabs, you see a list of links. Each link takes you to a different section of settings for the Web Publishing Engine. For example, to change the settings for Instant Web publishing, click the Instant Web Publishing link next to General Settings. There, you can turn Instant Web Publishing off if you don’t intend to use it. As a general rule, you should disable any service you aren’t using to reduce the likelihood of a security problem and to reduce excess memory usage on the computer. 


## Instant Web Publishing

As you’ve already learned, Instant Web publishing is the fastest way to get your database on the web, and is often an excellent choice if your primary goal is to make an existing database (user interface and all) available to remote users or people who don’t have FileMaker Pro.

Your first decision is whether to host your web database from your desktop machine using FileMaker Pro or FileMaker Pro Advanced, or to use a dedicated Web Publishing environment for better performance and more capacity. If your FileMaker database is already hosted on FileMaker Server, then the answer is made for you: you can’t use serverless (peer-to-peer) IWP sharing unless the database is local to your computer.

### Using Instant Web Publishing with FileMaker Pro

If you elect to share without a server, setup is a breeze. First, launch FileMaker Pro and open the database (or databases) you want to share. Next, on Windows, choose File->Sharing->Instant Web Publishing or on Mac OS X choose FileMaker Pro->Sharing->Instant Web Publishing. You see the dialog box in Figure 4.

{{< figure
    title="Figure 4"
    src="FIG04-IWP-Dialog.png"
    width="660"
    height="488"
    alt="The Instant Web Publishing dialog box. It has On and Off radio buttons, a language setting, and several other options."
    caption="The Instant Web Publishing dialog box (File → Sharing → Instant Web Publishing on Windows, FileMaker Pro → Sharing → Instant Web Publishing on Mac OS X) lets you turn on peer-to-peer instant web publishing and configure which databases can be accessed over the web." >}}

Getting your database on the web is a two-step process from here. First, turn on Instant Web Publishing by clicking the On radio button. This turns on the IWP system inside FileMaker Pro. But it does not share any databases.

Next you need to tell FileMaker exactly which databases should be shared. From the “Currently open files” list, click your database. In the “Instant Web Publishing access to file” area to the right, you can tell FileMaker to make this database accessible from the web. You have three choices:

* *No users* tells FileMaker this database should not be shared on the web.
* *All users* tells FileMaker to share this database and allow any user who has access to the file to connect to it. In other words, FileMaker will ask the web user to enter a username and password just the way it does when you open the database directly. If the person has a valid username and password, he or she will be granted access.
* *Specify users by privilege set* tells FileMaker you only want some users to be able to access the file over the web. You could, for example, create a new Privilege Set (in File → Define → Accounts and Privileges) for specific users and grant only those users web access.

{{< note >}}
Although you can configure IWP access for any open database in this window, you are actually making changes to the Privilege Sets in the database. If you prefer, you can go to File → Define → Accounts and Privileges and make the changes there. Just edit any Privilege Set and turn on “Access via Instant Web Publishing (fmiwp).” You’ll use this approach when you set up a database to be shared using FileMaker Server Advanced below.
{{< /note >}}

The Instant Web Publishing dialog box also shows you the URL you can use to access your shared database. Go to this URL in your web browser to see FileMaker’s IWP home page, which lists each accessible database. Click a database name to log in to it and you should see a good web-rendition of your database.

There are a lot of important tips to making your database work as well as possible with IWP, and they will all be covered shortly. But first, you’ll learn how to share a database using IWP with FileMaker Server Advanced.

### Using Instant Web Publishing with FileMaker Server Advanced

If you choose to share your database with FileMaker Server Advanced, you have a more involved set up process (which is more than worth it given the performance advantages). The first step is to prepare your database for IWP. You can do this when the file on your hard drive, or after it has been loaded on your FileMaker Server. Just open the database, and then choose File->Define->Accounts and Privileges. In the dialog box that appears, switch to the Extended Privileges tab. FileMaker decides which databases can be accessed via IWP and which users can log in based on an Extended Privilege called “Access via Instant Web Publishing. “ Find this Extended Privilege in the list, select it, and click Edit. This summons the Edit Extended Privilege dialog box, where you can decide which Privilege Sets have this Extended Privilege enabled. In other words, if you only want one particular set of users to have IWP access, assign them to a single privilege set (called, for example, IWP Access) and turn on only that privilege set here. If you want *all* valid users of your database to have IWP access, turn on every Privilege Set in this list. 

If you haven’t already, copy the database to your FileMaker Server’s database folder, and, using FileMaker Server Admin, open the database on the server.

Now you’re ready to set up IWP in the Web Publishing Engine. First, connect to the administration console for your Web Publishing Engine. You’ll need to use the same URL, username, and password you used when you first installed and configured FileMaker Server Advanced above. Log in to the administration console, click the grey Web Publishing Engine tab, and then the blue Instant Web Publishing link below the row of tabs. You will see the page shown in Figure 5.

{{< figure
    title="Figure 5"
    src="FIG05-WPE-IWP-Admin.png"
    width="618"
    height="777"
    alt="The Instant Web Publishing section in the browser-based FileMaker Server Advanced Web Publishing Administration Console."
    caption="Configuring IWP in FileMaker Server Advanced’s administration console is a lot like configuring it in FileMaker Pro. Just turn it on." >}}

In this window, simply turn on Instant Web Publishing if it isn’t already. Again, FileMaker shows you the URL you should use to connect to the database in your web browser. This time, though, the URL points to the web server computer in your web publishing setup, and it includes the path “/fmi/iwp” to tell the web server you want Instant Web Publishing.

### Using Your Database in Instant Web Publishing

In the browser, your database looks a lot like it does in FileMaker Pro itself.  But you’re sure to notice some striking differences. First of all, the menus in a web browser’s menu bar obviously don’t match FileMaker’s. To combat this problem, FileMaker puts the most common commands in the Status Area where they are easily accessible. Figure 6 shows the IWP Status Area with each part labeled.

{{< figure
    title="Figure 6"
    src="FIG06-IWP-Status-Area.png"
    width="432"
    height="432"
    alt="Detail of the Status area in the browser window when using IWP. There are Home, Browse Mode, and Find Mode buttons at the top. A cluster of buttons below this includs New Record, Edit Record, Duplicate Record, Delete Record, Sort Records, Show All Records, Omit Record, Omit Multiple, Show Omitted, and a Toggle Toolbar icon. There are layout and View As pop-up menus, a book icon for navigating records, and buttons for Go To Record and Modify Last Find. Finally there is a Log Out button at the bottom."
    caption="The Status Area in IWP includes extra buttons to access common FileMaker commands that are normally available via the menus." >}}

Of note, the Status Area includes a Go Home button, which returns to the IWP welcome screen where you can select another database to open. It also allows you to perform basic operations, like adding a new record or deleting the current record. The Edit Record button switches the record to Edit Mode, a mode unique to IWP. Normally a record is view-only. When you switch to Edit Mode, you can modify field data. When you’re finished, you click Submit to save the changes or Cancel to revert the record (both buttons appear in the Status Area in Edit Mode). You can also enter Edit Mode simply by clicking on any field that is normally enterable in Browse Mode.

Like the normal FileMaker Status Area, the IWP version includes a pop-up menu from which you can choose a layout to view. But in addition to this, the View pop-up menu lets you decide to view a layout in List view, Form view, or Table view (much like the View menu in FileMaker Pro). When you switch to List View (or switch to a layout that is set to show in List View), the behavior of the list is slightly unfamiliar. In the IWP list view, the current record is *always* at the top of the window. A few additional records show below this one just like a list. To view more records, either above or below what is showing, use the book icon to flip backward or forward. As you do, you will see a different set of records in the list. Table View works similarly.

{{< note >}}
If you don’t want users to switch views on a layout, simply turn that view off for the layout. In FileMaker Pro, switch to Layout Mode. Then choose Layouts → Layout Setup and switch to the Views tab in the resulting dialog box. Here you can turn on or off the checkboxes to control which views are allowed for this layout. As with most things in FileMaker, settings in the desktop version translate seamlessly to IWP.
{{< /note >}}

Aside for these minor distinctions, the IWP database works very much like you would expect. As long as you follow some guidelines to ensure good IWP compatibility (see below) your database is very usable for anybody with a web browser.


### Instant Web Publishing Tips

Although IWP is a one-click affair, there are things you need to keep in mind if you want to ensure the best experience possible for your users. In fact, if your database is complex, chances are you will have to make some changes or restrict what actions web users can do to ensure proper functioning. Problems fall into three primary areas: user interface, missing features, and scripting compatibility.

#### User Interface Compatibility Issues

It’s a tough prospect, turning a FileMaker layout into a web page. For starters, every web browser is a little bit different, with its own restrictions on what can be controlled look-wise. Not to mention the language of web pages is decidedly … boxy. It turns out there are some things FileMaker simply can’t translate exactly. The most important are:

* Round things are out. If your layout uses rounded-corner rectangles or rounded buttons, FileMaker draws them with sharp corners instead. This is usually not a very big deal, but it does change the way your layout looks slightly. More damaging, ovals and circles are ignored completely and simply don’t show up on the page. Luckily, if you paste images on your layout (those that you created in a different program) they display just fine, so if you absolutely must have a circle around your logo, draw the circle in PaintBrush, Pages, PhotoShop, or some other program, then copy it and paste it onto the layout.

* For similar reasons, diagonal lines are also not supported. Again, use another program to draw what you want, then paste it onto the layout.

* Images with transparent portions will not translate well to the web unless the original was a GIF image. Use the Insert->Picture command in Layout Mode to put a transparent GIF on the layout and the transparency will show on the web. Otherwise, transparent portions will show incorrectly (black or white).

* Sometimes fonts render differently on the web page. You may need to make the text objects on your layout slightly larger if the text incorrectly wraps to multiple lines.

In addition to these specific guidelines, bear in mind that tolerances on the web aren’t quite as pixel-perfect as FileMaker’s layout system. For best results you may need to make your layouts a little roomier. For example, scroll bars on portals are bigger on the web page than in FileMaker, so if things are tight, something may be cut off.

#### Missing Features in Instant Web Publishing

Many of FileMaker’s more advanced features simply aren’t available in IWP. If you need to do any of these things, your user will have to have a full copy of FileMaker Pro. The major missing features are:

* Import and Export records
* Insert pictures, movies, sounds, and files in container fields
* Use preview mode and print
* Spell check

{{< note >}}
Your users are free to print the web page they see in the browser. It will print like any other web page. But if you have custom reports that are nicely formatted to print on a page and/or use Sub-Summary parts, they won’t display or print properly through the web.
{{< /note >}}

It should go without saying, but you can’t create new database, modify the database structure, or modify layouts or scripts.

#### Scripting Compatibility Issues

Due to the missing features and the limitations of a web browser, many of the standard steps in ScriptMaker are not supported in IWP. Luckily, FileMaker makes it easy to tell which script steps are not supported. When in ScriptMaker, turn on the “Indicate web compatibility” check box. When this option is turned on, any script step that is not compatible with IWP will turn grey.

Any step that is not web compatible will not execute in IWP, but the script itself will continue unabated. Because of this, scripts can behave in unexpected ways if you’re not careful to check for incompatible steps. It also means it is acceptable to have incompatible steps in a script if you are certain it will still work correctly if the incompatible steps are skipped.

If necessary, a script can check to see if it is running under IWP while it executes using the Get(ApplicationVersion) function. The result of this function will include the word “Web” if the user is accessing the database via IWP. For example, you can do this in a script:

```text
If [PatternCount(Get(ApplicationVersion), “Web”) > 0]
   … do something only when run via IWP …
End If
```

The script steps inside the If condition will only execute when the script is run through IWP. Of course by changing the condition to `PatternCount(Get(ApplicationVersion), “Web”) = 0` you can add steps to a script that will not run under IWP.

Finally, if you have entire scripts that should never be accessed from the web, you can use a custom web-only Privilege Set that does not allow these scripts to be run. You can also block IWP access to layouts that should not be accessed in the same way.

## Custom Web Publishing with PHP

Despite its tremendous ease-of-use, IWP has one significant limitation: it doesn’t work like a normal web site. This is just what you want if you’re hoping to mimic your FileMaker database for web users, but often you really want to build a branded web site with some database-backed functionality. In a case like that, you need Custom Web Publishing instead. With CWP, you can make the web pages look exactly the way you want, and still incorporate data from your database. You can even build custom forms that add or edit records in the database when submitted, and run scripts in FileMaker where necessary.

### Installing the FileMaker API for PHP

If you’re new to web development (and even if you’re not) PHP is often the best choice for custom web publishing because it is easier to understand and work with than XSLT. Unfortunately, getting PHP up-and-running requires a little more work because the PHP capabilities are not built in to the Web Publishing Engine. Outfitting your FileMaker Web Publishing system with PHP capabilities requires that you download and install an additional component on your web server computer: the FileMaker API for PHP. You can download the installer from this location:

http://www.filemaker.com/developers/resources/php/

After filling out a quick form, FileMaker will email you the download link. On the download page, you are given two download options. Usually you should choose the “If you are new to PHP” version, which will install PHP, install the FileMaker add-ons for PHP, and configure your server all in one shot. If you are a PHP expert, already have a compatible version of PHP on your server, and just want the FileMaker-specific PHP code, choose the “If you are currently using PHP” download instead. (If you chose the latter option, be sure you review the Read Me file that comes with the download to ensure you have an appropriate version of PHP, and for important information on using the API.)

The PHP API communicates with FileMaker using the XML Publishing functionality in the Web Publishing Engine. So the next step is to enable this feature. Again, log in to the administration console and click to the Web Publishing Engine tab. This time, click the XML Publishing link and make sure XML Publishing is turned on.

### A Brief Introduction to PHP

This whitepaper won’t give you a full understanding of PHP, but it will help you make sense of the examples if you understand just a few PHP basics. PHP is essentially a scripting language particularly suited to producing text output. In other words, it has a full suite of programming capabilities (looping and conditional capabilities, variables, and so forth). At the same time, unlike more typical scripting languages, PHP makes it seamless and easy to output text. For example, this is a perfectly valid PHP script:

```php
Hello World
```

If you run this script in PHP, it will simply output the text “Hello World.” Any text in the script becomes output automatically unless you take care to put it inside special tags. Consider this example:

```php
Hello World, it is now <?php echo date("d-M-Y h:i:s") ?>
```

When this PHP script is run, the text “Hello World, it is now “ is sent directly to the web page. But the `<?php` and `?>` tags tell the PHP processor that you want it to execute some script code between them. In this case, you’re asking PHP to echo (or output) the current date and time. The result of this script might be:

```text
Hello World, it is now 20-Feb-2007 10:32:47
```

By mixing ordinary text and code like this, you can very easily produce valid HTML output with dynamic content. In the above example, the current date is dynamically inserted into the output, but using the FileMaker API for PHP, you can grab data from the database and dynamically insert it into the output as well.

{{< note >}}
The remainder of this section will focus on using the FileMaker API. But PHP has an enormous amount of built-in functionality that shouldn’t be ignored. If you are serious about using PHP to build a web site, you should visit http://www.php.net/ or buy a good book on PHP to bring yourself up to speed.
{{< /note >}}

### Setting up a Database for the PHP API

FileMaker’s PHP API is essentially a series of PHP classes that enable PHP to talk to FileMaker (using the XML Publishing system). A class in PHP is simply a bundle of pre-written code you can easily use in your own PHP files. FileMaker has done all the hard work of formulating requests and processing XML, and given you a nice PHP-friendly set of commands to use.

For the purposes of illustration, you will now build a very simple PHP web page that displays a list of records in a database. First you need to create the database. Using FileMaker Pro or FileMaker Advanced, create a simple one-table database called Bookmarks. The database should have one table, also called Bookmarks, and the following fields:

* A Text field called *Name*
* A Text field called *URL*
* A Text field called *Description*

This database will hold links to web pages you find interesting. To make testing easier, go ahead and add a few records to the database.

Before you can access this database with PHP, you need to set up security. Go to Define → Accounts and Privileges, then switch to the Privilege Sets tab. Click New to create a new Privilege Set. This privilege set will govern what the PHP code can do with your database. Name this Privilege Set *PHP Access*. Under Data Access and Design, make the following selections:

* For Records, choose “View only in all tables”
* For Layouts, choose “All view only”
* For Value Lists, choose “All view only”
* For Scripts, choose “All no access”

These settings allow PHP scripts to use but not modify data in the database, and prevent them from running any scripts. This is a reasonable first stab at PHP security. If you later decide you need additional power, you can always revisit this screen and enable additional powers.

{{< note >}}
Since many web pages are open to the world, security is very important. If you publish your database on the web using the settings above, and your Web Publishing Engine is not secured behind a firewall, then anybody in the world can view any data in your database by accessing the XML Publishing system directly. Your web-accessible privilege sets should always allow only the access that is needed and nothing more. In a PHP setup, it is also a good idea to restrict access to the Web Publishing Engine itself to just the Web Server. Then users can access the PHP site but not the databases directly.
{{< /note >}}

Click OK to dismiss the Define Privilege Set dialog box, but don’t OK the Define Accounts & Privileges window yet. The PHP API looks for a special extended privilege (fmphp) before it is willing to talk to a database. You need to add this extended privilege to your database and assign it to the new Privilege Set. First, switch to the Extended Privileges tab, then click New. The Edit Extended Privilege window appears. In the Keyword box, enter “fmphp” (without the quotes). In the Description box, enter “Access via FileMaker API for PHP” (or anything you want; the description is strictly informational). Finally, in the Access list, turn on the checkbox next to the PHP Access privilege set. 

Since PHP uses XML Publishing to talk to FileMaker, you also need to enable the Access via XML Web Publishing extended privilege set. When you’ve made these changes, click OK.

Finally, you need to add an account to this database. The PHP API connects to the database using an account name and password, and the account must be assigned to this new PHP Access privilege set. Switch to the Accounts tab and click the New button. Make sure “Account is authenticated via” is set to FileMaker. In the Account Name box, you should enter a simple account name you’ll remember. For this example, enter php. This account also needs a secure password. Bear in mind that anybody who knows this username and password, and has access to your Web Publishing Engine and/or FileMaker Server can access your database. Choose a password that can’t be guessed but is easy to type and uses only letters, numbers, and the underscore character. Finally, in the Privilege Set pop-up menu, choose PHP Access. Click OK to save this account. Then click OK again in the Define Accounts & Privileges dialog box to close it as well.

You can now move your database to the FileMaker Server’s databases folder and open it using FileMaker Server Admin.

### Serving a PHP File

Now that you have a database with PHP API access, you’re ready to create a PHP page. Using any plain text editor, create a new file and type this text into it:

```html
<html>
	<head>
		<title>My PHP Bookmarks Page</title>
	</head>
	<body>
		<h1>Bookmarks</h1>
	</body>
</html>
```

Save this file with the name “bookmarks.php” in a convenient location on your computer. Make sure you use the “.php” file extension so your web server knows to treat this as a PHP script. This script has no real code yet — you’ll be adding some shortly.

{{< note >}}
If you’re using Mac OS X and the TextEdit program, you need to put it into plain text mode before you save the file. With the file still open, choose Format → Make Plain Text. Then save the file. If you don’t do this step, your PHP file will nor work properly.
{{< /note >}}

In order to test the PHP file, it needs to be in a folder that is accessible by your web server. On Mac OS X, this is in `/Library/WebServer/Documents`. On Windows, it is usually in `C:\inetpub\wwwroot`, although you may have your web server configured to use a different disk or location. If you don’t find the wwwroot folder, try searching for it. In either case, the folder is called your web server root, and you will be copying files there a lot during this section, starting right now. Copy the bookmarks.php file to your web server root.

To be sure everything is placed properly, try accessing this web page. You’ll need to formulate a URL to access this page. The form will be something like this:

http://yourserver/bookmarks.php

But instead of yourserver, you should enter the name or IP address of your web server computer. If everything is correct, you should see a page like the one in Figure 7.

{{< figure
    title="Figure 7"
    src="FIG07-PHP-Page-1.png"
    width="629"
    height="460"
    alt="A web browser window showing a mostly empty white page. It has a heading at the top with the text \"Bookmarks\"."
    caption="It’s not much to look at yet, but if you see this, you know you’ve got PHP installed, you put the file in the right place, and you typed the file’s contents properly. If you don’t see this, read on." >}}

If you don’t see a web page similar to the one in Figure 7, you have some sleuthing to do:

* If your browser tells you it can’t find the server, then the server name portion of your URL is incorrect. Double check that you typed it properly and make sure you’re using the correct server name or IP address.

* If your browsers says the page bookmarks,php doesn’t exist, you may have put the file in the wrong place. Double check that you copied the file directly into the web server root folder. Also, make sure you don’t have more than one web server installed on your computer and that you haven’t re-configured your web server to use a different root folder.

* If, instead of the word Bookmarks, you see the actual HTML source code from the bookmarks.php file, then PHP is not installed properly on your computer. If you opted for the “I’m already using PHP” installer when you downloaded the FileMaker API for PHP, go back and install the other one instead.

* If you see a blank page, you may have a typo in your source code. Make sure the bookmarks.php file you created has exactly the code shown above in it. Also, make sure you are using a program that can create plain text files. If you’re not sure, use NotePad on windows. On Mac OS X, use TextEdit and don’t forget to choose Format → Make Plain Text.

{{< tip >}}
If you’re going to be writing a lot of PHP, you’ll do yourself a favor by buying a good programmer’s text editor program. Almost every programming-oriented text editor will recognize and help with PHP code automatically. On Windows, TextPad is an excellent choice. On Mac OS X, consider using TextMate or BBEdit. 
{{< /tip >}}

### Using the FileMaker API for PHP

Now that you have PHP being served correctly in your web publishing environment, it is time to add some dynamic content to your page. This page is simply going to list all the bookmark records in the database. For each record, the web page should include the name and description. Additionally, the name should be a link to the actual web page. There are at least 283 ways to do this in HTML, but the method this page will use is to add the records to an HTML dictionary list tag (dl). The <dl> tag will come before the first record and the </dl> tag will be added after the last one. Each record will be represented by this HTML:

```html
<dt><a href=”[URL]”>[NAME]</a></dt>
<dd>[DESCRIPTION]</dd>
```

Your mission is to get the PHP code to find all the Bookmark records, and output this HTML snippet for each one.

First, you need to connect to the FileMaker database and perform a Find All. The complete code to do this, which should go at the top of your PHP file, is this:

```php
<?php
	require_once('FileMaker.php');

	$connection =& new FileMaker("Bookmarks", "servername"); 
	$connection->setProperty('username', 'php');
	$connection->setProperty('password', 'password');

	$findAllCmd =& $connection->newFindAllCommand('Bookmakrs');
	$result = $findAllCmd->execute(); 
	if (FileMaker::isError($result)) { 
		echo "unable to execute Find All command: " .
			$result->message;
		die();
	}
?>
```

There are a lot of steps there, so it will help to break it down into pieces. First of all any time you use the FileMaker API in a PHP file, you need to include this line:

```php
require_once('FileMaker.php');
```

It tells PHP to load the API classes. Next, you need to tell the PHP API how to connect to your database:

```php
$connection =& new FileMaker("Bookmarks", "servername"); 
$connection->setProperty('username', 'php');
$connection->setProperty('password', 'password');
```

In your case, you should put your real server name or IP address in place of “servername” on the first line.

{{< note >}}
This time you want the name or address of your Web Publishing Engine server. If you have multiple computers in your web publishing system, make sure you choose the right address.

On the other hand, if you have both the Web Publishing Engine and the Web Server on one computer, you can use the shorthand `localhost` for the server name. Localhost is computer-speak for “this same computer.”
{{< /note >}}

You should also substitute the password you gave your *php* user on the third line.

These three lines of code establish the connection information the API needs to talk to FileMaker. No connection has been made yet though. The API only connects when you execute a command. In this case, you want a Find All command, so use this code:

```php
$findAllCmd =& $connection->newFindAllCommand('Bookmarks');
```

This line creates a *command* object that knows how to find all records. In this case, the word “Bookmarks” being passed as a parameter to `newFindAllCommand()` is the name of the *Layout* you want the command to work with. All PHP interaction is done through a FileMaker layout. This layout determines what table is accessed, which table occurrence is used on the Relationship graph, and what fields are available. In this case, you’re using the layout FileMaker created for you when you created the database.

Finally, you can execute the command with this code:

```php
$result = $findAllCmd->execute();
```

Once this code runs, the $result variable will hold a list of records in the database, assuming there was no error. To check for an error, you use code like this:

```php
if (FileMaker::isError($result)) { 
	echo "unable to execute Find All command: " .
		$result->message;
	die();
}
```

This code checks the result variable to see if an error occurred. If so, it writes an error message to the web page, then uses PHP’s `die` command , which is similar to FileMaker’s Halt Script script step. If there was no error, the script will continue normally. 

Again, all the code so far should go at the top of the PHP file. It makes sense to connect to the database and grab the data you will need up-front. Once you have done this, and are sure you didn’t run into an error, you can start outputting HTML code. You’re going to put your record information after this line in your PHP file:

```html
<h2>Bookmarks</h2>
```

Your script then needs to loop through all the found records and spit out the HTML code as it goes. Remember that the variable called $result contains all the records. That variable is defined all throughout the PHP file, so you can use it right here:

```php
<?php
$records = $result->getRecords();
	foreach($records as $key => $record) {
		// anything here will repeat for
		// every record
	}
?>
```

This snippet of code fetches the actual record data from the `$result` variable, then uses the PHP `foreach` command to loop through them. Any code you put between the `{` and `}` will repeat once for every record in the database. You can complete this loop like this:

```php
<?php
	$records = $result->getRecords();
	foreach($records as $key => $record) {
?>
	<dt>
		<a href="<?php echo $record->getField('URL') ?>">
			<?php echo $record->getField('Name') ?>
		</a>
	</dt>
	<dd>
		<?php echo $record->getField('Description') ?>
	</dd>
<?php }	?>
```

This enhanced version outputs the correct html for a single record. Since it is inside the foreach loop, it will do this for every record. This code should be put between <dl> and </dl> tags on the page. The complete page is shown here:

```php
<?php
require_once('FileMaker.php');

$connection =& new FileMaker("Bookmarks", "servername"); 
$connection->setProperty('username', 'php');
$connection->setProperty('password', 'password');

$findAllCmd =&
	$connection->newFindAllCommand('Bookmakrs');
$result = $findAllCmd->execute(); 
if (FileMaker::isError($result)) { 
	echo "unable to execute Find All command: " .
		$result->message;
	die();
}
?>

<html>
<head>
	<title>My PHP Bookmarks Page</title>
</head>
<body>
	<h1>Bookmarks</h1>

	<dl>
	<?php
		$records = $result->getRecords();
		foreach($records as $key => $record) {
	?>
		<dt>
			<a href="<?php echo $record->getField('URL') ?>">
				<?php echo $record->getField('Name') ?>
			</a>
		</dt>
		<dd>
			<?php echo $record->getField('Description') ?>
		</dd>
	<?php }	?>
	</dl>

</body>
</html>
```

If you copy this revised file to your web server root folder, cross your fingers, and load the page in your web browser again, you should see something like Figure 8.

{{< figure
    title="Figure 8"
    src="FIG08-PHP-Page-2.png"
    width="631"
    height="461"
    alt="The same browser window from Figure 7. This time it shows three links: \"Microsoft\", \"Apple\" and \"FileMaker\"."
    caption="With the PHP code in place, the web page now shows data from the database. If you add records or modify fields, then refresh the page, you’ll see the changes reflect immediately." >}}

### Learning More About the FileMaker API for PHP

This sample file has only scratched the surface. With the PHP API, your PHP page can add new records to the database, edit existing records, delete records, display pictures or download files from container fields, execute scripts, and use value lists. When you install the PHP API, the installer also places complete documentation and sample files on your hard drive. On Windows, the documentation is here:

```
C:\Program Files\FileMaker\FileMaker Server\Web Publishing\FileMaker API for PHP Docs
```

On Mac OS X, it can be found here:

```
/Library/FileMaker Server/Web Publishing/FileMaker API for PHP Docs/
```

If you are new to web development, you will also benefit by reading up on HTML.


## Custom Web Publishing with XSLT

If you are building a web service that uses XML, or you are familiar with XSLT, you may decide to use CWP with XSLT instead of PHP. XSLT is not as easy for beginners as PHP, and is not as broad in its capability or support base. But it is an excellent language for producing XML output, and can be very powerful. In this example, you will use XSLT to make a simple database accessible as an RSS feed — an open XML-based standard for delivering information.

### Enabling Custom Web Publishing with XSLT

Because CWP with XSLT is built right in to the Web Publishing Engine, you don’t have any additional installation to do. You only need to be sure XSLT publishing is enabled in your Web Publishing Engine. By now, you could do this in your sleep, but it turns out this time you’ll find some options you haven’t seen before. First, connect to the Web Publishing Engine administration console (you used this page when you first installed the Web Publishing Engine). Switch to the Publishing Engine tab and click the XSLT Publishing link near the top of the page. 

In addition to an On/Off switch (you should turn it On), this page gives you a few more options. First, you can put the XSLT system in Development mode or Production mode. In case it isn’t obvious, you should use Development mode while you are still developing. This ensures that when you make changes to the XSLT templates, the server notices right away so you can simply refresh in your web browser or other client program. When you switch to Production mode, FileMaker will load the XSLT templates only once to ensure maximum performance. For now, use Development mode.

Next, you have the option of enabling or disabling “database sessions.” This is an advanced setting that can be hard to understand at first. Essentially, when your XSLT templates are processed, they access the FileMaker database like a mini copy of FileMaker Pro. If database sessions are turned off, each new page that is loaded by a particular user will run in a new and separate environment. This is the least-resource-intensive option, so it reduces load on your FileMaker server. But it also means that scripts that use global variables, global fields, and other database state may not work properly. If you intend to set a global value on one page and access it on another, you need to turn on database sessions. Otherwise, you should leave it off. For now, leave this option *off*. 

FileMaker’s XSLT system has the ability to send email messages. If you want to use this feature, you must provide correct information in the SMTP area of this page. This information tells the Web Publishing Engine how to talk to your mail server. For now, leave everything as it is.

Finally, the Default Text Encoding options should be left alone for now. These advanced settings should only be changed if you know what you’re doing and have reason to change them.

Once you have made the appropriate changes, click Commit.

### Understanding XML

XML is everywhere these days, and it can be hard to separate the many uses from the core of XML itself. XML, at its heart, is simply a structured way of representing complex information with plain text. It has a few simple rules (and a few not-so-simple rules that won’t be covered here). First, XML uses tags (much like HTML). In XML these are called entities, and they live between `<` and `/>`. For example, this is a simple XML entity:

```xml
<message/>
```

That XML entity doesn’t say much. It only represents the existence of a message, but you don’t know anything about that message. XML entities can have attributes, which tell you information about the entity. For example:

```xml
<message type="greeting"/>
```

This time the message entity includes one attribute, the “type” attribute. An attribute always has a value, and the value in this case is “greeting.” Intuitively, you could assume that this entity represents a message that is suitable for greeting someone. An entity can have as many attributes as you want, or no attributes at all. An attribute, though, always has exactly one value.

{{< note >}}
It is also worth mentioning that entity and attribute names are case sensitive. `<person/>` is not the same as `<Person/>` and `<person name="Bill Gates"/>` is different from `<person Name="Bill Gates"/>`. When you’re working with XML and XSLT, you always need to be careful about case.
{{< /note >}}

XML entities can also have content. To wit:

```xml
<message type="greeting">Hello World</message>
```

Notice that the message entity has seemingly been split in two. Instead of appearing once with `/>` on the end, it now appears twice. The first `<message…>` is the starting tag and begins the message entity. Later, the `</message>` tag ends the entity (you can tell it is an ending tag because it has “/” before its name). Everything between these two tags is the content of the entity. Again, logically, this XML seems to represent a greeting-type message, and the message, apparently, says “Hello World.”

The content of an entity is not limited to just text. The XML in question could look like this as well:

```xml
<message type="greeting">
	<recipient name="reader"/>
	Hello World
</message>
```

Now the XML message seems to be intended for the reader, because it has a recipient entity inside it, and that recipient entity names the reader. You can freely mix text and other entities in the content of an entity. In practice, though, most xml entities have either text or other entities, but not both, in their content. Some people, then, might prefer this sort of XML:

```xml
<message type="greeting">
	<recipient name="reader"/>
	<text>Hello World</text>
</message>
```

This time the message entity contains no text of its own. Instead it contains two other entities. One of which (`recipient`) has no content at all. The other (`text`) does have content. Now suppose you wanted to put more than one message in your XML file. You might be tempted to do this:

```xml
<message type="greeting">
	<recipient name="reader"/>
	<text>Hello World</text>
</message>
<message type="farewell">
	<recipient name="lunar body"/>
	<text>Goodnight, Moon</text>
</message>
```

As is so often the case, though, temptation has led you astray. Another of XML’s simple rules is this: everything in an XML document must be inside one big entity. The sample above has two message entities inside absolutely nothing.  A corrected version appears here:

```xml
<messages>
	<message type="greeting">
		<recipient name="reader"/>
		<text>Hello World</text>
	</message>
	<message type="farewell">
		<recipient name="lunar body"/>
		<text>Goodnight, Moon</text>
	</message>
</messages>
```

This time, the two messages have been wrapped up in a new entity called, aptly, *messages* (note the plural). The sole purpose of this new entity is to stand in as the single root entity in this XML document so it follows the rules.

This approach demonstrates one more fact: XML entities can be *nested* as deeply as you want. You can have entities inside entities inside entities to your heart’s content. This fact leads to an important conclusion: XML data can be thought of as a *tree*. Not, per se, the kind that grows in a park. Rather, the kind Computer Scientists think about: A group of *nodes* and *branches*. Figure 9 shows this sample XML file when visualized as a tree.

{{< figure
    title="Figure 9"
    src="FIG09-XML-Tree.png"
    width="367"
    height="472"
    alt="A diagram showing labeled circles with lines connecting them. There is a single circle at the top labeled \"Messages\". It has two lines coming out the bottom, one connecting to each of two circles labeld \"Message\". These in turn connect to their own circles labeld \"Recipient\" and \"Text\". Each \"Text\" circle then connects to a rectangle. The first has \"Hello World\" in it. The second has \"Goognight, Moon\" in it."
    caption="In this tree-like representation of the XML file, each circle and rectangle is a node and the lines are branches. Every XML file can be thought of like this, if you’re so inclined." >}}

As abstract as all this tree-talk seems, it will help you understand how XSLT works later on.

Aside from some esoteric cases, that is all there is to XML. If you think it through, you’ll realize that even with this enforced structure, XML can represent just about any kind of information — from family relationships to purchase orders to complex schematics. XML is also fairly easy for a human like you to read and understand, since it uses plain English names that are repeated as often as they’re needed. Finally, because of the rules, XML is also easy for a computer to process. It is this winning combination of simplicity, flexibility, human readability, and machine process-ability that has made XML so popular. It is an excellent general-purpose method of recording information in a file when you want to be sure other computer systems will be able to use the information.

To make interaction even easier, hundreds (probably thousands) of XML-based standards exist today. An XML-based standard is just an agreed-upon set of entities and attributes, all designed to meet a particular need. The message data in the sample above is not part of any standard, which is perfectly OK, But if you want to ensure consistency among multiple people and programs, standards can help. Usually these standards are defined formally and owned (or at least managed) by some organization. The definition of the standard lives at a web page somewhere, and an XML file that uses the standard refers to it formally. If the message XML in this example were a formal standard owned by FileMaker Inc. (it isn’t) then the file might look like this:

```xml
<!DOCTYPE messages PUBLIC "-//FMI//DTD messages//EN" "/fmi/xml/messages.dtd">
<messages xmlns="http://www.filemaker.com/xml/messages">
	<message type="greeting">
		<recipient name="reader"/>
		<text>Hello World</text>
	</message>
	<message type="farewell">
		<recipient name="lunar body"/>
		<text>Goodnight, Moon</text>
	</message>
</messages>
```

The new line added to the top is called a *doctype* and it declares this file to be of a certain type (in this case a type called *messages*). Also notice that the messages entity has a new attribute, called *xmlns*. Because different XML standards are owned by different people, and they all need to intermix safely, every entity name in every XML format in the world has to be unique. In other words, if Microsoft uses an entity called *person* in one of its standards, then Adobe would not be able to use *person* itself later. This is obviously not a very workable scenario, so XML supports the concept of namespaces. Each new standard can declare a new namespace with a unique name. Then it can put all its entities into that namespace. Now, nobody can use the same entity name *within the same namespace*, but anybody is free to use it in a different namespace instead.

The `xmlns` attribute on an entity declares the namespace it uses, along with all the entities inside it. Conceptually, you could pretend that the real name of the messages entity is “http://www.filemaker.com/xml/messages:messages” — the namespace, then a colon (:) and then the name of the entity. Likewise, the recipient entity in this document is not just a recipient, it is a “http://www.filemaker.com/xml/messages:recipient”. Luckily, you can declare the namespace just once, and use the short name for every entity throughout the file, to save reading all those long namespace values.

It is possible to have more than one XML standard at work at the same time in a single file. When that happens, you have more than one namespace referenced as well. Because it would be possible for two different entities to have the same name, XML uses a namespace prefix when mixing types. For example:

```xml
<!DOCTYPE messages PUBLIC "-//FMI//DTD messages//EN" "/fmi/xml/messages.dtd">
<msg:messages
  xmlns:msg="http://www.filemaker.com/xml/messages"
  xmlns:new="http://someoneelse.com/xml/newtype">
	<msg:message type="greeting">
		<msg:recipient name="reader"/>
		<msg:text>Hello World</msg:text>
		<new:importance>not very</new:importance>
	</msg:message>
	<msg:message type="farewell">
		<msg:recipient name="lunar body"/>
		<msg:text>Goodnight, Moon</msg:text>
		<new:importance>not at all</new:importance>
	</msg:message>
</msg:messages>
```

This last iteration of the made up XML file includes entities from two different standards. First, it uses the imaginary FileMaker messages format. But it also uses another standard called *newtype*. The messages standard is defined to use the *msg* prefix (because the attribute name is `xmlns:msg`), while the *newtype* standard uses the new prefix. Every entity throughout the file also includes the appropriate prefix so the reader can tell which standard that particular entity comes from.

Shortly, you’ll learn about two XML standards: *RSS*, which is a popular way of making news, articles, podcasts, and other so-called *syndicated* content available to the world. And *fmresultset*, FileMaker Pro’s own XML standard for representing information about your database and the data in it. But first, you need to learn a little XSLT.

### Preparing a Database for XSLT Publishing

Just as with IWP and PHP, you need to configure your database to work with XSLT Publishing. The process is nearly identical. For this example, first create a simple database called Press Releases with one table (also called Press Releases) and the following fields:

* A Date field called *Release Date*
* A Text field called *Title*
* A Text field called *Content*

This database will hold press releases about your company. For the sake of testing, add a few records with sample data now.

To configure this database for XSLT Publishing, go to File->Define->Accounts and Privileges. Click the Privilege Sets tab. Create a new Privilege Set called XSLT Access. Just as you did with the PHP Access privilege set (page XX), grant this Privilege Set view only access to records, value lists, and layouts, and no access to scripts. While the Edit Privilege Set window, turn on “Access via XSLT Web Publishing” in the Extended Privileges list. Click OK when you are finished.

Now switch to the Accounts tab and turn on the Guest account. Also, edit this account and assign it to the XSLT Access privilege set. By enabling the Guest account, web users will be able to access your RSS feed without entering a password. If you want to password protect your XSLT published data, simply disable the Guest account and create real accounts (with passwords) for the XSLT Access privilege set. When you’re finished, click OK to dismiss the Define Accounts & Privileges dialog box.

You can now copy the new database to your FileMaker Server and open it with FileMaker Server Admin.

### Writing an XSLT Template

Loosely put, XSLT is a language for converting from one kind of XML to another, or from XML to HTML. XML goes in one side, and different XML comes out the other. As mentioned previously, you are going to use XSLT to make data from your database accessible as an RSS feed. An RSS feed is just some special XML data that can be accessed over the web. An RSS feed looks like this:

```xml
<rss version="2.0">
	<channel>
		<title>My Company News</title>
		<link>http://www.mycompnay.com/news/</link>
		<description>News about my company.</description>
		<item>
			<title>A Sample Press Release</title>
			<description>Content goes here</description>
		</item>
	</channel>
</rss>
```

The *rss* entity wraps the entire document, just like the *messages* entity did in the sample document above. Inside rss, you find the *channel*, which has a title, link, and description. Additionally, the channel entity has one or more *item* entities inside it. The item entity represents a single story or article. In this sample, you will produce an RSS file with an item entity for each record in the database.

#### The fmresultset XML Format

Now you know what the *output* of your XSLT template will be. But what about the *input*. FileMaker data is a database, not an XML file so how can XSLT process it? Simple: The Web Publishing Engine extracts information about your database, and the data in it, from FileMaker Server and converts it to a standard XML format. Once this is done, the XSLT Publishing system can convert *that* XML into whatever you want; in this case, into RSS.

So to successfully use XSLT Publishing you need to understand FileMaker’s XML format and how to interact with it. Here is an example of XML data from the FileMaker database you just created:

```xml
<!DOCTYPE fmresultset PUBLIC "-//FMI//DTD fmresultset//EN" "/fmi/xml/fmresultset.dtd">
<fmresultset  
  xmlns="http://www.filemaker.com/xml/fmresultset">
	<error code="0"/>
	<metadata>
		<field-definition name="Release Date" result="date"/>
		<field-definition name="Title" result="text"/>
		<field-definition name="Content" result="text"/>
	</metadata>
	<resultset count="1">
		<record mod-id="1" record-id="1">
			<field name="Release Date">
				<data>02/20/2007</data>
			</field>
			<field name="Title">
				<data>Title Goes Here</data>
			</field>
			<field name="Content">
				<data>Content Goes Here</data>
			</field>
		</record>
	</resultset>
</fmresultset>
```

The root node in FileMaker’s XML format is called *fmresultset* because it holds a set of results from FileMaker. The first entity inside, called *error*, tells you what error, if any, occurred while fetching data. In this example, the code attribute has a value of 0, meaning there was no error. This error code is very important because it helps you understand what is going wrong when you try talk to FileMaker. 

{{< note >}}
Many parts of a fully complete fmresultset document have been omitted from this sample for simplicity. When you see real results from FileMaker later, you’ll also see all the parts that were left out here. This sample shows only the most important pieces.
{{< /note >}}

Up next is the *metadata* element. Metadata is a geeky word meaning information about the data in the document. In an fmresultset document, the metadata entity includes one *field-definition* element for each field whose data is included. In this example, all three fields in your database are included. The field-definition element includes the name and type of the field.

After the metadata comes the real data. The *resultset* entity holds the data and tells you how many records are included (one in this case). Within the resultset entity, you will find one *record* entity for each record. The record entity in turn holds *field* entities —one for each field. Finally, the *data* entities hold a single value from a field (a repeating field would have more than one data entity, but normally you will have just one data entity per field).

A document with more records would simply have more record entities in its resultset entity. So you can see that this XML format can successfully represent any set of FileMaker records imaginable.

#### Transforming XML

Many first-time XSLT users make the mistake of assuming XSLT is a scripting language. It is not. Others believe XSLT must be about generating text output, like PHP. It is not. Thinking like that will only leave you frustrated as you try to make sense of the errors your XSLT templates are producing.

XSLT is a *tree transformation language*. In one side it reads tree in the form of an XML document. Out the other side comes a new tree, usually as new XML or HTML data. But *inside*, it’s all about trees. The inbound XML is converted into a tree structure in your computer’s memory. The XSLT system then processes this tree, transforming it into a new tree (with new nodes and new branches). Then, once the new tree is fully formed, it is converted into XML or HTML as appropriate.

For this example, you need to create an XSLT template that can transform an fmresultset document into an RSS document. A quick review of both formats makes it pretty clear how to do this, at least conceptually. First you need to produce the rss, channel, title, link, and description nodes. These don’t use any data from the database at all, so you can just hard-code them in your XSLT template. Then you need to create an item entity in the RSS result for each record in the FileMaker resultset. The text and entities inside the RSS item entity come directly from the field and data entities in the FileMaker fmresultset.

But first, you need to get some procedural steps out of the way. It may come as a surprise, but XSLT is in fact just another XML format. Yes, exactly. You create an XML file to transform another XML file into a third XML file. It is all a bit mind-bending if you think about it too much. At any rate, the XSLT file always starts like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet
	version="1.0" 
	exclude-result-prefixes="xsl fmxslt fmrs fmq prop"
	xmlns:fmq="http://www.filemaker.com/xml/query"
	xmlns:fmrs="http://www.filemaker.com/xml/fmresultset"
	xmlns:fmxslt="xalan://com.fmi.xslt.ExtensionFunctions"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:prop="http://www.filemaker.com/xmlproperties">

	<xsl:output encoding="UTF-8" indent="yes" method="xml"/>
```

The first line is simply a requirement. Technically, every XML file should begin with a line like this (and most do). It tells any computer system that cares to look that this file is in fact XML.

Then you come to the root node of an XSLT file. The *xsl:stylesheet* entity wraps up the entire stylesheet. This root node, though, also includes some important information. It declares a flock of namespaces, each with its own prefix. Each of these will be used at some point in the XSLT file. The *exclude-result-prefixes* attribute simply informs XSLT that when it finally produces the output XML, you don’t want it to include these namespace prefixes in the final XML. This just helps to keep the output XML clean and compliant.

{{< note >}}
Unlike the XML samples you have seen before, the xsl:stylesheet entity in this example is split across several lines. This is perfectly legal. Notice that it starts with `<xsl:stylesheet`, but it doesn’t end until the `>` seven lines later.
{{< /note >}}

The `xsl:output` element tells XSLT what format to produce when it is finished transforming. Once the final output tree has been constructed, the XSLT system will *serialize* the data to plain text. The way it does this depends on where you plan to send the result. In this case, you are producing XML output, but sometimes you may choose HTML instead, if you are producing a web page.

Now you’re ready to begin writing the transformation code. XSLT operates by matching *templates* in the XSLT file to nodes in the incoming tree. When a match is found, it is used to produce a portion of the output tree. To kick things off, you need a template that will match just once for the fmresultset document. The code looks like this:

```xml
<xsl:template match="/fmrs:fmresultset">
	<rss version="2.0">
		<channel>
			<title>My Company News</title>
			<link>http://www.mycompnay.com/news/</link>
			<description>News about my company.</description>
			<!-- the items go here -->
		</channel>
	</rss>
</xsl:template>
```
This template (denoted by an *xsl:template* entity) matches the node called `/fmrs:fmresultset` in the incoming XML. `/fmrs:fmresultset` is something called an XPath expression that refers to the root *fmresultset* entity. XPath uses a syntax much like a file path on your computer: it starts with a slash (/) and then the root entity name. You could add another slash, and then the name of some entity inside fmresultset to refer to that entiy. XPath is quite powerful and you’ll see a few more of its syntactic capabilities shortly. But for now, note that this template matches the root fmresultset entity. As such, it will be applied just once (since there is only one fmresulset in the incoming document).

The code inside the xsl:template entity simply defines the sort of output that should be produced. In this case, it is going to output the rss entity and its children. (Notice that the item entities, which need access to FileMaker record data, have not been added yet.) If you were to run this template as is, it would output an RSS file with no items in it. 

Now you need to add those items. This is the point where an experienced developer who is new to XSLT begins to get confused. Many first-timers start by trying something like this:

```xml
<xsl:template match="/fmrs:fmresultset">
	<rss version="2.0">
		<channel>
			<title>My Company News</title>
			<link>http://www.mycompnay.com/news/</link>
			<description>News about my company.</description>
</xsl:template>
<xsl:template 
  match="/fmrs:fmresultset/fmrs:resultset/fmrs:record">
	<item>
	...
	</item>
</xsl:template>
...
```

The thinking goes something like this: The first template matches the begin fmresultset tag, and outputs the top part of the file. Then the second template matches each record, and dumps out an item entity for each one.

But remember that XSLT is *tree-based*. In the tree representation of an XML file above, there is no concept whatsoever of a begin tag or an end tag. So the first assumption is flawed. The first template in this snippet matches the `fmresultset` *node* in the incoming document. That node starts at the top of the file and ends at the bottom. Any notion of a start tag is long gone by the time the XSLT begins to apply templates.

The next flaw in reasoning is the idea that you can “output the top part of the file.” Trees, trees, trees. There is no file. The attempt to output the first part of a file is really an attempt to produce half an rss node and half a channel node (the other halves are at “the bottom of the file”). Because XSLT is tree-based, this concept is nonsensical.  The XSLT system either adds a new node to the output tree or it doesn’t. It can’t add half a node.

To correct this reasoning, you must recognize two facts: First, the template above matches the entire fmresultset node, from top to bottom. There’s no way to match the beginning in one template and the end in another. And second, the content of an xsl:template entity must be fully formed entities. In other words, *any XML entity that is begun in a template **must** be ended in the same template*.

Because of this, XSLT templates aren’t constructed like normal programs. They don’t run form the top to the bottom like a PHP script (or a FileMaker script for that matter). Although there are many ways to write an XSLT stylesheet, they tend to operate form an outside-in perspective when you consider the final output file. You build the root node of the output tree, then add nodes to it, then add more nodes to those nodes. The root node effects both the very top of the output file *and* the very bottom.

A corrected version of this template looks like this:

```xml
<xsl:template match="/fmrs:fmresultset">
	<rss version="2.0">
		<channel>
			<title>My Company News</title>
			<link>http://www.mycompnay.com/news/</link>
			<description>News about my company.</description>
			<xsl:for-each select="./fmrs:resultset/fmrs:record">
				<xsl:call-template name="item"/>
			</xsl:for-each>
		</channel>
	</rss>
</xsl:template>

<xsl:template name="item">
	<item>
	...
	</item>
</xsl:template>
```

In this version, the `xsl:for-each` entity is used to loop through all the record entities in the input document. Another template is *called* for each record. The second template is a named template (it has a name attribute) rather than a template that automatically matches a node in the incoming tree. The result is that the second template will be called once for each record, adding an item node to the output tree each time.

The item template needs to be finished now. This is the first place where you need to access the actual FileMaker data. To refresh your memory, the item entity should look like this in the final document:

```xml
<item>
	<title>A Sample Press Release</title>
	<description>Content goes here</description>
</item>
```

The content of its title element comes from the Title field in FileMaker. Likewise, the description element is fed by the Description field. The field data is simply another node in the incoming tree, in this case the text node inside the data entity. So accessing this information is no different than accessing any other XML entity: you use an XPath expression again. The XPath to access the Title field of the first record would look like this:

```text
/fmrs:fmresultset/fmrs:resultset/fmrs:record[0]/fmrs:field[@name='Title'/fmrs:data/text()
```

That’s a mouthful, so it will help to break it down. The first portion simply uses the path-like notation of XPath to work down the XML structure to the record entities:

```text
/fmrs:fmresultset/fmrs:resultset/fmrs:record
```

The `[0]` at this point simply tells XPath that you expect it to find more than one record entity, and you want just the first one (you would use `[1]` to get the second, and `[2]` to get the third). Then you have another path component to reference the field entity inside the selected record. This time, you see `[@name='Title']`. Again, you expect multiple field entities in a given record, but instead of selecting the one you want by number, you use an attribute value. `@name='Title'` means “select the field entity in this record that has a name attribute with the value ‘Title’.” In other words, get the Title field. As you probably recall, the FileMaker xml format has a data entity inside each field, and the next portion of the path accesses this entity. Finally, the code `text()` tells XPath to extract the text content of the data entity. The end result is the text in the Title field.

But you can actually shorten this expression significantly. Remember that this item template was called inside an `xsl:for-each` loop. XSLT has a notion of context. It knows at what point in the incoming tree you are currently working. The `xsl:for-each` entity loops over a set of nodes in the tree, and sets the context accordingly each time. So when the template is called for the first record, the context will be that record entity. In XPath, a single period (`.`) represents the current node. So the XPath expression to extract the Title field value can be shortened to this:

```text
./fmrs:field[@name="Title"/fmrs:data/text()
```

In other words, “from the current record, find the field entity whose name attribute is “Title” and get the text from its data entity.”

But how do you put this data into the output tree? You use another xsl entity, called `xsl:value-of`. This code produces a valid RSS item entity:

```xml
<item>
	<title>
		<xsl:value-of
			select="./fmrs:field[@name="Title"/
			fmrs:data/text()"/>
	</title>
	<description>
		<xsl:value-of
			select="./fmrs:field[@name="Content"/
			fmrs:data/text()"/>
	</description>
</item>
```

The title and description entities both include content retrieved from the FileMaker data. 

If you put all these parts together, you get an XSLT file that looks like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet
	version="1.0" 
	exclude-result-prefixes="xsl fmxslt fmrs fmq prop"
	xmlns:fmq="http://www.filemaker.com/xml/query"
	xmlns:fmrs="http://www.filemaker.com/xml/fmresultset"
	xmlns:fmxslt="xalan://com.fmi.xslt.ExtensionFunctions"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:prop="http://www.filemaker.com/xmlproperties">

	<xsl:output encoding="UTF-8" indent="yes" method="xml"/>
	
	<xsl:template match="/fmrs:fmresultset">
		<rss version="2.0">
			<channel>
				<title>My Company News</title>
				<link>http://www.mycompnay.com/news/</link>
				<description>News about my company.</description>
				<xsl:for-each select="./fmrs:resultset/fmrs:record">
					<xsl:call-template name="item"/>
				</xsl:for-each>
			</channel>
		</rss>
	</xsl:template>

	<xsl:template name="item">
		<item>
			<title>
				<xsl:value-of select="./fmrs:field[@name='Title']/fmrs:data/text()"/>
			</title>
			<description>
				<xsl:value-of select="./fmrs:field[@name='Content']/fmrs:data/text()"/>
			</description>
		</item>
	</xsl:template>
</xsl:stylesheet>
```

Using a text editor, put this code in a file and call it “pr.xsl” so FileMaker will know it is an XSLT stylesheet. XSLT files need to be stored in a special location on the FileMaker Web Publishing Engine machine in order to be accessible by the XSLT Publishing system. On Windows, the files go here:

```text
C:\Program Files\FileMaker\FileMaker Server\Web Publishing\xslt-template-files\
```

On Mac OS X they go here:

```text
/Library/FileMaker Server/Web Publishing/xslt-template-files/
```

Copy the pr.xsl file to the correct location in your web publishing environment. To access an XSLT file in your web browser, you use a URL like this:

http://yourserver/fmi/xsl/pr.xsl

As with other FileMaker Web Publishing URLs, the `/fmi` part informs your web server that this request should be sent to the Web Publishing Engine, and the `/xsl` part tells FileMaker you’re asking for XSLT Publishing. After the `/fmi/xsl/` part, you simply append the name of your XSLT stylesheet.

{{< note >}}
 If you have a lot of XSLT stylesheets, you can create folders in the xslt-template-files folder, and put your stylesheets in those folders. If you do, the URL changes to this: http://yourserver/fmi/xsl/foldername/filename.xsl. In other words, you need to include the folders in the path.
{{< /note >}}

Also, note that the server name or IP address in this URL must refer to your web server computer.

If you access this URL right now, you will see an error in your browser. An XSLT file like the one you just created cannot be accessed directly by name because FileMaker has no way of knowing which database to fetch data from, which layout to use, and which records to get. There are two ways to give FileMaker what it needs. The first is to include the necessary information in the URL itself. You can also add the required information to the XSLT file itself. You’ll try the URL method first. Revise the URL to look like this:

http://yourserver/fmi/xsl/pr.xsl?-db=Press+Releases&-lay=Press+Releases&-grammar=fmresultset&-findall

This version of the URL includes something called a query string (the part after the question mark) that passes important parameters to FileMaker. The first, `-db=Press+Releases` tells FileMaker to access the Press Releases database. Since spaces are not allowed in URLs, you simply replace the space in the name with a plus sign (+). The next parameter is `-lay=Press+Releases.` This tells FileMaker which layout to use. The layout in turn tells it which table is being accessed, which table occurrence on the Relationship graph to use, and which fields should be included in the result. The next parameter, `-grammar=fmresultset` tells FileMaker that your XSLT file is expecting its data using the fmresultset XML format. FileMaker can actually use a few different XML formats, but you should always use fmresultset unless you have a good reason not to. A final parameter tells FileMaker you want to find every record in the table: `-findall`. Each of these parameters is added to the URL with an ampersand (`&`) in between.

When you visit this revised URL, you should see *something*. If your browser supports RSS directly, you’ll see the data formatted nicely for easy reading (FireFox, Safari, and Internet Explorer 7 all support RSS). If you are using an older browser, you may see just the raw XML output, or even a blank page. You can use the View->Source feature in your browser to see the underlying XML if it can’t display it reasonably. At this point you only need to confirm that the RSS XML was produced properly.

{{< note >}}
If you are using Safari on Mac OS X and have the web publishing environment installed on your local machine, you may bump in to a Safari bug. It sometimes doesn’t like RSS feeds served from localhost. Just use 127.0.0.1 as the server address if your feed is served from the local machine and Safari won’t display it properly.
{{< /note >}}

You can also use an RSS reader program (like NewsGator or NetNewsWire) to access your FileMaker data. Figure 10 shows the data from the FileMaker database in three different programs.

{{< figure
    title="Figure 10"
    src="FIG10-RSS-Feed.png"
    width="880"
    height="582"
    alt="Three windows from three different applications all showing the same RSS feed data. The formatting is different to match the style of each app, but the content is all the same."
    caption="The RSS feed you just created is shown here displayed in three different programs. In the back, the feed is being displayed in the FireFox web browser. In the middle, a news aggregator called NetNewsWire is displaying the feed. In the front, you see the RSS capabilities of the Safari web browser. In every case, the data is the same, but each application provides its own interface and features. This demonstrates the power of XML standards." >}}

It would be more convenient to access your feed if you didn’t have to add the complicated (and always the same) –db, -lay, -grammar, and –findall parameters to the URL every time you visited it. You can update the XSLT stylesheet so it automatically applies each of these values using something called processing instructions. When FileMaker processes the XSLT stylesheet, it reads these instructions to figure out which database to access, and so forth. It is easy to do; just add this line below the `<?xml version="1.0" encoding="UTF-8"?>` line in your XSLT file:

```xml
<?xslt-cwp-query params="-grammar=fmresultset&-db=Press+Releases&-lay=Press+Releases&-findall"?>
```

This processing instruction line includes all the parameters that previously had to be added to the URL. Add this line to your file, save it, and copy it back to the Web Publishing Engine computer. Now you can access your feed with this simple URL:

http://yourserver/fmi/xsl/pr.xsl

This time, FileMaker can access the correct data with no additional parameters.

### Building More Complex XSLT Web Applications

ust like the PHP API, the XSLT Publishing system can do much more than just fetch records and reformat them. Using additional custom URL parameters, you can instruct FileMaker to perform finds, edit records, create new records, run scripts, and more. You’ll learn a little more about FileMaker’s URL syntax in the section on XML Publishing below. You can also refer to the PDF document *FMSA8_Custom_Web_Guide* included on the FileMaker Server Advanced CD-ROM. This file includes comprehensive documentation of all FileMaker’s XSLT Publishing commands.

In fact, if you intend to make heavy use of XSLT Publishing, it will be helpful to read the XML Publishing section for several reasons. Remember that XSLT Publishing is built on top of XML Publishing. Not only does the XML Publishing system help you understand what commands you can use to interact with FileMaker, but examining the output of XML Publishing commands can be an important debugging tool when working with XSLT. At any time, you can enter an XML command in your browser’s location box to see the actual XML produced by FileMaker before the XSLT system begins to process it. This is a necessary step for all but the most trivial XSLT stylesheets.

### The XSLT Site Assistant

Many web-based database systems have very similar functionality. You often need web pages that perform basic operations like listing records, displaying full record details, and editing records. FileMaker Server Advanced includes a tool that can generate a series of XSLT web pages for you based on the structure of your database. This is rarely enough to build your entire site in one step, but it does serve as a good jumping off point when you need to build a complete web site. The tool is called the XSLT Site Assistant, and it can be installed on your development computer from the FileMaker Server Advanced CD-ROM.

Once you have installed the Site Assistant, it is relatively self explanatory. Launch the application and enter the address of your FileMaker Server computer. Select your database, and click Next. The site assistant then presents you with a series of options. Here you tell it what capabilities you want the generated site to have. Figure 11 shows the screen.

{{< figure
    title="Figure 11"
    src="FIG11-Site-Assistant.png"
    width="593"
    height="537"
    alt="The FileMaker Site Assistant window. At the top is says \"Select site features\" and then has many checkboxes including \"View records in a list using fields from layout\" with a layout pop-up menu."
    caption="The FileMaker Site Assistant can create an XSLT-based web site for you. You just tell it what features the site should have." >}}

You simply turn on or off checkboxes as appropriate. The Site Assistant also lets you select which FileMaker layout each web page should be based on. The fields on the selected layout determine what fields will be included on the web pages.

When you’ve finished making selections, click Create. You are prompted for a location to save the generated files, then the Site Assistant goes to work creating custom-crafted XSLT. When it is done, you simply copy the generated files to a folder in the xslt-template-files folder on your Web Publishing Engine computer. Then access the site with the appropriate URL. For example, if you put the files in a folder called “mysite” you could access the site with this URL:

http://myserver/fmi/xsl/mysite/home.xsl

When you do, you’ll see something like Figure 12.

{{< figure
    title="Figure 12"
    src="FIG12-Site-Assistant-Home.png"
    width="749"
    height="575"
    alt="A clean and spare web browser window. It says \"Home\" at the top. Then \"Database Name: Press Releases\". There are three links: \"Find Records\", \"Show All Records\", and \"Add Record\"."
    caption="The home page of a site created with the Site Assistant is not much to look at, but all the functionality is there. Click the links to begin the action you want to take. You’ll find that this site is quite full featured." >}}

{{< warning >}}
It cannot be stressed enough that the Site Assistant is not a learning tool. It is a convenience for building a web site that will have basic database operations. If you want to better understand XSLT, you should read a book or online resource on the topic. The XSLT produced by the Site Assistant is typical of computer-generated code: it is perfectly functional. But it is unnecessarily complex and difficult to learn from. For instance, the Site Assistant assumes every field may be a repeating field, so it adds extra code every time one is displayed to deal with the possibility. You should use the site assistant once you are comfortable with XSLT or if you have no need to make customizations to its generated pages beyond just cosmetics.
{{< /warning >}}

## XML Publishing

The last FileMaker Web Publishing technology is also the least glamorous, at least from an end-user’s perspective. XML Publishing exists only to allow other computer programs to access FileMaker data intelligently. The result is never pretty; rather it simply returns unformatted FileMaker XML.

The real power of the XML Publishing system is what is called a RESTful interface. This just means it uses normal web technologies (URLs, HTTP communication, and XML data) to expose a programming interface. The advantage of such an approach is its broad applicability. Nearly every scripting language or programming environment on earth can speak HTTP and process XML. For example, if you want to access FileMaker data from a Ruby or Perl script, you could easily use the XML Publishing system to do it. The script would create a URL of the correct form, send it to the Web Publishing Engine, and then capture the results.

You’ve already seen the format FileMaker uses to respond to these special requests: it simply returns fmresultset XML documents. All you need to understand is how to send requests. FileMaker’s URL syntax for XML requests is extremely flexible and powerful. You can fetch individual records, perform finds, add, edit, or delete records, run scripts, fetch value lists, find out about databases and layouts, and extract data from container fields.

### XML Publishing Commands

Every URL you send to the XML Publishing system starts off the same way:

http://yourserver/fmi/xml/fmresultset.xml

This beginning tells your web server to talk to the Web Publishing Engine, and tells the Web Publishing Engine that you expect it to send you back XML in the fmresultset format. It is what comes after this portion of the URL that gets the work done. Take this URL for example:

http://yourserver/fmi/xml/fmresultset.xml?-db=my_database&-lay=my_layout&-findall

This URL includes a special parameter, called an action parameter that tells it what kind of action you want it to take. In this case, the URL includes the –findall action. This tells FileMaker you want it to find and return every record in a table. FileMaker supports the following actions:

* `-dbnames` to request the name of every database accessible by XML Publishing
* `-layoutnames` to request the name of every layout in a database
* `-scriptnames` to request the name of every script in a database
* `-new` to create a new record
* `-delete` to delete a record
* `-dup` to duplicate a record
* `-edit` to edit an existing record
* `-find` to find based on criteria
* `-findall` to find every record
* `-findany` to find a single random record
* `-view` to retrieve the data about a table or layout without actually returning any records

### Common URL Parameters

Most of these actions require additional parameters to work properly. For instance, you cannot get layout names from a database without telling FileMaker which database to access. You specify a database using the –db­ parameter. For example:

http://yourserver/fmi/xml/fmresultset.xm?-db=my_database&-layoutnames

This URL would request the names of layouts in a database called “my_database.” Only the `–dbnames` action can be used without specifying a database as well. `–layoutnames` and `–scriptnames` both require only a database name.

Every other action requires both a database and a layout. The layout is specified using the `–lay` parameter. The layout specification is more important than it may seem at first. Just as in a FileMaker script, the layout gives FileMaker its context. Once you have selected a layout, FileMaker knows which table it needs to work with. If you include related data, FileMaker knows where to start in the Relationship graph by determining which Table Occurrence is associated with the selected layout. Finally, when FileMaker gathers field data to return, it includes only the fields on the chosen layout.

Any action that specifically targets a single record must have the record specified by internal record id using the `–recid` parameter. For example, this URL will delete a record:

http://myserver/fmi/xml/fmresultset.xml?-db=my_database&-lay=my_layout&-recid=1234&-delete

This URL instructs FileMaker to delete the record whose ID is 1234. It is important to note that this is not the value in an ID field in the database. Rather, it refers to an ID FileMaker uses internally to refer to the record. You can discover the ID of any given record by inspecting the `record-id` attribute of the record in the fmresultset XML data.

If the command being sent to FileMaker needs to include field data, you simply add parameters, each matching a field name. For example, to change the First Name field of a particular record to “Steve” you could use this command:

http://myserver/fmi/xml/fmresultset.xml?-db=my_database&-lay=my_layout&-recid=1234&First+Name=Steve&-edit

Notice that this URL uses the `–edit` action parameter, which tells FileMaker to edit a record. It also specified which record to edit using `–recid`. This URL includes a parameter called “First+Name.” This parameter must match the name of a field in the database. (Again, because URLs can’t have spaces, the space in the field name has been replaced with a plus sign. The actual field is still called “First Name.”)

You use this same field name technique to perform find requests:

http://myserver/fmi/xml/fmresultset.xml?-db=my_database&-lay=my_layout&First+Name=Mary&-find

The above URL tells FileMaker to find every record with Mary in the First Name field.

### Additional Parameters

The parameters explained above provide a huge amount of capability. But XML Publishing includes a lot of additional parameters for more specialized purposes. They include:

* Parameters to limit the number of record returned in one request (`-max`) and to page through a found set (`-skip`).

* Parameters to control how find requests are processed. This includes performing *or* versus *and* searches (`-lop`) and using special find operators for *exact match*, *less than*, *greater than*, and so forth (`fieldname.op=`).

* Parameters to execute scripts (`-script`, `-script.prefind`, `-script.presort`) and pass parameters to them (`-script.param`, etc…).

* Parameters to control record sorting (`-sortfield`, `-sortorder`).

By combining parameters, you can get exactly the results you want from the XML Publishing system.

### Interpreting Errors

Because the XML Publishing commands are flexible and require a lot of careful typing, it is easy to make mistakes. When you do, FileMaker will return an XML response that includes an error code. Proper interpretation of this code can save you hours of troubleshooting.

{{< tip >}}
Interpreting the XML results in any way requires that you be able to see it. Most web browsers will display the XML results of an action nicely formatted in the browser window. The notable exception is Safari on Mac OS X, which (somewhat correctly) displays nothing since the XML has no style information with it. If you do your XML Publishing development on a Mac, do yourself a favor and download FireFox for testing.
{{< /tip >}}

You can look up the error code in the FileMaker help system (look for the entry about the `Get(LastError)` function for a complete list). Alternately, you can google “FileMaker Error ###” where ### is the exact error number, and almost always find a brief explanation of the problem. Unfortunately, the explanation of an error code is not always obviously helpful. Some common errors and their causes are shown below.

* Error #4 (Comand is Unknown) or #5 (Command is invalid): This error usually means you mis-typed your action parameter. Every URL you send to FileMaker must include one of the action parameters described above (`-new`, `-edit`, `-find`, and so on).

* Error #-1 (Unknown): This error sometimes comes back when you forget to include a database (`-db`). 

* Error #958 (Parameter Missing): This usually means you did not specify a layout or database or forgot to specify an action.

* Error #802 (Unable to Open File): This usually means you have mis-typed the database name, the database is not open on the FileMaker Server, or the database does not have the “Access via XML Publishing” custom privilege enabled.

* Error #102 (Missing Field): This error crops up a lot. Inevitably, you have specified a field in the URL that is not on the target layout, or you have mis-typed the field’s name. A particularly pernicious cause is a field whose name in FileMaker ends with a space: invisible in FileMaker but important in the URL.

## Conclusion

If you are new to web development in general, web publishing in any form can seem overwhelming. But FileMaker has a web publishing option that is suitable for just about any need. With a little practice with HTML, plus XSLT or PHP, you can build very powerful web sites and services that interact directly with your FileMaker database. Once you get started, it is hard to stop: web publishing is so powerful you’re sure to get hooked.
