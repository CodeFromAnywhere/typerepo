# Dev startup

It's annoying to do `dev` all the time, real time... `rebuildAllOperations` is great, but it does too much as it re-indexes all files in an operation, even the ones that haven't been changed. it'd be best to only run `dev` when it is only needed, and when you start running dev, it will check your whole monorepo for changed FILES (not operations).

Until I get `dev` completely stable this is a very low hanging improvement. With renamings and quick refactors, dev simply doesn't work well enough. Also when generating bundles, it kinda sucks.

so yeah... whenever you start `dev` it should just rebuild all operations first, but only the files that really changed.
