# Installation

run `yarn`
run `npx dev`

_you may need to give execution rights to the cli file: `chmod 777 /your/typerepo/path/node_modules/.bin/dev`_

## Other cli's

Inside of this monorepo, many cli's are accessible through `npx [function-name]`

Some important ones:

```bash
npx rebuildOperation
npx rebuildAllOperations
npx generateSdkOperations
npx please
npx yo
```

If you just search for `cli/*.cli.js` files in the different operaitons, you will find all of them.
