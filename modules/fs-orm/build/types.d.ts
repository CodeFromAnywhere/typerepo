import { DbStorageMethod } from "code-types";
import { ModelLocation, AnyModelType, Creation, KeyValueMarkdownModelType } from "model-types";
import { Frontmatter } from "matter-types";
export declare type Keys<TObject> = Extract<keyof TObject, string>;
/**
 * TODO: return the inserted id or other reference
 *
 * Result of any query except `get`. Will not always provide all parameters (depends on the type of query you do)
 */
export declare type DbQueryResult = {
    isSuccesful?: boolean;
    message?: string;
    isNewFile?: boolean;
    amountInserted?: number;
    amountUpdated?: number;
    amountRemoved?: number;
};
export declare type DbConfig<TModels extends AnyModelObject> = {
    /**
     * provide a default query config per model (overwrites `defaultQueryConfig`)
     */
    modelQueryConfig?: {
        [key in Keys<TModels>]?: QueryConfig;
    };
    /**
     * provide your default query config for all models
     */
    defaultQueryConfig?: QueryConfig;
};
/**
 * NB: the dbStorageMethod cannot be specified here because this is a static configuration per db-model and cannot be specified on a per-query basis.
 *
 * Also you can't specify projectRelativePath and operationRelativePath. It should not be needed, you should specify the db storage locations in the createDb config.
 */
export declare type CustomQueryConfig = Omit<QueryConfig, "dbStorageMethod" | "projectRelativePath" | "operationRelativePath">;
export declare type UpsertQueryConfig = CustomQueryConfig & {
    /**
     * Special config for upsert. If you set this to true, all items in the databasefiles that were altered that you didn't specify in the items, will be removed.
     */
    removeUntouched?: boolean;
};
export declare type DbGet<TModels> = <TModelName extends Keys<TModels>>(modelName: TModelName, config?: CustomQueryConfig) => Promise<TModels[TModelName][]>;
export declare type DbGetByFile<TModels> = <TModelName extends Keys<TModels>>(modelName: TModelName, config?: CustomQueryConfig) => Promise<{
    [absolutePath: string]: TModels[TModelName][];
}>;
export declare type DbRemove<TModels extends AnyModelObject> = <TModelName extends Keys<TModels>>(modelName: TModelName, where: (content: TModels[TModelName]) => boolean, config?: CustomQueryConfig) => Promise<DbQueryResult>;
export declare type DbUpdate<TModels extends AnyModelObject> = <TModelName extends Keys<TModels>>(modelName: TModelName, updateWhere: undefined | ((content: TModels[TModelName]) => boolean), map: (content: TModels[TModelName]) => TModels[TModelName], config?: CustomQueryConfig) => Promise<DbQueryResult>;
export declare type DbSet<TModels extends AnyModelObject, TModelKey extends Keys<TModels> = Keys<TModels>> = <TModelName extends TModelKey>(modelName: TModelName, data: Creation<TModels[TModelName]>[], config?: CustomQueryConfig) => Promise<DbQueryResult>;
export declare type DbUpsert<TModels extends AnyModelObject, TModelKey extends Keys<TModels> = Keys<TModels>> = <TModelName extends TModelKey>(
/** NB: keyValueMarkdown models are not supported yet! */
modelName: TModelName, 
/**
 * The items you want to insert or update.
 *
 * - if an item does not exist in the file it should exist in, it will be inserted
 * - if an item already exists (looking at ID or slug), it will be overwritten
 */
data: Creation<TModels[TModelName]>[] | Creation<TModels[TModelName]>, config?: UpsertQueryConfig) => Promise<DbQueryResult>;
export declare type DbClear<TModels extends AnyModelObject> = <TModelName extends Keys<TModels>>(modelName: TModelName, config?: CustomQueryConfig) => Promise<DbQueryResult>;
/**
 * The db object that you get after creating a database with a specific set of models.
 */
export declare type Db<TModels extends AnyModelObject> = {
    /**
     * gets an array of all instances in the database that adhere to the configuration
     *
     * Finds all files that adhere to the convention and combines them into an array of items of this model
     */
    get: DbGet<TModels>;
    getByFile: DbGetByFile<TModels>;
    /**
     * sets a model to a completely fresh array of instances. all pre-existing data will be removed
     */
    set: DbSet<TModels>;
    /**
     * removes a set of instances from a model based on a filter
     *
     * Remove combines get and set: after getting it filters the results with a where, and then sets the filtered results as the new data
     */
    remove: DbRemove<TModels>;
    /**
     * updates all instances on a model based on a mapfunction and a filterfunction
     */
    update: DbUpdate<TModels>;
    /**
     * removes all files for this model
     */
    clear: DbClear<TModels>;
    /**
    upserts a set of items into the database
  
    splits the items into the needed files, then upserts items for every file, grouped, efficiently.
     */
    upsert: DbUpsert<TModels>;
};
export declare type MergedQueryConfig = QueryConfig & {
    dbStorageMethod: DbStorageMethod;
    manualProjectRoot: string;
};
/**
 * QueryConfig is set on 4 levels, which have increasing priority
 *
 * - hardcoded in `fs-orm`
 * - when calling `createDb`, setting `defaultQueryConfig`
 * - when calling `createDb`, setting `modelQueryConfig`
 * - when running a query
 *
 * Not all options are available when running a query.
 */
export interface QueryConfig extends Partial<ModelLocation> {
    /**
     * When setting this, make sure your models are able to use this storage method, this is not always possible!
     *
     * defaults to jsonMultiple
     */
    dbStorageMethod?: DbStorageMethod;
    /**
     * if specified, this will be used as the root path to find your data in
     *
     * if not specified, uses the db folder in your project root and in any operation
     *
     * NB: If you set this, the model interfaces of your current project are applied on another project! Make sure they are the same there before you run such queries.
     */
    manualProjectRoot?: string;
    operationName?: string | null;
    /**
     * if specified, only this location will be used (also need an `operationName`)
     */
    operationRelativePath?: string;
    /**
     * if specified, only this location will be used
     */
    projectRelativePath?: string;
}
export declare type UpsertKeyValueMarkdownItem = {
    parameters: Frontmatter | null;
    item: KeyValueMarkdownModelType;
};
export declare type RootDbFolder = {
    /** is an operation Base path in case of operationName is not null */
    basePath: string;
    operationName: string | null;
};
export declare type AugmentedAnyModelType = AnyModelType & {
    [key: string]: any;
};
export declare type AnyModelObject = {
    [modelName: string]: AugmentedAnyModelType;
};
//# sourceMappingURL=types.d.ts.map