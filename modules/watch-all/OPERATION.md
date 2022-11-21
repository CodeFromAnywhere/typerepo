# 👁 Watch All

With typerepo you can easily watch your complete project from anywhere using `watch-all`. If you want to create watcher, all you need to do is the following:

1. Create an exported function in a node operation that has an explicit type definition as "ProjectWatcher".

2. Set a filter as a property of your function, to determine when the function should be executed

3. The body of the function should contain the action that you want to execute when the watcher determines that it should.

For exmaple, this function below will only be executed if a typescript file in a src folder is created or changed.

```ts
import { getExtension } from "fs-util-js";
import { ProjectWatcher } from "watch-all";

export const setTypescriptIndex: ProjectWatcher = (eventName, path) => {
  console.log("Should index this typescript file", path);
};

setTypescriptIndex.filter = (eventName, path) => {
  // for indexation we don't care about any other event than adding or changing a file
  if (!["add", "change"].includes(eventName)) return false;
  // in order to index a file, it must be in an operation, which means it must be in src
  if (!path.includes("/src/")) return false;
  // only ts and tsx files matter, the rest doesn't need to be indexed
  if (!["ts", "tsx"].includes(getExtension(path))) return false;

  return true;
};
```

By default, all generated folders are never watched.
