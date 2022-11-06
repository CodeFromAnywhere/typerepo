# Himalayajeep functions

himalayajeep-functions (node operation)



# Outline

## Functions

- [driverLogin](#driverLogin)
- [driverSignup](#driverSignup)
- [getMyJeep](#getMyJeep)
- [getPublicJeeps](#getPublicJeeps)

## Interfaces

- [SignupJeepType](#signupjeeptype)

## Variables

- [driverLogin](#driverlogin)
- [driverSignup](#driversignup)
- [getMyJeep](#getmyjeep)
- [getPublicJeeps](#getpublicjeeps)



# Functions

## driverLogin

login form for the driver to login




### Parameters (2)

#### Parameter 1: emailOrPhone: string

#### Parameter 2: password: string

## driverSignup

Driver signup




### Parameters (1)

#### Parameter 1: driverInfo: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| email (optional) | string |  |
| phone (optional) | string |  |
| password  | string |  |
| repeatPassword  | string |  |



## getMyJeep

### Parameters (1)

#### Parameter 1: loginToken: string

## getPublicJeeps

# Interfaces

## SignupJeepType

Jeep driver signup FORM (not part of the model)





Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| email (optional) | string |  |
| phone (optional) | string |  |
| password  | string |  |
| repeatPassword  | string |  |


# Variables

## driverLogin (exported const)

login form for the driver to login


## driverSignup (exported const)

Driver signup


## getMyJeep (exported const)

## getPublicJeeps (exported const)

