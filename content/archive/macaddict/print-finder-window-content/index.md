---
title: Print Finder Window Content
date: '2004-02-01'
archive: macaddict
tags: 
  - Archive Post
---

One thing we miss about Mac OS 9 is the ability to print Finder window content for media archival purposes. Sure, you could select all items in a Finder window, copy them, and then paste the data into a text editor, but you'd wind up with a chaotic list of file names with no order. Fortunately, Unix can take organization up a notch. Using the Terminal, you can create a file that lists a folder's contents, which you can then edit and print.

{{< aside title="What you need" >}}
* Mac OS 10.2 or later ($129, www.apple.com)
* BSD subsystem installed (part of the Mac OS X standard installation)
{{< /aside >}}


{{< figure
	src="figure-1.jpg"
	width="1788"
	height="782"
	alt="Two overlapping TextEdit windows. One is titled \"Simple Song List\" and shows a sipmle list of file names. The second is called \"Full Song List\" and shows the same list of files, with columns for file size, modification date, and permissions."
	caption="Need a printout of a folder's contents? Choose a names list (left) or full file stats (right), and use the Terminal to create a printable file." >}}
	
## Step 1: Make the List

If you just want file names, type `ls` in the Terminal window after the prompt. If you want file names, sizes, and dates, type `ls -lhTR`. The `-l` flag lists the results in long format (including file sizes, owners, and times), the `-h` flag displays file sizes in meaningful units (like 253KB) rather than bytes (259072) . The `-T` flag displays the complete time info, and the `-R` flag lists subfolder contents. Type a space and then drag the desired folder from a Finder window into the Terminal window to display its path.

{{< figure
	src="figure-2.jpg"
	width="1500"
	height="168"
	alt="A terminal window with this command entered: \"ls -lhTR /Users/gwcoffey/Documents\"."
	caption="You can list just file names—type `ls` (or `ls -R` to include subfolder contents)—or get detailed information." >}}

## Step 2: Create the File

To output the results in a text file, type a right-facing arrow `>`, a space, a quotation
mark `"`, a name for your file with a `.txt` extension, and another quotation mark. (For example, `>"File Listing.txt"`.) Press {{< kbd char="Return" >}} to create a file. This gets stored in your Home folder by default if you haven't changed directories since launching the Terminal. You can then open this file using any word processor, edit and print it.

{{< figure
	src="figure-3.jpg"
	width="1148"
	height="292"
	alt="A text file showing the list of files and their information (similar to the first figure above)."
	caption="With full stats, you see names, owners, sizes, dates, and more." >}}

