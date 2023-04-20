---
title: "On Thinking Machines"
date: 2023-04-22
summary: "With all this talk about thinking machines it seems like a good time to point out that computers don't even understand math, which is something they're very very good at."
tags:
  - Essay
---

There's a lot of talk right now about *Artificial Intelligence* and uncanny "thinking" programs. Some  of these claims are [obviously outlandish][google]. Nobody who's not confused seriously believes ChatGPT has *feelings*. That said, some of the technical capabilities of these programs is verging into {{< q cite="Arthur C Clarke" >}}…indistinguishable from magic{{< /q >}} territory.

[google]: https://www.theguardian.com/technology/2022/jun/12/google-engineer-ai-bot-sentient-blake-lemoine

I *suspect* that computers are no closer to anything like real intelligence today than they were fifty years ago. And if I'm wrong—if so-called AI is steadily progressing toward some kind of [singularity][singularity]—it says more about the nature of intelligence itself, and by extension humanity, than it does about computers.

[singularity]: https://en.wikipedia.org/wiki/Technological_singularity

When ChatGPT says something intelligent about an Emily Dickinson poem, you can't help but wonder what's going on inside it's head. It's hard to reason about how it does the things it does without falling into the trap of assuming some kind of *understanding*. But let's set that aside. Let's instead look at something computers are undeniably good at: **Math**. Computers are *way* better at arithmetic than they are at natural language. And the thing is, computers don't really understand math either. 

## What's a Computer?

When we talk about computers we really mean two different things. On the one hand a computer is a machine, with physical parts. I'm pressing the keys of one right now. I think it's fair to say the machine itself doesn't *know anything*. After all it's just a pile of plastic, silicon, copper, and glass.

The other meaning of computer is harder to define. It's the *concept* of computer. This computer represents some kind of logical-mathematical capability that sits, taxonomically, above all those machines. From Babbage's [Analytical Engine][babbage] to experimental quantum computers, this conceptual computer is concerned with what is possible by the creative application of information theory to various problems.

[babbage]: https://en.wikipedia.org/wiki/Analytical_engine

Maybe this computer can think?

Let's probe that. One way to characterize this conceptual computer is to think about *what they do*. And what do they do? They carry out complex, minutely defined logical instructions. You might be thinkings, "but computers do so much more than logic." They can do complex math, for instance, or brighten photographs, or play podcasts, or generate realistic images from vague descriptions.

But the computer doesn't really do any of those things. People do those things. People with brains. What makes the computer special is that is provides a powerful foundation upon which people can do these things *in the abstract*. In other words, a person can, through many means, brighten *a photograph*. Or a person can construct a computer that can in turn brighten *any photograph* quickly and cheaply. This is powerful. This is what Steve Jobs meant when he described the computer as {{< q cite="Steve Jobs" >}}a bicycle for the mind.{{< /q >}}

It's tempting to think the computer is brightening the photograph. But at no point in that process does the computer itself (or the software on the computer) know what a photograph is or what bright means. As I said, computers don't even know what math is, and they're very very good at math.

## Programming

How can a computer do math without understanding math? To make sense of this you need to understand a little bit about what programmers do. Programming a computer has three distinct steps:

1. Encoding
2. Transformation
3. Decoding

When we want the computer to do something—brighten a photograph for instance—we first have to *turn the photograph into something the computer can work with*. This is encoding. We then give the computer a complex set of minutely defined instructions to *transform* that encoded data in some way. And finally we *decode* that result back into something meaningful to us.

To illustrate this, let's program a computer to do very simple arithmetic. To keep this from getting too complicated we'll limit ourselves to small non-negative integers less than four. In other words, our program will only be able to do addition with zero, one, two or three. 

### Encoding

Our first task as the programmer of this addition computer is to dream up an *encoding*. An encoding is a way to represent (precisely or otherwise) something real in *binary*. Programmers have to do this because we want the computer to *do* something, and binary is the only thing modern computers can do anything with. (If you're curious why this is the case, see Ones and Zeroes below.)

{{< aside title="Ones and Zeroes" >}}

If you ask a random person on the street how computers work, chances are good they'll say something about "ones and zeroes." This is a useful way to think about it, and I'm not faulting the characterization. But it is really just a shorthand that makes it easier to talk about what the computer is doing. If you crack open a computer you will not find any ones or zeroes inside. *Computers don't know what ones or zeros are.* The important point is not ones and zeros. The important point is *binary*.

In a sense a computer is a tool to simulate some subset of reality in a micro-universe within which we can manipulate things quickly, cheaply, and repeatably. And for reasons of both engineering practicality and mathematical purity, we want that micro-universe to be as simple as possible.

The real universe is pretty complex. It has a lot of stuff in it. The binary universe of the computer, by contrast, has just one kind of thing. Why just one? Because zero is not enough to do anything useful. And two is more than enough. And what is that one kind of thing? *It doesn't matter*. In her memoir *Holy The Firm*, Annie Dillard said, {{< q cite="from Holy the Firm by Annie Dillard" >}}A name, like a face, is something you have when you’re not alone.{{< /q >}} In a universe with only one kind of thing, that thing doesn't need a name. It simply is.

The real universe is over-complex in another way too: the stuff is all over the place. Our universe has (at least?!) three spatial dimensions which is, I think, the primary reason its easy to lose things. The binary universe has one dimension. This is again driven by expediency. Zero dimensions are too few and two are more than we need.

There's a third simplification, which is more subtle. The binary universe is *discrete*. This means there are clearly defined places where things can be. They cannot overlap. At any given "point" their either is something, or there is nothing. And there's no way to, like, nudge something over a little bit.

{{< figure src="a-simple-universe.png"
    alt="A diagram showing four parts. On the left, a box with a wild assortment of objects (balloons, rocket shipts, whales, trees, houses…). To the right of that, all the objects have been replaced by whales. Further to the right, the whales are in one horizontal line. And finally on the far right, each whale is in a distinct little box."
    title="Figure 1: Three Steps to A Simplified Universe"
    caption="The real universe (1) is complicated. The computer envisions a much simpler universe with (2) only one kind of thing, (3) in a single dimension with (4) discrete locations." >}}

This super simple view of things may seem hopelessly limited. But it turns out it is *enough* to *simulate* almost *limitless complexity*. And by being so conceptually simple, we can build machines that manipulate this universe very efficiently. (It seems paradoxical, but in practice a machine that does a few simple things can accomplish complex tasks *more quickly* and *more cheaply* than a machine that does complex things. This is because by simplifying the architecture, we can make it run very fast. And doing billions of small fast steps gets the job done faster than a few large steps.)

With these restrictions in place, we can very easily conceive of any possible state in this micro-universe. Each "spot" either has something, or it doesn't. That's it. When we say "ones and zeroes" we mean you could represent this universe like this: `10110`. The ones mean something is there and the zeroes mean that spot is empty. Since the universe is one-dimensional and discrete, a simple list of ones and zeros like this can *perfectly* characterize everything. 

In practice the binary micro-universe of the physical computer can take many forms. In modern computers, it is sometimes represented by high and low voltage, by pools of electrons, by magnetic polarity, or even by blurry spots on an otherwise crystal-clear mirror. Engineers have dreamed up countless *physical embodiments* of the binary universe. But none of that matters to how the conceptual computer actually computes.
{{< /aside >}}

Encoding isn't as esoteric a concept as you might think. Chances are you are familiar with many common encodings. The GIF, for example, is an encoding for animated images. And JPEG is an encoding for photographs. You may have heard of Unicode, which is a standardized encoding for text. Or MP3, an encoding for music. Humanity has created thousands of standardized encodings so that many computer programs can all work together more easily.

{{< note >}}
This realization—that we can *represent* almost any useful thing in binary so that machines can work with it—did not come easily. Early work with computing machines was entirely focused on numbers and mathematics. In 1842 Ada Lovelace wrote this:

> The Analytical Engine might act upon other things besides number, were objects found whose mutual fundamental relations could be expressed by those of the abstract science of operations, and which should be also susceptible of adaptations to the action of the operating notation and mechanism of the engine...

She was talking about encoding in the way we think of it today, but nobody took her seriously until a hundred years later.
{{< /note >}}

Encoding is the task of finding useful binary arrangements to *represent* what we really want to work with. For our simple addition program, we want to work with small non-negative integers. So we need to dream up an encoding. You can see one idea in Figure 2 (from now on I'll represent binary as shaded and empty boxes).

{{< figure 
    src="encoding-1.png"
    alt="three sets of three boxes each. The first, labeled \"1\" has the leftmost box colored in. The second, labeled \"2\" has the middle box colored in. The last, labeled \"3\" has the right-most box colored in."
    title="Figure 2: A Simple Encoding"
    caption="Here's one possible binary encoding for small non-negative integers. To represent \"1\" we put something in the first spot. For \"2\" we use the second spot. And so on." >}}

Now that we have an encoding, we need to think about how to fit all this into the simplified binary universe of the computer. Remember we already said we want to be able to add numbers between zero and three. And we have two of those numbers. So we need enough space for two input values. As Figure 3 shows, six spaces and some assumptions about what goes where will do the trick.

And that's it. We can now encode the input in a way the computer can use. Hopefully it's clear that this encoding schema can unambiguously handle any numbers we throw at it, as long as those numbers are integers, not negative, and no larger than three. This is pretty limiting, but it will keep the example simple. Of course real computer programs deal with larger numbers, negative numbers, and numbers with decimal points. They do this using [more][2c] [advance][fp] [encodings][bcd]. (And as we'll discuss later, even for the simple use case we're limiting ourselves to, the encoding we've defined isn't a very good one.)

[2c]: https://en.wikipedia.org/wiki/Two%27s_complement
[fp]: https://en.wikipedia.org/wiki/IEEE_754
[bcd]: https://en.wikipedia.org/wiki/Binary-coded_decimal

<figure id="encoding-demo" class="interactive">
    <div class="figure-item">
        <form>
            <select class="a">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option> 
            </select>
            &nbsp;+&nbsp;
            <select class="b">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option> 
            </select>
        </form>
        <ol class="universe">
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
        </ol>
    </div>
    <figcaption>
        <h4>Encoding Demo</h4>
        <p>Change the inputs above to see how the input data is encoded in binary.</p>
    </figcaption>
</figure>

## Transformation

1. if none of a, b, or c is set, copy d, e, and f into g, h, and i
2. if a is set, copy d, e, and f into h, i, and j
3. if b is set, copy d, e, and f into i, j, and k
4. if c is set, copy d, e, and f into j, k, and l

Now that we have an encoding, we can convert the numbers we want to add into binary so the computer can do something with them. For example, suppose we want to add `2 + 3`. Remember our binary universe is one-dimensional and discrete, so we need to put these numbers side-by-side. We also need a place to put the answer. Since we're dealing with small integers between zero and three, we need three spots for each input number. And since the biggest answer we can get is `6`, we need at most six spots for the answer. With all this in mind, a universe that can hold `3 + 3 + 6 = 12` spaces is big enough for our computer.

<figure id="full-universe" class="interactive">
    <div class="figure-item">
        <ol class="universe">
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
        </ol>
    </div>
    <figcaption>
        <h4>Our Universe</h4>
        <p>This is a binary universe suitable for our small adding computer. If you wanted to handle larger numbers you'd need more boxes: a bigger universe. (This is roughly analogous to a computer with "more memory.")</p>
    </figcaption>
</figure>


This encoding is perfectly valid, and we absolutely could use it. But if you think about it for a minute, you might spot an *inefficiency*. Figure 3 explains.

With this in mind, let's try again. There's a little trick we can use. If we assign each box a value, we could add those values up to produce our final value. Figure 4 shows an encoding like this.

Of course once the computer does something with some binary it is generally not useful to us until we turn that result back into meaning. This is a form of encoding too although in this direction we anthropocentristically call it *decoding*.

So this is the first task of the programmer who wants to get a computer to do something useful: encode the messy real world inputs as simple binary, and then encode simple binary outputs as messy real world stuff.

The second task is easier to describe and generally far harder to do: give the computer a long list of minutely defined logical instructions to mutate some binary so that the input turns in to the desired output. This part of the process is often esoteric bordering on absurd.

How about an example. Suppose you want to get a computer calculate two plus two. You'd be forgiven for thinking computers can *just do this*. But they can't. Remember computers don't know what two is. To solve this we need to come up with an encoding. Of course our encoding needs to deal with more than just *two* because we know two plus two is four, and four is something new. So *as an intelligent human* we decide to build a more capable encoding for *any integer*. Here's our encoding rule:

> Convert the integer to base 2 then treat the resulting number as a binary value.
>

Here are a few examples of this encoding. (I'll use ones and zeros to represent the binary. I am only human.)

1: 1
2: 10
3: 11
4: 100
5: 101
6: 110
7: 111

This encoding is a pretty good one because it is easy to understand and it can handle any non-negative integer, no matter how big. (It cannot handle negative integers because the universe of binary has only one thing, and we already called that thing `1`. So there's nothing else left to mean `minus sign`. If we wanted to handle negative integers too we'd need something [much weirder](https://en.wikipedia.org/wiki/Two's_complement).)

Ok now we can encode integers. What about decoding? That's easy, just treat the binary value as a base two number, and convert it back to base ten. (In this example, our decoding is just our encoding in reverse, but this is not always the case.)

With encoding and decoding solved, we can now think about getting the computer to do two plus two. Since we're focused now on the second task of the programmer (instructions) let's re-write out problem without the mandatory encoding and decoding.

Calculate 10 plus 10.

(In your head you probably can't help reading that as ten plus ten. That's ok. You have to do this shit for years before that stops nagging at you. But really, if you're being correct, that says "two plus two". We've just done the encoding already so it looks alien to us, and very very approachable to a computer.)

So what series of steps should the computer carry out to add these two numbers? If you're thinking "just tell the computer to do the ADD instructions" then you're falling victim to *abstraction*. Computers don't know what ADD means. (I mean they do, but only because some *other* programmer working for, like, Intel, already wrote that programe and etched it into the chip like God on Mount Sainai. We're doing fundamentals here so we need to write that program ourselves.)

So what *can* a computer do? Two things relevant to this discussion: boolean math and branching. Boolean math just means ands, ors, and some other less familiar stuff. And branching means, if such and such, go back to step 1. Or as long as so and so keep doing step two.

It helps sometimes to clearly define what we *expect* the computer to do in our one simple case. Specifically:

> Given 10 and 10 as input, produce 100 as output.
>

Here's one very simple program that can accomplish this:

1. ignore every input and just output `100`

This programe, every time it is run, will indeed calculate two plus two. You might think this is a cheat because of course it isn't calculating anything at all. It's just parroting the *expected answer*. But as I'm trying desperately to explain here, when you ask a computer to do something, it *almost never actually does that thing*. Instead it does tens of millions of other very strange things that have the effect, when all is said and done, of producing an output that, when decoded, give you the user the uncanny impression that the computer *did the thing*. It didn't. It really didn't.

But validity aside, this program is pretty lousy. Sure it meets the specification, but this is why programmers harp on specifications all the time. The specification was dumb. So let's write a better spec:

> Write a program that can add two integers, each between zero and two inclusive.
>

This program is still pretty stupid. I mean it would probably be easiest to just truth-table all the possible states and be done with it. But for the sake of argument lets treat it like a real programming challenge.

Ok with that out of the way, back to our example:

> 10 10 -> 100
>

**What instructions can we give the computer to produce this result?**

One thing we could do is borrow from what we all know about addition from elementary school. Line up the numbers and add them digit by digit (don't forget to carry the one!)

You might think this doesn't count as a program because this is just what addition is, and I said the program doesn't really do the thing. Boy have I got a surprise for you: This is not what addition is. It is a *program* that first graders learn to do manually so they can accomplish addition. It even has a name! It's called "algorism", it was invented by a guy named Muhammad ibn Musa al-Khwarizmi over a thousand years ago, and it is what we get the word "algorithm" from. Here's a thought experiment: What is 90 plus 20? I'm sure you figured out the answer is 110, and I'm quite sure you didn't carry any ones. There are lots of ways to figure out the answer—memorization of cases, arithmetic tricks—but none of those are addition. Does this mean people don't really think? I have no opinion on that. I'm only here to argue that I'm pretty sure computers don't.

Ok so we "line up" our inputs:

```
10
10

```

If a human did this problem, the next step would be to add the ones place. But again, computers can't add. So we need to try something else.

In the ones place we really have four possibilities:

- two zeros (that's what we have in our example case)
- a zero and a one
- a one and a zero
- two ones

It helps to put these values in a kind of chart like this:

```
  0 1
0
1

```

In each blank we can write the result of a boolean operation. Here's AND:

```
  0 1
0 0 0
1 0 1

```

And here's or:

```
  0 1
0 0 1
1 1 1

```

And here, for what it's worth, is what we *want* our program to do with this first digit:

```
  0 1
0 0 1
1 1 0 (carry the one!)

```

Darn. Neither AND nor OR does exactly the right thing. Since this is not a programming class I'm just going to give you the right answer here:

A OR B AND NOT (A AND B)

This means our *output* digit for the ones place is `1` if:

- A is 1
- OR B is 1
- AND A and B are not *both* 1

So here's the first three lines of our program:

1. Call the ones place of the first input A
2. Call the ones place of the second input B
3. Put (A OR B AND NOT (A AND B)) into the ones place of the output

If we run this program we get:

10 + 10 -> 0

That may not look like much but it's like 33% of the right answer. So what's next? Well according to Muhammad ibn Musa al-Khwarizmi we move on to the tens place. Except this is binary so its called the twos place. (Trust me.) If we visualize where we are so far we have:

```
  10
+ 10
----
   0

```

For the next step we need to "add" those ones. On the bright side we already figured out how to do that:

A OR B AND NOT (A AND B)

So here's a revised program:

1. Call the ones place of the first input A
2. Call the ones place of the second input B
3. Put (A OR B AND NOT (A AND B)) into the ones place of the output
4. Call the twos place of the first input A
5. Call the twos place of the second input B
6. Put (A OR B AND NOT (A AND B)) into the twos place of the output

This is a little confusing but when we "add" 1 and 1 we get zero. But you already know this really. After all if you have:

```
  15
+ 25
----

```

The first number you write down is `0`. Its just that two is the ten of binary. So running our program we now have:

```
  10
+ 10
----
  00

```

This is getting there but we're still not done. Remember: carry the one! So we need a little more to our program:

1. Call the ones place of the first input A
2. Call the ones place of the second input B
3. Put (A OR B AND NOT (A AND B)) into the ones place of the output
4. Call the twos place of the first input A
5. Call the twos place of the second input B
6. Put (A OR B AND NOT (A AND B)) into the twos place of the output
7. If (A AND B) then put a one into the fours place

And there we have it. A program that can add two plus two. Astute readers are probably already scowling because this program doesn't actually work very well. It works for two plus two but not one plue one. That's because we never carried the one from the ones place. So let's correct it:

1. Call the ones place of the first input A
2. Call the ones place of the second input B
3. Put (A OR B AND NOT (A AND B)) into the ones place of the output
4. Put (A AND B) into C
5. Call the twos place of the first input A
6. Call the twos place of the second input B
7. Put (A OR B AND NOT (A AND B)) into D
8. Put (C OR D AND NOT (C AND D)) into the two place of the output
9. Put (C AND D) into the fours place of the output

Nine steps. Just ANDs and ORs. Combine this with out encoding and decoding rules and we've "taught" the computer to add tiny positive integers.

Now look at those steps and ask yourself: Is that math? I think any reasonable person would conclude that no, it is not math. It is an esoteric series of steps that has the side effect of kind of accidentally doing arithmetic.

Of course it was no accident. It was minutely defined *by a person* to produce an output indistinguishable from math. To the computer, two plus two is just another way of saying "meaningless binary data and a lot of meaningless instructions". But to a human, even though the steps to get there are not like any math you would do, the result is the same.

In other words, the computer can *do* may, but it doesn't *know* math. This is how everything works in computers. *Everything*.