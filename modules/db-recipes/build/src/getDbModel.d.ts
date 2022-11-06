import { DbModels, DbModelEnum } from "sdk-db";
import { TsInterface } from "code-types";
export declare type DataFilter = {
    objectParameterKey: string;
    value: string | number | boolean | null | undefined;
    operator: "equal" | "gt" | "lt";
};
export declare type GetDbModelConfig = {
    /**
     * skip the first n items
     */
    start?: number;
    /**
     * limit the results to this amount of items
     */
    limit?: 30 | 100 | 250 | 1000 | 2500 | 10000;
    /**
     * optionally, specify which folders can be searched for data. default location is used by default
     *
     * TODO: test this
     */
    dataFolders?: string[];
    /**
     * Optionally provide one or more data filters that will be applied after querying the data
     */
    dataFilters?: DataFilter[];
    /**
     * optionally sort on a key
     */
    sortParameter?: string;
    /**
     * sort normally or in reverse order
     */
    sortDirection?: "ascending" | "descending";
};
export declare type GetDbModelResult<KInterface extends DbModelEnum> = {
    hasMore: boolean;
    config?: GetDbModelConfig;
    data: DbModels[KInterface][];
    index?: TsInterface;
    fileLocations?: string[];
};
/**
 * gets all instances of an db data interface from the db in a typesafe way
 *
 * TODO: NB: there's a bug because it sometimes finds multiple instances of the TsInterface so sometimes it returns an old version of the TsInterface that was not re-indexed. This happens because all interfaces for db's also appear in sdk-db, but because the files there themselves don't change, that operation is not re-indexed. This leads to outdated indexations.
 *
 * I should find a fix for that.
 */
export declare const getDbModel: <KInterface extends "OperationConfig" | "Asset" | "BundleConfig" | "OperationIndex" | "PackageJSON" | "TsComment" | "TsFunction" | "TsInterface" | "TsBuildError" | "TsLintWarning" | "TsExport" | "TsImport" | "TsVariable" | "ContactInformation" | "Company" | "CompanySize" | "CompanyType" | "Contribution" | "ProductCategory" | "Product" | "ValueChainPhase" | "Activity" | "SustainabilityPlan" | "CompanyRequirement" | "Proof" | "EsgMetric" | "ProofStatus" | "Area" | "City" | "Country" | "Location" | "Address" | "Position" | "LoginCredential" | "UserCredential" | "Platform" | "Trackable" | "Feeling" | "FeelingLog" | "Shit" | "ShitLog" | "LanguageMatrix" | "Translation" | "TaskError" | "Todo" | "Light" | "PersonInformation" | "PersonInformationValue" | "Person" | "UserPersonPlatformConnection" | "Message" | "MessageChannel" | "MessagePreset" | "TaskType" | "Team" | "TeamMember" | "PublicUserType" | "Folder" | "Label" | "Word" | "OsTypesItem1" | "Inventory" | "ItemCategory" | "Deliverable" | "ShoppingList" | "Material" | "Bag" | "DataPoint" | "Thing" | "AppDeveloper">(interfaceName: KInterface, config?: GetDbModelConfig) => Promise<GetDbModelResult<KInterface>>;
//# sourceMappingURL=getDbModel.d.ts.map