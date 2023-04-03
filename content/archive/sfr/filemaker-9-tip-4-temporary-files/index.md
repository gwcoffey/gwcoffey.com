---
title: "FileMaker 9 Tip #4: Temporary Files"
date: 2007-07-10
archive: sfr
tags: 
  - Archive Post
---

There comes a time in every FileMaker developer’s life when they need to export a file *temporarily*. Maybe you’re exporting records only to import them right back in again later. Or perhaps your creating a PDF file that you *only* want to email to someone.

And with this need comes an eternal question: Where should you *put* it?

Finally, in FileMaker 9, we have an answer.

In fact, every modern operating system provides a perfect place for this sort of thing: The so-called “temp folder.” This special folder has a few powers that make it an ideal candidate:

1. It is always there, so you never have to worry that your user might not have one.
2. A user on the computer can *always* write to his temp folder. There’s no need to stress about permissions problems. Also, the temp folder *can’t* be seen by any other user, so it’s secure.
3. Best of all, files in the temp folder are automatically deleted whenever the computer restarts.

The temp folder is nothing new. It’s been right there on your Windows or Mac OS X computer from the very beginning. But it isn’t always in the same place, and it can be tough to find inside a FileMaker script.

FileMaker 9 works around this problem with a new calculation function: `Get(TemporaryPath)`. This function figures out where the best temp folder is on the computer FileMaker’s running on and returns its path, ready to use in a variable-based export.

Here’s an example. Normally, you can’t “open” a file stored in a container field. FileMaker only lets you open the file directly if you’ve stored a *reference* to the file in the container. Here’s a script that works around this limitation. It exports the file to the temp folder, then imports a reference to it into a global. Finally, it tells FileMaker to open the temporary file. 

```
Set Variable [ $path; Get(TemporaryPath) & “my_temporary_file.jpg” ]
Export Field Content [ My Container Field; $path ]
Insert File [ Reference; My Global Container, $path ]
Go to Field [ Select/perform; My Global Container ]
```