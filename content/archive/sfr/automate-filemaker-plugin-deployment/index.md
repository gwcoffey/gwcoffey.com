---
title: "Automate FileMaker Plug-in Deployment"
date: 2007-07-31
archive: sfr
tags: 
  - Archive Post
---

Back in the late 19th century, when FileMaker Server 5.5 was released, one of its stellar new features was *AutoUpdate*. FileMaker Server can automatically install plug-ins on the connecting FileMaker Pro clients as needed. This is very cool, but there are a few gotchas, which are explained here.

{{< note >}}
AutoUpdate has been around since Server 5.5, and everything here applies in general. But this article was written with FileMaker Server 9 in mind. Some of the settings will be in different places in older versions. Consult your server manual if you have an older version and get stuck.
{{< /note >}}

## Setting up AutoUpdate

If you want to use AutoUpdate, you need to set a few things up. It’s a bit of a pain, but it’s a one-time process, so dive on in and get it done, already.

### Turn on AutoUpdate in FileMaker Server

First, you need to tell FileMaker Server you want to use AutoUpdate. Unfortunately, there’s a typo in the manual, so you may have trouble finding this one.

{{< steps >}}

{{< step "Launch the FileMaker Server Admin Console and log in to your server." >}}
To find the console, point your web browser at port `16000` on your FileMaker Server. In other words, if your FileMaker Server computer’s IP address is `192.168.1.2`, you would go to this URL in your browser: http://192.168.1.2:16000. The page that comes up has a link to open the Admin Console.
{{< /step >}}

{{< step "In the console sidebar, click *Database Server* under Configuration." >}}
This is where you configure the FileMaker database server itself, which includes AutoUpdate.
{{< /step >}}

{{< step "If necessary, switch to the *FileMaker Pro Clients* tab." >}}
Since AutoUpdate sends plug-ins to connected clients, I suppose it makes sense that the setting is here. (If you read the FileMaker Server manual, it told you to look under Server Plug-ins instead, which is not correct.)
{{< /step >}}

{{< step "Turn on *Allow FileMaker Pro clients to download updates automatically*." >}}
Once you’ve made the change, be sure and click Save.
{{< /step >}}

{{< /steps >}}

{{< figure src="server_admin_autoupdate.png" 
           width="580"
           height="257"
           alt="Screenshot of a portion of the FileMaker Server Admin Console window showing the checkbox described above."
           caption="You'll find a lot of switches and dials in FileMaker Server Admin, but this right here is the one you want." >}}

Now you’ve told FileMaker Server you want to use the AutoUpdate feature.

{{< note >}}
All Six Fried Rice plug-ins ship ready for AutoUpdate. You can skip the next two sections. Instead, just look in your download archive for a folder called AutoUpdate Files. Copy the folder *inside* the AutoUpdate Files folder into the AutoUpdate folder on your FileMaker Server. (OK, I lied. Look under [Installing Plug-in Files](#install) below to find out where the AutoUpdate folder is.)
{{< /note >}}

### Preparing Plug-ins for AutoUpdate

If you’re only using Microsoft Windows, you can skip this step. It only applies to Mac OS X plug-ins. On Mac OS X, a plug-in is actually a folder full of files. It just *looks* like a single file in the Finder. In order for FileMaker Server to handle it properly, you need to stuff that folder, and all its contents, into something called a *tar file*. Tar (which is unix-speak for a “tape archive”) is sort of like zip without compression: it takes a lot of files and folders and turns them into one single file.

To tar your plug-in, you need to use the OS X command line:

{{< steps >}}

{{< step "Place a copy of the Mac OS X version of the plug-in on your desktop." >}}
This might not sound important, but it is. If the plug-in isn’t on your desktop, the next steps won’t work, and you’ll have to start over again.
{{< /step >}}

{{< step "Launch Terminal." >}}
It is in your Utilities folder.
{{< /step >}}

{{< step "In the terminal window, type `cd Desktop` and then press return or enter." >}}
This tells terminal you want to work on the Desktop.
{{< /step >}}

{{< step "Again, in the terminal window, type `tar cvf 'My Cool Plug-in.fmplugin.tar'` then press the space bar." >}}
Only, instead of “My Cool Plug-in”, type the exact name of the plug-in you’re using. Again, you have to be exact. You also have to put *exactly* `.fmplugin.tar` on the end of the name.
{{< /step >}}

{{< step "Drag the plug-in file from the Desktop right into the terminal window and release the mouse." >}}
You don’t have to have good aim; just drop it anywhere in the terminal window. This will tell the terminal to put the full path to the plug-in on the end of your command.
{{< /step >}}


{{< step "Press enter or return." >}}
Tar starts processing files. So you know it’s working, it lists out each file as it adds it to the archive.
{{< /step >}}

{{< /steps >}}

You’re done. You can quit Terminal if you want. If you look on your Desktop, you’ll now have a new file called `My Cool Plug-in.fmplugin.tar`. You’ll use this file in a moment.


### Installing Plug-in Files

In order for your clients to download the plug-ins, they need to be stored on the server. This part is a little tricky because you have to create just the right folders, with just the right names, and put them in just the right places.

First, you need to find where AutoUpdate files go. They should be placed in a folder called AutoUpdate, which is usually in the same place as your `.fp7` database files. On Windows:

```
C:\Program Files\FileMaker\FileMaker Server\Data\Databases\AutoUpdate\
```

And on Mac OS X:

```
/Library/FileMaker Server/Data/Databases/AutoUpdate/
```

If the AutoUpdate folder isn’t there, you can create one yourself. Just make sure you call it `AutoUpdate` with no space.

{{< note >}}
If you keep your databases in an alternate folder (which can be set up in the Server Admin Console), you can put the AutoUpdate files there instead. Just create a folder yourself called AutoUpdate and put it at the root of your database folder. You’re also free to keep your AutoUpdate files in the standard place, even though your database are somewhere else.
{{< /note >}}

But you don’t just drop the plug-ins in these folders. Alas, that would be too easy to truly exercise your Sysadmin muscles. Instead, you have to create a specialized folder structure that helps FileMaker keep track of different plug-in versions.

In the AutoUpdate folder, create a folder with the same name as the plug-in.
When you name the folder, ignore the file extension. In other words, if the plug-in is called 6Barcode.fmx, name the folder 6Barcode.

{{<warning>}}
Really, truly, the folder must have exactly the same name. Spaces count. Dashes count. Funny characters you don’t know how to type count. If necessary, copy the name from the plug-in file and paste it in as the folder name (removing the extension if necessary).
{{</warning>}}

In your new folder, add a folder named for the version number of the plug-in.
For example, if you’re installing version 1.5 of the plug-in, make a folder called 1.5. This folder’s name isn’t quite as persnickety as its parent. If the plug-in is version 1.5.3.4627 x54e9 you can still call the folder 1.5. You can call it 3.0 if you want. Just make sure you know what you called it because when you script the plug-in installation later, you’ll ask for this version by name.

Put the plug-in files inside the version folder you created in step 2.
Now, finally, you’re ready to put the plug-ins themselves on the server. For the Windows plug-ins (with a .fmx file name extension) just drop the plug-in itself in the version folder. If you’re also installing a Mac OS X plug-in, put the tar archive of the plug-in in the version folder.

Now, you server is ready to deploy the plug-in. But you’re not done yet. You still have to tell the clients to come and get it.

## Writing an AutoUpdate Script

FileMaker doesn’t just download every plug-in as soon as it connects. Instead, you get to tell it which plug-in(s) and version you want in each database. You do this by writing a (relatively complicated) script that talks to FileMaker Server and pulls down the plug-in as needed.

This script uses something called the *AutoUpdate Plug-in*. Yeah, I know. Ironic. You need a plug-in to use the plug-in installation system. But don’t fret. The AutoUpdate Plug-in is included when you install FileMaker Pro or FileMaker Pro Advanced. So unless you (or someone else) has turned it off, it will be there. And the script is smart enough to check for it, and give a meaningful error if it isn’t installed.

{{<note>}}
Again, if you’re using a Six Fried Rice plug-in you don’t have to worry about this. Each of our plug-ins includes a *Helper* database that has all the scripting you need. Just put the Helper database on your FileMaker Server, and then run the script from within your own database using the `Perform Script` script step. If you’re not one of the lucky SFR plug-in users, read on.
{{</note>}}

Scripting the AutoUpdate system is a three step process:

1. Check to see if the plug-in is already installed.
2. If it isn’t, make sure it is available on the server.
3. If it is, install it.

Rather than force you through the drudgery of writing this script yourself, here is one you can borrow. In fact, keep it. We don’t mind.

```
# Check to see if the plug-in is already installed
If [ Not IsValid ( myplug_Version ) ]
  ## Check to see if the AutoUpdate Plug-in is installed
  If [ Not IsValid( FMSAUC_Version ( 0 ) )]
    Show Custom Dialog [ “Installation Error”; “The AutoUpdate plug-in is not available.” ]
  Else If [ Get ( MultiUserState ) <> 2 ]
    Show Custom Dialog [ “Installation Error”; “This database has to be on FileMaker Server for AutoUpdate to work.” ]
  Else
    # Check for the plug-in on the server
    Set Variable [ $versions; FMSAUC_FindPlugIn ( “My Cool Plug-in” ) ]
    If [ $versions = “-1” ]
      Show Custom Dialog [ “Installation Error”; “It looks like AutoUpdate isn’t enabled on the server.” ]
    Else If [ PatternCount($versions, “1.5”) = 0 ]
      Show Custom Dialog [ “Installation Error”; “The server doesn’t have the right version of the plug-in.” ]
    Else
      # Update the Plug-in
      Set Variable [ $plugin_result; FMSAUC_UpdatePlugIn ( “My Cool Plug-in 1.5” ) ]
      If [ $plugin_result <> 0 ]
        Show Custom Dialog [ “Installation Error”; “Something unexpected happened: ” & $plugin_result ]
      End If
    End If
  End If
End If
```

When you create this script in your database, keep these things in mind:

1. Instead of {{<var `myplug_Version`>}} put a call to your plugins version function.
1. Instead of {{<var `My Cool Plug-in`>}}, put the real, *exact* name of your plug-in.
1. Instead of {{<var `1.5`>}}, specify a version number that matches the folder you created on your server.
1. If you’re using FileMaker 7, or don’t have FileMaker Pro Advanced, use global fields instead of variables (the variables in this script start with `$`).

## Calling the Script

Once the script is written, you need to decide when to call it. By far the easiest option is to run the script whenever your database opens. This will ensure the plug-in is installed and available for all your users.

To make the script run when your database is open, open your database, then choose File → File Options. The window that pops up has a place where you can pick one script to run when the file opens.

{{<tip>}}
If you already have an opening script, just have it perform your AutoUpdate script when it’s done doing whatever it does.
{{</tip>}}

If you want, you can defer plug-in installation until it is really needed. For example, if you only use the plug-in in one special script, and that script is only run by a few of your users, then you can perform the AutoUpdate at the top of this special script instead. That way, the plug-in will only be installed the first time a user really needs it.

## Potential Problems

If you’ve gotten this far, you’re probably all set. Whenever someone opens your database, they’ll get the plug-in(s) she needs automatically. The only impact will be a short delay the first time, as the plug-in is downloaded. It is smooth-as-silk.

But sometimes, you may encounter a problem or two.

### Licensing obstructions

First of all, it probably goes without saying, but if you don’t own enough licenses of your plug-in, you can’t use AutoUpdate. Although it is automated, it still installs the plug-in on every client computer, and you still need to buy a license that allows this.

{{<aside>}}
For example, if you buy a Six Fried Rice plug-in you should get the *server license*. It lets you install the plug-in on one server, and use AutoUpdate to install it on as many connecting client computers as you want. It’s licensed for the *server* and *all clients*.
{{</aside>}}

But even with enough licenses, Some plug-ins require convoluted licensing procedures because their creators are convinced you would steal the plug-in if you could. These copy protection schemes can sometimes get in the way of AutoUpdate. You may run into problems like these:

* The plug-in installs properly, but it runs in a *demo* or *trial* mode, with splash screens or limited functionality.
* The plug-in complains that it is being used on too many machines at once.

If this happens to you, contact your plug-in vendor and see what options they provide. Some offer alternate registration mechanisms (like scripted registration) so you can use AutoUpdate successfully. If they don’t, complain. AutoUpdate has been in FileMaker Server for nigh on 140 years now, and it is a huge timesaver for server administrators. You should be able to use it.

### Permissions Problems

If you’re using a version of FileMaker Pro older than 9.0, you may run in to permissions problems. If your users aren’t allowed to add files to the Extensions folder in the FileMaker folder, then AutoUpdate can’t do its job. Again, our script will tell you this when it runs.

If this is the case in your organization, you only have a few options:

1. Upgrade to FileMaker 9. This version works around the permissions problems by installing the plug-in on a per-user basis, instead of for all users at once.

2. Install the plug-in manually. This is often not a bad option. Most organizations that have locked-down desktops also have the tools necessary to deploy software across multiple computers. See if your sysadmin can use their tools to install the plug-in in everyone’s Extensions folder for you.

3. Get the permissions changed. It is possible (although not common) to give restricted users permission to install only plug-ins, without opening up the entire computer. If you or your sysadmin can make this change to network security, AutoUpdate will begin to work.

### Where’s My Plug-in?

Since FileMaker 7+, plug-ins can be found in the `Extension` folder in your FileMaker directory. FileMaker 9 has thrown a teeny little wrinkle into this simplicity. Plug-ins can now be found in a secondary location under the user’s account folder. For example, if the username was `jantunes` the folders would be:

For Windows:

    C:\Documents and Settings\jantunes\Local Settings\Application Data\FileMaker\Extensions

For Mac OS X:

    /Users/jantunes/Library/Application Support/FileMaker/Extensions


This is actually a nice addition because now a user doesn’t need permissions to install software on their computer to take advantage of AutoUpdate. Next time you are looking for a plug-in that can’t be found in the standard `Extension` directory, be sure to check here. Also, if you are on windows, the `Local Settings` directory defaults to hidden so you may have to work a little harder to get there.
