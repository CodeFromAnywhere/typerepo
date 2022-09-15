# Function util

function-util (undefined operation)



# Outline

## Functions

- [getSdkFunctionPaths](#getSdkFunctionPaths)

## Interfaces:

- [FnMatch](#FnMatch)
- [TsFunction](#TsFunction)



# Functions

## getSdkFunctionPaths

# Interfaces

## FnMatch

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation that this indexed instance is referencing to<br /><br />e.g. src/general.ts<br /><br />(no preceding slash) |
| isExported  | boolean | The function is immediately exported upon creation. If the os dev tools are being used, this means it is also exported from the operation |
| isApiExposed  | boolean | for all exported functions in node operations, true by default false for others<br /><br />can be overwritten using frontmatter |
| apiAuthenticationStrategy  | string | Still not sure if the user one is a good idea but there are probably some usecases that would really benefit to have a user-layer embedded in the king os system |
| description (optional) | string | a string that is known to contain markdown. |
| rawText (optional) | string | raw text of the function |
| commentsInside  | array | all comments found in a function and the node that they belong to |
| returnType  | object | all info that should always be collected when indexing any type interface |
| parameters (optional) | array | parameters the function takes as its arguments, if any |
| size  | object | type interface that can be used to summarize multiple files |
| commentSize (optional) | object | type interface that can be used to summarize multiple files |
| codeSize (optional) | object | type interface that can be used to summarize multiple files |
| cumulativeSize (optional) | object | type interface that can be used to summarize multiple files |
| cumulativeCommentSize (optional) | object | type interface that can be used to summarize multiple files |
| cumulativeCodeSize (optional) | object | type interface that can be used to summarize multiple files |
| maxIndentationDepth  | number | maximum amount of times indedented in this function<br /><br />good for determining the complexity and finding code that can be simplified/destructured into smaller pieces |
| dependantFiles (optional) | array | finds all files that import this function<br /><br />NB: this is not indexed because this information has nothing to do with the operation itself, but the exposure to the broader monorepo. This is calculated on the fly. |
| matcher  | string |  |
| relativeOperationPath  | string |  |



## TsFunction

Interface for arrow functions and normal functions



> --- dbStorageMethod: jsonSingle<br />---<br /><br />Interface for arrow functions and normal functions

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation that this indexed instance is referencing to<br /><br />e.g. src/general.ts<br /><br />(no preceding slash) |
| isExported  | boolean | The function is immediately exported upon creation. If the os dev tools are being used, this means it is also exported from the operation |
| isApiExposed  | boolean | for all exported functions in node operations, true by default false for others<br /><br />can be overwritten using frontmatter |
| apiAuthenticationStrategy  | string | Still not sure if the user one is a good idea but there are probably some usecases that would really benefit to have a user-layer embedded in the king os system |
| description (optional) | string | a string that is known to contain markdown. |
| rawText (optional) | string | raw text of the function |
| commentsInside  | array | all comments found in a function and the node that they belong to |
| returnType  | object | all info that should always be collected when indexing any type interface |
| parameters (optional) | array | parameters the function takes as its arguments, if any |
| size  | object | type interface that can be used to summarize multiple files |
| commentSize (optional) | object | type interface that can be used to summarize multiple files |
| codeSize (optional) | object | type interface that can be used to summarize multiple files |
| cumulativeSize (optional) | object | type interface that can be used to summarize multiple files |
| cumulativeCommentSize (optional) | object | type interface that can be used to summarize multiple files |
| cumulativeCodeSize (optional) | object | type interface that can be used to summarize multiple files |
| maxIndentationDepth  | number | maximum amount of times indedented in this function<br /><br />good for determining the complexity and finding code that can be simplified/destructured into smaller pieces |
| dependantFiles (optional) | array | finds all files that import this function<br /><br />NB: this is not indexed because this information has nothing to do with the operation itself, but the exposure to the broader monorepo. This is calculated on the fly. |


