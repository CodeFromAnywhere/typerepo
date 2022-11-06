import { DbModels } from "sdk-db";
export declare type UpsertDbModelResult = {
    response: string;
    success: boolean;
};
/**
 * upserts an instance of an db data interface from the db in a typesafe way
 *
 * TODO: I can probably use db.upsert now!
 */
export declare const upsertDbModel: <KInterfaceName extends "OperationConfig" | "Asset" | "BundleConfig" | "OperationIndex" | "PackageJSON" | "TsComment" | "TsFunction" | "TsInterface" | "TsBuildError" | "TsLintWarning" | "TsExport" | "TsImport" | "TsVariable" | "ContactInformation" | "Company" | "CompanySize" | "CompanyType" | "Contribution" | "ProductCategory" | "Product" | "ValueChainPhase" | "Activity" | "SustainabilityPlan" | "CompanyRequirement" | "Proof" | "EsgMetric" | "ProofStatus" | "Area" | "City" | "Country" | "Location" | "Address" | "Position" | "LoginCredential" | "UserCredential" | "Platform" | "Trackable" | "Feeling" | "FeelingLog" | "Shit" | "ShitLog" | "LanguageMatrix" | "Translation" | "TaskError" | "Todo" | "Light" | "PersonInformation" | "PersonInformationValue" | "Person" | "UserPersonPlatformConnection" | "Message" | "MessageChannel" | "MessagePreset" | "TaskType" | "Team" | "TeamMember" | "PublicUserType" | "Folder" | "Label" | "Word" | "OsTypesItem1" | "Inventory" | "ItemCategory" | "Deliverable" | "ShoppingList" | "Material" | "Bag" | "DataPoint" | "Thing" | "AppDeveloper", KItem extends DbModels[KInterfaceName]>(interfaceName: KInterfaceName, data: {
    /** array of parameters needed in the function */
    item: any;
    /** if true, everything in the updated item will stay the same except for the keys that you are giving in the item */
    isPartial?: boolean | undefined;
}) => Promise<UpsertDbModelResult>;
//# sourceMappingURL=upsertDbModel.d.ts.map