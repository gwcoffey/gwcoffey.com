---
title: "Lost Connection to MySQL Server During Query When Dumping Table"
date: 2011-04-20
archive: posterous
---

I've seen this error a time or two. It happens sometimes when I dump/load a database to copy it on the same server. Today I decided to fix it on my development machine. These entries in my my.cnf did the trick:

```
wait_timeout=600
connect_timeout=60
net_read_timeout=120
net_write_timeout=120
```

I honestly don't know which specific timeout was the problem. I increased every timeout that seemed relevant. Anybody know a more definitive answer?

