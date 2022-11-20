# Fs orm

fs-orm (`OperationClassification` node-cjs)

ORM that lets you create a database with models that are stored on the file system in multiple formats that are easy to understand and well structured.




# Docs

<details><summary>README.md</summary>
    
  Welcome to Typebase. Typebase is an ORM (Object Relational Mapping) that lets you create a database with models that are stored on the file system in multiple formats, that are easy to understand and well structured.

> Object Relational Mapping: A mapping from stored data to set of functions that can access that stored data in a specific programming language.

Typebase is very well integrated with Typescript, which makes it very easy to create new models that are typesafe.

> typesafe: the types of requested data are given without accessing the information itself. This makes it much harder to make mistakes in your code, because you know the shape of your data that you are going to request.

  </details>

<details><summary>1.making-a-model.md</summary>
    
  In order to add a new model to your typebase, you need to add it to your `sdk-db`.

`sdk-db` collects all your models. In turn, the `database` operation will collect all models from `sdk-db` to create your database access functions.

In order to create a new model, all you need to do, is create a new type interface inside of a js-only operation that is exported, and extends one of the model-types that are defined in `model-types`.

Please note, that your operation must not contain any node.js code, because then you can't use this type interface on the frontend anymore.


### Example

```ts
import { SlugModelType } from "model-types";

export interface Todo extends SlugModelType {
  status: "todo" | "doing" | "done";
  markdown: string;
}
```

The above model extends the `SlugModelType`, which means the items of this model will also contain a `slug` and a `name`, on top of the `DefaultModelType`s and the properties speficied above.

> slug: A slug is a simplified version of the `name`, which removes complex characters and replaces every space with a dash. Besides this, upper-case characters become lower-case. For more info, see the `slugify` function.


### Adding the new model to your database functions

Before the model can be accessed, you first need to update your database functions. This can be done by updating your `sdk-db`. You can either do this manually yourself, or you can use the `generate-sdk-operations` operation of `typerepo`.

To regenerate the db, please run `generateDbSdk` or `generateSdkOperations`.

To do it manually, simply import your model into `sdk-db.ts`, add it to `DbModels`, `dbModelKeys` and `dbModelConfig`.

After you rebuilt `sdk-db`, please `Restart TS Server` in your VSCode and after a few seconds you can start using your new database model.

> Restart TS Server: Restart ts server is a command in VSCode that will restart your Typescript server. This will reload all typescript definitions and ensure that you have the newest version of all types and interfaces across your monorepo.

  </details>

<details><summary>clear.md</summary>
    
  With clear, you can clear the whole model. All items in the model will be removed.


### Example

```ts
const clearResult = await db.clear("Todos");
```

  </details>

<details><summary>get.md</summary>
    
  In order to get your data from a model, you should use the `db.get` function.


### Example

```ts
import { db } from "database";
import { Todo } from "todo-type";

export const getTodos = async (): Promise<{
  success: boolean;
  todos?: Todo;
}> => {
  const todos = await db.get("Todo");

  return {
    success: true,
    todos,
  };
};
```

This will get all your todos. But you might wonder, how do we add relational data? And how do we find a single item? Or how do we filter? Let's see...


#### Finding and filtering

Finding and filtering can simply be done after getting an array of all your items in your model. You can simply use regular `Array.filter` and `Array.find` for that.

For example:

```ts
const todos = await db.get("Todo");
const onlyDone = todos.filter((todo) => todo.status === "done");
```


#### Including relational data

Let's say your todo belongs to a user, like this:

```ts
import { DefaultModelType, SlugModelType } from "model-types";

export interface User extends DefaultModelType {
  name: string;
  age: number;
}

export interface Todo extends SlugModelType {
  userId?: string;
  user?: User;
  status: "todo" | "doing" | "done";
  markdown: string;
}
```

If we then want to find the user that the todo belongs to, and include it in the result, we can do something like this:

```ts
const todos = await db.get("Todo", { include: { referenceKey: "userId" } });

// `todos` will now include the user on the `user` property in every item.
```


#### More

There are much more options for getting, but for that, simply intorspect the function itself with IntelliSense (or read the code).

  </details>

<details><summary>getting-started.md</summary>
    
  To get started with `fs-orm`, please have a look at the `db` package. This package shows you how to initiate a database object.

It is using a package `sdk-db` which you can create yourself (or generate, based on the models found in your monorepo)

From there, it's very easy to use fs-orm. For example, if you want to get all the `Todo` values, simply use something like this

```ts
const todos = await db.get("Todo");
```

Check the `createDb` function to see the exact type definition of all the function on the db-object. Otherwise you can just use Intellisense for it, you can easily understand everything that way.

  </details>

<details><summary>limitations.md</summary>
    
  Typebase has some limitations, compared to other databases like MySQL or PostGres.


### performance and scalability

The performance and scalability is not great. It is not the main usecase of typebase to have giant databases with models with millions of rows.


### concurrency

Currently, Typebase doesn't support concurrency, but it is easy to add so we'll do that in the future.

  </details>

<details><summary>model-types-and-storage-methods.md</summary>
    
  Typebase makes it possible to create different model-types which can have different storage methods.

More information about the different model-types can be found here:

- `DefaultModelType` (uses `DbStorageMethod` `jsonMultiple` by default)
- `SlugModelType` (uses `DbStorageMethod` `jsonMultiple` by default)
- `KeyValueMarkdownModelType` (uses `DbStorageMethod` `keyValueMarkdown` by default)
- `MarkdownModelType` (uses `DbStorageMethod` `markdown` by default)
- `CsvModelType` (uses `DbStorageMethod` `csv` by default)
- `TsIndexModelType` (uses `DbStorageMethod` `jsonMultiple` by default)

More information about the different storage methods can be found here: `DbStorageMethod`.

Every model type has a default `DbStorageMethod` but can be overwritten using the `modelQueryConfig`.

  </details>

<details><summary>remove.md</summary>
    
  Remove helps you to remove items from a model. The difference from `clear` is that you can specify a filter on what to remove. This is the second argument of the `remove` function.


### Example

```ts
// this will remove all the todos that are "done"
const removeResult = await db.remove("Todo", (todo) => todo.status === "done");
```

  </details>

<details><summary>set.md</summary>
    
  Set helps you to completely remove all items and replace them with a new set of values.


### Example

```ts
import { Creation } from "model-types";
import { Todo } from "todo-type";

const replaceAllTodos = async () => {
  const data: Creation<Todo>[] = [
    {
      name: "typebase",
      status: "doing",
      markdown: "Need to learn about typebase",
    },
    {
      name: "typerepo", //Please note, `name` is required in `SlugModelType`.
      status: "todo",
      markdown: "Need to learn about typerepo",
    },
  ];
  const setResults = await db.set("Todo", data);

  const todos = await db.get("Todo");
  // this will only contain the todos above, but they will be augmented with the default model data like `id`, `createdAt`, etc.
};
```

Please note that you don't need to specify the full `Todo` here, because when creation some items, the `set` function will augment your items with other items like `id` and `createdAt`. That's why we need the `Creation` interface, and wrap it around your type.

  </details>

<details><summary>update.md</summary>
    
  `db.update` lets you update items in your database, given a filter and map.


### Example

```ts
const filterFunction = (todo: Todo): boolean => todo.status === "doing";

const mapFn = (todo: Todo): Todo => {
  const newTodo = { ...todo, status: "done" };
  return newTodo;
};

const updatedResult = await db.get("Todo", filterFunction, mapFunction);
```


### Advanced: Example with `mergeNestedObject`

`mergeNestedObject` lets you easily update deeply nested objects without having to write out too much code... It works like this:

```ts
const updatedResult = await db.get(
  "SuperDeepModel",
  () => true,
  (old) => mergeNestedObject(old, { a: { b: { c: { d: undefined, e: 1 } } } })
);
```

If you ever have todo many updates in a deeply nested model, you might find this useful!

  </details>

<details><summary>upsert.md</summary>
    
  Upsert is a special one.

It can either insert or update items in your database.


### Example

```ts
import { Creation } from "model-types";
import { Todo } from "todo-type";

const upsertTodos = async () => {
  // the upsert function can take a single item or multiple items (in an array)
  const items: Creation<Todo> | Creation<Todo>[] = [
    { name: "typenet", status: "todo", markdown: "Learn about typenet" },
    // because we don't have an item with this name in our database yet, it will be inserted
    { name: "typerepo", status: "done", markdown: "Learn about typerepo" },
    // because we already have an item with this name in our database, it will be updated
  ];

  const upsertResult = await db.upsert("Todo", items);
};
```

  </details>

# Api reference

