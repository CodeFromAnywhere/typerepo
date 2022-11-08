# Social media types

social-media-types (js operation)



# Api reference

## 🔹 SocialMediaPostTypeReturnType

Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccess  | boolean |  |
| message  | string |  |
| postUrl (optional) | string |  |



## 🔹 SocialMediaPostTypeReturnType

Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccess  | boolean |  |
| message  | string |  |
| postUrl (optional) | string |  |



## 🔸 MediaCredentail

jsonMultiple model









Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| mediaType  | string |  |
| email (optional) | string |  |
| password  | string |  |
| username (optional) | string |  |
| phoneNumber (optional) | string |  |



## 🔹 MediaPlatformEnum

## 🔸 Interest

keyValueMarkdown model









Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| value (optional) | string |  |
| comment  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| categoryStackCalculated  | array |  |
| isHeaderCalculated  | boolean |  |
| parent_interestSlug  | string |  |



## 🔸 MediaPost

jsonMultiple model



Post/message on any medium.





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| mediaPlatform  | string |  |
| postableId  | string |  |
| parsedTitle (optional) | string |  |
| parsedContent (optional) | string |  |
| isPostable  | boolean |  |
| unpostableReason (optional) | string |  |
| isPosted (optional) | boolean |  |
| isVerified (optional) | boolean |  |
| postedUrl (optional) | string |  |
| channelOrGroup (optional) | string |  |
| posted_messageChannelId (optional) | string |  |
| postedDetailsCalculated (optional) | object |  |



## 🔸 Postable

markdown model









Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
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
| title (optional) | string |  |
| isPreset (optional) | boolean |  |
| isPlanned (optional) | boolean |  |
| isDraft (optional) | boolean |  |
| tsInterfaceIds (optional) | array |  |
| tsFunctionIds (optional) | array |  |
| bundleConfigSlugs (optional) | array |  |
| operationIndexIds (optional) | array |  |
| reference_assets  | array |  |


# Internal

<details><summary>Show internal (5)</summary>
  
  # findPostableToPost()

This function finds a postable from the database and posts it on multiple channels

This can be executed with a CRON

1. finds a postable that has no posted paired
2. chooses the channels where this thing can be posted on
3. for every channel, formats the post correctly
4. for every channel, places the post


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## updatePostedStatistics()

This function keeps the `Posted` statistics up-to-date

Can be executed with a cron for all recent posts


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 🔸 MediaChannel

jsonMultiple model



channel where messages can be posted to

examples:
- facebook group
- slack channel
- whatsapp pm
- facebook pm





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| platformSlug  | string |  |
| platformChannelId  | string |  |
| url (optional) | string |  |
| name  | string |  |
| slug  | string |  |
| description (optional) | string |  |
| isGroup (optional) | boolean |  |
| memberPersonIds (optional) | array |  |
| interestSlugs (optional) | array |  |
| locationSlug (optional) | string |  |
| language  | string |  |
| mediaCredentialId (optional) | string |  |
| myLastPostAt  | number |  |



## 📄 findPostableToPost (exported const)

This function finds a postable from the database and posts it on multiple channels

This can be executed with a CRON

1. finds a postable that has no posted paired
2. chooses the channels where this thing can be posted on
3. for every channel, formats the post correctly
4. for every channel, places the post


## 📄 updatePostedStatistics (exported const)

This function keeps the `Posted` statistics up-to-date

Can be executed with a cron for all recent posts
  </details>

