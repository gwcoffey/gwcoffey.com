---
title: "Recovering Partial Files from a Damaged ZIP on Mac OS X"
date: 2011-12-04
archive: posterous
---

Well, call me stupid, but I set up some periodic database backups using ZIP. Unfortunately, the normal (non-64-bit) ZIP file format can't handle input files over 4GB (even if the output ZIP file is much smaller).

## The Problem

My cron jobs began failing when one of my databases grew over 4GB, but I didn't notice because ZIP files were still being created on schedule. Alas they were truncated files that couldn't actually be unzipped.

The `unzip` command line tool reports: 

```
 Archive:  {my file}
  End-of-central-directory signature not found.  Either this file
  is not a zipfile, or it constitutes one disk of a multi-part
  archive.  In the latter case the central directory and zip file
  comment will be found on the last disk(s) of this archive.
unzip:  cannot find zipfile directory in one of {my file} or
        {my file}.zip, and cannot find {my_file}.ZIP, period.
```

The `unzip -F` and `unzip -FF` fix operations both failed to do anything with the file. (I *think* they just toss out bad files within the zip. Since this zip contained only one huge file, they were no help.) Blast.

Sometimes the Mac OS X Archive Utility app (the thing that runs out of the box when you double-click a ZIP file in the Finder) does a better job with messed up ZIP files than the command line tool, so I gave it a try. After working for maybe 30 seconds (on Mac OS X Lion), it reported:

```
Unable to expand "{my file}" into "{my folder}".
(Error 2 - No such file or directory.)
```

Oddly, on Mac OS X Snow Leopard, the message was slightly different::

```
Unable to expand "{my file}" into "{my folder}".
(Error 1 - Operation not permitted.)
```

## The Solution

The thing is, even though my file was truncated, I knew enough about ZIP to know some of my data was in there. Since my database dump file was about 4.00001 GB of plain text, I was actually pretty sure **most** of my data was in there in a usable form. Alas, a little googling didn't turn up any tools for Mac OS X that claimed to be able to extract partial data from a bum ZIP file.

But the fact that the Archive Utiltiy spent so much time before failing made me reasonably confident that it was actually unzipping most of my data before giving up. It must be storing that temporary data somewhere…

After a little digging (some guessing based on what I know about Mac OS X plus a few repeated runs and some monitoring with ls and grep) I zeroed in on its temporary file, which lives in a `Cleanup At Startup` folder somewhere in `/var/folders`. This temp file grows gradually while the unzip operation is in progress, and then disappears before the error dialog box is displayed.

On my computer this folder is here:

```
/var/folders/fc/fwtmk8jn7fs4pb3hvb_p78j40000gn/T/Cleanup At Startup
```

But I'm pretty sure all that junk is semi-random and you sometimes have more than one, so you'll have to dig for yours. It is somewhere under `/var/folders`, and this command should turn it up:

```
sudo find /var/folders -name 'Cleanup At Startup'
```

Your goal is simply to copy the temp file to a new location after it is mostly written, but before Archive Utility deletes it. To buy yourself some time, you can suspend the Archive Utility process before it deletes the temp file. Just start the unzip, then find its pid with:

```
ps ax | grep Archive
```

And then, right before it is finished, suspend it with:

```
kill -STOP {pid}
```

Then, while it is suspended, find its temp file and copy it somewhere else. The temp file will be big (nearly 4GB) with a very recent timestamp, somewhere in one of those {{< samp "Cleanup At Startup" >}} folders.

(After you've started the file copying, you can just force-quite Archive Utility. If you really want to resume it so it can fail on its own, use `kill -START {pid}`)

After this hackery, I had a nearly-complete database dump file that I could restore, then patch up. 

{{< note >}}
Note: This process won't work if the file inside your ZIP isn't truncatable. For instance, my file was plain text, so in the worst case, it was just cut off a bit before the end. If this had been a word file, or a JPEG, or something else, the extracted data would most likely fail to open.
{{< /note >}}
