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

