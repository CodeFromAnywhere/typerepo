# Cleanup typescript database

cleanup-typescript-database (node operation)

Collection of functions to cleanup the typescript database (all typescript related models)




# Outline

## Functions

- [cleanupTsDatabase](#cleanupTsDatabase)
- [shouldDeleteTsModel](#shouldDeleteTsModel)

## Variables

- [cleanupTsDatabase](#cleanuptsdatabase)
- [shouldDeleteTsModel](#shoulddeletetsmodel)



# Functions

## cleanupTsDatabase()

From all Ts Index Models, removes the instances that refer to a ts file that doesn't exist anymore in the operation.


| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |,| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## shouldDeleteTsModel()

| Input      |    |    |
| ---------- | -- | -- |
| tsModel | {  } |  |,| operationName | string |  |,| operationRelativePaths | string[] |  |
| **Output** | {  }   |    |


# Variables

## 📄 cleanupTsDatabase (exported const)

From all Ts Index Models, removes the instances that refer to a ts file that doesn't exist anymore in the operation.


## 📄 shouldDeleteTsModel (exported const)

