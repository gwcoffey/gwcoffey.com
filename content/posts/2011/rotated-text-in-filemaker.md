---
title: "Rotated Text in FileMaker"
date: 2011-03-04
archive: posterous
---

Matt asked if there was a way to show askew text on a FileMaker layout. (Rotated something other than 90°.) You can't do this directly with the text object, but you can get the same effect using a web view with HTML + CSS.

Here's an example HTML snippet:

```
<html>
<body>
<h1 style="font-family: Georgia; font-size: 20px; -webkit-transform: rotate(-3deg);">
   Matt Petrowsky
</h1>
</body>
</html>
```

To embed this in a web view, use a data url (which can be the result of a calculation):

```
"data:text/html,%3Chtml%3E%3Cbody%3E%3Ch1%20style%3D%22font-family%3A%20Georgia%3B%20font-size%3A%2020px%3B%20-webkit-transform%3A%20rotate%28-3deg%29%3B%22%" & Person::Name & "%3C%2Fh1%3E%3C%2Fbody%3E%3C%2Fhtml%3E"
```

Hope this helps!