## Attaching fn index to fns

We could do this:

- Add import statements in every file that import the different indexes of the fuctions from the db folder
- attach these to the functions themselves like this: `functionName.index = importedIndexForFunctionName`

This is probably the easiest way to get an index, ever, since you keep the function and its index together. Yes, I'm convinced... THIS IS AWESOME.
