---
title: "HTTP Parse Error / Bad Request Line"
date: 2012-06-21
archive: posterous
---

Yeah I know. You're getting this:

```text
21-Jun-2012  5:40 PM: HTTP parse error, malformed request (127.0.0.1): #<Mongrel::HttpParserError: Invalid HTTP format, parsing fails.>
21-Jun-2012  5:40 PM: REQUEST DATA: "\026\003\000\000A\001\000\000=\003\000Oã¿\000\001hìÍëÂZd^h9\216\247áKP
\224\000\nZQ\264ZÃ¦Jü���/\000\005\000\004\0005\000\n\0002\0003\0008\0009
\000\026\000\023\001\000"
```

Or maybe this:

```text
[2012-06-21 17:40:18] ERROR bad Request-Line `\026\003\001\000\001\000\000\003\001Oã¾òîË~w"T9ÙëänÓXÊ¡Ë;±©\037Ì"ç¦ \003\031Q\000\0006À'.
[2012-06-21 17:40:18] ERROR bad Request-Line `\026\003\000\000A\001\000\000=\003\000Oã¾òI~1WjZ@Õ¸+\006´\017mhøÍ¥'ú]��\026\000/\000\005\000\004\0005\000'.
```

And you have no idea why. And it is driving you crazy. I got you…

You meant `HTTP` not `HTTPS`.