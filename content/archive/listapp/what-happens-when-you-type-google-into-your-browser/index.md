---
title: What Happens When You Type "Google" Into Your Browser
date: '2016-05-27T05:28:19+00:00'
archive: listapp
tags: 
  - Archive Post
likeCount: 30
relistCount: 5
---

Leaving out all the low level detail here because otherwise this would have 26,000 items.

<!--more-->

{{< listapp/list order=true reverse=false >}}

   {{< listapp/item title="As you type your web browser consults a list it maintains of recently and frequently visited URLs and offers them as choices. It refreshes  the list with each keystroke."
      desc="You type \"google\"." >}}

   {{< listapp/item title="Before you press enter your browser has guessed that you mean \"http://google.com/\"." >}}

   {{< listapp/item title="It parses this URL according to a publicly defined internet standard."
      desc="RFC 1738 written by the great Tim Berners Lee. And others." >}}

   {{< listapp/item title="From the URL it extracts the hostname, which is \"google.com\"." >}}

   {{< listapp/item title="The browser then asks the operating system for the Internet address of \"google.com\"." >}}

   {{< listapp/item title="The operating system consults its local list of hostnames in case you have it directly mapped."
      desc="Details vary by type of computer but many computers still use the file format specified in RFC 952 for this local list." >}}

   {{< listapp/item title="You don't so it consults its cache of recently resolved hostnames in case you've accessed Google very recently." >}}

   {{< listapp/item title="You haven't so it makes a network connection to a Domain Name Server (DNS) provided by your internet provider or employer using an address your computer already knows. It asks the DNS for information about \"google.com\"." >}}

   {{< listapp/item title="The DNS checks to see if it is in charge of \"google.com\". It is not." >}}

   {{< listapp/item title="The DNS then consults its local cache in case someone who uses it has queried \"google.com\" recently. It is careful to only hold on to a record as long as appropriate according to another publicly defined standard. It does not find \"google.com\"."
      desc="RFC 1034" >}}

   {{< listapp/item title="The DNS opens a network connection to another special DNS called a \"Root Name Server\" using one of 13 globally defined addresses reserved for these servers. It asks the root name server for information about \"google.com\"." >}}

   {{< listapp/item title="The root name server is the ultimate authority and it has a record of all authoritative name servers for all 1,000ish top level domains (.com, .org. .uk, etc...). It responds with a record including the address of the authoritative name server for all \".com\" hostnames." >}}

   {{< listapp/item title="Your DNS server then opens a network connection to the authoritative name server for \".com\" and asks it for information about \"google.com\"." >}}

   {{< listapp/item title="The \".com\" authoritative name server knows the address of every authoritative name server for any \".com\" domain, including \"google.com\" so it responds with that address." >}}

   {{< listapp/item title="Your DNS then opens a network connection to Google's authoritative name server and asks it for information about the hostname \"google.com\"."
      desc="In this case the hostname happens to be exactly the same as the domain name but that is not strictly necessary. It might be \"www.google.com\" for instance. So your DNS must ask the \"google.com\" domain's name server what address is associated with \"google.com\" the hostname." >}}

   {{< listapp/item title="Google's name server responds with a record including the address(es) of their Google web site infrastructure." >}}

   {{< listapp/item title="Your DNS passes this information back to your computer operating system."
      desc="It also records this information in case you or someone else asks again in the near future." >}}

   {{< listapp/item title="Your computer operating system processes the information and extracts the address, then passes this back to your web browser." >}}

   {{< listapp/item title="Having discovered that \"google.com\" is indeed a valid hostname your browser concludes that it's guess that when you said \"google\" you meant \"http://google.com/\" was correct. It then opens two connections to the address associated with google.com." >}}

   {{< listapp/item title="The first is to fetch Google's \"favicon\" which is the icon that shows by the address, in the tab, and in any bookmarks. If this icon exists at any of a handful of known locations it will be downloaded." >}}

   {{< listapp/item title="The second is to fetch the actual document representing Google's home page."
      desc="This document is written using the HTML standard (RFC 1866 written by Tim Berners Lee, with many additional / superseding standards)." >}}

   {{< listapp/item title="It makes both these requests using the publicly defined \"HTTP\" standard."
      desc="RFC 2616, also written by Tim Berners Lee." >}}

   {{< listapp/item title="Due to the nature of networking the document may be delivered in chunks. Your browser will begin processing the first chunks while still downloading the later chunks." >}}

   {{< listapp/item title="[somewhere around this time you press Enter on your keyboard]" >}}

   {{< listapp/item title="Your browser analyzes the HTML content looking for references to additional resources (pictures, fonts, style information, etc...)" >}}

   {{< listapp/item title="It discovers a reference to the style sheet that governs the design of Google in the form of another URL. It begins downloading this document. The document is written in the publicly defined CSS standard."
      desc="As defined by the World Wide Web Consortium, aka the W3C." >}}

   {{< listapp/item title="The browser also discovers a reference to a document defining behavior of Google's web site. It is written in the publicly defined JavaScript standard."
      desc="Originally created by Mozilla (nee Netscape) but now owned by the W3C." >}}

   {{< listapp/item title="Finally it discovers a reference to an image and begins downloading it. The image is encoded in the publicly defined PNG format."
      desc="RFC 2083." >}}

   {{< listapp/item title="The browser has now finished processing the HTML document, which defines the overall structure of the web page. It builds its own internal representation of the page with an understanding of the publicly defined standard Document Object Model (the DOM)."
      desc="As defined by the W3C." >}}

   {{< listapp/item title="It processes the CSS style sheet. Following the rules therein, it determines the layout of the elements in its representation of the page." >}}

   {{< listapp/item title="Meanwhile it is analyzing the JavaScript document. As instructed by this program, it may manipulate portions of the page. For instance it records information about your computer, places the text insertion point into the search box, and highlights the search box." >}}

   {{< listapp/item title="It then \"renders\" the page elements according to that layout, forming a visual page." >}}

   {{< listapp/item title="Some elements include reference to the image file previously downloaded (the logo, icons, etc...). Portions of the image are displayed in the appropriate places on the rendered page."
      desc="Most web pages include many images, all downloaded individually. But Google is hyper-optimized and only downloads a single picture which is repurposed for every logo/icon you see on the page." >}}

   {{< listapp/item title="The page (or a portion thereof) is then displayed on your computer or phone screen, and you are ready to search." >}}

   {{< listapp/item title="Your browser then makes its best guess about what links you are likely to click on this page and downloads the HTML documents associated with those links. It processes them, their CSS and possibly JavaScript, and prepares its internal representation of those pages."
      desc="This way if you do click the link, the page can appear more quickly." >}}

   {{< listapp/item title="At this point you realize you actually wanted Facebook so you type that instead. Your computer never complains. It just does it all over again." >}}

{{< /listapp/list >}}
