---
title: Rip Sound Tracks from your DVDs
date: '2003-12-01'
archive: macaddict
---

{{< aside title="What You Need" >}}
* Mac with DVD-ROM or SuperDrive and Apple DVD Player
* Mac OS 10.2 or later ($129, www.apple.com)
* iTunes 3 or later (free, www.apple.com)
* OSEx 0.0110a1 or later (free, www.cs.buffalo.edu/-afaversa)
* mAC3dec 1.6 or later (free, http://sourceforge.net/projects/mac3dec)
* DVD with music
{{< /aside >}}
	
Norah Jones: Live in New Orleans, KISS: Live in Las Vegas, Schoolhouse Rock—we've invested a good chunk of change building up our DVD collection, but must we remain trapped in our abode every time we just want to listen to the music? Heck no. Even
though there's not yet a DVD player the size of an iPod, there's still a way to take your DVD tunes on the road. Rip that music right off the disc and put it where Mother Nature intended it to go: iTunes, on a CD, or even on your iPod . The process isn't as easy as ripping CDs, but it's better than shelling out extra to buy a soundtrack CD-if one even exists for your DVD in question. Just remember: Copyright law protects the music on a DVD, so you can only copy music from discs you own.

{{< figure
	src="figure-1.jpg"
	width="812"
	height="788"
	alt="A screenshot of the iTunes window showing tracks from School House Rock. Obscuring a portion of the window is a photograph of the School House Rock DVD package."
	caption="Why confine yourself to the couch when you can take tunes from your DVDs out and about on an iPod or a CD player?" >}}

## Step 1: Set Up DVD Player 

Finding individual tracks on a CD is easy, but they're trickier to find on DVDs because DVD content is organized into titles and chapters. Unless you intend to rip all 14 hours of that Phish concert DVD, you need to find out where each song is stored. Put your DVD into your Mac and launch Apple's DVD Player. From the Video menu, choose either Normal Size or Half Size, depending on how you want it to appear onscreen. Next, select Preferences from the DVD Player menu. In the resulting window, click the Windows tab, select Wide from the Info Window Type pop-up menu, and click OK. Then select Show Info from the Window menu to display your DVD's title and chapter information in a separate info box.

{{< figure
	src="figure-2.jpg"
	width="1406"
	height="1088"
	alt="A screenshot of the DVD Player application showing the Info window along the bottom. It is black with white lettering and shows information about what is playing on the screen."
	caption="Make sure DVD Player displays its info window, or ripping your favorite songs will become a guessing game." >}}

## Step 2: Find Your Music 

To search your DVD's titles and chapters for songs you want, use the arrow buttons on DVD Player's controller or press the arrow keys on your keyboard. When you find the first song, jot down its chapter and title numbers (displayed in the info box), and repeat for all other tracks. Be aware that each DVD has its own track structure—most concert DVDs house the entire music soundtrack under one title with songs stored in separate chapters. Some DVDs categorize content across multiple titles and place songs as separate chapters under each title. Others have a title for each song, with some songs spilling over into more than one chapter. Your job is to figure out which titles and chapters contain the songs you want to rip.

{{< figure
	src="figure-3.jpg"
	width="932"
	height="720"
	alt="Another screenshot of the DVD Player application. A concert by Norah Jones is plaaying on the screen. An on-screen sticky note lists titles and chapters."
	caption="Every Mac addict knows pen and paper are old school—we used Stickies to keep track of titles and chapters." >}}
	
## Step 3: Make Some Choices 

Once you've found everything, fire up OSEx, a freeware app that rips DVDs. OSEx can rip only one title at a time, but you can pick as many chapters as you want within it to rip. From the Ti (titles) drop -down, select the title number of your first song from the list (this places a check mark next to it). Then select one or more chapters from the Ch (chapter) drop-down. Click a chapter number to select it; click it again to deselect.

{{< figure
	src="figure-4.jpg"
	width="682"
	height="578"
	alt="A screenshot of the OSEx app. A pop-up menu shows the titles and chapters available to pick from."
	caption="To select individual songs (chapters), place a check mark next to the song by clicking it." >}}
	
## Step 4: Rip It

OSEx can rip both audio and video, but since we just want audio, click the Vid (video streams) drop-down menu and deselect all items. If the Sub (subtitles streams) drop-down isn't grayed out, deselect all of its options as well. Many music DVDs feature multiple formats for an audio track (AC3 stereo, DTS surround, and so on). Click the Aud (audio streams) drop-down and choose one in stereo format (one that displays "2Ch" in its name) or whatever's available. Then click the Fmt (output format) drop-down and select Elem. Streams (this saves tracks as AC3 audio files). If you're ripping multiple songs at once, where each song is one chapter, click the Seg (output segmentation) drop-down, and select Chapter. If you're ripping a song that spans across more than one chapter, select Title instead. Then click Begin. In the resulting dialog, select where to save new files, and click Choose to let 'er rip. Now's a good time to grab a cup of coffee.

{{< figure
	src="figure-5.jpg"
	width="930"
	height="628"
	alt="The same OSEx app. It now shows a partially-filled progress bar."
	caption="OSEx keeps you posted with a progress bar. Disregard those MB file progress numbers-they factor In video size, which you're not saving." >}}

## Step 5: Create the Conversion

When OSEx is done, you'll have one or more strangely named AC3 files which you'll need to convert into something your Mac can play. To give yourself the choice of burning audio files to CDs or making MP3s, launch mAC3dec, select AIFF from the Format pop-up, and select 48.0 kHz from the Sample Rate pop-up . Then drag all your AC3 files into the mAC3dec window and click Start. The app converts each AC3 file into an AIFF and saves it in the same folder that houses your originals.

{{< figure
	src="figure-6.jpg"
	width="1114"
	height="860"
	alt="Screenshot of the mAC3dec app showing a progress bar and a list of files."
	caption="mAC3dec converts AC3 files into formats your Mac understands—we chose AIFF to give ourselves the option to burn a CD or make MP3s." >}}
	
{{< aside title="Hey, What About Me?" >}}
Don't have a DVD drive in your Mac? You're not completely out of luck. Just hook up your set-top DVD player to your Mac and record the audio directly. If your Mac doesn't have an audio-in jack, you need a USB audio input device like the Griffin iMic ($39.99, www.griffintechnology.com) . You also need recording software, such as Black Cat Systems Audiocorder (shareware, www.blackcatsystems.com).

Just connect your DVD player's audio outputs to your Mac input via a stereo RCA-to-1/8-inch stereo miniplug cable, and leave the video connected to the TV. Use your DVD remote control to navigate to the song you want, click your software's record button just before the music starts, let the song play, and click stop just after it ends. This simple approach may seem tempting to those who have DVD-ROM drives, but don't be swayed-we found that the quality of music was much better when we ripped it on our Mac.
{{< /aside >}}

## Step 6: Put Things Away

Once you've got your AIFFs, give your tracks more appropriate names (if you wish). If you want to create a CD, use your preferred disc-burning app and go to town. If you want MP3s, launch iTunes, press and hold down the Option key, and select Convert To MP3 from the Advanced menu (or Convert to AAC if you're using iTunes 4 or later, and have chosen AAC as your preferred importing encoder in Preferences). In the resulting dialog, navigate to your AIFF files, hold down the Command key, select all AIFF files, and click Choose to convert and import your music into the iTunes Library.

{{< figure
	src="figure-7.jpg"
	width="862"
	height="716"
	alt="Screenshot iTunes with the Advanced menu open and the Convert to MP3 menu item selected."
	caption="iTunes' Advanced menu allows you to convert songs and add them to the library in one fell swoop." >}}

