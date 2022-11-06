#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.listen=void 0;
/**
 generates structured operations based on unstructured instructions

This is huge. we need to start somewhere though. Plan:

- all operations can be formatted as a word[] with specified order
- all words can have synonyms
- some operations can have aliases or different word orders that would mean the exact same
- speech to text is a prerequisite for speaking out instructions
- text to speech is already there

With this in place, we can define a structured way to do things.

1) find the right operation to apply
2) every parameter needs to be filled in (or use default) or we need to use a preset (from previous input logs). this can be some sort of conversation
3) the opo (operation output) can be added to context, if needed
4) the opi (operation input) can be added to presets, if needed

Can you imagine that? I am creating a script that runs all the time and listens and responds to anything I say. My own Siri, but much more powerful. It seems hard, but if you look at it, it's actually just a different UI for all the things I already have. Among other things, it will make it possible to work while doing anything.

The power lies in being able to recursively ask for all the parameters. if you provide a new operation instead of a value, it will ask for all its parameters in order to continue.

This conversation could actually be used to generate code! It's kind of `context.reverse().map(createTsLine);` In fact, if we can make that, we can maybe even reverse code into conversations as well! This is insanely powerful.
*/
var listen=function(t){t.instruction,t.context;return[]};exports.listen=listen;var chat=function(){
// 1- listen
// 2- respond
chat()};
//# sourceMappingURL=converse-extra.test.js.map