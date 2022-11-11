Typerepo comes with `reactwithnative` setup out of the box.
React with Native ships with tailwind embeddded, which is the way we recommend you do styles.

It is important to know that...

1. next.js doesn't allow you to import css files in your components. Because of this you need to import the css of your components separately in your `_app.tsx`. There won't be a warning if you forget this, so be careful

2. if you update your component, you need to build your components's css as well as the typescript. with the `tailwindcss` cli you can convert all tailwind classes in your code into css, which can then, in turn, be imported in your react app
