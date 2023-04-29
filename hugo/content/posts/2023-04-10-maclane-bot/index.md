---
title: "Mary MacLane Bot on Mastodon"
date: 2023-04-10
slug: maclane-bot
summary: "I'm a big fan of the Moby Dick at Sea Mastodon bot. And I'm a big fan of the 20th century's first and biggest bad girl, Mary MacLane. *And* I'm a computer programmer. So I suppose this was inevitable."
description: "A Mastodon Bot that periodically posts short excerpts from the writing of Mary MacLane"
resources:
  - src: mary.jpg
    params:
      cropTarget: top
tags:
  - Project
---

I'm a big fan of the [Moby Dick at Sea][moby] Mastodon bot. And I'm a big fan of the 20th century's first and biggest bad girl, [Mary MacLane][mary]. *And* I'm a computer programmer. So I suppose this was inevitable…

{{< mastodon host="https://botsin.space" post="@maclane/110260326323643265" >}}

I give you, the <a rel="me" href="https://botsin.space/@maclane">Mary MacLane Bot</a> on Mastodon, a bot that posts random curated passages from Mary MacLane's *I Await the Devil's Coming* every four hours.

[moby]: https://botsin.space/@mobydick
[mary]: https://en.wikipedia.org/wiki/Mary_MacLane


## Who is Mary MacLane

{{< figure 
	src="mary.jpg"
	alt="An aging black and white photograph of a young Mary MacLane. She wears 19th century clothing including a large hat, and long full dress. Her arms are behind her back, body erect, head slightly back. She has a defiant look on her face."
	class="embed right" >}}

Mary MacLane's writing is hard to classify, but I'll try: self-absorbed, honest, irreverent, hyper-dramatic, funny, sad, beautiful, and personal. She wrote her debut memoir, *I Await the Devil's Coming*, as a sort of diary over a period of three months in 1901, at just 19 years old. It begins:

> I of womankind and of nineteen years, will now begin to set down as full and frank a Portrayal as I am able of myself, Mary MacLane, for whom the world contains not a parallel.

It then it just *goes*.

She came to me late in life. I'm not sure how I discovered her work, but the moment I did, maybe five years ago, I was hooked. (My kids will tell you this is unsurprising because I have something of a fascination with so-called "badly behaved women" and Mary certainly fills that niche.)

I think the thing I love most about her writing is that it pulls no punches. In some sense she's the quintessential teenager, for whom everything is somehow simultaneously overwhelming and entirely possible.

I love her pleading prose. I love her dry humor. I love her strangeness in all its forms.  Some people are turned off by her ego. Some by her irreverence. Some by her dramatics. (And some, of course because she's bisexual.) But I love her. I love her not in spite of these things but because of them.

I've posted a [sample chapter here](/ex/i-await-the-devils-coming-sample-february-7) if you'd like to get a sense of her prose style, humor, and dramatics.

Mary put her full authentic self into her writing. As she says in her entry on {{< time "1901-04-13" "April 13" >}}, {{< q >}}I have given my heart into the keeping of this.{{< /q >}} And now *I* give it to *you*.

***

## Technical Details

The bot is implemented in *[TypeScript][ts]*. The [source code][code] is available on GitHub, and the bot is available as an NPM module called [@gwcoffey/litbot][litbot]. This is a somewhat generic module for selecting at random from a dataset of text passages and posting it to Mastodon.

I curated the data for MacLane Bot myself using the plain text version of *I Await the Devil's Coming* from [Project Gutenberg][guten]. I am, as always, grateful for the Project Gutenberg volunteers for the valuable work they do.

{{< note >}}
The Project Gutenberg version of the book carries the title *The Story of Mary MacLane*. This is the original publication title because Mary's preferred title was considered too provocative.
{{< /note >}}

MacLane Bot itself is executed periodically as a [Netlify scheduled function][fn]. The code for the function and the raw passage data is in the GitHub repo for this website but I'm not going to link to it here---it is so much more fun to follow the bot and get little jolts of joy throughout the day.

The MacLane Bot Mastodon account is graciously hosted free of charge on the [botsin.space][botsin] instance. 

[ts]: https://www.typescriptlang.org
[code]: https://github.com/gwcoffey/litbot
[litbot]: https://www.npmjs.com/package/@gwcoffey/litbot
[guten]: https://www.gutenberg.org/ebooks/43696
[fn]: https://docs.netlify.com/functions/scheduled-functions/
[botsin]: https://botsin.space/
