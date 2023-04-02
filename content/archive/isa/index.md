---
title: Isabel Photosite
date: 1998-07-10
archive: isa
icon: old-gwcoffey
archiveSection: true
---

This was my first "personal" site. In 1998 when Isabel was born, I built a small site to share baby photos with family around the country. This of course predates things like Facebook, Instagram, etc… The photos are tiny and low quality because we were all using dialup at the time. This was a fun personal project that gave me a chance to demonstrate to family members what I did for a living.

The site was originally hosted at `http://coffey.nu/isa`. The web server was [WebSTAR][webstar], an HTTP server for classic Mac OS that supported an AppleScript ACGI interface. Pages were dynamically generated in AppleScript on the server side using data stored in a FileMaker Pro database. Internet hosting was provided by [AMUG, the Arizona Macintosh Users Group][amug].

While I could add new photo *metadata* via the web interface, I had to upload the photos themselves manually using FTP. File upload was added to the HTML spec a year earlier in HTML 3.2, but I didn't yet know how to use it. Instead I ran the [Rumpus][rumpus] FTP server for classic Mac OS so I could copy files directly to the server.

This archive is a static copy based on the original templates and data. (And as such the admin functions to manage and post photos no longer work.)

{{< archive/sitelink href="./site" >}}Enter the Site{{< /archive/sitelink >}}

[webstar]: https://en.wikipedia.org/wiki/WebSTAR
[rumpus]: https://www.maxum.com/Rumpus/
[amug]: https://amug.org