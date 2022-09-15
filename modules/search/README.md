# Search

search (js operation)



# Outline

## Functions

- [findSentenceMatches](#findSentenceMatches)
- [magicalRecursiveReducer](#magicalRecursiveReducer)
- [searchRecursiveObjectArray](#searchRecursiveObjectArray)



# Functions

## findSentenceMatches

finds matches of a searchMessage in an array, looking at the individual words.

if your search matches some words in a sentence, it's a match, as long as all your words you entered are also a word in the sentence

NB: this could be augmented with things like synonyms and translation


### Returns: array

- null: object






## magicalRecursiveReducer

reduces an object with children of its own type according to a baseMatcher.

The object only gets returned if the children have a match (or their children, etc) or if the object itself is a match. If the object itself is a match, its children will also be edited to filter out non-matching things


### Returns: array

- null: object






## searchRecursiveObjectArray

