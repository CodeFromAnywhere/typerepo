import type { AuthorizationModel } from "auth-types";
import type { BundleConfig } from "bundle-types";
import type { FrontBackBundle } from "bundle-types";
import type { Dataset } from "code-types";
import type { FunctionExecution } from "code-types";
import type { Operation } from "code-types";
import type { SocialMediaCallToAction } from "code-types";
import type { TsBuildError } from "code-types";
import type { TsComment } from "code-types";
import type { TsConfig } from "code-types";
import type { TsExport } from "code-types";
import type { TsFunction } from "code-types";
import type { TsImport } from "code-types";
import type { TsInterface } from "code-types";
import type { TsLintWarning } from "code-types";
import type { TsVariable } from "code-types";
import type { TypescriptFile } from "code-types";
import type { WebMarkdownFile } from "code-types";
import type { WebsiteCallToAction } from "code-types";
import type { Address } from "geo-types";
import type { Area } from "geo-types";
import type { City } from "geo-types";
import type { Country } from "geo-types";
import type { Location } from "geo-types";
import type { KvmdWord } from "language-types";
import type { MarkdownWord } from "language-types";
import type { NepaliEnglishTranslationMatrix } from "language-types";
import type { Statement } from "language-types";
import type { TokiPonaMatrix } from "language-types";
import type { Translation } from "language-types";
import type { Word } from "language-types";
import type { WordCategory } from "language-types";
import type { WordCombination } from "language-types";
import type { WordMatrix } from "language-types";
import type { SlugModelType } from "model-types";
import type { Device } from "peer-types";
import type { Group } from "peer-types";
import type { PageVisit } from "peer-types";
import type { PaymentCoupon } from "peer-types";
import type { PaymentEvent } from "peer-types";
import type { PaymentPlan } from "peer-types";
import type { PaymentSubscription } from "peer-types";
import type { PeerMessage } from "peer-types";
import type { Person } from "peer-types";
import type { Persona } from "peer-types";
import type { PersonInformation } from "peer-types";
import type { PersonInformationValue } from "peer-types";
import type { PersonPlatformConnection } from "peer-types";
import type { Platform } from "peer-types";
import type { Interest } from "social-media-types";
import type { MediaChannel } from "social-media-types";
import type { MediaCredentail } from "social-media-types";
import type { MediaPost } from "social-media-types";
import type { Postable } from "social-media-types";
import type { SelfSprintReview } from "todo-types";
import type { TodoFile } from "todo-types";
import type { TodoOffer } from "todo-types";
export declare type DbModels = {
    AuthorizationModel: AuthorizationModel;
    BundleConfig: BundleConfig;
    FrontBackBundle: FrontBackBundle;
    Dataset: Dataset;
    FunctionExecution: FunctionExecution;
    Operation: Operation;
    SocialMediaCallToAction: SocialMediaCallToAction;
    TsBuildError: TsBuildError;
    TsComment: TsComment;
    TsConfig: TsConfig;
    TsExport: TsExport;
    TsFunction: TsFunction;
    TsImport: TsImport;
    TsInterface: TsInterface;
    TsLintWarning: TsLintWarning;
    TsVariable: TsVariable;
    TypescriptFile: TypescriptFile;
    WebMarkdownFile: WebMarkdownFile;
    WebsiteCallToAction: WebsiteCallToAction;
    Address: Address;
    Area: Area;
    City: City;
    Country: Country;
    Location: Location;
    KvmdWord: KvmdWord;
    MarkdownWord: MarkdownWord;
    NepaliEnglishTranslationMatrix: NepaliEnglishTranslationMatrix;
    Statement: Statement;
    TokiPonaMatrix: TokiPonaMatrix;
    Translation: Translation;
    Word: Word;
    WordCategory: WordCategory;
    WordCombination: WordCombination;
    WordMatrix: WordMatrix;
    SlugModelType: SlugModelType;
    Device: Device;
    Group: Group;
    PageVisit: PageVisit;
    PaymentCoupon: PaymentCoupon;
    PaymentEvent: PaymentEvent;
    PaymentPlan: PaymentPlan;
    PaymentSubscription: PaymentSubscription;
    PeerMessage: PeerMessage;
    Person: Person;
    Persona: Persona;
    PersonInformation: PersonInformation;
    PersonInformationValue: PersonInformationValue;
    PersonPlatformConnection: PersonPlatformConnection;
    Platform: Platform;
    Interest: Interest;
    MediaChannel: MediaChannel;
    MediaCredentail: MediaCredentail;
    MediaPost: MediaPost;
    Postable: Postable;
    SelfSprintReview: SelfSprintReview;
    TodoFile: TodoFile;
    TodoOffer: TodoOffer;
};
export declare const dbModelKeys: readonly ["AuthorizationModel", "BundleConfig", "FrontBackBundle", "Dataset", "FunctionExecution", "Operation", "SocialMediaCallToAction", "TsBuildError", "TsComment", "TsConfig", "TsExport", "TsFunction", "TsImport", "TsInterface", "TsLintWarning", "TsVariable", "TypescriptFile", "WebMarkdownFile", "WebsiteCallToAction", "Address", "Area", "City", "Country", "Location", "KvmdWord", "MarkdownWord", "NepaliEnglishTranslationMatrix", "Statement", "TokiPonaMatrix", "Translation", "Word", "WordCategory", "WordCombination", "WordMatrix", "SlugModelType", "Device", "Group", "PageVisit", "PaymentCoupon", "PaymentEvent", "PaymentPlan", "PaymentSubscription", "PeerMessage", "Person", "Persona", "PersonInformation", "PersonInformationValue", "PersonPlatformConnection", "Platform", "Interest", "MediaChannel", "MediaCredentail", "MediaPost", "Postable", "SelfSprintReview", "TodoFile", "TodoOffer"];
export declare type DbModelEnum = typeof dbModelKeys[number];
export declare const modelQueryConfig: {
    AuthorizationModel: {
        dbStorageMethod: string;
    };
    BundleConfig: {
        dbStorageMethod: string;
    };
    FrontBackBundle: {
        dbStorageMethod: string;
    };
    Dataset: {
        dbStorageMethod: string;
    };
    FunctionExecution: {
        dbStorageMethod: string;
    };
    Operation: {
        operationName: string;
        dbStorageMethod: string;
        operationRelativePath: string;
    };
    SocialMediaCallToAction: {
        dbStorageMethod: string;
    };
    TsBuildError: {
        operationName: string;
        dbStorageMethod: string;
    };
    TsComment: {
        operationName: string;
        dbStorageMethod: string;
    };
    TsConfig: {
        operationName: string;
        dbStorageMethod: string;
        operationRelativePath: string;
    };
    TsExport: {
        operationName: string;
        dbStorageMethod: string;
    };
    TsFunction: {
        operationName: string;
        dbStorageMethod: string;
    };
    TsImport: {
        operationName: string;
        dbStorageMethod: string;
    };
    TsInterface: {
        operationName: string;
        dbStorageMethod: string;
    };
    TsLintWarning: {
        operationName: string;
        dbStorageMethod: string;
    };
    TsVariable: {
        operationName: string;
        dbStorageMethod: string;
    };
    TypescriptFile: {
        dbStorageMethod: string;
    };
    WebMarkdownFile: {
        dbStorageMethod: string;
    };
    WebsiteCallToAction: {
        dbStorageMethod: string;
    };
    Address: {
        dbStorageMethod: string;
    };
    Area: {
        dbStorageMethod: string;
    };
    City: {
        dbStorageMethod: string;
    };
    Country: {
        dbStorageMethod: string;
    };
    Location: {
        dbStorageMethod: string;
    };
    KvmdWord: {
        dbStorageMethod: string;
    };
    MarkdownWord: {
        dbStorageMethod: string;
    };
    NepaliEnglishTranslationMatrix: {
        dbStorageMethod: string;
    };
    Statement: {
        dbStorageMethod: string;
    };
    TokiPonaMatrix: {
        dbStorageMethod: string;
    };
    Translation: {
        dbStorageMethod: string;
    };
    Word: {
        dbStorageMethod: string;
    };
    WordCategory: {
        dbStorageMethod: string;
    };
    WordCombination: {
        dbStorageMethod: string;
    };
    WordMatrix: {
        dbStorageMethod: string;
    };
    SlugModelType: {
        dbStorageMethod: string;
    };
    Device: {
        dbStorageMethod: string;
    };
    Group: {
        dbStorageMethod: string;
    };
    PageVisit: {
        dbStorageMethod: string;
    };
    PaymentCoupon: {
        dbStorageMethod: string;
    };
    PaymentEvent: {
        dbStorageMethod: string;
    };
    PaymentPlan: {
        dbStorageMethod: string;
    };
    PaymentSubscription: {
        dbStorageMethod: string;
    };
    PeerMessage: {
        dbStorageMethod: string;
    };
    Person: {
        dbStorageMethod: string;
    };
    Persona: {
        dbStorageMethod: string;
    };
    PersonInformation: {
        dbStorageMethod: string;
    };
    PersonInformationValue: {
        dbStorageMethod: string;
    };
    PersonPlatformConnection: {
        dbStorageMethod: string;
    };
    Platform: {
        dbStorageMethod: string;
    };
    Interest: {
        dbStorageMethod: string;
    };
    MediaChannel: {
        dbStorageMethod: string;
    };
    MediaCredentail: {
        dbStorageMethod: string;
    };
    MediaPost: {
        dbStorageMethod: string;
    };
    Postable: {
        dbStorageMethod: string;
    };
    SelfSprintReview: {
        dbStorageMethod: string;
    };
    TodoFile: {
        dbStorageMethod: string;
    };
    TodoOffer: {
        dbStorageMethod: string;
    };
};
//# sourceMappingURL=sdk-db.d.ts.map