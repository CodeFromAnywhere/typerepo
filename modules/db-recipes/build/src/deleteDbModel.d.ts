/**
 * deletes an instance of an db data interface from the db in a typesafe way
 */
export declare const deleteDbModel: <KInterface extends "OperationConfig" | "Asset" | "BundleConfig" | "OperationIndex" | "PackageJSON" | "TsComment" | "TsFunction" | "TsInterface" | "TsBuildError" | "TsLintWarning" | "TsExport" | "TsImport" | "TsVariable" | "ContactInformation" | "Company" | "CompanySize" | "CompanyType" | "Contribution" | "ProductCategory" | "Product" | "ValueChainPhase" | "Activity" | "SustainabilityPlan" | "CompanyRequirement" | "Proof" | "EsgMetric" | "ProofStatus" | "Area" | "City" | "Country" | "Location" | "Address" | "Position" | "LoginCredential" | "UserCredential" | "Platform" | "Trackable" | "Feeling" | "FeelingLog" | "Shit" | "ShitLog" | "LanguageMatrix" | "Translation" | "TaskError" | "Todo" | "Light" | "PersonInformation" | "PersonInformationValue" | "Person" | "UserPersonPlatformConnection" | "Message" | "MessageChannel" | "MessagePreset" | "TaskType" | "Team" | "TeamMember" | "PublicUserType" | "Folder" | "Label" | "Word" | "OsTypesItem1" | "Inventory" | "ItemCategory" | "Deliverable" | "ShoppingList" | "Material" | "Bag" | "DataPoint" | "Thing" | "AppDeveloper">(interfaceName: KInterface, id: string) => Promise<{
    response: string;
    success: boolean;
}>;
//# sourceMappingURL=deleteDbModel.d.ts.map