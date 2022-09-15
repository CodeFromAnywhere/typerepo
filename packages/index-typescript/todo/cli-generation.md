## cli generation (2h)

In `rebuildOperation`, autogenerate a `cli/[fn-name].cli.ts` file for every exported non-special function which wraps the function with `makeSdk` and executes it. But only if `@types/node` is a `devDependency`.

Figure out if I can import the function's index from `db/ts-functions/[name].json` without having it be included in the build folder. Of course, I can simply use `fs`.

**Update**

Make sure bin is updated automatically:

- references to js files of which the ts file doesn't exist should be removed
- every file in cli folder with extension `.cli.ts` should be added

Add information about all bin's in readme, with instructions on how to run them (npx in monorepo, directly without monorepo)
