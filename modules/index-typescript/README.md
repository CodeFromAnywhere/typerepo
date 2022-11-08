# Index typescript

index-typescript (node operation)



## Docs

- [Sorting types](#sorting-types)



# Docs

## Sorting types

In order to sort the indexed types well, you need to know that:

1. Interfaces first index all extended types and interfaces, then the interface itself. The last extended type/inteface comes first, then the previous one, etc.

2. If you define an intersection type (e.g. `type X = A & { someObject: string } & B;`), the last intersected item comes first, the first item comes last in the order. This gives you more flexibility because in an interface the extended things always come b efore, but with a type they can also come in the middle. If you do this for a model, be sure to add the `dbStorageMethod` in frontmatter manually

## Example:

Let's say you want to define a special type of user, which is a user but has an additional mapped object type, which you want behind in the order. But you want the main properties of the slug at the beginning...

You can then choose to do it somewhat like this:

```ts
export type SpecialUser = MappedObjectType & {
  username: string;
  password: string;
} & SlugModelType;
```

This way the `SlugModelType` properties come first in the indexation, then the username and password, and then the `MappedObjectType`.

**Conclusion**: If you're making a type that extends multiple things, but the order should be more custom, use a `type` instead of an `interface`.


# Api reference

## findCommentTypes()

returns all types that are found as start of a line in the comment (capitalised, with a ":" behind)


| Input      |    |    |
| ---------- | -- | -- |
| commentWithoutFrontmatter | string |  |
| **Output** | {  }[]   |    |



## getIndexId()

| Input      |    |    |
| ---------- | -- | -- |
| filePath | string |  |,| name | string |  |
| **Output** |    |    |



## getNumberOfLines()

| Input      |    |    |
| ---------- | -- | -- |
| string | string |  |
| **Output** |    |    |



## 📄 findCommentTypes (exported const)

returns all types that are found as start of a line in the comment (capitalised, with a ":" behind)


## 📄 getIndexId (exported const)

## 📄 getNumberOfLines (exported const)

