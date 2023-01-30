# Example: Long Form Text

This is an example of a long-form textual article using all the supported semantic markup. As always there is a single `h1` with the article title at the top. This is followed by paragraph text. I'm going to start the first section now.

## Common Styles

We use `h2` for section headings. Typically we try to use only one level of sections to ease readibility. Within text we can use *emphasis* and **strong emphasis**. There are cases where <code>code style</code> is more appropriate.

We also support numbered lists like this:

1. A list
2. Of items
3. That are ordered

And bulleted lists:

* A list
* Of items
* That are unordered

You can also use `dl` lists for defined terms:
<dl>
	<dt>Jean Valjean</dt>
	<dd>The protagonist, former prisoner 24601.</dd>
	<dt>Javert</dt>
	<dd>One of the principal antagonists, a cop.</dd>
</dl>

Note that definition lists may have multiple terms for the same definition:

<dl>
	<dt>Prisoner 24601</dt>
	<dt>Monsieur le Maire</dt>
	<dd>Aliases for Jean Valjean.</dd>
</dl>

Or multiple definitions for the same term:

<dl>
	<dt>Gavroch</dt>
	<dd>The ganin of the streets of paris.</dd>
	<dd>The boy who fetches bullets.</dd>
</dl>

## Semantic Inline Styles

It's rare but sometimes we may use <ins>insertions</ins> and <del>deletions</del> to indicate changes to text. These are preferred to using strikethrough directly. While insertation may look like a highlight, it is not. Semantically it means "text that was inserted". If we just wans to highlight we can <mark>use mark tags to highlight text</mark>. 

When giving instructions to a computer user, we can indicate specific keyboard input: <kbd>Command</kbd> + <kbd>C</kbd>. This is specificlaly for cases when we're telling the reader what to press on the keyboard. If we're referring to code we use <code>code style</code> instead. And if we're referring to a <var>variable</var> in a previous code sample, we use the `var` tag. Finally, if we're saying what the computer says in *response* to input from the user, we use <samp>the sample output style</samp>.

There's one more unusual case— when a snippet of text refers to a time, range of time, point in history, etc… Suppse this happened on <time datetime="1948-11-10">November 10, 1948</time>. We would use `time` tags for that.

## Quoting Things

We often need to quote passages from other source material. And we generally want to cite the sourcse as well. For short passages we use the `q` tag: <q cite="https://www.ushistory.org/paine/crisis/c-01.htm">These are the times that try men's souls.</q>

In some cases though we need to quote larger passages of text. We do this with a blockquote:

<blockquote>
    These are the times that try men's souls. The summer soldier and the sunshine patriot will, in this crisis, shrink from the service of their country; but he that stands by it now, deserves the love and thanks of man and woman. Tyranny, like hell, is not easily conquered; yet we have this consolation with us, that the harder the conflict, the more glorious the triumph. What we obtain too cheap, we esteem too lightly: it is dearness only that gives every thing its value.
    <cite><a href="https://www.ushistory.org/paine/crisis/c-01.htm">American Crisis</a> by Thomas Paine</cite>
</blockquote>

As you can see, we can also add a citation to a blockquote, and it will be nicely formatted.

## Asides

While we're on the subject of blockquotes: These are for **quotes**, not for callouts, notes, sidebars, etc… Those are not quotes, they are **asides**.

<aside>
    I should mention here that asides come in several forms. But they're all asides. This is a generic aside.
</aside>

Asides actually come in four types. The one above is a basic aside. You can add one of these classes to alter the look:

* `note` for important notes
* `warn` for important warnings
* `tip` for tips

<aside class="note">
    Note: Right now we recognize three types of asides. The above is a generic aside with no context clues. This one begins with the literal text "Note:" which signals that it is a note.
</aside>

We also support a warning style:

<aside class="warn">
    Warning: If you use this style, be prepared to explain what the reader should be careful of.
</aside>

And a tip:

<aside class="tip">
    Tip: You can use literal text prefixes to your aside text to identify the type.
</aside>

These are all simple asides. But you can use aside for richer sidebars as well.

<aside>
<h2>Sidebars</h2>
If an aside contains a heading, it becomes a sidebar. The exact rendering of this type of content varies by device width. While it is atypical to put more than just simple text into most asides, sidebars often have full rich content.

This one has a second paragraph, and also a bulleted list:

<ul>
    <li>Still in the sidebar</li>
    <li>And always in the sidebar</li>
</ul>

Sidebars can have figures, tables, etc…
</aside>

## Disclosure Blocks
Use `<details>` for expandable blocks with disclosure control, like this:

```
<details>
	<summary>This is the always-visible summary text.</summary>
	And this is the text that is hidden until expanded.
</details>
```

Which renders as:

<details>
	<summary>This is the always-visible summary text.</summary>
	And this is the text that is hidden until expanded.
</details>

## Scene Breaks

The `<hr>` element should be used to represent scene breaks.

----

Like that.

