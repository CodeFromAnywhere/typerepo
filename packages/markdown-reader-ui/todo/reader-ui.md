## markdown-reader-ui

Add statement and definition pages that also includes an overview (list) of all words, categorised

InternalLinks is toooooo slow. It should not do the whole markdown, and the internallinks array should be a mapped object...

Make InternalLinks look for words wrapped with backticks or bold text.

Figure out if I can still generate all pages statically. It needs to be damn fast for that, no realtime parsing. I need a better indexation strategy.

Fix build errors `markdown-reader-web`

Deploy typerepo and others....

## Other UI things

Add presentation-view (first extrahere that from operation-ui as a standalone component)

Apply as much things from frontmatter (`MarkdownFile`) as possible. These things can make the UI much better.

Outline on bigger screens would be super nice

On mobile we need a smart navigation, now it's a bit un-mobile-friendly

If the `md` file contains no title (or multiple) add a title as the main title in the frontend, which is simply the name of the file but human-readable.

## operation-index

operation-index needs to also contain the modules

OPERATION.md needs to contain whether or not the module is distributed, and if so, what is the npm / github link

Apply these things in `operationToMarkdown`

## generateBundle

- add `isRepoPublic` to bundleconfig
- add repo in package.json if `isRepoPublic` is true
- in `markdown-reader-ui`, show repo from root `package.json` as a github icon with link
- If the bundle config doesn't specify a readme... A default readme should be generated that leads to the docs.

## Add operation descriptions

Every operation should have a description that shows at the top. Do this manually. `OPERATION.md` should have it, which should then be taken to generate a readme. Also `sdk-*` needs description.

An operation emoji can be the first emoji found in the description, or a separate key `OperationConfig.emoji` if it's there

Folders also have a `PathMetaData`. It can also contain a description and emoji, in the same manner.

These descriptions and emoji's must be used in the reader-ui.
