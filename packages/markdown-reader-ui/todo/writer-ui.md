## Writer UI

Make sure `operation?.indirectDependencies` on the `package.json` of `operation-ui` has the needed dependencies.

`writer-ui` viewing and editing all `md` files (start from `operation-ui`)

Think about it: maybe writer-ui should include both docs and todo, because some todos can later also improve to become docs. It doesn't need to be 1:1 with what you see on the deployed website, it may be better to have it all in 1 place.
