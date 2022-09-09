# K dev

k-dev (node operation)



# Outline

## Docs

- [README](#README)

## Functions

- [dev](#dev)



# Docs

## README

### Installation

run `yarn`
run `npx dev`

_you may need to give execution rights to the cli file: `chmod 777 /your/typerepo/path/node_modules/.bin/dev`_


#### Other cli's

Inside of this monorepo, many cli's are accessible through `npx [function-name]`

Some important ones:

```bash
npx generateSdkOperations
npx rebuildAllOperations
npx please
npx yo
```

If you just search for `cli/*.cli.js` files in the different operaitons, you will find all of them.


# Functions

## dev

Running this function will start a watcher that watches all your operations for changes and rebuilds the operation on every change (compiling and indexing the altered file(s))

## Returns: unknown

