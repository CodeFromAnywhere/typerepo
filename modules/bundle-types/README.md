# Bundle types

bundle-types (js operation)



# Outline

## Models:

- [BundleConfig](#BundleConfig)

## Interfaces:

- [AppShell](#AppShell)
- [DefaultBundleConfig](#DefaultBundleConfig)
- [EnvironmentVariableObject](#EnvironmentVariableObject)
- [FinalBundleConfig](#FinalBundleConfig)
- [FrontBackBundle](#FrontBackBundle)
- [GenerateBundleConfig](#GenerateBundleConfig)
- [InformationStrategy](#InformationStrategy)
- [Json](#Json)
- [OperationName](#OperationName)
- [OperationPrivacy](#OperationPrivacy)
- [ProjectRelativeFilePath](#ProjectRelativeFilePath)
- [ProjectRelativeFolderPath](#ProjectRelativeFolderPath)
- [ServerOperationName](#ServerOperationName)
- [SlugModelType](#SlugModelType)



# Models

## BundleConfig

jsonSingle model







> --- dbStorageMethod: jsonSingle<br />---

Properties: 

 | Name | Type | Description |
|---|---|---|
| isOffline (optional) | boolean | if true, will not clone/pull/push and deploy. No internet is needed, will also not use any `.git` folder. |
| skipPull (optional) | boolean | skips the step where it gets the new stuff from github |
| skipPush (optional) | boolean | skips the step where it pushes the new bundle to remote |
| skipUpsert (optional) | boolean | skips the step where it saves to the db |
| debug (optional) | boolean |  |
| description (optional) | string | descriptioin for git commit, if pushing. Default is "monorepo update" |
| informationStrategy (optional) | string | push (default): take needed information from project and push to bundle (removing the existing info)<br /><br />pullReplace: pull bundle and keep its information intact, not taking anything new from the OS, replacing all the information we had from these models in the OS<br /><br />pullMerge: pull bundle and use its information in conjunction with the information we had in the OS. This option will merge both information sources, removing duplicate IDs<br /><br />NB: Later we may want to define this setting on a per-model basis! |
| branchName (optional) | string | optionally, specify a custom branch name to pull from / push to / checkout (default is "main") |
| gitRepoUrl (optional) | string |  |
| publicEnvironmentVariables (optional) | object |  |
| privateEnvironmentVariables (optional) | object |  |
| gitUserEmail (optional) | string | Configuration for your commit (needed for vercel deployment) |
| gitUserName (optional) | string |  |
| slug  | string | use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example. |
| name  | string | Human readable name of the monorepo (A kebab-case version of this will be used as root foldername) |
| language  | string | all currently supported languages |
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| bundles  | array |  |
| dependencies  | array | Generated, private by default. If they're already here, uses private/public setting as given.<br /><br />When generating, removes the ones that are not dependencies (of dependencies) of your standalone apps |
| docsRelativeFolderPath (optional) | string | later this could be known by the frontend so it will render a ui to select a folder<br /><br />We need to figure out how we can know all type types in between when getting the type definition schema, not only the final type. If I'm lucky there is a way to find it as a #ref in a consistent way. |
| readmeRelativeFilePath (optional) | string |  |
| foldersFromRepo (optional) | array | if given, it will fetch these folders from the repo and paste them in the bundle whenever the bundle is generated<br /><br />can be handy if you're working with someone else... |


# Interfaces

## AppShell

## DefaultBundleConfig

Properties of bundleconfig that need a default setting.



> Properties of bundleconfig that need a default setting.

Properties: 

 | Name | Type | Description |
|---|---|---|
| description (optional) | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| informationStrategy (optional) | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| branchName (optional) | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| debug (optional) | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| foldersFromRepo (optional) | array | if given, it will fetch these folders from the repo and paste them in the bundle whenever the bundle is generated<br /><br />can be handy if you're working with someone else... |



## EnvironmentVariableObject

## FinalBundleConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| description (optional) | string | descriptioin for git commit, if pushing. Default is "monorepo update" |
| informationStrategy (optional) | string | push (default): take needed information from project and push to bundle (removing the existing info)<br /><br />pullReplace: pull bundle and keep its information intact, not taking anything new from the OS, replacing all the information we had from these models in the OS<br /><br />pullMerge: pull bundle and use its information in conjunction with the information we had in the OS. This option will merge both information sources, removing duplicate IDs<br /><br />NB: Later we may want to define this setting on a per-model basis! |
| branchName (optional) | string | optionally, specify a custom branch name to pull from / push to / checkout (default is "main") |
| debug (optional) | boolean |  |
| foldersFromRepo (optional) | array | if given, it will fetch these folders from the repo and paste them in the bundle whenever the bundle is generated<br /><br />can be handy if you're working with someone else... |
| isOffline (optional) | boolean | if true, will not clone/pull/push and deploy. No internet is needed, will also not use any `.git` folder. |
| skipPull (optional) | boolean | skips the step where it gets the new stuff from github |
| skipPush (optional) | boolean | skips the step where it pushes the new bundle to remote |
| skipUpsert (optional) | boolean | skips the step where it saves to the db |
| gitRepoUrl (optional) | string |  |
| publicEnvironmentVariables (optional) | object |  |
| privateEnvironmentVariables (optional) | object |  |
| gitUserEmail (optional) | string | Configuration for your commit (needed for vercel deployment) |
| gitUserName (optional) | string |  |
| slug  | string | use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example. |
| name  | string | Human readable name of the monorepo (A kebab-case version of this will be used as root foldername) |
| language  | string | all currently supported languages |
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| bundles  | array |  |
| dependencies  | array | Generated, private by default. If they're already here, uses private/public setting as given.<br /><br />When generating, removes the ones that are not dependencies (of dependencies) of your standalone apps |
| docsRelativeFolderPath (optional) | string | later this could be known by the frontend so it will render a ui to select a folder<br /><br />We need to figure out how we can know all type types in between when getting the type definition schema, not only the final type. If I'm lucky there is a way to find it as a #ref in a consistent way. |
| readmeRelativeFilePath (optional) | string |  |



## FrontBackBundle

This type can specify a frontend and backend that belong to each other. it doesn't include all operations that the ui or server are dependent on, they are calculated separately



> This type can specify a frontend and backend that belong to each other. it doesn't include all operations that the ui or server are dependent on, they are calculated separately

Properties: 

 | Name | Type | Description |
|---|---|---|
| operations (optional) | array | any operation names that are not necesarily dependencies of the named front-back bundle but still need to be available. |
| uiOperationName (optional) | string | (optional) main shared ui package of the frontend |
| appShellOperationNames (optional) | array | which app shell(s) or app operations are there for the frontend? |
| serverOperationName (optional) | string | operation name for server, if this UI is connected to one |
| productionWebUrl (optional) | string | if there is a ui and it has a web-shell, and it is deployed somewhere into production, add the deployed domain here. |
| productionApiUrl (optional) | string | if there is one, it should be specified here (without trailing slash) |
| endpointsAuthToken (optional) | string | if this is provided, all endpoints require this auth token to be provided, or the endpoints do not work<br /><br />if you wish to have a more extensive authentication method for your endpoints, make sure to create your own auth layer |



## GenerateBundleConfig

configuration that can be applied when generating a new bundle

It can be put in the BundleConfig, but it can also be set manually for an individual Bundle Generation.



> configuration that can be applied when generating a new bundle<br /><br />It can be put in the BundleConfig, but it can also be set manually for an individual Bundle Generation.

Properties: 

 | Name | Type | Description |
|---|---|---|
| isOffline (optional) | boolean | if true, will not clone/pull/push and deploy. No internet is needed, will also not use any `.git` folder. |
| skipPull (optional) | boolean | skips the step where it gets the new stuff from github |
| skipPush (optional) | boolean | skips the step where it pushes the new bundle to remote |
| skipUpsert (optional) | boolean | skips the step where it saves to the db |
| debug (optional) | boolean |  |
| description (optional) | string | descriptioin for git commit, if pushing. Default is "monorepo update" |
| informationStrategy (optional) | string | push (default): take needed information from project and push to bundle (removing the existing info)<br /><br />pullReplace: pull bundle and keep its information intact, not taking anything new from the OS, replacing all the information we had from these models in the OS<br /><br />pullMerge: pull bundle and use its information in conjunction with the information we had in the OS. This option will merge both information sources, removing duplicate IDs<br /><br />NB: Later we may want to define this setting on a per-model basis! |
| branchName (optional) | string | optionally, specify a custom branch name to pull from / push to / checkout (default is "main") |
| gitRepoUrl (optional) | string |  |
| publicEnvironmentVariables (optional) | object |  |
| privateEnvironmentVariables (optional) | object |  |
| gitUserEmail (optional) | string | Configuration for your commit (needed for vercel deployment) |
| gitUserName (optional) | string |  |



## InformationStrategy

push (default): take needed information from project and push to bundle (removing the existing info)

pullReplace: pull bundle and keep its information intact, not taking anything new from the OS, replacing all the information we had from these models in the OS

pullMerge: pull bundle and use its information in conjunction with the information we had in the OS. This option will merge both information sources, removing duplicate IDs

NB: Later we may want to define this setting on a per-model basis!



> push (default): take needed information from project and push to bundle (removing the existing info)<br /><br />pullReplace: pull bundle and keep its information intact, not taking anything new from the OS, replacing all the information we had from these models in the OS<br /><br />pullMerge: pull bundle and use its information in conjunction with the information we had in the OS. This option will merge both information sources, removing duplicate IDs<br /><br />NB: Later we may want to define this setting on a per-model basis!




## Json

## OperationName

later we can make this an enum! it can be auto-generated along with enums for the operation paths, and more things alike.

if it's an enum it will automatically be possible to select a value from it in the simplified schema form :D

besides simply having OperationName, we can have specific operation classification operation names:

- JsOperationName (js)
- NodeOperationName (node)
- ServerOperationName (server)
- AppShellOperationName (web, app, etc.)
- UiOperationName (ui-es6 and ui-es5)



> later we can make this an enum! it can be auto-generated along with enums for the operation paths, and more things alike.<br /><br />if it's an enum it will automatically be possible to select a value from it in the simplified schema form :D<br /><br />besides simply having OperationName, we can have specific operation classification operation names:<br /><br />- JsOperationName (js)<br />- NodeOperationName (node)<br />- ServerOperationName (server)<br />- AppShellOperationName (web, app, etc.)<br />- UiOperationName (ui-es6 and ui-es5)




## OperationPrivacy

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | string |  |
| privacy  | string | if public, everything will be kept<br /><br />if private, src and todo will be removed from bundle, unless it's a ui-es6 operation, because src is needed then. In that case, only "todo" will be deleted. |



## ProjectRelativeFilePath

## ProjectRelativeFolderPath

later this could be known by the frontend so it will render a ui to select a folder

We need to figure out how we can know all type types in between when getting the type definition schema, not only the final type. If I'm lucky there is a way to find it as a #ref in a consistent way.



> later this could be known by the frontend so it will render a ui to select a folder<br /><br />We need to figure out how we can know all type types in between when getting the type definition schema, not only the final type. If I'm lucky there is a way to find it as a #ref in a consistent way.




## ServerOperationName

## SlugModelType

use this model for things with a name that have an unique slug that can be used to identify the model



> use this model for things with a name that have an unique slug that can be used to identify the model

Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string | use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example. |
| name  | string |  |
| language  | string | all currently supported languages |
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |


