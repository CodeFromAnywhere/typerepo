# Db recipes

db-recipes (node operation)

Useful library of functions that wrap the `fs-orm` database.

TODO: should probably be split up further to differentiate between db-ui functions and a more general purpose library




# Outline

## Functions

- [cacheLookup](#cacheLookup)
- [calculateOperatingSystemBundle](#calculateOperatingSystemBundle)
- [deleteDbModel](#deleteDbModel)
- [getCachedFunctions](#getCachedFunctions)
- [getDatabaseMenu](#getDatabaseMenu)
- [getDbModelNames](#getDbModelNames)
- [getDbModel](#getDbModel)
- [getFunctionIndex](#getFunctionIndex)
- [getNestedDatabaseMenu](#getNestedDatabaseMenu)
- [getReferencableModelData](#getReferencableModelData)
- [hasDbRecipes](#hasDbRecipes)
- [main](#main)
- [makeSrcRelativeFolder](#makeSrcRelativeFolder)
- [testFn](#testFn)
- [tsInterfaceToDbMenu](#tsInterfaceToDbMenu)
- [upsertDbModel](#upsertDbModel)
- [validateInput](#validateInput)
- [wrapFunction](#wrapFunction)

## Interfaces

- [CacheLookupResult](#cachelookupresult)
- [NestedDatabaseMenu](#nesteddatabasemenu)
- [TsFunction](#tsfunction)
- [TsInterface](#tsinterface)

## Variables

- [cacheLookup](#cachelookup)
- [calculateOperatingSystemBundle](#calculateoperatingsystembundle)
- [deleteDbModel](#deletedbmodel)
- [functions](#functions)
- [getCachedFunctions](#getcachedfunctions)
- [getDatabaseMenu](#getdatabasemenu)
- [getDbModelNames](#getdbmodelnames)
- [getDbModel](#getdbmodel)
- [getFunctionIndex](#getfunctionindex)
- [getNestedDatabaseMenu](#getnesteddatabasemenu)
- [getReferencableModelData](#getreferencablemodeldata)
- [hasDbRecipes](#hasdbrecipes)
- [main](#main)
- [makeSrcRelativeFolder](#makesrcrelativefolder)
- [testFnWrapped](#testfnwrapped)
- [testFn](#testfn)
- [tsInterfaceToDbMenu](#tsinterfacetodbmenu)
- [upsertDbModel](#upsertdbmodel)
- [validateInput](#validateinput)
- [wrapFunction](#wrapfunction)



# Functions

## cacheLookup

Wrapper function to cache any function and invalidate it, in some way

caching
automatic cache invalidation if data sources are updated
optimistic caching after cache invalidation


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| hasValidCache  | boolean |  |
| result  | object |  |



### Parameters (2)

#### Parameter 1: functionName: string

#### Parameter 2: parameters (optional): array

- null: object






## calculateOperatingSystemBundle

This function should calculate a giant bundle for the whole operating system. This should include everything, public.

Used to show the whole os as a bundle.




### Parameters (1)

#### Parameter 1: manualProjectRoot (optional): string

## deleteDbModel

deletes an instance of an db data interface from the db in a typesafe way




## getCachedFunctions

TODO: it would probably be good to create a more general purpose caching function




## getDatabaseMenu

Finds all relevant Db models to show in the menu

- for a bundleId, it gets all models from the bundleSummary
- for a sensible project (bundled) gets all models from the packages
- for the main project, gets all models from sdk-db directly

TODO: NB: the first and the second are not the same, so this needs to be cleaned up.




### Parameters (1)

#### Parameter 1: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| bundleId (optional) | string |  |



## getDbModelNames

### Parameters (1)

#### Parameter 1: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| bundleId (optional) | string |  |



## getDbModel

gets all instances of an db data interface from the db in a typesafe way

TODO: NB: there's a bug because it sometimes finds multiple instances of the TsInterface so sometimes it returns an old version of the TsInterface that was not re-indexed. This happens because all interfaces for db's also appear in sdk-db, but because the files there themselves don't change, that operation is not re-indexed. This leads to outdated indexations.

I should find a fix for that.




## getFunctionIndex

finds function indexation from database

TODO: this should be used!




### Parameters (1)

#### Parameter 1: {  functionName,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| functionName  | string |  |



## getNestedDatabaseMenu

It's a very low-hanging fruit to be able to group the database models better... now it's kind of messy!

It would be great if it were a nested menu, just like the one in markdown-reader...

We can have a folder per bundle, and a folder per operation. In the operation we can also sort by folder the type was created in (`operationRelativeTypescriptFilePath`)

In a way you can see it at three levels

bundle -> operation -> srcRelativeFolder

The complete OS can also be represented as a bundle

If we do this, and the menus are collapsible as well as searchible... we'll have a GREAT way to alter models.

====================

SUPER COOL

let's use this for db-admin..

Any bundle will just see itself, but I will see this for every bundle. Also for the master-bundle, which is going to be super useful because then I'll be able to see the db-models for different operations and see the data they contain.




## getReferencableModelData

Get referencableModelData for a single DbModel.

NB: this does not get the items that can be referenced in that model!

For getting all required `ReferencableModelData` for the prop in `SimplifiedSchemaForm`, use `useReferencableModelData`.




### Parameters (1)

#### Parameter 1: dbModelName: string(Enum: Device | Group | PageVisit | PeerMessage | Person | PersonInformation | PersonInformationValue | PersonPlatformConnection | Platform | Interest | MediaChannel | MediaCredentail | MediaPost | Postable | BundleConfig | FunctionExecution | MarkdownFileConfig | OperationConfig | OperationIndex | PackageJson | SocialMediaCallToAction | TsBuildError | TsComment | TsConfig | TsExport | TsFunction | TsImport | TsInterface | TsLintWarning | TsVariable | WebsiteCallToAction | Address | Area | City | Country | Location | KvmdWord | MarkdownWord | NepaliEnglishTranslationMatrix | Statement | TokiPonaMatrix | Translation | Word | WordCategory | WordMatrix | SlugModelType | AppDeveloper | Assignment | Bag | Calendar | DataPoint | Deliverable | Diary | Feeling | FeelingLog | Folder | Host | Inventory | Item | ItemCategory | KvmdShortcut | Label | Light | Listing | LoginCredential | Material | MessagePreset | ProgressReport | Question | Reservation | Resource | Shit | ShitLog | ShoppingList | Shortcut | Student | Student2 | TaskError | Thing | TodoFile | Trackable | User | UserCredential | JeepType | LocationType | Activity | CompanyRequirement | CompanySize | CompanyType | Company | ContactInformation | Contribution | EsgMetric | ProductCategory | Product | ProofState | Proof | SustainabilityPlan | ValueChainPhase)

## hasDbRecipes

Simple function to test whether or not the DbRecipes endpoints are available. If it returns true through the api, the other ones are also available.


### Returns: object

## main

## makeSrcRelativeFolder

gets a src relative folder path (so maybe "" for a file `src/util.ts` or "util" for a file `src/util/thing.ts`)


### Returns: string

### Parameters (1)

#### Parameter 1: operationRelativeTypescriptFilePath: string

## testFn

## tsInterfaceToDbMenu

### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| operationName  | string |  |
| type  | string |  |
| srcRelativeFolder (optional) | string |  |



### Parameters (2)

#### Parameter 1: tsInterface: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| commentsInside  | array |  |
| isExported  | boolean |  |
| hasGeneric  | boolean |  |
| rawText (optional) | string |  |
| extensions (optional) | array |  |
| isDbModel  | boolean |  |
| isOperationIndex  | boolean |  |
| operationStorageLocationRelativeFilePath (optional) | string |  |



#### Parameter 2: type: string

## upsertDbModel

upserts an instance of an db data interface from the db in a typesafe way




## validateInput

wrapper function that takes that data but also the interface of the function and validates the parameters before it executes the function.


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| isValid  | boolean |  |
| errors (optional) | array |  |



### Parameters (3)

#### Parameter 1: functionName: string

#### Parameter 2: parameters (optional): array

- null: object






#### Parameter 3: tsFunction: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| canCache (optional) | boolean |  |
| isGetApi (optional) | boolean |  |
| isPostApi (optional) | boolean |  |
| isExported  | boolean |  |
| isApiExposed  | boolean |  |
| publicAuthorization  | array |  |
| rawText (optional) | string |  |
| commentsInside  | array |  |
| parameters (optional) | array |  |
| maxIndentationDepth  | number |  |
| dependantFiles (optional) | array |  |



## wrapFunction

### Returns: object

# Interfaces

## CacheLookupResult

Properties: 

 | Name | Type | Description |
|---|---|---|
| hasValidCache  | boolean |  |
| result (optional) | object |  |



## NestedDatabaseMenu

This is a simple overwrite of the `NestedPathObject` with a more specific key naming.

I can use this directly to render a menu with many layers!

SUPER COOL








## TsFunction

Interface for arrow functions and normal functions





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| canCache (optional) | boolean |  |
| isGetApi (optional) | boolean |  |
| isPostApi (optional) | boolean |  |
| isExported  | boolean |  |
| isApiExposed  | boolean |  |
| publicAuthorization  | array |  |
| runEveryPeriod (optional) | string |  |
| description (optional) | string |  |
| rawText (optional) | string |  |
| commentsInside  | array |  |
| returnType  | object |  |
| parameters (optional) | array |  |
| size  | object |  |
| commentSize (optional) | object |  |
| codeSize (optional) | object |  |
| cumulativeSize (optional) | object |  |
| cumulativeCommentSize (optional) | object |  |
| cumulativeCodeSize (optional) | object |  |
| maxIndentationDepth  | number |  |
| dependantFiles (optional) | array |  |



## TsInterface

TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell.





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| type  | object |  |
| description (optional) | string |  |
| commentsInside  | array |  |
| isExported  | boolean |  |
| hasGeneric  | boolean |  |
| rawText (optional) | string |  |
| extensions (optional) | array |  |
| isDbModel  | boolean |  |
| isOperationIndex  | boolean |  |
| operationStorageLocationRelativeFilePath (optional) | string |  |
| dbStorageMethod (optional) | string |  |


# Variables

## cacheLookup (exported const)

Wrapper function to cache any function and invalidate it, in some way

caching
automatic cache invalidation if data sources are updated
optimistic caching after cache invalidation


## calculateOperatingSystemBundle (exported const)

This function should calculate a giant bundle for the whole operating system. This should include everything, public.

Used to show the whole os as a bundle.


## deleteDbModel (exported const)

deletes an instance of an db data interface from the db in a typesafe way


## functions (unexported let)

## getCachedFunctions (unexported const)

## getDatabaseMenu (exported const)

Finds all relevant Db models to show in the menu

- for a bundleId, it gets all models from the bundleSummary
- for a sensible project (bundled) gets all models from the packages
- for the main project, gets all models from sdk-db directly

TODO: NB: the first and the second are not the same, so this needs to be cleaned up.


## getDbModelNames (exported const)

## getDbModel (exported const)

gets all instances of an db data interface from the db in a typesafe way

TODO: NB: there's a bug because it sometimes finds multiple instances of the TsInterface so sometimes it returns an old version of the TsInterface that was not re-indexed. This happens because all interfaces for db's also appear in sdk-db, but because the files there themselves don't change, that operation is not re-indexed. This leads to outdated indexations.

I should find a fix for that.


## getFunctionIndex (exported const)

finds function indexation from database

TODO: this should be used!


## getNestedDatabaseMenu (exported const)

It's a very low-hanging fruit to be able to group the database models better... now it's kind of messy!

It would be great if it were a nested menu, just like the one in markdown-reader...

We can have a folder per bundle, and a folder per operation. In the operation we can also sort by folder the type was created in (`operationRelativeTypescriptFilePath`)

In a way you can see it at three levels

bundle -> operation -> srcRelativeFolder

The complete OS can also be represented as a bundle

If we do this, and the menus are collapsible as well as searchible... we'll have a GREAT way to alter models.

====================

SUPER COOL

let's use this for db-admin..

Any bundle will just see itself, but I will see this for every bundle. Also for the master-bundle, which is going to be super useful because then I'll be able to see the db-models for different operations and see the data they contain.


## getReferencableModelData (exported const)

Get referencableModelData for a single DbModel.

NB: this does not get the items that can be referenced in that model!

For getting all required `ReferencableModelData` for the prop in `SimplifiedSchemaForm`, use `useReferencableModelData`.


## hasDbRecipes (exported const)

Simple function to test whether or not the DbRecipes endpoints are available. If it returns true through the api, the other ones are also available.


## main (unexported const)

## makeSrcRelativeFolder (exported const)

gets a src relative folder path (so maybe "" for a file `src/util.ts` or "util" for a file `src/util/thing.ts`)


## testFnWrapped (unexported const)

## testFn (unexported const)

## tsInterfaceToDbMenu (exported const)

## upsertDbModel (exported const)

upserts an instance of an db data interface from the db in a typesafe way


## validateInput (exported const)

wrapper function that takes that data but also the interface of the function and validates the parameters before it executes the function.


## wrapFunction (exported const)

