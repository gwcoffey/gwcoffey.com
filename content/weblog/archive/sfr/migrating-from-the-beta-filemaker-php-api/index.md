---
title: "Migrating from the Beta FileMaker PHP API"
date: 2007-09-25
archive: sfr
---

This is a quickie: If you were using the beta release of the PHP API for FileMaker, there are some things you should know.

First, the beta API expires in October 7th, 2007. If you have a live site using the API, **you must update to FileMaker 9 and the new API** before then or your site will stop working. Now is the time to make the switch, before you have to do it in a pinch.

Second, there are some differences between the beta API and the final API which you may need to address. The change that affected me most is new behavior in the `getField()` method of the `Record` object. In at least some versions of the beta api, this method returned the raw field data unchanged. But in the final API, it will “html encode” special characters in the field. So if you have, for instance, a < in the field, the API will turn it in to `&lt;` so that it shows as a proper less-than-sign on the rendered page.

This is a good change because it makes it less likely you’ll build fragile pages. But it breaks in one common case: when you have HTML in your fields that you want to render. In many situations, I allow users to enter formatted data in a FileMaker field (custom sizes, fonts, and point sizes). I then use the `GetAsCss()` function to convert this text to html-marked-up code that preserves the formatting. In this situation, I want the actual HTML to render on the page, instead of being escaped.

{{< warning >}}
{{< ed "I can't believe I didn't point this out when this was originally posted, but please note: **unencoded HTML can be *dangerous***. It can expose you to [CSRF attacks](https://owasp.org/www-community/attacks/csrf). If you do what is described in this article, make absolutely certain the HTML coming from the database can be trusted. Never ever ever do this with data in fields that was originally collected from some public web form or other source not under your control." >}}
{{< /warning >}}

In this situation, you need to switch to the `getFieldUnencoded()` function in the PHP API. Just change `getField` to `getFieldUnencoded`. The object references and parameters are all the same.

{{< note >}}
I did not keep up on the PHP API betas as well as I should have. It is possible this change (and others) came in various beta releases, which I never bothered to test. That is very much my own problem, but I suspect there are others out there in the same boat.
{{< /note >}}

I should stress that this is a *good* change to the API. And it is pretty trivial to find the places in your code where you really want un-encoded output and fix them.

If you discover other gotchas that need to be fixed, post them in the comments below. I have converted one site successfully to the new API, and it only took a couple hours to do everything.
