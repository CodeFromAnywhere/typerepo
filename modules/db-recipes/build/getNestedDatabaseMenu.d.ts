import { NestedDatabaseMenu } from "./types";
/**
 It's a very low-hanging fruit to be able to group the database models better... now it's kind of messy!

It would be great if it were a nested menu, just like the one in markdown-reader...

We can have a folder per bundle, and a folder per operation. In the operation we can also sort by folder the type was created in (`operationRelativeTypescriptFilePath`)

In a way you can see it at three levels

bundle -> operation -> srcRelativeFolder

The complete OS can also be represented as a bundle

If we do this, and the menus are collapsible as well as searchible... we'll have a GREAT way to alter models.

====================

 * SUPER COOL
 *
 * let's use this for db-admin..
 *
 * Any bundle will just see itself, but I will see this for every bundle. Also for the master-bundle, which is going to be super useful because then I'll be able to see the db-models for different operations and see the data they contain.
 */
export declare const getNestedDatabaseMenu: () => Promise<NestedDatabaseMenu>;
//# sourceMappingURL=getNestedDatabaseMenu.d.ts.map