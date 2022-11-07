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
- [Polygon](#polygon)
- [Position](#position)
- [SpacePosition](#spaceposition)



# Models

## 🔷 Address

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



## 🔷 Area

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



## 🔷 City

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



## 🔷 Country

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



## 🔷 Location

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

## 🔷 Circle

Properties: 

 | Name | Type | Description |
|---|---|---|
| diameterMeters  | number |  |
| position  | object |  |



## 🔷 DistantObject

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| position  | object |  |



## 🔷 Polygon

- Position: object






## 🔷 Position

Properties: 

 | Name | Type | Description |
|---|---|---|
| latitude  | number |  |
| longitude  | number |  |



## 🔷 SpacePosition

IDK HOW TO DO DIS :(







