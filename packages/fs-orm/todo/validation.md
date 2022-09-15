Validation is a low hanging fruit with a huge impact. There are multiple ways:

# Providing schemas and validating on the queries

I currently don't provide the json schemas to createdb, but if they are easily accessible inside sdk-db in a static way, it should probably be done. When generating sdk-db, they can simply be JSON-imported from the conventioned location. Validating should then be configurable to "error" or "warning" or "off" on a per-model basis, both for set and get.

# Validating separately

There can also be a function `db.validate(modelName?:string)` that validates all existing data of one or all models. This can be a great way as well. The reason this is probably better is performance. It doesn't slow down the query. Also we'll have complete typesafety soon by validating on the function level, so I am not sure I really need to do it separately.

# Conclusion

I think both things would be great to have, and it's not that hard to implement. The `fs-orm` user can then choose him/herself which methods will be used.
