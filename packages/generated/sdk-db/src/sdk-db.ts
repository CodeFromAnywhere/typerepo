// THIS FILE HAS BEEN GENERATED

import type { JeepType } from "himalayajeep-types";
import type { LocationType } from "himalayajeep-types";
import type { BundleConfig } from "bundle-types";
import type { Dataset } from "code-types";
import type { FunctionExecution } from "code-types";
import type { OperationConfig } from "code-types";
import type { OperationIndex } from "code-types";
import type { PackageJson } from "code-types";
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
import type { WordMatrix } from "language-types";
import type { SlugModelType } from "model-types";
import type { Device } from "peer-types";
import type { Group } from "peer-types";
import type { PageVisit } from "peer-types";
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


export type DbModels = { JeepType: JeepType,LocationType: LocationType,BundleConfig: BundleConfig,Dataset: Dataset,FunctionExecution: FunctionExecution,OperationConfig: OperationConfig,OperationIndex: OperationIndex,PackageJson: PackageJson,SocialMediaCallToAction: SocialMediaCallToAction,TsBuildError: TsBuildError,TsComment: TsComment,TsConfig: TsConfig,TsExport: TsExport,TsFunction: TsFunction,TsImport: TsImport,TsInterface: TsInterface,TsLintWarning: TsLintWarning,TsVariable: TsVariable,WebMarkdownFile: WebMarkdownFile,WebsiteCallToAction: WebsiteCallToAction,Address: Address,Area: Area,City: City,Country: Country,Location: Location,KvmdWord: KvmdWord,MarkdownWord: MarkdownWord,NepaliEnglishTranslationMatrix: NepaliEnglishTranslationMatrix,Statement: Statement,TokiPonaMatrix: TokiPonaMatrix,Translation: Translation,Word: Word,WordCategory: WordCategory,WordMatrix: WordMatrix,SlugModelType: SlugModelType,Device: Device,Group: Group,PageVisit: PageVisit,PeerMessage: PeerMessage,Person: Person,Persona: Persona,PersonInformation: PersonInformation,PersonInformationValue: PersonInformationValue,PersonPlatformConnection: PersonPlatformConnection,Platform: Platform,Interest: Interest,MediaChannel: MediaChannel,MediaCredentail: MediaCredentail,MediaPost: MediaPost,Postable: Postable };
export const dbModelKeys = [ "JeepType","LocationType","BundleConfig","Dataset","FunctionExecution","OperationConfig","OperationIndex","PackageJson","SocialMediaCallToAction","TsBuildError","TsComment","TsConfig","TsExport","TsFunction","TsImport","TsInterface","TsLintWarning","TsVariable","WebMarkdownFile","WebsiteCallToAction","Address","Area","City","Country","Location","KvmdWord","MarkdownWord","NepaliEnglishTranslationMatrix","Statement","TokiPonaMatrix","Translation","Word","WordCategory","WordMatrix","SlugModelType","Device","Group","PageVisit","PeerMessage","Person","Persona","PersonInformation","PersonInformationValue","PersonPlatformConnection","Platform","Interest","MediaChannel","MediaCredentail","MediaPost","Postable" ] as const;
export type DbModelEnum = typeof dbModelKeys[number];
export const modelQueryConfig = {
    JeepType: {
          dbStorageMethod: "jsonMultiple",
          
        },
LocationType: {
          dbStorageMethod: "jsonMultiple",
          
        },
BundleConfig: {
          dbStorageMethod: "jsonSingle",
          
        },
Dataset: {
          dbStorageMethod: "jsonMultiple",
          
        },
FunctionExecution: {
          dbStorageMethod: "jsonMultiple",
          
        },
OperationConfig: {
          dbStorageMethod: "markdown",
          operationRelativePath: "OPERATION.md",
        },
OperationIndex: {
          dbStorageMethod: "jsonSingle",
          operationRelativePath: "db/operation-index.json",
        },
PackageJson: {
          dbStorageMethod: "jsonSingle",
          operationRelativePath: "package.json",
        },
SocialMediaCallToAction: {
          dbStorageMethod: "markdown",
          
        },
TsBuildError: {
          dbStorageMethod: "jsonMultiple",
          
        },
TsComment: {
          dbStorageMethod: "jsonMultiple",
          
        },
TsConfig: {
          dbStorageMethod: "jsonSingle",
          operationRelativePath: "tsconfig.json",
        },
TsExport: {
          dbStorageMethod: "jsonMultiple",
          
        },
TsFunction: {
          dbStorageMethod: "jsonSingle",
          
        },
TsImport: {
          dbStorageMethod: "jsonMultiple",
          
        },
TsInterface: {
          dbStorageMethod: "jsonSingle",
          
        },
TsLintWarning: {
          dbStorageMethod: "jsonMultiple",
          
        },
TsVariable: {
          dbStorageMethod: "jsonSingle",
          
        },
WebMarkdownFile: {
          dbStorageMethod: "markdown",
          
        },
WebsiteCallToAction: {
          dbStorageMethod: "jsonMultiple",
          
        },
Address: {
          dbStorageMethod: "jsonMultiple",
          
        },
Area: {
          dbStorageMethod: "jsonMultiple",
          
        },
City: {
          dbStorageMethod: "jsonMultiple",
          
        },
Country: {
          dbStorageMethod: "jsonMultiple",
          
        },
Location: {
          dbStorageMethod: "keyValueMarkdown",
          
        },
KvmdWord: {
          dbStorageMethod: "keyValueMarkdown",
          
        },
MarkdownWord: {
          dbStorageMethod: "markdown",
          
        },
NepaliEnglishTranslationMatrix: {
          dbStorageMethod: "jsonMultiple",
          
        },
Statement: {
          dbStorageMethod: "markdown",
          
        },
TokiPonaMatrix: {
          dbStorageMethod: "jsonMultiple",
          
        },
Translation: {
          dbStorageMethod: "jsonMultiple",
          
        },
Word: {
          dbStorageMethod: "jsonMultiple",
          
        },
WordCategory: {
          dbStorageMethod: "jsonMultiple",
          
        },
WordMatrix: {
          dbStorageMethod: "jsonMultiple",
          
        },
SlugModelType: {
          dbStorageMethod: "jsonMultiple",
          
        },
Device: {
          dbStorageMethod: "jsonMultiple",
          
        },
Group: {
          dbStorageMethod: "jsonMultiple",
          
        },
PageVisit: {
          dbStorageMethod: "jsonMultiple",
          
        },
PeerMessage: {
          dbStorageMethod: "jsonMultiple",
          
        },
Person: {
          dbStorageMethod: "jsonMultiple",
          
        },
Persona: {
          dbStorageMethod: "jsonMultiple",
          
        },
PersonInformation: {
          dbStorageMethod: "keyValueMarkdown",
          
        },
PersonInformationValue: {
          dbStorageMethod: "jsonMultiple",
          
        },
PersonPlatformConnection: {
          dbStorageMethod: "jsonMultiple",
          
        },
Platform: {
          dbStorageMethod: "jsonMultiple",
          
        },
Interest: {
          dbStorageMethod: "keyValueMarkdown",
          
        },
MediaChannel: {
          dbStorageMethod: "jsonMultiple",
          
        },
MediaCredentail: {
          dbStorageMethod: "jsonMultiple",
          
        },
MediaPost: {
          dbStorageMethod: "jsonMultiple",
          
        },
Postable: {
          dbStorageMethod: "markdown",
          
        }
  };
// THANK YOU
