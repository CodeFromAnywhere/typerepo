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
| licenseNumber (optional) | string |  |
| citizenshipNumber (optional) | string |  |
| isVerified  | boolean |  |
| citizenshipImage (optional) | object |  |
| driverLicenseImage (optional) | object |  |
| loginToken  | string |  |
| encrypedPassword  | string |  |



## 🔹 MyJeepAdminTypes

Properties: 

 | Name | Type | Description |
|---|---|---|
| numberPlate (optional) | string |  |
| licenseNumber (optional) | string |  |
| citizenshipNumber (optional) | string |  |
| isVerified  | boolean |  |



## 🔹 MyJeepType

Driver login jeep info

will be returned when you request your own information (when logged in)





Properties: 

 | Name | Type | Description |
|---|---|---|
| numberPlate (optional) | string |  |
| licenseNumber (optional) | string |  |
| citizenshipNumber (optional) | string |  |
| isVerified  | boolean |  |
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
| citizenshipImage (optional) | object |  |
| driverLicenseImage (optional) | object |  |



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


# Internal

<details><summary>Show internal (1)</summary>
  
  # 🔸 LocationType

jsonMultiple model



Jeep location





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
| jeepId  | string |  |
| latitude  | number |  |
| longitude  | number |  |
| nearbyVillage  | string |  |

  </details>

