# New operation

new-operation (node operation)

Package to create a new King OS Operation



# Outline

## Functions

- [getAvailableOperationName](#getAvailableOperationName)
- [getOperationConfig](#getOperationConfig)
- [main](#main)
- [newOperationWithFiles](#newOperationWithFiles)
- [newOperation](#newOperation)



# Functions

## getAvailableOperationName

returns folder name

finds the first foldername that is available in this folder but also there is nowhere an operation already with this name

there is also getAvailableFolderPath for non-operation folders

## Returns: unknown

## getOperationConfig

Either finds the operation config in the database or creates a new one

NB: it does not push it into the database yet because the operation might not exist yet

## Returns: unknown

## main



## Returns: unknown

## newOperationWithFiles

Creates a new operation with files with content

Returns the final operation base path (or undefined if something went wrong)

NB: relative paths must be relative to OPERATION ROOT, not src root! They must also lead to files in src, this thing is still buggy otherwise!

TODO: Remove the buggyness

## Returns: unknown

## newOperation

This cli creates the correct tsconfig.json, package.json, .gitignore, folder setup, so you can get started immedeately.

Returns either the `operationBasePath` of the created operation, or undefined if something went wrong

## Returns: unknown

