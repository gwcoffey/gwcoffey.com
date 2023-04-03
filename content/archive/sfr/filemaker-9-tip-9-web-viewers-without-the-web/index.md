---
title: "FileMaker 9 Tip #9: Web Viewers Without the Web"
date: 2007-05-22
archive: sfr
tags: 
  - Archive Post
---

Another day, another awesome new FileMaker 9 feature. Today's special: so called *data URLs*. In a nutshell, you don't need a web site to use web viewers anymore. Now they can easily (read: without crazy exports and obscene path hacks) show data pulled right from the FileMaker database itself. This is, like, *way* cooler than it sounds.

## Live HTML Previews

Perhaps the most immediately obvious way to use data URLs is to allow live preview of HTML data right in FileMaker. For example, suppose you allow your users to formulate styled HTML marketing emails in FileMaker, so they can easily be customized and sent to folks in your Customer table. You might have a layout that looks like this:

{{< figure src="html_in_field.png" 
           width="580"
           height="422"
           alt="Screenshot of a simple FileMaker database window showing two fields: \"Subject\" and \"Body\". The Body field is large and contains a lot of HTML."
           caption="This probably-not-very-realistic database has a complete, well-formed HTML document in a single field.">}}

That's swell and all, but chances are your users have trouble visualizing all that HTML. With FileMaker 9, you can remodel that layout:

{{< figure src="html_in_field_with_preview.png"
           width="580"
           height="422"
           alt="The same window but now there's a second tab. This tab shows the rendered HTML as it would show in a browser."
           caption="Ahh that's more like it. Now the user can see if what they typed worked.">}}

In the version above, you've added a tab control to switch between Source and Preview displays. The Preview tab is active in this picture, and you can see the actual HTML from the field rendered perfectly. Accomplishing this is astonishingly easy. Just use this calculation for your web viewer URL (assuming the HTML is in a field called `Body Field`:

```
"data:text/html," & Body Field"
```

The key is the scheme `data` which tells the web viewer you'll be sending the *data* of the page right there in the URL. The `text/html` bit tells FileMaker what kind of data you're sending in. You can supply any standard [media type][1] you want, so long as you also provide proper data. In general, though, you'll probably always use `text/html` because you can't easily produce other kinds of data in a calculation.

[1]:http://en.wikipedia.org/wiki/Media_type

{{< note >}}
Some of you may be thinking, "Hey, I could do this in 8.5 too!" and you'd be right—to a degree. In 8.5, data urls were partially implemented. They worked well on Mac OS X, and, with different syntax, on Windows. But they were very unreliable on Windows, and occasionally failed on the Mac as well. In FileMaker 9, data urls are reliable and consistent across both platforms— and ready for prime time.
{{< /note >}}

## Dynamic Layout Displays

Let's be honest with each other. How often do you *really* have HTML in your database? I thought so. So is this whole data url thing a cool-but-useless novelty? Nope. If you get creative (and learn a little HTML) you suddenly realize you can do some seriously cool stuff. We're not talking about dumping a web page on the layout. We're talking about using the dynamic and flexible nature of HTML to present information in your database in ways that were never possible before.

Here's a simple example. Suppose you have a database of product information, including total units sold for each of the last four months. You would like to show this info visually. Before FileMaker 9, you had a few choices:

1. Generate the charts on-by-one in Excel and import them back in to FileMaker
2. Use a complicated and pricey plug-in
3. Rely on a web-based service that may be slow and may not be accessible by the end user
4. Do some [seriously messed up stuff](http://www.briandunning.com/chartmaker/)

But with HTML, FileMaker 9, and some calculation prowess on your side, you can now solve this problem right at home. Here's how:

Assume you have four fields: `Month 1 Sales`, `Month 2 Sales`, `Month 3 Sales`, and `Month 4 Sales`. Each holds the total units sold in one month. You want to turn this data into an HTML page with four bars, one for each month. Here's a rudimentary page:

```
<html>
	<head>
		<style>
		div {
			background: blue;
			position: absolute;
			width: 21.25%;
			bottom: 0;
			float: left;
		}
		</style>
	</head>
	<body style="border: 0; margin: 0;">
		</p>
			<div style="left: 0; height: 75%"></div>
			<div style="left: 26.25%; height: 15%"></div>
			<div style="left: 52.5%; height: 50%"></div>
			<div style="left: 78.75%; height: 100%"></div>
		<p>
	</body>
</html>
```

This page uses HTML `DIV` elements to display each bar. The `DIV`s are positioned at the bottom of the page, set with various heights, and spaced across the page evenly.

Now your job is to create a FileMaker calculation that sends this data to the web viewer. This time, though, the height of each bar needs to be set based on the field values. You want the tallest bar to have a height of 100%, and you have four bars. This snippet shows how you calculate the height of each bar:

```
Let(

   [max = Max(Customers::Month 1 Sales; Customers::Month 2 Sales; Customers::Month 3 Sales; Customers::Month 4 Sales);

   height_1 = Round(Customers::Month 1 Sales / max; 2);

   height_2 = Round(Customers::Month 2 Sales / max; 2);

   height_3 = Round(Customers::Month 3 Sales / max; 2);

   height_4 = Round(Customers::Month 4 Sales / max; 2)];
   // use the height_n values here
)
```

We first find the biggest bar. Then we calculate the height of each bar as a percentage of the largest. (The biggest will thus be 100%, and every other bar will be smaller.)

Now, we combine the formulas with the web page (and add the necessary "data:"; bits):

```
"data:text/html," &

Let(

   [max = Max(Customers::Month 1 Sales; Customers::Month 2 Sales; Customers::Month 3 Sales; Customers::Month 4 Sales);

   height_1 = Round(Customers::Month 1 Sales / max; 2);

   height_2 = Round(Customers::Month 2 Sales / max; 2);

   height_3 = Round(Customers::Month 3 Sales / max; 2);

   height_4 = Round(Customers::Month 4 Sales / max; 2)];

	"
	<html>
		<head>
			<style>
				div {
					background: blue;
					position: absolute;
					width: 21.25%;
					bottom: 0;
					float: left;
				}
			</style>
		</head>
		<body style=\"border: 0; margin: 0;\">
			<div style=\"left: 0; height: " & (height_1 * 100) & "%\"></div>
			<div style=\"left: 26.25%; height: " & (height_2 * 100) & "%\"></div>
			<div style=\"left: 53.5%; height: " & (height_3 * 100) & "%\"></div>
			<div style=\"left: 79.75%; height: " & (height_4 * 100) & "%\"></div>
		</body>
	</html>
	"
)
```

When your done, you get something like this:

{{< figure src="bars.png" 
           width="580"
           height="292"
           alt="Screenshot of a database window showing fields on the left, and a vertical bar chart on the right."
           caption="What better way to visualize your data than visually?">}}

Complicated? Yes. But functional, real time, plug-in free, and not *too* complicated.

## Take me all the way

You can use this generated HTML technique in infinite ways. For example, recently we posted [an article](../scaling-images-in-a-web-viewer/) on using web viewers as network-enabled container fields. That (pre FileMaker 9) technique required putting the helper file on a web server. You could eliminate that need, and make your system a little more portable, by generating the needed image scaling HTML right in the web viewer calculation.

Here's a peek at another example that shows how dynamic HTML data can make layouts more dynamic than ever (this is a video, so click the play button):

{{< mov src="video_of_html.mov" 
        caption="This video show's a more advanced interactive layout using a web viewer to show data from the database." >}}

The new data url system in FileMaker unlocks huge potential. Here's to many happy hours exploring that potential.