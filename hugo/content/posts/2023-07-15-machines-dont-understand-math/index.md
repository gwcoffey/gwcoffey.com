---
title: "Machines Don’t Understand Math"
date: 2023-07-15
summary: "With all this talk about thinking machines it seems like a good time to point out that computers don't even understand math, which is something they're very very good at."
tags:
  - Essay
---

There's a lot of talk right now about *Artificial Intelligence* and "thinking" programs. Some  of these claims are [obviously outlandish][google]. Nobody who's not confused seriously believes ChatGPT has *feelings*. That said, some of the technical capabilities of these programs are verging into "indistinguishable from magic" territory.

[google]: https://www.theguardian.com/technology/2022/jun/12/google-engineer-ai-bot-sentient-blake-lemoine

I *suspect* that computers are not much closer to anything like real intelligence today than they were thirty years ago. And if I'm wrong—if so-called AI is steadily progressing toward some kind of [singularity][singularity]—it says more about the nature of intelligence itself, and our relationship to it, than it does about computing machines. But I digress.

[singularity]: https://en.wikipedia.org/wiki/Technological_singularity

When ChatGPT says something "intelligent" about a poem you wrote, you can't help but wonder what's going on inside it's head. It's hard to reason about how it does the things it does without falling into the trap of assuming some kind of "understanding." A lot has been written about that, and of course if you look closely, the illusion of intelligence even in this very advanced system shows obvious cracks. But let's set it aside. Instead, let's look at something computers are undeniably good at: **Math**. 

Computers are *way* better at arithmetic than they are at language. And the thing is, *computers don't really understand math either*. 

{{< figure src="robot.png"
alt="A retro-future steel robot stands at a table before a blackboard. The blackboard is covered in numbers and symbols."
caption="A computer generated image based on the prompt \"playful illustration of a retro-future robot at a blackboard doing math\""
height="1024"
width="1024" >}}

--- 

When we talk about computers we really mean two different things. On the one hand a computer is a machine, with physical parts. I'm pressing the keys of one right now. I think it's fair to say the machine itself doesn't *know anything*. After all it's just a pile of plastic, silicon, copper, and glass.

The other meaning of computer is harder to define. It's the *concept* of computer. This computer represents some kind of logical-mathematical capability that sits, taxonomically, above all those machines. From Babbage's [Analytical Engine][babbage] to experimental quantum computers, this conceptual computer is concerned with what is possible by the creative application of mechanized information theory to various problems.

[babbage]: https://en.wikipedia.org/wiki/Analytical_engine

Maybe this kind of computer can think?

Let's probe that. One way to characterize this conceptual computer is to think about *what it does*. And what does it do? It carries out complex, minutely defined logical instructions. You might be thinking, "but computers do so much more than logic." They can do complex math, for instance, or brighten photographs, or play podcasts, or generate realistic images from vague descriptions.

But the computer doesn't really do any of those things. People do those things. What makes the computer special is that is provides a powerful foundation upon which people can do these things *in the abstract*. In other words, a person can, through many means, brighten *a photograph*. Or, using a computer, a person can construct program that can in turn brighten *any photograph* quickly and cheaply. This is powerful. This is what Steve Jobs meant when he described the computer as "a bicycle for the mind."

It's tempting to think the computer is brightening the photograph. But at no point in that process does the computer itself (or the software on the computer) know what a photograph is or what bright means. As I said, computers don't even know what math is, and they're very very good at math.

How can a computer do math without understanding math? To make sense of this you need to understand a little bit about what programmers do. Programming a computer has three distinct steps: *encoding*, *transformation* and *decoding*.

When we want the computer to do something—brighten a photograph for instance—we first have to *turn the photograph into something the computer can work with*. This is encoding. We then give the computer a complex set of minutely defined instructions to *transform* that encoded data in some way. And finally we *decode* that result back into something meaningful to us.

To illustrate this, let's program a computer to do very simple arithmetic. To keep this from getting too complicated we'll limit ourselves to small non-negative integers less than four. In other words, our program will only be able to do addition with zero, one, two or three. 

---

Our first task as the programmer of this addition computer is to dream up an encoding. An encoding is a way to represent (precisely or otherwise) something real in *binary*. Programmers have to do this because we want the computer to *do* something, and binary is the only thing modern computers can do anything with.

If you ask a random person on the street how computers work, chances are good they'll say something about "ones and zeroes." This is a useful way to think about it, and I'm not faulting the characterization. But it is really just a shorthand. If you crack open a computer you will not find any ones or zeroes inside. *Computers don't know what ones or zeros are.* The important point is not ones and zeros. The important point is binary.

In a sense a computer is a tool to simulate some subset of reality in a micro-universe within which we can manipulate things quickly, cheaply, and repeatably. And for reasons of both engineering practicality and mathematical purity, we want that micro-universe to be as simple as possible.

The real universe is pretty complex. It has a lot of stuff in it. The binary universe of the computer, by contrast, has just one kind of thing. Why just one? Because zero is not enough to do anything useful. And two is more than enough. And what is that one kind of thing? *It doesn't matter*. In her memoir *Holy The Firm*, Annie Dillard said, "A name, like a face, is something you have when you’re not alone." In a universe with only one kind of thing, that thing is always alone. It doesn't matter *what* it is, only *that* it is.

The real universe is over-complex in another way too: the stuff is all over the place. Our universe has (at least?!) three spatial dimensions which is, I think, the primary reason its easy to lose things. The binary universe has one dimension. This is again driven by expediency. Zero dimensions are too few and two are more than we need.

There's a third simplification, which is more subtle. The binary universe is *discrete*. This means there are clearly defined places where things can be. They cannot overlap. At any given "point" their either is something, or there is nothing. And there's no way to, like, nudge something over a little bit.

{{< figure src="assets/a-simple-universe.png"
    alt="A diagram showing four parts. On the left, a box with a wild assortment of objects (balloons, rocket shipts, whales, trees, houses…). To the right of that, all the objects have been replaced by whales. Further to the right, the whales are in one horizontal line. And finally on the far right, each whale is in a distinct little box."
    title="Three Steps to A Simplified Universe"
    caption="The real universe (1) is complicated. The computer envisions a much simpler universe with (2) only one kind of thing, (3) in a single dimension with (4) discrete locations." >}}

This super simple view of things may seem hopelessly limited. But it turns out it is enough to *simulate almost limitless complexity*. And by being so conceptually simple, we can build machines that manipulate this universe very efficiently. (It seems paradoxical, but in practice a machine that does a few simple things can accomplish diverse complex tasks *more quickly* and *more cheaply* than a machine that does complex things. This is because by simplifying the architecture, we can make it run very fast. And doing billions of small fast steps often gets the job done faster than a few larger slower steps.)

With these restrictions in place, we can very easily conceive of any possible state in this micro-universe. Each "spot" either has something, or it doesn't. That's it. When we say "ones and zeroes" we mean you describe the universe like this: `1 0 1 1 0`. The ones mean something is there and the zeroes mean that spot is empty. Since the universe is binary, one-dimensional and discrete, a simple list of ones and zeros like this can *perfectly* characterize everything. 

As an aside, this realization—that we can *represent* almost any useful thing in binary so that machines optimized for dealing with binary numbers and logic can work with it—did not come easily. Early work with computing machines was entirely focused on mathematics. In 1842, the brilliant [Ada Lovelace][ada] was a hundred years ahead of her peers when she wrote:

[ada]: https://en.wikipedia.org/wiki/Ada_Lovelace

> The Analytical Engine might act upon other things besides number, were objects found whose mutual fundamental relations could be expressed by those of the abstract science of operations, and which should be also susceptible of adaptations to the action of the operating notation and mechanism of the engine...

She was talking about encoding in the way we think of it today, but nobody took her seriously until Alan Turing wrote an influential paper generalizing this a hundred years later. And even then it took twenty more years before people really began to get it.

In practice the binary micro-universe of the physical computer can take many forms. In modern computers, it is sometimes represented by high and low voltage, by pools of electrons, by magnetic polarity, holes punched in paper, or even blurry spots on an otherwise crystal-clear mirror. And yes, even as ones and zeroes printed on long skinny paper tape. Engineers have dreamed up countless *physical embodiments* of the binary universe. But none of that matters to how the conceptual computer actually computes.

---

Encoding isn't as esoteric a concept as you might think. Chances are you are familiar with many common encodings. The GIF, for example, is an encoding for animated images. And JPEG is an encoding for photographs. You may have heard of Unicode, which is a standardized encoding for text. Or MP3, an encoding for music. Humanity has created thousands of standardized encodings so that many computer programs can all work together more easily.

An encoding is just a useful binary arrangement to *represent* what we really want to work with. For our simple addition program, we want to work with small non-negative integers. So we need to dream up an encoding. Here's one idea (from now on I'll represent binary as shaded and empty boxes):

<figure>
    <div id="simple-encoding" class="figure-item encodings">
        <div class="ex">
            <ol class="universe">
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
            </ol>
            <p>Encoded 0</p>                    
        </div>
        <div class="ex">
            <ol class="universe">
                <li data-full="true"><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
            </ol>
            <p>Encoded 1</p>                    
        </div>
        <div class="ex">
            <ol class="universe">
                <li><div></div></li>
                <li data-full="true"><div></div></li>
                <li><div></div></li>
            </ol>
            <p>Encoded 2</p>                    
        </div>
        <div class="ex">
            <ol class="universe">
                <li><div></div></li>
                <li><div></div></li>
                <li data-full="true"><div></div></li>
            </ol>
            <p>Encoded 3</p>                    
        </div>
    </div>
    <figcaption>
        <h4>A Simple Encoding</h4>
        <p>Here's one possible binary encoding for small non-negative integers. To represent <code>0</code> all boxes are empty. For <code>1</code> we put something in the first spot. For <code>2</code> we use the second spot. And so on.</p>
    </figcaption>
</figure>

Now that we have an encoding, we need to think about how to fit an addition problem into the simplified binary universe of the computer. Remember we already said we want to be able to add numbers between zero and three. In other words we want to give the computer two numbers, and have it add them together. So we need enough space for two input values. As shown below, six spaces and some assumptions about what goes where will do the trick.

[2c]: https://en.wikipedia.org/wiki/Two%27s_complement
[fp]: https://en.wikipedia.org/wiki/IEEE_754
[bcd]: https://en.wikipedia.org/wiki/Binary-coded_decimal

<figure>
    <div id="encoded-inputs" class="figure-item encodings">
        <div class="ex">
            <ol class="universe">
                <li data-full="true"><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li data-full="true"><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
            </ol>
            <p>Encoded input for 1 + 1</p>
        </div>
        <div class="ex">
            <ol class="universe">
                <li data-full="true"><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li data-full="true"><div></div></li>
                <li><div></div></li>
            </ol>
            <p>Encoded input for 1 + 2</p>
        </div>
    </div>
    <figcaption>
        <h4>Encoding the Inputs</h4>
        <p>With our encoding in mind, we can give the computer two numbers to add by putting them side by side in the computer's memory. We decide that the first three spots hold the first number, and the next three spots hold the second number.</p>
    </figcaption>
</figure>

And that's it. We can now encode the input in a way the computer can use. Hopefully it's clear that this encoding schema can unambiguously handle any numbers we throw at it, as long as those numbers are integers, not negative, and no larger than three. This is pretty limiting, but it will keep the example simple. Of course real computer programs deal with larger numbers, negative numbers, and numbers with decimal points. They do this using [more][2c] [advance][fp] [encodings][bcd]. (And as we'll discuss later, even for this simple case, the encoding we've defined isn't a very good one.)

---

With our input encoded in binary we're ready to give the computer instructions. We want the computer to transform this bit of binary into something different. And that something different is also binary (remember, binary is all the computer can handle).

Let's look at an example. Suppose we want to add `1+2`. If we encode this in binary, and leave a little space in which to put the answer, we have this:

<figure>
    <div class="figure-item">
        <ol class="universe">
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
            <li><div></div></li>
            <li><div></div></li>
        </ol>
    </div>
    <figcaption>
        <h4>The Setup</h4>
        <p>Remember the first three spots hold our first number (<code>1</code>) and the next three hold the second number (<code>2</code>). We also left six spaces to hold the answer.</p>
    </figcaption>
</figure>

The job of the transformation instructions is to add things to, or remove things from this twelve-unit binary universe such that, when it's done, we can then *decode* the binary data to get an answer. But remember the computer is not intelligent, so these instructions have to be very simple, very clear, and very carefully defined. Here's my proposal for a set of transformation instructions:

1. If `A` is set, copy `D`, `E`, and `F` into `H`, `I`, and `J`
2. Otherwise, if `B` is set, copy `D`, `E`, and `F` into `I`, `J`, and `K`
3. Otherwise, if `C` is set, copy `D`, `E`, and `F` into `J`, `K`, and `L`
4. Otherwise, copy `D`, `E`, and `F` into `G`, `H`, and `I`

(There are many ways to do this. I'm sure if you spent some time thinking about it, you could come up with completely different instructions that, in the end, give the same result.) 

If you apply these steps one by one to the input above, you'll quickly discover that only step 1 actually applies, because the `A` box is filled in. Follow that step and you end up with this:

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

---

With transformation complete, we need to *decode* the answer. In this case, decoding is just doing the encoding in reverse. We look at the last six spaces in our binary data, find the space that's filled in, and count out its position. This count is our "answer".

(It isn't always the case that the decoding step is just encoding in reverse. Many computer systems transform input of one encoding into output of an entirely different encoding. The [Midjourney][midjourney] system for instance takes as input an encoded description, and its output, when decoded, is a picture you can look at.)

[midjourney]: https://www.midjourney.com

This program doesn't just work for `1+3`. It will work for *any* allowed input value. This may be surprising to you. After all, those steps don't look like anything you'd recognize as "math". But truthfully even humans typically do [weird and surprising][mental] things to do math. It's hard to even describe what "addition" means without resorting to little programs to help you *do* addition. 

[mental]: https://en.wikipedia.org/wiki/Mental_calculation

In fact the basic kind of addition you learned in school—where you line up the numbers and add the columns one by one (don't forget to carry the one!)—is a kind of human-program technically called [algorismus][algo]. And it was *invented* by [Muhammad ibn Musa al-Khwarizmi][alk] over a thousand years ago. (Interestingly, it gave us the english word *algorithm*, which today is what we call the transformation steps in programming.) So the fact that our computer uses a surprising algorithm to do math doesn't really tell us much. But let's see what happens if we use a different encoding.

[algo]: https://en.wikipedia.org/wiki/Algorism
[alk]: https://en.wikipedia.org/wiki/Algorism

---

The encoding we've used so far really isn't a very good one. For any given integer, we only fill in *one space* in our universe. This is a pretty strong clue that we could make it more "efficient." For example, in our encoding, putting something in the first space means `1`. And putting something in the second space means `2`. But what if we put something in *both spaces*? Our simple encoding doesn't use this state to mean anything. Let's change that.

Suppose the first space still represents `1` and the second space `2`. If we use *both* we can add `1` and `2` and say this represents `3`. Now we have this: 

<figure>
    <div id="better-encoding" class="figure-item encodings">
        <div class="ex">
            <ol class="universe">
                <li><div></div></li>
                <li><div></div></li>
            </ol>
            <p>Encoded 0</p>                    
        </div>
        <div class="ex">
            <ol class="universe">
                <li data-full="true"><div></div></li>
                <li><div></div></li>
            </ol>
            <p>Encoded 1</p>                    
        </div>
        <div class="ex">
            <ol class="universe">
                <li><div></div></li>
                <li data-full="true"><div></div></li>
            </ol>
            <p>Encoded 2</p>                    
        </div>
        <div class="ex">
            <ol class="universe">
                <li  data-full="true"><div></div></li>
                <li data-full="true"><div></div></li>
            </ol>
            <p>Encoded 3</p>                    
        </div>
    </div>
    <figcaption>
        <h4>A More Efficient Encoding</h4>
        <p>This is a slight variation on our original encoding. We would say this version is more “efficient” because it only needs two spaces to represent our numbers instead of three.</p>
    </figcaption>
</figure>

Of course if we add two small numbers we might get an answer bigger than three. So our encoding should accommodate larger values. But we can't designate the third position for `3` because we already have a way to represent `3`. So let's make the third position mean `4` instead.

Adding just this position actually lets us represent even more than four. We can go all the way to seven:

<figure>
    <div id="better-encoding" class="figure-item encodings">
        <div class="ex">
            <ol class="universe">
                <li><div></div></li>
                <li><div></div></li>
                <li data-full="true"><div></div></li>
            </ol>
            <p>Encoded 4</p>                    
        </div>
        <div class="ex">
            <ol class="universe">
                <li data-full="true"><div></div></li>
                <li><div></div></li>
                <li data-full="true"><div></div></li>
            </ol>
            <p>Encoded 5</p>                    
        </div>
        <div class="ex">
            <ol class="universe">
                <li><div></div></li>
                <li data-full="true"><div></div></li>
                <li data-full="true"><div></div></li>
            </ol>
            <p>Encoded 6</p>                    
        </div>
        <div class="ex">
            <ol class="universe">
                <li  data-full="true"><div></div></li>
                <li data-full="true"><div></div></li>
                <li data-full="true"><div></div></li>
            </ol>
            <p>Encoded 7</p>                    
        </div>
    </div>
    <figcaption>
        <h4>Handling Larger Numbers</h4>
        <p>By adding just one space, we can encode four additional numbers. In fact in an efficient binary encoding, adding one more space always doubles how many states you can represent.</p>
    </figcaption>
</figure>

One way to think about this encoding is each "place" `n` has a "value" of `2`<sup>`n-1`</sup>. So the first place has a value of `2`<sup>`0`</sup> `= 1`. The second has a place value of `2`<sup>`1`</sup> `= 2`. And so on. And the encoded value is just the sum of each of the place values that are filled in. (If you're a logically-minded person you may notice that this encoding scheme is conceptually similar to the way we normally write numbers on paper using the ones place, the tens place etc… And that's when you realize what you might be calling *numbers* are really just a non-binary *encoding* of numbers. But then what is the number? Don't get ahead of me…)

If we switch to this encoding, our original transformation steps won't work anymore. We need an entirely different set of steps to add two numbers with this encoding. In fact if you play with this a bit you'll see this is much more complicated to pull off than with our simpler encoding. But that's ok. Computers are really good at following instructions.

Something like this will work:

1. If `A` or `C` is set, but not both, then set `E`
2. If `A` and `C` are both set, and neither `B` nor `D` are set, then set `F`
3. If `A` and `C` are both set, and either `B` or `D` is set, but not both, then set `G`
4. If `A` and `C` are not both set, and `B` or `D` are set, but not both, then set `F`
5. If `B` and `D` are both set, then set `G`

Again, here's the result of adding `1 + 3`:

<figure>
    <div class="figure-item">
        <ol class="universe">
            <li data-full="true"><div></div></li>
            <li><div></div></li>
            <li data-full="true"><div></div></li>
            <li data-full="true"><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
            <li data-full="true"><div></div></li>
        </ol>
    </div>
    <figcaption>
        <h4>A More Complex Transformation</h4>
        <p>This is the full encoded result after transformation when adding <code>1 + 3</code>. The first two spots represent <code>1</code>. Spots <code>C</code> and <code>D</code> represent <code>3</code>. And spots <code>E</code>, <code>F</code>, and <code>G</code> hold the answer: <code>4</code></p>
    </figcaption>
</figure>

Of course to *read* the answer we have to decode it. When we do, we'll see we got the expected result.

---

And now we see the problem with trying to claim computers understand math. We have two programs for adding small numbers. The actual transformation steps are completely different.  But both work perfectly, assuming you give them data with the right encoding, and decode the result in the right way.  

And here's the rub: *The computer has no idea what encodings you're using.* It is only concerened with the translation steps. In fact, if you apply the *first* program to the *second* encoding, you get a perfectly valid program that does a form of multiplication. (It isn't exactly multiplication. It's kind of "round the first number to the nearest perfect square, then multiply that by the second number.")

What a program *does* depends entirely on the encoding. Even if you assume the computer can somehow reason about the encodings (it can't) to make sense of things, *the same program* may do something *completely different* and yet *perfectly valid* with different encodings. Such a magical device would have no way to be sure we're doing addition here and not some kind of weird multiplication. And of course those are only two potential encodings. I'm sure a clever person could devise some other encoding that makes our same program do something different and arguably useful.

Encoding is always done by a person. There is nothing in the program to tell the computer what the encoding "means" or how we plan to decode the result. Now I know what you're thinking: when you use the calculator on your phone you definitely don't encode the inputs yourself and decode the output. But that's because the input to the math transformation is the encoded output of some other program carefully planned by a person. And the input to that transformation is, itself, the encoded output of yet another program. It's turtles all the way down. Well not all the way because these turtles are all standing on you.

At a high level, here's what's actually happening when you tap out `1 + 3` in the calculator app:

1. The phone is showing a picture on the screen that looks like a real calculator.
2. You touch parts of that picture.
3. The coordinates of your touch are encoded by your phone screen using rules defined by the designer of the hardware.
4. Through various transformation steps across several programs, those coordinates are translated into encoded numbers.
5. Additional programs are run to transform those numbers into encoded output (this is the equivalent of the steps we talked about above).
6. Another series of transformations causes the human-readable result of the addition to be drawn on the screen as a picture.

The actual math is "done" in step 5, but that step doesn't have access to details about the encodings involved. It is only dumbly carrying out the transformation steps. 

So at a high level, you started with a picture drawn by hand by a person, and finger touches aimed by a person, and through a series of encode-translate-decode steps, you ended up with a picture of the answer. Every one of those encode/decode steps was defined by a person thinking about the local problem at hand. 

In fact in the earliest computers, all this raw encoding was done entirely by hand. If you wanted to get those computers to do some math, you had to manually encode your input values into the expected binary form before running the program. And then manually decode the result. Today this process is somewhat more hidden from you because the computing device typically has *input-* and *output-methods* that assume certain encodings and adapt to your senses. Things like screens that show pictures to your eyes and cameras that "see" the world. Touchscreens that interpret your finger movements and vibration motors that trigger your touch sense. And speakers that make sounds you can hear and microphones that can listen to you. All of these have built in encoders and decoders designed by people.

---

So the computer does not know math. But do we?

I think the more interesting questions raised by continued advancements in "AI" are centered on what *we* understand. What does it mean to "understand math" in the first place? I can't shake the feeling that people did math for thousands of years before they began to attempt to define it. And it took thousands more years to arrive at [the accepted definition][sets]. That definition is so esoteric as to be essentially useless to anyone not actively studying advanced mathematics. Surely that isn't what it means to "know" math. Or if it is, then almost nobody in the world knows math. 

[sets]: https://en.wikipedia.org/wiki/Set_theory

No, I think when we say we understand math (even just basic arithmetic) we mean that while doing it we have some higher internal sense of what it means *to us*. When you see two apples on the counter, and three in the bowl, math tells you you have five apples. And that means you can make an apple pie. That's what the math *means*. It means you can have pie. And why do you want pie? Phew, that's a big question, involving evolution—which doesn't apply to machines—and psychology, which is in a sense the study of our inability to comprehend our own mental function.

But computers don't want pie. They don't want *anything* because they are *tools*. So maybe a computer can be as "smart" as you can imagine, but until it *wants something*, it can't really *understand anything*. Maybe we shouldn't be asking what it means to be intelligent. Instead we should be asking what it means to want.