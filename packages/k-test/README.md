# K test

k-test (node operation)



# Outline

## Functions

- [runTestsForOperation](#runTestsForOperation)
- [runTests](#runTests)
- [sum](#sum)



# Functions

## runTestsForOperation

runTestsForOperation(operationName) runs all tests that can be found in an operation. nicely logs and returns which funtions are working or not and why

this assumes the index file exports all tests under the `test` constant, which should be done using this framework

this also assumes your tests are exported from build/index.js (which means you need to build your code, not transpile, so it's not possible for every type of operation)




### Parameters (3)

#### Parameter 1: operationName: string

#### Parameter 2: writeResultsToIndex (optional): boolean

#### Parameter 3: manualProjectRoot (optional): string

## runTests

run tests and log the results.

input: Test

output: isAllValid (boolean)




## sum

NB: Tried, but doesn't work, probably because it only invalidates cache for one file, not all the files that are required by that file... we need a separate process

const requireWithoutCache = (filePath: string) => {

delete require.cache[path.resolve(filePath)];

return require(filePath);

};

example function that can be tested


### Returns: number

### Parameters (2)

#### Parameter 1: a: number

#### Parameter 2: b: number

