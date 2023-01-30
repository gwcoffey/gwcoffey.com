# Example: User Guide

This is an example of a documnet that provides instructions for how to do something. Typically a post like this will have introductory text in paragraph form.

## Additional Headings

If the situation requires it, the document may have sections with their own sub-headings. These headings should follow HTML conventions. Headings should typically not be used unless the content below a heading is at least a couple of paragraphs.

The first-level heading is reseved for the document title. So additional headings should use `h2` in HTML or `##` in Markdown. The header itself should be title-cased. Multiple nested heading levels can be hard to follow so typically documents should be structured such that these second-level headings are sufficient.

The primary exception to this is when a section has multiple alternate or step-wise sub-instructions. In this scenario `h3` can be used, and the heading text should be sentence-case. There are two common situations where this arises.

### When delineating multiple options, and each option requires explanation…

As in this document, sometimes you need to list several options. But an ordered or unordered list won't work well because you need significant explanation or content (images, etc…) for each option. In this case, start each option with an `h3`, using sentence-case, with an ellipsis on the end.

### When documenting a complex multi-step process…

Typically a multi-step process should use the markup explained below. But if the process is long and complex, perhaps requiring further explanatory text or illustration between sets of steps, then the entire process should be broken down into multiple parts. Each part of the process uses multi-step markup. But the parts themselves are delineated by `h3` headings in sentence-case, with an ellipsis on the end.

## Multi-Step Processes

When walking the reader through a multi-step process, each step should provide two pieces of information clearly delineated:

1. What the person shoul *do*.
2. What they will *see* in response.

This method helps the reader to have confidence at each step that they did the right thing.

The HTML markup for this kind of process is:

    <ol>
       <li>
          <span class="action">Tell the person what to do here.</span>
          <span class="confirmation">Tell them what they can expect in response here.</span>
       </li>
    </ol>

<aside>
  Note: Do not put illustraitons inside the steps. For small one-off illustrations, refer to a figure which is placed after the steps. If multiple illustrations are required, consider splitting ther process into multipe separate sub-proceses (with `h3` headings), or switching to longer-form narrative explanaiton.
</aside>

Here's an example of how a multi-step process is rendered:

<ol>
  <li>
    <span class="action">In the terminal, type <kbd>ls -la</kbd>, then press <kbd>Return</kbd></span>
    <span class="confirmation">You see a list of all the files in the current directory.</span>
  </li>
  <li>
    <span class="action">Type <kbd>cd</kbd>, and then <kbd>Space</kbd>, and then the name of one of the files, then press <kbd>Return</kbd></span>
    <span class="confirmation">You see your command prompt again, with no error or confirmation. This means it worked.</span>
  </li>
  <li>
    <span class="action">Type <kbd>ls -la</kbd> again, then press <kbd>Return</kbd></span>
    <span class="confirmation">Again you see a list of all the files, but this time it is the files in the directory you switched into.
  </li>
</ol>

Instructions should always follow this pattern of do something, see something, do something, see something. Also notice that when giving instructions we provide context *first*, and then actions. For example, in the first step above, we say "In the terminal, type..." instead of "Type ... in the terminal". Information the reader needs should be revealed as it is needed, not after.