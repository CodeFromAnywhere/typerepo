# K dev

k-dev (node operation)



# Outline

## Docs

- [README](#readme)
- [Use on monorepo](#use-on-monorepo)

## Functions

- [devCli](#devCli)
- [dev](#dev)

## Variables

- [devCli](#devcli)
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

## devCli

The dev-cli runs the `dev` command which watches your operations with restarts

You can specify a customManualProjectRoot, which can be a relative or absolute path. If relative, it will use your cwd with the relative path to make an absolute path, that will in turn be passed to the `dev` function.




## dev

Running this function will start a watcher that watches all your operations for changes and rebuilds the operation on every change (compiling and indexing the altered file(s))




### Parameters (1)

#### Parameter 1: manualProjectRoot (optional): string

# Variables

## devCli (unexported const)

The dev-cli runs the `dev` command which watches your operations with restarts

You can specify a customManualProjectRoot, which can be a relative or absolute path. If relative, it will use your cwd with the relative path to make an absolute path, that will in turn be passed to the `dev` function.


## dev (exported const)

Running this function will start a watcher that watches all your operations for changes and rebuilds the operation on every change (compiling and indexing the altered file(s))

