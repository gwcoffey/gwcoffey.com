---
title: "OAuth is Right for Twitter"
date: 2011-05-18
archive: posterous
---

There's been [some grumbling][gruber] recently about OAuth and the Twitter API. Gruber posits that this is a bad thing dressed up to look like a good thing. But really, it is a good thing.

[gruber]: https://daringfireball.net/2011/05/twitter_shit_sandwich

The whole point of OAuth is to allow me to authorize one service (like Flickr, Posterous, FourSquare, Instagram, or, yes, even a full Twitter client) to interact with another service (like Twitter) on my behalf without giving them my password. From [the OAuth about page](http://oauth.net/about/):

> OAuth is about giving access to your stuff without sharing your identity at all.

Here's the thing. When you give some service your Twitter username and password, at least three bad things happen:

1. The service itself, anyone who works for whoever runs the service, or anyone who ever steals their data has your username and password. They can operate on your behalf on twitter in any way they see fit, including deleting your data, closing your account, sending tweets, approving follow request, following other people, reading private information, changing your profile, etc… 
2. If, like a vast majority of people, you use the same username and password for other services like Gmail, Amazon.com, or your work VPN, all those people can do all kinds of other things on your behalf. In this sense, it isn't just like giving away your house key. It's like giving away your entire keyring, with the keys to your office, mailbox and car. 
3. If you ever change your password, the service will stop working. This is especially annoying with something like Twitter, which you might have connected to several services.

OAuth solves all these problems:

1. Although in general OAuth still allows the service to act on your behalf, they are limited to the sorts of access appropriate from the API. They can't decide instead to log in as you, pretend to be you, and do things an API doesn't allow. And OAuth makes it easy for you to take away their access in the future if you decide to, without interfering with other systems you've granted access. Finally, OAuth supports the idea that you might want to limit the kinds of access you're granting. This is exactly what Twitter is doing with OAuth: Allowing you to decide if the third party client can read your direct messages.
2. Since you never divulge your password to any third party during an OAuth transaction, you don't need to trust every single third party application to treat your password with respect. You only need to trust Twitter with that sensitive information. This helps bolster the third party ecosystem by reducing the trust level required of a client.
3. If I change my password, it has no impact on services that use my account with OAuth. Instead, I manage their access through a separate, and very straighforward interface.

Gruber points out that with Twitter's old xAuth authentication system, the third party service only holds the password for a moment, while establishing the connection, They then forget the password. This solves problem #3, but it does absolutely nothing to fix the first two problems unless you trust the third party to do the right thing out of the goodness of their hearts.

He also gripes about the fact that Twitter's own native client won't use OAuth, as though this proves that the OAuth requirement is bunk. But, of course, *Twitter already has your password*. If you don't trust Twitter with your username and password, then you don't trust Twitter, period. It is 100% reasonable for Twitter's own clients to use a less cumbersome authentication scheme.

The most important thing to understand, though, is that the purpose of OAuth is not to make savvy hacker nerds safer. I am perfectly capable of protecting my Twitter credentials, using multiple passwords, sniffing out spammy sites, and so on. But Twitter has hundreds of millions of users, many of whom are not (and should not have to be) technology-savvy. If Twitter offers an alternate authentication mechanism to OAuth, then unscrupulous phishers and spammers will use it, and Twitter users will continue to be taken in. The only way to fix that problem is to remove the ability for third party applications to access Twitter accounts in an unsafe way.

I completely agree that the OAuth flow is cumbersome compared to the alternative. But that just means we should be working to make OAuth better (or find a better alternative). Of course everybody gets that OAuth isn't ideal for native clients. (Although I think Gruber over-states the case. It is, in practice, fairly smooth and easy to get a client connected to Twitter using OAuth if the client is implemented well.)

The OAuth people know, better than anyone, that this is a problem. From [the proposed OAuth 2.0 introduction page](http://hueniverse.com/2010/05/introducing-oauth-2-0/):

> In practice, the flow works fine for web-based applications but provides an inferior experience elsewhere.

Let's keep our eyes on the ball.

