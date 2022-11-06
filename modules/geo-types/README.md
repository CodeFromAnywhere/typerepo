# Geo types

geo-types (js operation)



# Outline

## Models

- [Address](#address)
- [Area](#area)
- [City](#city)
- [Country](#country)
- [Location](#location)

## Interfaces

- [Circle](#circle)
- [DistantObject](#distantobject)
- [KeyValueMarkdownModelType](#keyvaluemarkdownmodeltype)
- [Markdown](#markdown)
- [Polygon](#polygon)
- [Position](#position)
- [Slug](#slug)
- [SlugModelType](#slugmodeltype)
- [SpacePosition](#spaceposition)



# Models

## Address

jsonMultiple model



The old location interface I made up had multiple references, but I don't think this is needed. We can simply use the category interface


export interface Location extends SlugModelType {
continent_locationSlug: Slug;
country_locationSlug?: Slug;
regionProvinceState_locationSlug?: Slug;
city_locationSlug?: Slug;
}





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
| locationSlug  | string |  |
| postalCode  | string |  |
| street  | string |  |
| houseNumber  | string |  |
| area (optional) | object |  |
| description (optional) | string |  |



## Area

jsonMultiple model



in the UI this should be a special input type, where you can draw a polygon or circles on the map and the center will be calculated





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
| polygon (optional) | array |  |
| circles (optional) | array |  |
| center (optional) | object |  |



## City

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
| latitude  | number |  |
| longitude  | number |  |
| population  | number |  |
| countrySlug  | string |  |



## Country

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
| continent  | string |  |
| subContinent  | string |  |
| latitude  | number |  |
| longitude  | number |  |
| polygons  | array |  |



## Location

keyValueMarkdown model



locations are hierarchically categorized pieces of information.

a city can refer to the area, the area can refer the the country, the country to the continent, etc.

there are multiple ways to categorize it, but this depends on the application.





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
| parent_locationSlug (optional) | string |  |


# Interfaces

## Circle

Properties: 

 | Name | Type | Description |
|---|---|---|
| diameterMeters  | number |  |
| position  | object |  |



## DistantObject

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| position  | object |  |



## KeyValueMarkdownModelType

handy model type for storing stuff in a KeyValue Markdown file. empty lines are omitted

all you need to specify in the kvmd is the key and the value, separated by ":"

NB: there can be a `parent_modelNameSlug` key exposed that should refer to the parent slug





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



## Markdown

a string that is known to contain markdown.








## Polygon

- Position: object






## Position

Properties: 

 | Name | Type | Description |
|---|---|---|
| latitude  | number |  |
| longitude  | number |  |



## Slug

use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example.








## SlugModelType

use this model for things with a name that have an unique slug that can be used to identify the model





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



## SpacePosition

IDK HOW TO DO DIS :(







