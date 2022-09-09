# Js util

js-util (undefined operation)

Size: undefined LOC, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

# Outline

## Functions

- [apply](#apply)
- [arrayGenerator](#arrayGenerator)
- [concatenate](#concatenate)
- [createEnum](#createEnum)
- [findLastIndex](#findLastIndex)
- [getObjectFromParamsString](#getObjectFromParamsString)
- [getObjectKeysArray](#getObjectKeysArray)
- [getSubsetFromObject](#getSubsetFromObject)
- [groupByKey](#groupByKey)
- [insertAt](#insertAt)
- [isAllTrue](#isAllTrue)
- [main](#main)
- [makeArray](#makeArray)
- [mapAsync](#mapAsync)
- [mapItem](#mapItem)
- [mapKeys](#mapKeys)
- [mapMany](#mapMany)
- [mapValuesSync](#mapValuesSync)
- [mergeObjectParameters](#mergeObjectParameters)
- [mergeObjectsArray](#mergeObjectsArray)
- [mergeObjects](#mergeObjects)
- [notEmpty](#notEmpty)
- [objectMapAsync](#objectMapAsync)
- [objectMapSync](#objectMapSync)
- [objectValuesMap](#objectValuesMap)
- [onlyUnique2](#onlyUnique2)
- [onlyUnique](#onlyUnique)
- [removeIndexFromArray](#removeIndexFromArray)
- [sumAllKeys](#sumAllKeys)
- [sumObjectParameters](#sumObjectParameters)
- [sum](#sum)
- [takeFirst](#takeFirst)
- [worker](#worker)



# Functions

## apply

Max. indexation depth: 2, 

function that takes an array of functions and applies them one by one, on the value or the result of the previous function. Only possible if the type of the value stays the same.

## Returns: unknown

## arrayGenerator

Max. indexation depth: 2, 

/**
 * NB: Do I really need this? Would be nice not to use generators.
 */

## Returns: unknown

## concatenate

Max. indexation depth: 0, 



## Returns: unknown

## createEnum

Max. indexation depth: 2, 

creates an enum object from a readonly const array so you don't have to
------
const taskNames = ["a","b","c"] as const;
type TaskNames = typeof taskNames[number];
const enummm = createEnum(taskNames);
(value of enummm: { a: "a", b: "b", c: "c" })

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## findLastIndex

Max. indexation depth: 2, 

finds the last index of an array where a certain filter holds true

## Returns: unknown

## getObjectFromParamsString

Max. indexation depth: 4, 

useful for cli's that only take strings. This creates an object from a string

input: "x:a, y:b, z:c"
output: { x: "a", y: "b", z: "c" }

TODO: would be nice if we can validate this string immediately using a JSON SCHEMA

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## getObjectKeysArray

Max. indexation depth: 1, 

Handy function to get the keys of an object, but typed.

NB: The only difference from Object.keys is that this returns the keys in a typesafe manner

### Returns: array

- null: object





## getSubsetFromObject

Max. indexation depth: 2, 

takes an object and a subset of its keys and returns a subset of that object

input: { x: "a", y: "b", z: "c" } and ["x"]

output: { x: "a" }

## Returns: unknown

## groupByKey

Max. indexation depth: 3, 

key should be of type string!

input = [{path:"xyz"},{path:"xyz"},{path:"abc"}]
groupByKey(input, "path")
ouput: { xyz: [{path:"xyz"},{path:"xyz"}], abc: [{path:"abc"}]}

## Returns: unknown

## insertAt

Max. indexation depth: 1, 

Insert an array inside of an array before a certain index

Example:

```ts

const testArray = [1, 2, 3, 4, 5];
const result = insertAt(testArray, [99, 100], 2);
console.log({ testArray, result });

```

### Returns: array

- null: object





## isAllTrue

Max. indexation depth: 1, 

checks if all items in an array are true

### Returns: boolean







## main

Max. indexation depth: 2, 



## Returns: unknown

## makeArray

Max. indexation depth: 5, 

if something is not an array, returns it as the first element of an array

if the input is undefined, an empty array will be returned.

NB: TODO: find out the workings of the array constructor (`Array("any value")`), because maybe it does something very similar. No need to have a dependency then if it's similar.

## Returns: unknown

## mapAsync

Max. indexation depth: 1, 

mapAsync makes it possible to map over an array async without having to do the promise.all afterwards

It saves a lot of lines of code, and makes it more readable
Example usage:


```ts

const myNumbers = [1, 2, 3, 4, 5];

const doubleAsync = (num) => Promise.resolve(num + num);
const sqrtAsync = (sum) => Promise.resolve(sum * sum);
const halfAsync = (time) => Promise.resolve(time / 2);

const doubleSqrtHalfs = await mapAsync(myNumbers, doubleAsync)
.then((sums) => mapAsync(sums, sqrtAsync))
.then((times) => mapAsync(times, halfAsync));
```

## Returns: unknown

## mapItem

Max. indexation depth: 3, 



## Returns: unknown

## mapKeys

Max. indexation depth: 4, 

maps over all keys in an object and replaces them using a mapfn

## Returns: unknown

## mapMany

Max. indexation depth: 2, 

Lets you map over any array with a async function while setting a max. concurrency

Taken and improved from https://codeburst.io/async-map-with-limited-parallelism-in-node-js-2b91bd47af70

## Returns: unknown

## mapValuesSync

Max. indexation depth: 2, 

maps over all values in an object and replaces them using a mapfn

sync

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## mergeObjectParameters

Max. indexation depth: 2, 

merges two objects: a config object and a defaults object. If the config object has something missing, a default will be used from the defaults object.

In short: merges two objects, for every parameter, use the default as a fallback

DEPRECATED: in favor of mergeObjects

## Returns: unknown

## mergeObjectsArray

Max. indexation depth: 2, 

TODO: find a way to return the correct type interface

## Returns: unknown

## mergeObjects

Max. indexation depth: 3, 

merges multiple objects, overwriting the previous one with the next. Can be useful for configs where there are multiple layers of configs that overwrite each other.

Please note though, that only the root keys of the object are overwriting each other, so if there is nested datastructures, the last one with a specific key overwrites the previous ones copletely

## Returns: unknown

## notEmpty

Max. indexation depth: 1, 

/**
 * Removes empty values (null or undefined) from your arrays in a type-safe way
 */

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## objectMapAsync

Max. indexation depth: 4, 

Map an object asynchronously and return the same object with the mapped result in its values

Example usage:


```ts

const srcFileContentObject = {
"index.ts": indexString,
"public-local.ts": publicLocalTypescriptFileString,
"public.ts": publicTypescriptFileString,
};

const srcFileWriteSuccessObject = await objectMapAsync(srcFileContentObject, async (operationRelativeTypescriptFilePath,content)=>{

try {
await fs.writeFile(
path.join(operationBasePath, "src", operationRelativeTypescriptFilePath),
content,
"utf8"
);

return true;

} catch {
return false;
}

});

```

## Returns: unknown

## objectMapSync

Max. indexation depth: 2, 

maps over all values in an object and replaces them using a mapfn

Example usage:

```ts

const result = objectMapSync({ hello: "world", isTrue: true }, (key,value) => {
return `${value}123`;
});
```

## Returns: unknown

## objectValuesMap

Max. indexation depth: 2, 

not sure if this is the best way, but it does save some lines of code!

maps over an object's values with a map function

DEPRECATED in favour of objectMapSync and objectMapAsync

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## onlyUnique2

Max. indexation depth: 3, 

function that returns a filter function that can be used as a filter for any array. removes duplicates.

optionally takes a compare function that should return a "true" if two instances are equal. if you use this function, make sure to pass a generic of the type the items will have, in order to make this equality function type safe as well

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## onlyUnique

Max. indexation depth: 1, 

/**
 * DEPRECATED: should refactor everything to use onlyUnique2 and call it onlyUnique again
 *
 * to be used as a filter. removes duplicates
 */

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## removeIndexFromArray

Max. indexation depth: 1, 

removes an index from an array

example:

```ts
const exampleArray = ["a", "b", "c", "d", "e"];
console.log(removeIndexFromArray(exampleArray, 2)); //c should be removed
```

### Returns: array

- null: object





## sumAllKeys

Max. indexation depth: 6, 

sums all keys of an array of objects, assuming the objects have the same datastructure and assuming the values contain either numbers or undefined

## Returns: unknown

## sumObjectParameters

Max. indexation depth: 3, 

sums all parameters in two objects together

## Returns: unknown

## sum

Max. indexation depth: 3, 



## Returns: unknown

## takeFirst

Max. indexation depth: 1, 

takes any type T or an array of T and returns T or the first of the array (which is T)

## Returns: unknown

## worker

Max. indexation depth: 3, 



## Returns: unknown

