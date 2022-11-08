# Db recipes

db-recipes (node operation)

Useful library of functions that wrap the `fs-orm` database.

TODO: should probably be split up further to differentiate between db-ui functions and a more general purpose library




# Api reference

## cacheLookup()

Wrapper function to cache any function and invalidate it, in some way

caching
automatic cache invalidation if data sources are updated
optimistic caching after cache invalidation


| Input      |    |    |
| ---------- | -- | -- |
| functionName | string |  |,| parameters (optional) | {  }[] |  |
| **Output** | { hasValidCache: boolean, <br />result: {  }, <br /> }   |    |



## getDbModelNames()

| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { bundleId?: string, <br /> } |  |
| **Output** |    |    |



## validateInput()

wrapper function that takes that data but also the interface of the function and validates the parameters before it executes the function.


| Input      |    |    |
| ---------- | -- | -- |
| functionName | string |  |,| parameters (optional) | {  }[] |  |,| tsFunction | `TsFunction` |  |
| **Output** | { isValid: boolean, <br />errors?: { fieldStack: string[], <br />error: string, <br /> }[], <br /> }   |    |



## 📄 cacheLookup (exported const)

Wrapper function to cache any function and invalidate it, in some way

caching
automatic cache invalidation if data sources are updated
optimistic caching after cache invalidation


## 📄 getDbModelNames (exported const)

## 📄 validateInput (exported const)

wrapper function that takes that data but also the interface of the function and validates the parameters before it executes the function.

# Internal

<details><summary>Show internal (26)</summary>
  
  # calculateOperatingSystemBundle()

This function should calculate a giant bundle for the whole operating system. This should include everything, public.

Used to show the whole os as a bundle.


| Input      |    |    |
| ---------- | -- | -- |
| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## deleteDbModel()

deletes an instance of an db data interface from the db in a typesafe way


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getDatabaseMenu()

Finds all relevant Db models to show in the menu

- for a bundleId, it gets all models from the bundleSummary
- for a sensible project (bundled) gets all models from the packages
- for the main project, gets all models from sdk-db directly

TODO: NB: the first and the second are not the same, so this needs to be cleaned up.


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { bundleId?: string, <br /> } |  |
| **Output** |    |    |



## getDbModel()

gets all instances of an db data interface from the db in a typesafe way

TODO: NB: there's a bug because it sometimes finds multiple instances of the TsInterface so sometimes it returns an old version of the TsInterface that was not re-indexed. This happens because all interfaces for db's also appear in sdk-db, but because the files there themselves don't change, that operation is not re-indexed. This leads to outdated indexations.

I should find a fix for that.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getFunctionIndex()

finds function indexation from database

TODO: this should be used!


| Input      |    |    |
| ---------- | -- | -- |
| {
  functionName,
} | { functionName: string, <br /> } |  |
| **Output** |    |    |



## getNestedDatabaseMenu()

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


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getReferencableModelData()

Get referencableModelData for a single DbModel.

NB: this does not get the items that can be referenced in that model!

For getting all required `ReferencableModelData` for the prop in `SimplifiedSchemaForm`, use `useReferencableModelData`.


| Input      |    |    |
| ---------- | -- | -- |
| dbModelName | Device / Group / PageVisit / PeerMessage / Person / PersonInformation / PersonInformationValue / PersonPlatformConnection / Platform / Interest / MediaChannel / MediaCredentail / MediaPost / Postable / BundleConfig / FunctionExecution / MarkdownFileConfig / OperationConfig / OperationIndex / PackageJson / SocialMediaCallToAction / TsBuildError / TsComment / TsConfig / TsExport / TsFunction / TsImport / TsInterface / TsLintWarning / TsVariable / WebsiteCallToAction / Address / Area / City / Country / Location / KvmdWord / MarkdownWord / NepaliEnglishTranslationMatrix / Statement / TokiPonaMatrix / Translation / Word / WordCategory / WordMatrix / SlugModelType / AppDeveloper / Assignment / Bag / Calendar / DataPoint / Deliverable / Diary / Feeling / FeelingLog / Folder / Host / Inventory / Item / ItemCategory / KvmdShortcut / Label / Light / Listing / LoginCredential / Material / MessagePreset / ProgressReport / Question / Reservation / Resource / Shit / ShitLog / ShoppingList / Shortcut / Student / Student2 / TaskError / Thing / TodoFile / Trackable / User / UserCredential / JeepType / LocationType / Activity / CompanyRequirement / CompanySize / CompanyType / Company / ContactInformation / Contribution / EsgMetric / ProductCategory / Product / ProofState / Proof / SustainabilityPlan / ValueChainPhase |  |
| **Output** |    |    |



## hasDbRecipes()

Simple function to test whether or not the DbRecipes endpoints are available. If it returns true through the api, the other ones are also available.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## makeSrcRelativeFolder()

gets a src relative folder path (so maybe "" for a file `src/util.ts` or "util" for a file `src/util/thing.ts`)


| Input      |    |    |
| ---------- | -- | -- |
| operationRelativeTypescriptFilePath | string |  |
| **Output** | string   |    |



## tsInterfaceToDbMenu()

| Input      |    |    |
| ---------- | -- | -- |
| tsInterface | `TsInterface` |  |,| type | string |  |
| **Output** | { name: string, <br />operationName: string, <br />type: string, <br />srcRelativeFolder?: string, <br /> }   |    |



## upsertDbModel()

upserts an instance of an db data interface from the db in a typesafe way


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## wrapFunction()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## 🔹 CacheLookupResult

Properties: 

 | Name | Type | Description |
|---|---|---|
| hasValidCache  | boolean |  |
| result (optional) | object |  |



## 🔹 NestedDatabaseMenu

This is a simple overwrite of the `NestedPathObject` with a more specific key naming.

I can use this directly to render a menu with many layers!

SUPER COOL








## 📄 calculateOperatingSystemBundle (exported const)

This function should calculate a giant bundle for the whole operating system. This should include everything, public.

Used to show the whole os as a bundle.


## 📄 deleteDbModel (exported const)

deletes an instance of an db data interface from the db in a typesafe way


## 📄 getDatabaseMenu (exported const)

Finds all relevant Db models to show in the menu

- for a bundleId, it gets all models from the bundleSummary
- for a sensible project (bundled) gets all models from the packages
- for the main project, gets all models from sdk-db directly

TODO: NB: the first and the second are not the same, so this needs to be cleaned up.


## 📄 getDbModel (exported const)

gets all instances of an db data interface from the db in a typesafe way

TODO: NB: there's a bug because it sometimes finds multiple instances of the TsInterface so sometimes it returns an old version of the TsInterface that was not re-indexed. This happens because all interfaces for db's also appear in sdk-db, but because the files there themselves don't change, that operation is not re-indexed. This leads to outdated indexations.

I should find a fix for that.


## 📄 getFunctionIndex (exported const)

finds function indexation from database

TODO: this should be used!


## 📄 getNestedDatabaseMenu (exported const)

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


## 📄 getReferencableModelData (exported const)

Get referencableModelData for a single DbModel.

NB: this does not get the items that can be referenced in that model!

For getting all required `ReferencableModelData` for the prop in `SimplifiedSchemaForm`, use `useReferencableModelData`.


## 📄 hasDbRecipes (exported const)

Simple function to test whether or not the DbRecipes endpoints are available. If it returns true through the api, the other ones are also available.


## 📄 makeSrcRelativeFolder (exported const)

gets a src relative folder path (so maybe "" for a file `src/util.ts` or "util" for a file `src/util/thing.ts`)


## 📄 tsInterfaceToDbMenu (exported const)

## 📄 upsertDbModel (exported const)

upserts an instance of an db data interface from the db in a typesafe way


## 📄 wrapFunction (exported const)

  </details>

