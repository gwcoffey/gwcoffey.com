---
title: "Configuring Firewall Ports for FileMaker 9"
date: 2007-07-27
archive: sfr
---

{{< ed `This was the most popular post on Six Fried Rice by far. The diagram I made was translated into French and Japanese by community members (with permission) and passed around for years.`>}}

FileMaker Server 9 represents a pretty significant redesign of the FileMaker Server product line. One consequence of all the changes is that things may not work properly without reconfiguring your [firewall(s)][fire]. Improper firewall configuration can lead to all kinds of problems, some obvious (I can’t connect to my server) and some not-so-obvious (the Server Admin Console opens, and then hangs). This article attempts to explain in full detail exactly how each participant in the FileMaker ecosystem communicates, so you can jump right past these problems and get to developing awesome databases.

[fire]: https://en.wikipedia.org/wiki/Firewall_(computing)

{{<note>}}
Before we dive in, if you’re wondering what all this Firewall stuff does, exactly (what *is* a port number, after all?), there’s a quick introduction to firewalls at the end of this article. [Click here](#a-brief-introduction-to-firewalls) to scroll down to it. Then, when you’re done, scroll back up here and carry on with the article.
{{</note>}}

## The Big Picture

A picture’s worth a thousand words, so before we get into the details, here’s a birds-eye view of the FileMaker Server landscape:

{{< figure src="filemaker_ports_rev_c.png" 
           width="1830"
           height="1917"
           alt="A complex block diagram showing six server components, six client components, arrows indicating which components talk to each other, and the port numbers involved."
           caption="FileMaker's network communication landscape has become quite complex. This diagram shows what talks to what, on what ports, and why.">}}

You can also download a high-quality PDF version of the diagram:

* [In English](filemaker_ports_rev_c_en.pdf)
* [In French](filemaker_ports_rev_c_fr.pdf) (courtesy of Informatique Direct Impact inc.)
* [In Japanese](filemaker_ports_rev_c_jp.pdf) (courtesy of [Splash Inc.](http://www.splash.jp/))

{{<note>}}
Thanks to Eric Jacobson at FileMaker, Inc. for reviewing and correcting this diagram.
{{</note>}}

This picture shows all the parts your FileMaker setup might include, along with the important lines of communication and critical port numbers. On the bright side, you probably don’t have *all* these pieces, and you almost certainly don’t have a firewall between each of the parts you *do* have.

## Figuring out What to Configure

In order for things to work smoothly, you need to open the right ports in your firewall. The task is relatively deterministic:

1. Identify which of the components listed below are present on your network.
2. Figure out which of your components are separated by a firewall.
3. Look to see if any component on your list listens to a component on the other side of a firewall. (You can see who listens to whom below). Note which port numbers the *listening* component uses.
4. Open the port numbers on your list in the firewall.

Chances are good your firewall setup falls into one of two categories:

* **You have a firewall running on each computer.** If this is the case, pay attention to which components are running on different computers. Any time a component on one computer listens to a component on another computer, you need to open up the right port on the first computer.
* **You have one network firewall running between the server computer(s) and the client computer(s).** In this case, you’re only concerned with components on the client side of things that talk to components on the server side. Configure your firewall so that server side components can listen to their clients on the ports listed below.

{{<tip>}}
When I worked at a real company, I never really had to worry about all this. I had a *Drew* who took care of all the network configuration. If you have a Drew (or Drucilla) too, just print out this article and give it to them. They’ll skip right to the details below and get things working in no time flat.
{{</tip>}}

## The Gory Details

Without further ado, here are all the relevant parts, complete with firewally port information.


### The FileMaker Database Server

This is the heart of your FileMaker setup. It’s the thing that actually serves your databases. On windows, it’s the FileMaker Server and FileMaker Server Helper services. On Mac OS X, this is the fmserverd and fmshelper daemons.

Listens to…

* **5003**: FileMaker Pro clients and the Web Publishing Engine retrieve data
* **5353**: FileMaker Pro clients discover “local hosts”
* **2399**: ODBC and JDBC clients (like Microsoft Excel) fetch data
* **16000**: Your web browser and the Web Publishing Engine fetch server configuration information
* **16001**: The Server Admin Console configures the database server

{{<note>}}
The Server Admin Console is loaded form a web page, but *it runs on your computer*, not the server.
{{</note>}}

### The Web Publishing Engine

This component can be installed on the same machine as the database server, or the same machine as the web server, or on its own machine. It provides FileMaker’s web publishing capabilities, including Instant Web Publishing, and Custom Web Publishing with XML and XSLT. Also note that PHP code talks to the Web Publishing Engine through its XML interface.

Listens to…

* **16000 and 16004 through 16018**: The web server (Apache or IIS) sends web requests and receives responses


### The Web Server

When you install FileMaker Server, it integrates with your web server (IIS on Windows, and Apache on Mac OS X). The web server continues to handle basic pages, images, etc… But when it receives requests for FileMaker content (like Instant Web Publishing pages) it forwards those requests on to the Web Publishing Engine.

Listens to…

* **80**: Normal web requests from a browser, and PHP API connections
* **443**: Secure (HTTPS) web requests from a browser

{{<warning>}}
Unlike most of the components in a FileMaker setup, your web server can easily be configured to listen on any port or ports. Your particular server may deviate from the ports listed above.
{{</warning>}}

### MySQL, Microsoft SQL Server, and Oracle

If you’re using the new [External SQL Sources](http://sixfriedrice.com/wp/getting-started-with-external-sql-sources/) feature in FileMaker 9, your FileMaker Server needs to talk to the SQL database. You only need to concern yourself with the ports for the SQL database(s) you’re using.

Listens to…

* **3306**: MySQL ODBC connections form the FileMaker database server.
* **1433**: Microsoft SQL Server ODBC connections form the FileMaker database server.

{{<note>}}
If you use Oracle, you’ll need to consult your DBA or documentation. Oracle’s network ports can vary.
{{</note>}}


### FileMaker Pro

If you use FileMaker Pro’s peer-to-peer database sharing system, then the *host* computer listens to each *guest* computer. A FileMaker Pro host may also serve up Instant Web Publishing and ODBC connections.

Listens to…

* **5003**: Guests retrieve data.
* **80**: Instant Web Publishing clients fetch web data.
* **591**: You may be using Instant Web Publishing on this alternate port.
* **2399**: ODBC clients (like Microsoft Excel) connect to FileMaker.


## A Brief Introduction to Firewalls

Before we get ahead of ourselves, it might help to explain what a firewall does, exactly. If your idea of a little light reading comes in a Cisco box, feel free to skip thid section.

You can have lots of programs on your server that provide network services. For example, in addition to FileMaker, your FileMaker server computer may have any (or all) of these:

* A file server, so you can copy files to and from its hard drive from your desktop.
* A remote control server so you can administer the computer from another machine.
* A web server, so you can publish web pages on the company intranet.
* An SSH server so you can log in to the computer’s command line.
* And dozens more…

Whenever you connect to the server, it needs to know which of these services you’re trying to use. To facilitate this need, the network system has a concept called *ports*. Each service *listens* on a particular port. When you connect to the server, the program you’re connecting with knows which port to use, so it winds up talking to the right service on the other end. Ports are numbered, from zero to 65,535. So a server might listen on port 80, for instance, or port 24601.

How about an example? When you open your web browser and point it at, say, www.yahoo.com, it automatically connects to the Yahoo server on port 80. That’s because 80 is the *standard* web port. That same Yahoo server might run all kinds of other services, but only the web service hears people who talk on port 80.

{{<note>}}
Just because 80 is the standard port for normal web traffic doesn’t mean it’s the only one you can use. If you’ve ever seen a web address with a colon (:) in it, you’ve seen a web server using a non-standard port number. For example, the url `http://ec2.sixfriedrice.com:3000/` tells your browser to connect to port number 3000 instead of the more typical port 80.
{{</note>}}

Any program on a computer can listen on any port it wants (with a few irrelevant restrictions). But you don’t want something listening when it shouldn’t be (like a spyware program). In business, the concern is even greater. A simple software install on one computer could allow bad guys to access a computer in the office, and from there, the entire company network could be at risk. For these reasons, computers and networks use a *firewall* to restrict access to most network ports. The firewall sits at the front door to your computer like one of those bouncers at the uber-cool night clubs I’ve heard exist somewhere. When network traffic tries to find its way in to your computer, it is promptly turned away unless it’s on *the list*. Now, no matter how hard you try (or a piece of unruly software tries), you can’t get your computer to listen on a port that isn’t specifically allowed by the firewall.

Trouble arises when you *need* server software (like FileMaker Server) to work. Not only do you have to wade through the 11 clicks it takes to get FileMaker installed. Now you have to tell your firewall system about it to. In particular, you have to allow a handful of important ports so the different parts can talk to one another *through* the firewall.

This is harder than it sounds because a FileMaker setup may have a lot of parts, and you have to know which parts talk to which other parts from where and on what ports to make sense of it all.

If you have your own port configuration tips, please leave us a comment below. And good luck configuring.

[Back to the top](#the-big-picture)
