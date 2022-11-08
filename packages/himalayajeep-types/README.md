# Himalayajeep types

himalayajeep-types (node operation)



# Api reference

## 🔸 JeepType

jsonMultiple model



Everyting about the jeep, in the model...





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
| amountSeatsLeft  | number |  |
| amountLuggageUnitsLeft  | number |  |
| note  | string |  |
| locationsCalculated (optional) | array |  |
| name  | string |  |
| email (optional) | string |  |
| phone (optional) | string |  |
| numberPlate (optional) | string |  |
| lisenceId (optional) | string |  |
| citizenshipId (optional) | string |  |
| isVerified  | boolean |  |
| loginToken  | string |  |
| encrypedPassword  | string |  |



## 🔹 MyJeepType

Driver login jeep info

will be returned when you request your own information (when logged in)





Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| amountSeatsLeft  | number |  |
| amountLuggageUnitsLeft  | number |  |
| note  | string |  |
| locationsCalculated (optional) | array |  |
| name  | string |  |
| email (optional) | string |  |
| phone (optional) | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| numberPlate (optional) | string |  |
| lisenceId (optional) | string |  |
| citizenshipId (optional) | string |  |
| isVerified  | boolean |  |



## 🔹 PublicJeepType

Passenger public jeep overview





Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| amountSeatsLeft  | number |  |
| amountLuggageUnitsLeft  | number |  |
| note  | string |  |
| locationsCalculated (optional) | array |  |
| name  | string |  |
| email (optional) | string |  |
| phone (optional) | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |



## 🔹 SignupJeepType

Jeep driver signup FORM (not part of the model)





Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| email (optional) | string |  |
| phone (optional) | string |  |
| password  | string |  |
| repeatPassword  | string |  |


