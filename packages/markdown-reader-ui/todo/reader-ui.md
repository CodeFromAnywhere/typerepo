# DEV settings

Add an local env variable that is used in `__DEV__` mode that uses a different base directory for the docs. Maybe I can even make an admin page that just fetches all `BundleSummary`'s with all modules, packages and docs, and then renders that. This way I can show these reader-ui's for different bundles while still creating them.

# PDF generation

Figure out how I can generate a pdf from the HTML generated from a next build. This would be super useful because I can then use standard react-with-native components without doing any fancy PDF stuff.

If this works, make a pdf for all bundles.

# markdown-reader improvements

If there is no readme in the monorepo root, copy the readme from docs

The frontend needs to get a title, this can be taken from some json somewhere and put into `getStaticProps`

How can I expose the assets in the best way with static sites?

Can `sdk-*` be modules? Are they?

Should I hide all modules (by default)? Should this be a setting somewhere on the `BundleConfig`? Some packages/apps might also be nice to hide.

Fix newlines with `<br>`

How can I show the separation of arguments in the `md` more clearly?

Figure out why not all tables are showing up

Besides imported functions, let's also show (and link to) imported packages.

A working `<details>` would be nice

Every bundle should have a link to the github (if public)

Every operation should have a description that shows at the top

Hiding `draft` things (also not make them accessible)

Offline `search` would be great:

- create a `md` index in `.index` with all headlines + level, splitting up camelCase words
- create a `getStaticProps` prop for search strings with their path
- make a search bar that can search through that in real time
- on backend-driven things, this function can be passed through an endpoint as well

Menu should not show numbers, although sorted on it. Numbers should also not appear in paths

Headers should be clickable, they should simply list all children. From a header you should also be able to navigate one folder up. This will also be the main navigation on mobile.

README should always be on top.

There should be a button to go to the next page (or previous)

On mobile we need a smart navigation, now it's a bit un-mobile-friendly

Outline on bigger screens would be super nice

# Assets

See `asset-type/docs` and continue from there. Docs first!

## Md ui frontmatters

Make these things available for any markdown, and some of them also on folder-level.

## words, statements

make the word database model work

make the statement database model work, ensure it is connected to words

make the reader-ui fetch all words at build-time and match the md file for every page against words, statements, functions, interfaces, variables, operations. This will generate an array of extra information: a `description` and possibly a URL. I think there should be a definition page for every word/statement inside of every reader-ui (the glossary)

# Writer + Todo UI

Make sure `operation?.indirectDependencies` on the `package.json` of `operation-ui` has the needed dependencies.

`writer-ui` viewing and editing all `md` files (start from `operation-ui`)

`todo-ui` Make a function that aggregates all todos from all operations and build a frontend for it (it's `writer-ui` but different content)

Think about it: maybe writer-ui should include both docs and todo, because some todos can later also improve to become docs. It doesn't need to be 1:1 with what you see on the deployed website, it may be better to have it all in 1 place.

# Bundle improvements

These are huge improvements that make the websites much more usable. Deploy asap.
