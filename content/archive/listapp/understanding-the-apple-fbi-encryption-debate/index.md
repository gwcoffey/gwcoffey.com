---
title: UNDERSTANDING THE APPLE/FBI ENCRYPTION DEBATE
date: '2016-02-18T17:22:07+00:00'
archive: listapp
likeCount: 57
relistCount: 16
---

Disclaimer: I am an Apple employee. So 1: My bias is showing. 2: It should go without saying that I don't speak for Apple in any way. These are my own thoughts.

{{< listapp/list order=false reverse=false >}}

   {{< listapp/item title="As has been widely reported, Apple is fighting a court order to \"unlock\" an iPhone used by one of the shooters in the San Bernardino terrorist attack last year." >}}

   {{< listapp/item title="Here's the New York Times on the ruling:"
      desc="http://mobile.nytimes.com/2016/02/17/us/judge-tells-apple-to-help-unlock-san-bernardino-gunmans-iphone.html?referer=https://www.google.com/" >}}

   {{< listapp/item title="And here's Apple's open letter explaining their position:"
      desc="http://www.apple.com/customer-letter/" >}}

   {{< listapp/item title="What does the FBI want?"
      desc="The FBI wants to see the data (notes, emails, phone logs, iMessages, apps, etc...) stored on the phone." >}}

   {{< listapp/item title="Why can't they get it themselves?"
      desc="Getting this data off someone's iPhone when they have a passcode enabled is very difficult for three reasons: Full device encryption, passcode throttling, and automatic erase." >}}

   {{< listapp/item title="What is full device encryption?"
      desc="By default, iPhones use \"full device encryption\" meaning any data in the flash storage on the device is locked with a secret key based on your passcode. The data is \"cryptographically secure\" meaning it is impractical to \"unscramble\" it without knowing the secret key. Even if you open the phone and take out the \"memory\" it is impossible to interpret the data contained therein if you don't have the passcode. So the FBI needs to figure out the passcode." >}}

   {{< listapp/item title="What is passcode throttling?"
      desc="The phone is capable of verifying a passcode very quickly. Theoretically it could check ten thousand passcodes in about fifteen minutes. But when you enter the wrong passcode it makes you wait, a little longer each time, making attempting many different codes impractical." >}}

   {{< listapp/item title="What is automatic erase?"
      desc="In addition to throttling, if someone guesses the wrong code too many times the phone will assume you are trying to break into it and automatically erase itself." >}}

   {{< listapp/item title="Why does the iPhone do these things?"
      desc="Increasingly your phone is a repository for more and more data, and ever more important data. Phones often have financial information, credit card payment capabilities, private texts to your significant other, health and healthcare information… And phones are small and easy to steal. It is important to protect this information from criminals. It is also important to protect information from governments and agencies around the world who may not be as benevolent as the United States government." >}}

   {{< listapp/item title="What is the FBI asking Apple to do?"
      desc="Apple says they have cooperated with the FBI on this case, handing over records, iCloud data, and advice. But they have said that they cannot \"unlock\" the phone because it is designed to be unbreakable, even by Apple themselves. But security on this order is very complex and the FBI has devised a way to break into the phone. Their method requires Apple to write special software and install it on the phone to break through the protections on the device." >}}

   {{< listapp/item title="Why can't the FBI write the custom firmware themselves?"
      desc="To prevent exposing your iPhone to this kind of attack by third parties, Apple has designed the phone so that all firmware must be \"cryptographically\" signed by Apple before the phone will run it. This just means there's another secret key that only Apple knows and without this key you can't make firmware for an iPhone. This one key is arguably Apple's biggest secret and they have a tremendous interest in keeping it secret." >}}

   {{< listapp/item title="What would the software do?"
      desc="The FBI wants Apple to write a custom \"firmware\" for this phone that disables passcode throttling and automatic erase. Once this is installed on the phone (using a special mode available on every iPhone to install updated software without booting it in case your phone gets \"bricked\"), the FBI or Apple would be able to determine the passcode using a \"brute force\" attack on the device." >}}

   {{< listapp/item title="What is a brute force attack?"
      desc="This simply means guessing a password by trying every possibility. If the phone has a 4 digit passcode, you can simply try everything from 0000 to 9999 until you find the right code. This gets harder with longer or more complex passcodes, but without throttling and automatic erase, there's plenty of time to crack the passcode." >}}

   {{< listapp/item title="Don't companies have to give data to police all the time?"
      desc="Yes! What makes this case special is that the government is ordering Apple to create new software. There is no legal precedent for how far the government can go to force them to act in this way. Apple does not have the data and explicitly designed the system so that the data is completely secure. The government is compelling them to find a way around it, using their knowledge of the system, and crack it for them. The FBI is arguing that the \"All Writs Act\" gives the government this authority." >}}

   {{< listapp/item title="What is the All Writs Act?"
      desc="It is a very old 18th century law that serves as a sort of catch-all for cases where the government wants to order someone to do something. It is very broad and new uses of the act usually require judicial interpretation. The important part of the law is simply: \"The Supreme Court and all courts established by Act of Congress may issue all writs necessary or appropriate in aid of their respective jurisdictions and agreeable to the usages and principles of law.\" \"Writ\" just means \"court order\"." >}}

   {{< listapp/item title="Does the All Writs Act say the court can order Apple to do this?"
      desc="It is unclear. The FBI says yes. Apple's lawyers say no. A federal judge has now said yes. I'm not a lawyer but I would guess the argument hinges on interpretation of the \"agreeable to the usages and principles of law\" part. Is compelling Apple to act in this way agreeable to legal principles? The courts will decide." >}}

   {{< listapp/item title="Is Apple breaking the law by refusing to comply?"
      desc="No. Apple is not refusing a court order. They are fighting the order using the standard legal process. A lower court has ruled that they must create the firmware. Apple will appeal to the appellate court. If they lose that appeal the Supreme Court may agree to hear the case or let the lower ruling stand. If the Supreme Court orders Apple to comply they will have no choice." >}}

   {{< listapp/item title="Is this a \"back door\"?"
      desc="There's a semantic debate going on in the media right now about this. Some people are claiming that this will allow anybody to unlock any phone if the software \"gets out\" or that the FBI will be able to secretly spy on anyone's phone. This is not true. It is technically possible to create the firmware such that it only works on this one phone and the court order allows Apple to do the work and hand the data to the FBI so the FBI never has possession of the hacked firmware." >}}

   {{< listapp/item title="So is it a \"back door\"?"
      desc="Although it isn't a blanket tool to spy on any phone, it is a legal mechanism by which the FBI (with court order) or any other entity with legal force, can require Apple to bypass device security. There's no obvious way to ensure that only the American government demands use of this technique and no way to know how often the FBI and local police investigators would require Apple to hack a phone in this way. So from that perspective it is a back door." >}}

   {{< listapp/item title="Why doesn't Apple want to do this?"
      desc="I don't speak for Apple. All I know about their motivations comes from their public statement at the link above." >}}

   {{< listapp/item title="Why do you *think* Apple doesn't want to do this?"
      desc="What part of \"I don't speak for Apple\" do you not understand?" >}}

   {{< listapp/item title="Ok ok, why should we care if Apple does this?"
      desc="Nobody I know thinks we should be protecting murderers from the full investigative power of the US government. The important question of this case is how far the government can go toward compelling an individual or company to provide material support against their own interests. The FBI is asking Apple to exploit a weakness in their own phone. Apple engineers should be focused singularly on *fixing* that weakness, not exploiting it." >}}

   {{< listapp/item title="If Apple fixes the weakness then there's no more problem right?"
      desc="This gets to the heart of the issue. Suppose Apple fixes this weakness so that new iPhones can no longer be hacked in this way. Using precedent established in this case, it would be reasonable to assume that the FBI could then compel Apple to find and exploit a new weakness in the new phone. Apple is then in the unfortunate position of devoting engineering resources to circumventing the very systems they're trying to create." >}}

   {{< listapp/item title="Are there other concerns?"
      desc="Yes: A precedent that says the government can compel a company to create new software to aid their investigation could be used to compel Apple to weaken other systems. iMessages, for example, are very secure. Apple \"can't\" read them in transit. But it is the same kind of \"can't\" here. Apple engineers could probably hack the system in some way so that they can be intercepted. We should not want Apple to be in that kind of business." >}}

   {{< listapp/item title="Doesn't Apple have a business interest here too?"
      desc="Yes absolutely. First, almost 70% of apple's customers are not in the United States. Those customers are often legitimately concerned about American government overreach vis a vis the Snowden revelations because they don't have the constitutional protections Americans have. Being cozy with the post-Snowden USA could hurt Apple's business. Also, Apple uses its privacy position as a competitive differentiator in its battle with Android for the phone market. Appearing strong on privacy is good PR." >}}

   {{< listapp/item title="Does Apple really want to be seen supporting terrorists?"
      desc="I don't speak for Apple but it is unfortunate that this complicated legal question turns on such a heinous case. Nobody is on the terrorist's side here, but many reasonable parties are on the side of independence from government intrusion into systems meant to restore the privacy we gave up during the digital revolution." >}}

   {{< listapp/item title="Who agrees with Apple here?"
      desc="The tech industry has come out strongly in support of Apple, including Facebook, WhatsApp, and Google. The Electronic Frontier Foundation (an industry privacy watchdog) has announced they will be writing a legal brief in support of Apple. Most privacy scholars side with Apple and legal scholars seem to be split. Whatever happens, this is a fascinating case and it will be fun to watch it unfold." >}}

{{< /listapp/list >}}
