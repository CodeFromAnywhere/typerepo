# Monday

## markdown-reader-ui

internallinks is toooooo slow. It should not do the whole markdown, and the internallinks array should be a mapped object

Menu Collapsability

Deploy typerepo and others, share on pendrive

## Less important

Add presentation-view (first extrahere that from operation-ui as a standalone component)

Apply as much things from frontmatter (`MarkdownFile`) as possible. These things can make the UI much better.

Add print button and apply basic html practices to create a good printable UI.

Add share button that lets you share on different social networks

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

## DePLoY

re-index one more time!

run `npx generateAllBundles passionfruit` to generate and push all bundles except the one of passionfruit

go over all docs and fill it where it misses things.
