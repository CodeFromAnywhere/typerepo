# Search

search (js operation)



# Outline

## Functions

- [findSentenceMatches](#findSentenceMatches)
- [magicalRecursiveReducer](#magicalRecursiveReducer)
- [searchRecursiveObjectArray](#searchRecursiveObjectArray)

## Variables

- [example](#example)
- [findSentenceMatches](#findsentencematches)
- [magicalRecursiveReducer](#magicalrecursivereducer)
- [searchRecursiveObjectArray](#searchrecursiveobjectarray)
- [test](#test)



# Functions

## findSentenceMatches

finds matches of a searchMessage in an array, looking at the individual words.

if your search matches some words in a sentence, it's a match, as long as all your words you entered are also a word in the sentence

NB: this could be augmented with things like synonyms and translation


### Returns: array

- null: object






## magicalRecursiveReducer

Reduces an object with children of its own type according to a baseMatcher.

The object only gets returned if the children have a match (or their children, etc) or if the object itself is a match. If the object itself is a match, its children will also be edited to filter out non-matching things

NB: Not finished yet (see todo).

Also not sure if the final UX is really as great and performant as I wish, so it may be easier to simply have a separate search for files and global (just like vscode has)


### Returns: array

- null: object






## searchRecursiveObjectArray

# Variables

## example (unexported const)

## findSentenceMatches (exported const)

finds matches of a searchMessage in an array, looking at the individual words.

if your search matches some words in a sentence, it's a match, as long as all your words you entered are also a word in the sentence

NB: this could be augmented with things like synonyms and translation


## magicalRecursiveReducer (unexported const)

Reduces an object with children of its own type according to a baseMatcher.

The object only gets returned if the children have a match (or their children, etc) or if the object itself is a match. If the object itself is a match, its children will also be edited to filter out non-matching things

NB: Not finished yet (see todo).

Also not sure if the final UX is really as great and performant as I wish, so it may be easier to simply have a separate search for files and global (just like vscode has)


## searchRecursiveObjectArray (exported const)

## test (exported const)

