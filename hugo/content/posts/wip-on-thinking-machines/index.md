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

<figure>
    <div id="simple-encoding" class="figure-item">
        <div class="ex">
            <ol class="universe">
                <li data-full="true"><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
            </ol>
            <p><code>Encoded 0</code></p>                    
        </div>
        <div class="ex">
            <ol class="universe">
                <li><div></div></li>
                <li data-full="true"><div></div></li>
                <li><div></div></li>
            </ol>
            <p><code>Encoded 1</code></p>                    
        </div>
        <div class="ex">
            <ol class="universe">
                <li><div></div></li>
                <li><div></div></li>
                <li data-full="true"><div></div></li>
            </ol>
            <p><code>Encoded 2</code></p>                    
        </div>
    </div>
    <figcaption>
        <h4>A Simple Encoding</h4>
        <p>Here's one possible binary encoding for small non-negative integers. To represent <code>0</code> we put something in the first spot. For <code>1</code> we use the second spot. And so on.</p>
    </figcaption>
</figure>

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
            </select>
            &nbsp;+&nbsp;
            <select class="b">
                <option>0</option>
                <option>1</option>
                <option>2</option>
            </select>
        </form>
        <ol class="universe">
            <li data-full="true"><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li data-full="true"><div></div></li>
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

With our input encoded in binary we're ready to give the computer instructions. We want the computer to *transform* this bit of binary into something different. And that something different is also binary (remember, binary is all the computer can handle).

Let's look at an example. Suppose we want to add `1+2`. If we encode this in binary, and leave a little space in which to put the answer, we have this:

<figure>
    <div class="figure-item">
        <ol class="universe">
            <li><div></div></li>
            <li data-full="true"><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li data-full="true"><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
        </ol>
    </div>
    <figcaption>
        <h4>The Setup</h4>
        <p>Remember the first three spots hold our first number (<code>1</code>) and the next three hold the second number (<code>2</code>). We also left five spaces to hold the answer.</p>
    </figcaption>
</figure>

The job of the transformation instructions is to change this ten-unit binary representation into some new ten-unit binary representation that we can then *decode* to get an answer. But remember the computer is not intelligent, so these instructions have to be very simple, very clear, and very carefully defined. Here's my proposal for a set of transformation instructions:

1. If `A` is set, copy `D`, `E`, and `F` into `G`, `H`, and `I`
2. If `B` is set, copy `D`, `E`, and `F` into `H`, `I`, and `J`
3. If `C` is set, copy `D`, `E`, and `F` into `I`, `J`, and `K`

{{% note %}}
There are many ways to do this. I'm sure if you spent some time thinking about it, you could come up with completely different instructions that, in the end, give the same result. 
{{% /note %}}

If you apply these steps one by one to the input above, you'll quickly discover that only step 2 actually applies, because the `A` box is filled in. Follow that step and you end up with this:

<figure>
    <div class="figure-item">
        <ol class="universe">
            <li data-full="true"><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li data-full="true"><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li data-full="true"><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
        </ol>
    </div>
    <figcaption>
        <h4>Transformed</h4>
        <p>After transformation, we end up with this. Space <code>J</code> has been filled in. Remember the "answer" starts in <code>G</code>. <code>J</code> is four spots from <code>G</code> and that's exactly what we want becuase <code>1+3=4</code></p>
    </figcaption>
</figure>

These steps don't just work for `1+3`. They will work for *any* allowed input value. This may be surprising to you. There's an interactive sample in the next section where you can play with various inputs and see how the steps behave. But before that we need to talk about decoding.

## Decoding

With transformation complete, we need to *decode* the answer. In this case, decoding is just doing the encoding in reverse. We look at the last six spaces in our binary data, find the space that's filled in, and count out its position. This count is our "answer".

{{% note %}}
It isn't always the case that the decoding step is just encoding in reverse. Many computer systems transform input of one encoding into output of an entirely different encoding. The [Midjourney][midjourney] system for instance encodes a textual description as input, and decodes the result to a picture on your screen. Our example program is a simplified case.
{{% /note %}}

[midjourney]: https://www.midjourney.com

The example below lets you see all this in action. You can enter two numbers, see how they're encoded, see how the transformation steps are evaluated, and then see the result being decoded. Hopefully this will convince you that our program can indeed add small non-negative integers.

<figure class="interactive">
    <div class="figure-item">
        <computer id="simple-adder">
            <form slot="controls">
                <select name="a"></select>
                &nbsp;+&nbsp;
                <select name="b"></select>
                =
                <input type="text" readonly name="output">
            </form>
        </computer>
    </div>
    <figcaption>
        <h4>Our Computer</h4>
        <p>Change the inputs above, then click Start to see our computer run.</p>
    </figcaption>
</figure>

<figure id="simple-adder" class="interactive">
    <div class="figure-item">
        <form>
            <select name="a">
                <option>0</option>
                <option>1</option>
                <option>2</option>
            </select>
            &nbsp;+&nbsp;
            <select name="b">
                <option>0</option>
                <option>1</option>
                <option>2</option>
            </select>
            =
            <input type="text" readonly name="output" value="?">
        </form>
        <ol class="universe"></ol>
        <ol class="steps">
            <li data-step="encode">
                <span class="step done">Encode</span>
            </li>
            <li data-step="transform">
                <span class="step done success">If <strong>A</strong> is set</span> →
                <span class="step done">copy <strong>D</strong>, <strong>E</strong>, <strong>F</strong> into <strong>G</strong>, <strong>H</strong>, <strong>I</strong></span>
            </li>
            <li>
                <span class="step done failed">If <strong>B</strong> is set</span> →
                <span class="step skipped">copy <strong>D</strong>, <strong>E</strong>, <strong>F</strong> into <strong>H</strong>, <strong>I</strong>, <strong>J</strong></span>
            </li>
            <li>
                <span class="step">If <strong>C</strong> is set</span> →
                <span class="step">copy <strong>D</strong>, <strong>E</strong>, <strong>F</strong> into <strong>I</strong>, <strong>J</strong>, <strong>K</strong></span>
            </li>
            <li>
                <span class="step">Decode</span>
            </li>
        </ol>
        <div>
            <button>Start</button>
        </div>
    </div>
    <figcaption>
        <h4>Our Computer</h4>
        <p>Change the inputs above, then click Start to see our computer run.</p>
    </figcaption>
</figure>

After all those steps don't look like anything you'd recognize as "math". But truthfully even humans typically do weird and surprising things to do math. It's hard to even describe what "addition" means without resorting little programs to help you *do* addition. In fact the basic kind of addition you learned in school—where you line up the numbers, add the columns one by one, and carry the one as needed—is technically called [algorismus][algo]. It was invented by a guy named [Muhammad ibn Musa al-Khwarizmi][alk] over a thousand years ago, and it gave us the english word algorithm. Today we call these transformation steps in computer programming algorithms. So the fact that our computer uses a surprising algorithm to do math doesn't really tell us much.

[algo]: https://en.wikipedia.org/wiki/Algorism
[alk]: https://en.wikipedia.org/wiki/Algorism

To understand why we can be sure the computer doesn't understand math, we need to  

<template id="computer">
    <slot name="controls">[form]</slot>
    <ol class="universe"></ol>
    <ol class="steps"></ol>
    <div>
        <button>Start</button>
    </div>
</template>

<template id="transform-step">
    <li data-step="transform">
        <span><slot name="condition">NEED CONDITION</slot></span>
        →
        <span><slot name="action">NEED ACTION</slot></span>
    </li>
</template>