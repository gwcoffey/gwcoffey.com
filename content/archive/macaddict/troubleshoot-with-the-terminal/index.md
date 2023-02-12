---
title: Troubleshoot with the Terminal
date: '2004-02-01'
archive: macaddict
---

Apple's accomplished the impossible with AMac OS X: It's created an operating system that geeks, grandmas, creative types, business-minded peeps, and even kindergartners can love. And not only does it offer a user-friendly and stylish graphical interface, but it's got Unix at its core. While a productive Mac-head need not care a whit about Unix, that's not to say a little Unix can't come in handy.

When a Mac quick-fix eludes you, the Terminal-OS X's handy portal to its Unix side- can save the day. Here are three dilemmas you may encounter, and how to use the Terminal to circumvent them. Fire up the Terminal (in Applications >Utilities), put on your propeller beanie, and dive in!

## Back Everything Up

{{< aside title="What you need" >}}
* Mac OS 10.2 or later ($129, www.apple.com)
* BSD subsystem installed (part of the Mac OS X standard installation)
* Administrator access
* Storage medium (such as a CD-R, DVD-R, or external hard drive)
{{< /aside >}}

Hard drives are not fail-safe, and you should know by now that backing up is the best advice anyone can offer. But if you try backing up your whole hard drive in the Finder (so you don't have to reinstall all of your apps, retweak preferences, and whatnot), you'll discover something else: Copying it doesn't work. The trouble is with permissions. When you copy a regular file in the Finder, you own the new file-no matter how the original was set. But your Mac contains files (such as system files) that you can't read or copy, and if you share your Mac, you can't access other users' files. With the Terminal, you can sidestep both of these limitations.

{{< figure
	src="figure-1.jpg"
	width="1130"
	height="706"
	alt="A screenshot the Finder Copy alert with an error message: \"The item Gizmo contains one or more items you cannot read. Do you want to dopy the items you can read?\""
	caption="Backing up your startup disk can be a real drag—literally. Our drag- and-drop method allows easy backups without pesky permissions problems." >}}

### Step 1: Create the command…

Unix commands are typed on the command line, the space after the prompt in the Terminal. The default prompt is your user name followed by a percentage sign (%)—for example, `gwcoffey%`. If you're a Panther user, type `sudo ditto -V -X -rsrcFork` afterthe prompt, and then type a space (but don't press {{< kbd char="Return" >}}). The `sudo` (superuser do) command gives you superhuman privileges to use particular commands with "root" permissions—meaning you can do anything. The `ditto` command invokes the ditto tool, which can copy entire directories. The `-V` flag tells ditto to display file names in the Terminal as it copies them so you can monitor progress, the `-X` flag tells ditto to ignore other disks beyond the startup disk, and the `-rsrcFork` flag preserves resource forks and HFS metadata. Unfortunately, Jaguar doesn't support ditto's `-X` flag, so you can't back up your startup disk in one fell swoop. But you can back up folders one at a time. Just type the same command but leave off the -X flag, and drag one folder instead of your entire startup disk (you'll have to repeat all steps for every folder). If that's more trouble than it's worth, Carbon Copy Cloner (www.bombich.com) is a nifty piece of donationware that'll do the trick for you.

{{< figure
	src="figure-2.jpg"
	width="902"
	height="202"
	alt="A screenshot of the Terminal window showing the prompt \"gwcoffey %\" and then this command outlined in red: \"sudo ditto -V -X -rsrcFork\"."
	caption="On the command line, every space and letter is Important. Make sure you type the command exactly as you see It here." >}}

### Step 2: Drag the source…

Next, tell Unix which folder or disk to copy by adding its path, the string of directory names separated by `/` that leads to your source, to the command line. To do this, simply drag your target's icon from the Finder into the Terminal window (in Panther, you can't drag disk icons from the Finder Sidebar; select Computer from the Finder's Go menu to find icons fit for dragging). After dropping the icon on the Terminal window, the Terminal automatically displays the correct path. If you drop in your startup disk, the path will be short—just a `/`. It'll be much longer for a nested folder (for example, for your iTunes Music folder, you'd get this path: `/Users/user name/Music/iTunes\ Music`). Then type a space (don't press {{< kbd char="Return" >}}).

{{< figure
	src="figure-3.jpg"
	width="1280"
	height="1020"
	alt="A screenshot showing two windows. The terminal window and, infront of it, a finder window. The user in dragging the hard drive from the finder window into the terminal."
	caption="To ensure you give Unix the right path to your source, drag the targeted file, folder, or disk into the Terminal window—no breadcrumbs needed." >}}

### Step 3: Drag the destination… 

Lastly, let ditto know where to copy your files. If you're backing up to another hard drive, simply drag its media icon into the Terminal window to display its path. If you want to back up to a CD– or DVD–R, put a blank disc in your drive and drag its icon into the Terminal window. However, know this: ditto is a dummy when it comes to size limitations. It won't tell you if your source disk's files exceed the space on your destination disc or disk—it'll dutifully copy for 45 minutes and then complain when it runs out of room. It's up to you to make sure there's enough space on your backup media to accommodate your startup disk. If you run into space constraints, create a new folder on your desktop and drag it onto the Terminal window to serve as the backup destination. You can then burn selected folders and files from it without permission problems.

{{< figure
	src="figure-4.jpg"
	width="1028"
	height="994"
	alt="A screenshot just like the one above. This time the user is dragging a backup disk into the terminal window."
	caption="Dragging this FlreWire hard-drive icon onto the Terminal creates a secondary path that tells ditto where to copy the flies-be sure to type a space between the two paths." >}}

### Step 4: Type the magic word… 

OK, time to start the copy process. Press Return. The Terminal will ask for your administrator password to provide you with superuser privileges. Type it in and press Return again. That's it. A lot of text will fly across the Terminal screen, letting you know that it's hard at work. Depending on how many MB or GB you're backing up, this can take a while. When the text stops flyin' and you see your prompt again, your backup is finished. If you backed up to a CD– or DVD–R, burn the disc by selecting its icon and choosing Burn Disc from the Finder's File menu.

{{< figure
	src="figure-5.jpg"
	width="1482"
	height="384"
	alt="A screenshot of the terminal window again. This time it is prompting for a password."
	caption="As you type your password, nothing shows up onscreen. This is Unix-speak for \"security.\"" >}}

## Fix the Firewall

{{< aside title="What you need" >}}
* Mac OS 10.2 or later ($129, www.apple.com)
* BSD subsystem installed (part of the Mac OS X standard installation)
* Administrator access
{{< /aside >}}

For extra security, Mac OS X has a built-in firewall. This firewall software makes your computer invisible to prying eyes on the Internet. You can easily activate the firewall; open System Preferences, click the Sharing preference, click the Firewall button, and click Start. Unfortunately, some programs, such as Timbuktu, sometimes modify your Mac's internal firewall settings, so when you try to activate the firewall, OS X tells you it's unavailable unless you deactivate your other software. Luckily, you've got Unix.

{{< figure
	src="figure-6.jpg"
	width="734"
	height="370"
	alt="A screenshot of an error message that reads \"Other firewall software is running on your computer. To change the Apple firewall settings, turn off the other firewall software."
	caption="If you've ever seen this error, this fix is for you." >}}

### Step 1: Fire up the command…

Launch the Terminal (if it isn't open already), type `sudo ipfw flush` at the prompt, and press {{< kbd char="Return" >}}. This command first invokes the superuser do root privileges (available to anyone with administrator status). The command `ipfw` configures the behind-the-scenes IP Firewall settings, and the flush command sets the firewall back to its default settings.

{{< figure
	src="figure-7.jpg"
	width="930"
	height="222"
	alt="A screenshot the terminal window. The user has entered the command described above."
	caption="This bitty command can easily fix big firewall access problems." >}}

### Step 2: Flush away…

The Terminal asks you for your administrator password. Enter this next to its prompt and press {{< kbd char="Return" >}}. The Terminal responds with "Are you sure? [yn]"—type `y` and press {{< kbd char="Return" >}} again. Your Mac quickly goes to work, deleting all pre-existing rules and returning the firewall to the default settings. When it's finished, the Terminal displays "Flushed all rules" in its window. You can now turn your firewall on and off with ease.

{{< figure
	src="figure-8.jpg"
	width="700"
	height="376"
	alt="The same terminal window after you press Return. It asks \"Are you sure? [yn]\"."
	caption="After you give the command to flush out all of your current firewall rules, the Terminal will ask you if you're sure you wantto do this." >}}

## Prioritize Your Processor Power

{{< aside title="What you need" >}}
* Mac OS 10.2 or later ($129, www.apple.com)
* BSD subsystem installed (part of the Mac OS X standard installation)
* Administrator access
* Storage medium (such as a CD-R, DVD-R, or external hard drive)
{{< /aside >}}

Mac OS X's multitasking has just one rule: Every active program gets an equal share of your Mac's attention. This equal-opportunity plan works well until your Mac gets really busy. Just as you apply Photoshop's Gaussian Blur to your 50MB photo file, the Microsoft Office Assistant decides to dance its little jig, making everything slow to a crawl. No, you don't have to quit your other apps and force OS X to give its undivided attention to the task at hand-you can simply use the Terminal to tell OS X which programs should receive the most attention. Here's how.

{{< figure
	src="figure-9.jpg"
	width="1166"
	height="874"
	alt="A Mac laptop showing several windows on the screen."
	caption="If you take multitasking to the extreme, a little processor power play can prevent display hiccups, sound stutters, and gratuitous spinning wheels. (Photograph by Mark Madeo)" >}}

### Step 1: ID your apps…

Your first task is to find out the process ID of your target program (the one you want to
shower power upon and/or the one that's becoming a processor hog). To find this info, just launch Activity Monitor if you're running Panther (in Applications → Utilities) or Process Viewer if you're using an older version of OS X (also in the Utilities folder). In Activity Monitor, select Windowed Processes from the top-right pop-up menu, click the CPU button to display a list of all active apps, and note your target program's process ID number in the Process ID column. In Process Viewer, select User Processes from the Show pop up, select your target app from the list, click the More Info disclosure triangle, and click the Process ID tab to view its process ID.

{{< figure
	src="figure-10.jpg"
	width="1152"
	height="978"
	alt="The Activity Monitor window showing a list of applications. iTunes is selected."
	caption="In Panther, use the Activity Monitor to find a program's process ID. With earlier X incarnations, use Process Viewer to get this Info." >}}

### Step 2: Set its priority…

Next, tell OS X how important your VIP (very important program) is by using the renice command to make your programs more or less nice. A nice program demands less computing power. A not-so-nice program takes more power for itself. So if Office Assistant's loafing is slowing down more important things, you can tell Word (or another Microsoft Office app) to be less selfish. Every program starts off with a value of zero, but you can choose any number from +20 (the nicest) to -20 (Mr. Grinch) to set its priority. To do this, launch the Terminal and type `sudo renice value id`, where `value` is the value of your niceness setting, and `id` is the process ID of your chosen app (for example, `sudo renice -15 619` gave power to our Photoshop task). Then press {{< kbd char="Return" >}}. The Terminal prompts you for an administrator password. Type in your password and press Return again. OS X instantly starts giving your program a little more or less power as requested. Just remember that renice can shift the balance of power, but it can't make your Mac faster.

{{< figure
	src="figure-11.jpg"
	width="1050"
	height="344"
	alt="The Terminal window with the \"renice\" command above typed in. It shows the message \"1828: old priority 0, new priority 20\"."
	caption="This Unix command lets you decide how your programs behave with one another." >}}
	
