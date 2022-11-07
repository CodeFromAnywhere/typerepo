# K dev

k-dev (node operation)

CLI that starts a watcher that watches all your operations for changes and rebuilds the operation on every change (compiling and indexing the altered file(s))




# Outline

## Docs

- [README](#readme)
- [Use on monorepo](#use-on-monorepo)

## Functions

- [dev](#dev)

## Variables

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
npx rebuildOperation
npx rebuildAllOperations
npx generateSdkOperations
npx please
npx yo
```

If you just search for `cli/*.cli.js` files in the different operaitons, you will find all of them.


## Use on monorepo

If you want to use the typerepo functions on your own monorepo, you can use the manualProjectRoot capability.

`dev` from `k-dev` can be ran with a `manualProjectRoot` argument, where you should specify the root of your typerepo monorepo. If you do this once it will be saved so all consecutive times it will be remembered what you did last time.

If you wish to do so, simply start a new monorepo with the same convention as the monorepo of `typerepo`. Maybe you already have one, otherwise you can just copy paste `typerepo` and remove all `packages`, `apps`, and `modules` (or just remove the ones you wish only)


# Functions

## dev()

Running this function will start a watcher that watches all your operations for changes and rebuilds the operation on every change (compiling and indexing the altered file(s))


| Input      |    |    |
| ---------- | -- | -- |
| manualProjectRoot (optional) | string | manual project root for finding the operations |
| **Output** |    |    |


# Variables

## 📄 dev (exported const)

Running this function will start a watcher that watches all your operations for changes and rebuilds the operation on every change (compiling and indexing the altered file(s))

