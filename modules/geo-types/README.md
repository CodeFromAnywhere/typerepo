# Geo types

geo-types (js operation)



# Api reference

## 🔸 Location

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



## 🔹 Position

Properties: 

 | Name | Type | Description |
|---|---|---|
| latitude  | number |  |
| longitude  | number |  |



## 🔸 Country

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



## 🔹 Polygon

- Position: object





