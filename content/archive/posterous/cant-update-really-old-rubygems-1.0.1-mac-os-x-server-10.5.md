---
title: "Can't Update Really Old Rubygems 1.0.1 on Mac OS X Server 10.5"
date: 2010-08-26
archive: posterous
tags: 
  - Archive Post
---

I was trying to do a rails deployment on a Mac OS X Server 10.5 machine tonight and hit a gem error I've never seen before:

```shell
sh-3.2# gem install [whatever]
ERROR:  While executing gem ... (Gem::RemoteSourceException)
    HTTP Response 302 fetching http://gems.rubyforge.org/yaml
```

No problem, says I.

Just need a quick gem system update:

```shell
sh-3.2# gem update --system
ERROR:  While executing gem ... (Gem::RemoteSourceException)
    HTTP Response 302 fetching http://gems.rubyforge.org/yaml
```
    
Blast.

Google was no help. So I decided to work around the problem. First I had to figure out where rubyforge was redirecting. Right now it is Amazon S3. Specifically:

http://production.s3.rubygems.org/

Then I just had to download the update gem and apply it manually:

```shell
gem install rubygems-update --source http://production.s3.rubygems.org/
update_rubygems
```

And now I have a recent, working rubygems. I leave this here so the rest of you can stop at the Google part.