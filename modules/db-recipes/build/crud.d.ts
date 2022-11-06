import { DbModels } from "sdk-db";
import { TsInterface } from "code-types";
/**
 * gets all instances of an db data interface from the db in a typesafe way
 *
 * TODO: NB: there's a bug because it sometimes finds multiple instances of the TsInterface so sometimes it returns an old version of the TsInterface that was not re-indexed. This happens because all interfaces for db's also appear in sdk-db, but because the files there themselves don't change, that operation is not re-indexed. This leads to outdated indexations.
 *
 * I should find a fix for that.
 */
export declare const getDbModel: <KInterface extends "RootModel" | "AllEndpointsModel" | "Asset" | "OperationIndex" | "PackageJSON" | "TsComment" | "TsFunction" | "TsInterface" | "TsBuildError" | "TsLintWarning" | "TsExport" | "TsImport" | "TsVariable" | "ContactInformation" | "Company" | "CompanyRole" | "Contribution" | "ProductCategory" | "Product" | "Step" | "Activity" | "SustainabilityPlan" | "Requirement" | "Proof" | "EsgMetric" | "ProofStatus" | "Area" | "City" | "Country" | "Location" | "Address" | "Position" | "LoginCredential" | "UserCredential" | "Platform" | "Trackable" | "Feeling" | "FeelingLog" | "Shit" | "ShitLog" | "LanguageMatrix" | "Translation" | "BundleConfig" | "TaskError" | "Todo" | "Light" | "PersonInformation" | "PersonInformationValue" | "Person" | "UserPersonPlatformConnection" | "Message" | "MessageChannel" | "MessagePreset" | "TaskType" | "Team" | "TeamMember" | "PublicUserType" | "Folder" | "Label" | "OsTypesItem1" | "Inventory" | "ItemCategory" | "Deliverable" | "ShoppingList" | "Material" | "Bag" | "DataPoint" | "Thing" | "AppDeveloper">(interfaceName: KInterface) => Promise<{
    data: DbModels[KInterface][];
    index?: TsInterface | undefined;
    fileLocations?: string[] | undefined;
}>;
/**
 * deletes an instance of an db data interface from the db in a typesafe way
 */
export declare const deleteDbModel: <KInterface extends "RootModel" | "AllEndpointsModel" | "Asset" | "OperationIndex" | "PackageJSON" | "TsComment" | "TsFunction" | "TsInterface" | "TsBuildError" | "TsLintWarning" | "TsExport" | "TsImport" | "TsVariable" | "ContactInformation" | "Company" | "CompanyRole" | "Contribution" | "ProductCategory" | "Product" | "Step" | "Activity" | "SustainabilityPlan" | "Requirement" | "Proof" | "EsgMetric" | "ProofStatus" | "Area" | "City" | "Country" | "Location" | "Address" | "Position" | "LoginCredential" | "UserCredential" | "Platform" | "Trackable" | "Feeling" | "FeelingLog" | "Shit" | "ShitLog" | "LanguageMatrix" | "Translation" | "BundleConfig" | "TaskError" | "Todo" | "Light" | "PersonInformation" | "PersonInformationValue" | "Person" | "UserPersonPlatformConnection" | "Message" | "MessageChannel" | "MessagePreset" | "TaskType" | "Team" | "TeamMember" | "PublicUserType" | "Folder" | "Label" | "OsTypesItem1" | "Inventory" | "ItemCategory" | "Deliverable" | "ShoppingList" | "Material" | "Bag" | "DataPoint" | "Thing" | "AppDeveloper">(interfaceName: KInterface, id: string) => Promise<{
    response: string;
    success: boolean;
}>;
/**
 * upserts an instance of an db data interface from the db in a typesafe way
 */
export declare const upsertDbModel: <KInterfaceName extends "RootModel" | "AllEndpointsModel" | "Asset" | "OperationIndex" | "PackageJSON" | "TsComment" | "TsFunction" | "TsInterface" | "TsBuildError" | "TsLintWarning" | "TsExport" | "TsImport" | "TsVariable" | "ContactInformation" | "Company" | "CompanyRole" | "Contribution" | "ProductCategory" | "Product" | "Step" | "Activity" | "SustainabilityPlan" | "Requirement" | "Proof" | "EsgMetric" | "ProofStatus" | "Area" | "City" | "Country" | "Location" | "Address" | "Position" | "LoginCredential" | "UserCredential" | "Platform" | "Trackable" | "Feeling" | "FeelingLog" | "Shit" | "ShitLog" | "LanguageMatrix" | "Translation" | "BundleConfig" | "TaskError" | "Todo" | "Light" | "PersonInformation" | "PersonInformationValue" | "Person" | "UserPersonPlatformConnection" | "Message" | "MessageChannel" | "MessagePreset" | "TaskType" | "Team" | "TeamMember" | "PublicUserType" | "Folder" | "Label" | "OsTypesItem1" | "Inventory" | "ItemCategory" | "Deliverable" | "ShoppingList" | "Material" | "Bag" | "DataPoint" | "Thing" | "AppDeveloper", KItem extends DbModels[KInterfaceName]>(interfaceName: KInterfaceName, data: {
    /** array of parameters needed in the function */
    item: any;
    /** if true, everything in the updated item will stay the same except for the keys that you are giving in the item */
    isPartial?: boolean | undefined;
}) => Promise<{
    response: string;
    success: boolean;
}>;
//# sourceMappingURL=crud.d.ts.map