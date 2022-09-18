If you want to use the typerepo functions on your own monorepo, you can use the manualProjectRoot capability.

`dev` from `k-dev` can be ran with a `manualProjectRoot` argument, where you should specify the root of your typerepo monorepo. If you do this once it will be saved so all consecutive times it will be remembered what you did last time.

If you wish to do so, simply start a new monorepo with the same convention as the monorepo of `typerepo`. Maybe you already have one, otherwise you can just copy paste `typerepo` and remove all `packages`, `apps`, and `modules` (or just remove the ones you wish only)
