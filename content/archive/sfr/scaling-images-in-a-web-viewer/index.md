---
title: "Scaling Images in a Web Viewer"
date: 2007-06-03
archive: sfr
---

[technet]: https://community.claris.com/
[regex]: http://en.wikipedia.org/wiki/Regular_expression
[replace]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
[center1]: http://www.jakpsatweb.cz/css/css-vertical-center-solution.html
[center2]: http://d-graff.de/fricca/center.html
[center3]: http://www.student.oulu.fi/~laurirai/www/css/middle/

A recent post on the [TechNet][technet] mailing list posed an interesting question {{< ed "TechNet is now Claris Community. The link has been updated accordingly." >}}:

{{< quote >}}
When displaying an image in a web viewer, is there any way to scale the image to fit?
{{< /quote >}}

Of course container fields have this ability built right in (by way of the Format → Graphic command). But there are several reasons you might want to show pictures in a web viewer instead. Most notably, the images might already be on a web site. There’s no reason to copy them into the FileMaker database too, wasting space and adding more to your already busy schedule. Is there any way to give web viewers container-like scaling ability?

This question inspired me, so I put together a solution that can be used generically. The result is a simple web page that can, using Javascript, load an image, figure out how big it is, and scale it appropriately. First, here’s the source of the page. If you’re curious about how it works, read on.

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <style>
    body {
      border: 0;
      margin: 0;
    }

    img {
      display: block;
      margin: 0 auto;
    }
  </style>
  <script type="text/javascript">
    function resize_image() {
      var img = document.getElementsByTagName('img').item(0);
      if (img.offsetHeight > img.offsetWidth)
        img.style.height = '100%';
      else
        img.style.width = '100%';
    }
  </script>
</head>
<body onload='resize_image();'>
  <script type="text/javascript">
    document.write(
      "<img src='" + 
      location.search.replace(/^\?/, "") +
      "'>"
    );
  </script>
</body>
</html>
```

To use this in your own systems, copy the source code into a new file. Name it “scale-image.html” (or anything you want) and put it on your web server. To show a properly scaled image in a web viewer, you load this web page, and tell it what image to load in the query string (in other words, add a question mark and then the image URL to the end of the page URL). Sounds complicated, but really it isn’t. Here are a few examples:

```
# Load an image with a complete URL:
http://me.com/scale-image.html?http://foo.com/path/to/image.jpg

# If the image is on the same web server:
http://me.com/scale-image.html?/path/to/image.jpg

# If the images are in the same folder as the page:
http://me.com/scale-image.html?image.jpg
```

Of course you can use any image type your browser supports: You’re not limited to JPEGs. Finally, note that this page only works properly if the web viewer itself is perfectly square (ie: 120px by 120px or 300px by 300px). Use the Object Info pallette (View → Object Info) to easily size your web viewer. If there is enough interest, I can revise the code to work in web viewers with any aspect ratio.

## How Does it Work?

If you’re new to dynamic HTML the web page may seem a little mysterious, but it is actually pretty easy to understand if you are familiar with HTML and Javascript. Let’s dissect it.

{{<ed "This may be *dynamic* and *HTML* but it is not *Dynamic HTML* in the formal sense. I think I just didn't know the details well enough when this was posted." >}}

First, you see a pretty typical top-of-the-page. We declare the version of HTML we’re using, and start the page as normal.

The first important bit is this:

```html
<style>
  body {
    border: 0;
    margin: 0;
  }
  
  img {
    display: block;
    margin: 0 auto;
  }
</style>
```

This embedded CSS stylesheet tells the web viewer a few important things:

1. The `body` part ensures the page body has no margin or padding. In other words, we want the contents of the page to push right up to the edge of the web viewer, with no gap. Normally, page content is indented a little on all sides, but we want our image to fill things up completely.

2. The `display: block` part tells the Web Viewer to treat images as [block elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements). This makes it possible for us to size and position the image precisely.

3. The `margin: 0 auto` part means the image should start at the very top of the web viewer (no top/bottom margin) and it should center itself right-to-left (automatic left and right margin).

Next, we define a Javascript function. This code doesn’t run right away, but later it will be called. It does the actual work of resizing the image. Here’s the function:

```html
<script type="text/javascript">
  function resize_image() {
    var img = document.getElementsByTagName('img').item(0);
    if (img.offsetHeight > img.offsetWidth)
  	img.style.height = '100%';
    else
  	img.style.width = '100%';
  }
</script>
```

In CSS, if we set just the *width* of the image to `100%` then the image will automatically be scaled so it is exactly the width of the web viewer. If you *don’t set the height at all* then the web viewer will keep the image’s aspect ratio. In other words, it will let the image be as tall as it needs to be so it doesn’t look squished. Likewise, if we set just the *height* to `100%`, the width will scale accordingly. All we need to do is decide if the image should be just as wide as the web viewer, or just as tall.

{{<ed "CSS has come a long way since this was posted. All this information is very out of date. Today you can simply use `max-height: 100%` and `max-width: 100%` on the image and the browser will do the right thing. No Javascript is needed here at all." >}}

If you think about it for a minute, you’ll agree that this depends on whether the image is taller than it is wide, or wider than it is tall. A tall image will fill the web viewer from top to bottom, and won’t be quite as wide as the web viewer itself. A wide image, on the other hand, will fill it from right to left, and be a little shorter.

So this function first get ahold of the image, storing a reference to it in a variable called `img`. It looks at the `offsetHeight` and `offsetWidth` of the image (these are just funny ways to refer to its height and width). If the height is bigger, it sets the height to `100%`. If the width is bigger, it sets the width to `100%` instead.

Remember though that this function is only defined at this point. We haven’t actually run the code yet. The reason is simple: the image doesn’t exist yet. Next, the HTML looks like this:

{{< warning >}}
{{< ed "This is an elegant code snippet for a more civilized age. Today the internet is a wretched hive of scum and villainy and **you should definitely not do this**. This code unquestioningly inserts the text from the query string into the HTML body of a page, which is, like, the textbook definition of a [CSRF attack](https://owasp.org/www-community/attacks/csrf). This code should be using `document.createElement()` to safely create images without injecting raw HTML. And it should be using some kind of allow-list or other checking to ensure only images coming from safe locations are displayed." >}}
{{< /warning >}}

```html
<body onload='resize_image();'>
  <script type="text/javascript">
    document.write(
      "<img src='" + 
      location.search.replace(/^\?/, "")
      + "'>"
    );
  </script>
</body>
```

In this very short HTML body, we use another Javascript snippet. This time we generate an HTML `img` tag with a `src` attribute that refers to the image we’re supposed to load.

The image URL itself is loaded from the `location.search` property, which is just Javascript’s way of fetching the junk after the `?` in the page URL. Unfortunately, the value in `location.search` includes the `?` itself, so we use the [`replace`][replace] function, with a [regular expression][regex] to remove it.

Now we have a web page with an image in it. If you look at the very top of the last code snippet, you’ll see where we call the `resize_image` function: in the `body`’s `onload` handler. This tells the web viewer to run the Javascript resize code only after the page (and the image on it) have finished loading.

When the function runs, it adjusts the size setting for the image, and the image is properly scaled. Luckily, Javascript is very quick, so all you see is a perfectly scaled image from the start.

This sample was thrown together quickly, so it has room for improvement. To wit:

* The web viewer has to be square. It would be better if it inspected the page size and adjusted its decision making accordingly, so it could scale an image in any size web viewer.

* The image is centered left-to-right, but not top-to-bottom. Centering vertically in CSS is a bit of a nuisance, but there are several ways to do it, like [this][center1], [this][center2], and [this][center3]. I think for the sake of simplicity, I would look at two approaches: Calculate the appropriate margin in Javascript, and set it; or just put the whole thing in a single-cell table. {{< ed "Or wait five of sixe years for CSS to catch up with reality. [Vertical centering is now easy](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) in CSS." >}}
