# Markdown types

markdown-types (`OperationClassification` cjs)



# Api reference

## 🔹 MarkdownParse

Properties: 

 | Name | Type | Description |
|---|---|---|
| fileName (optional) | string |  |
| createdAt (optional) | number |  |
| openedAt (optional) | number |  |
| updatedAt (optional) | number |  |
| deletedAt (optional) | number |  |
| createdFirstAt (optional) | number |  |
| parameters  | object |  |
| content (optional) | array |  |
| raw  | string |  |



## 🔹 ExtendedMarkdownProperties

Some properties for on any `MarkdownModelType` model that are quite general purpose and yet aren't included into the `MarkdownModel` because we may not always want them.





Properties: 

 | Name | Type | Description |
|---|---|---|
| isDraft (optional) | boolean |  |
| updatedAt  | number |  |
| createdAt  | number |  |
| privacy  | string |  |
| language  | string |  |
| isLanguageCustom (optional) | boolean |  |



## 🔹 MarkdownChunk

Properties: 

 | Name | Type | Description |
|---|---|---|
| level  | number |  |
| content (optional) | string |  |
| markdownEmbed (optional) | object |  |
| markdownLink (optional) | object |  |
| title (optional) | string |  |
| children (optional) | array |  |



## 🔹 MarkdownEmbed

Anything in the format `![alt](src)`

NB: I need to be very clear how this one works





Properties: 

 | Name | Type | Description |
|---|---|---|
| alt  | string |  |
| src  | string |  |
| type  | string |  |



## 🔹 PostableProperties

`Postable` is not extending a modeltype anymore, it can be attached to any `MarkdownModelType` model





Properties: 

 | Name | Type | Description |
|---|---|---|
| isPreset (optional) | boolean |  |
| isPostable (optional) | boolean |  |
| isCodestory (optional) | boolean |  |
| tsInterfaceIds (optional) | array |  |
| tsFunctionIds (optional) | array |  |
| bundleConfigSlugs (optional) | array |  |
| operationIds (optional) | array |  |
| reference_assets (optional) | array |  |



## 🔸 WebMarkdownFile

markdown model



Every markdown file meant for the web, should have these optional parameters that can be declared as its frontmatter

NB: This is not part of MarkdownModelType, because MarkdownModelType is very barebones general purpose, not only for the web!





Properties: 

 | Name | Type | Description |
|---|---|---|
| isPreset (optional) | boolean |  |
| isPostable (optional) | boolean |  |
| isCodestory (optional) | boolean |  |
| tsInterfaceIds (optional) | array |  |
| tsFunctionIds (optional) | array |  |
| bundleConfigSlugs (optional) | array |  |
| operationIds (optional) | array |  |
| reference_assets (optional) | array |  |
| headerImage (optional) | object |  |
| headerTitle (optional) | string |  |
| headerBig (optional) | boolean |  |
| headerSubTitle (optional) | string |  |
| header_markdownCallToActionSlugs (optional) | array |  |
| markdownCallToActionSlugs (optional) | array |  |
| shop_itemIds (optional) | array |  |
| author_personSlugs (optional) | array |  |
| interestSlugs (optional) | array |  |
| price (optional) | number |  |
| isDraft (optional) | boolean |  |
| updatedAt  | number |  |
| createdAt  | number |  |
| privacy  | string |  |
| language  | string |  |
| isLanguageCustom (optional) | boolean |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| markdown  | string |  |
| categoryStackCalculated  | array |  |



## 🔹 WebMarkdownProperties

Properties: 

 | Name | Type | Description |
|---|---|---|
| headerImage (optional) | object |  |
| headerTitle (optional) | string |  |
| headerBig (optional) | boolean |  |
| headerSubTitle (optional) | string |  |
| header_markdownCallToActionSlugs (optional) | array |  |
| markdownCallToActionSlugs (optional) | array |  |
| shop_itemIds (optional) | array |  |
| author_personSlugs (optional) | array |  |
| interestSlugs (optional) | array |  |
| price (optional) | number |  |


# Internal

<details><summary>Show internal (14)</summary>
    
  # markdownParseToMarkdownModelType()

makes a markdownModelType from a markdownParse.


| Input      |    |    |
| ---------- | -- | -- |
| markdownParse | {  } |  |
| **Output** |    |    |



## parseMarkdownModelTimestamp()

First tries to look at the frontmatter value, this is leading because it is what the user sees and the file system of the os could be inconsistent

If this frontmatter doesn't exist, the markdownParse is checked for a date. This should be information collected from the file system

If that doesn't succeed, sometimes we'll set it to  the current timestamp


| Input      |    |    |
| ---------- | -- | -- |
| parameters | `Frontmatter` |  |,| markdownParse | `MarkdownParse` |  |,| parameterName | createdAt / createdFirstAt / updatedAt / deletedAt / openedAt |  |
| **Output** | {  }   |    |



## tryParseDate()

Tries to parse a date from a string
- implements default behavior of `new Date` with a try catch
- returns a unix timestamp (ms since 1970 AD)

TODO: put in a better location... date-util?


| Input      |    |    |
| ---------- | -- | -- |
| dateString | string |  |
| **Output** | number   |    |



## 🔸 MarkdownCallToAction

jsonMultiple model









Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| url  | string |  |
| title  | string |  |
| description  | string |  |
| onlyFooter  | boolean |  |
| bannerImage (optional) | object |  |



## 🔹 MarkdownContentLevel

0 is a paragraph
1-6 is h1 until h6








## 🔹 MarkdownHeader

Properties: 

 | Name | Type | Description |
|---|---|---|
| level  | number |  |
| title  | string |  |



## 🔹 MarkdownLink

Anything in the format `[alt](href)`

It needs to be clear how this works. There is a convention for this, and I should implement that as good as possible, and document it here





Properties: 

 | Name | Type | Description |
|---|---|---|
| alt  | string |  |
| href  | string |  |
| type  | string |  |



## 🔹 MarkdownParagraph

Properties: 

 | Name | Type | Description |
|---|---|---|
| paragraph  | string |  |
| categoryStackCalculated  | array |  |
| level (optional) | number |  |



## 🔹 TextJson

TODO: Rename





Properties: 

 | Name | Type | Description |
|---|---|---|
| json (optional) | object |  |
| typescriptJson (optional) | object |  |
| markdownJson (optional) | object |  |
| path  | string |  |
| isFolder  | boolean |  |
| stats (optional) | object |  |
| metaData (optional) | object |  |
| isCancelRecursionResult (optional) | boolean |  |



## 🔸 WebsiteHeader

jsonMultiple model









Properties: 

 | Name | Type | Description |
|---|---|---|
| headerImage (optional) | object |  |
| headerTitle (optional) | string |  |
| headerBig (optional) | boolean |  |
| headerSubTitle (optional) | string |  |
| header_markdownCallToActionSlugs (optional) | array |  |
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |



## 🔹 WebsiteHeaderProperties

Properties: 

 | Name | Type | Description |
|---|---|---|
| headerImage (optional) | object |  |
| headerTitle (optional) | string |  |
| headerBig (optional) | boolean |  |
| headerSubTitle (optional) | string |  |
| header_markdownCallToActionSlugs (optional) | array |  |



## 📄 markdownParseToMarkdownModelType (exported const)

makes a markdownModelType from a markdownParse.


## 📄 parseMarkdownModelTimestamp (exported const)

First tries to look at the frontmatter value, this is leading because it is what the user sees and the file system of the os could be inconsistent

If this frontmatter doesn't exist, the markdownParse is checked for a date. This should be information collected from the file system

If that doesn't succeed, sometimes we'll set it to  the current timestamp


## 📄 tryParseDate (exported const)

Tries to parse a date from a string
- implements default behavior of `new Date` with a try catch
- returns a unix timestamp (ms since 1970 AD)

TODO: put in a better location... date-util?
  </details>

