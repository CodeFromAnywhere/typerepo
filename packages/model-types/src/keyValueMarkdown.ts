import { Frontmatter } from "matter-types";
import { AnyModelType } from "./any-model";

/**
 * handy model type for storing stuff in a KeyValue Markdown file.
 * empty lines are omitted
 *
 * all you need to specify in the kvmd is the key and the value, separated by ":"
 *
 * NB: there can be a `parent_modelNameSlug` key exposed that should refer to the parent slug
 */
export interface KeyValueMarkdownModelType extends AnyModelType, KvmdLine {
  /**
   * same as slug
   *
   * used for compatibility with some general purpose functions
   *
   * NB: uniqueness is hard to enforce!
   */
  id: string;
  /**
   * calculated value that contains the slugs of all preceding categories to this item.
   *
   * Will be present when fetching from the the db with `fs-orm`
   */
  categoryStackCalculated: CategoryStack;
  /**
   * Calculated value indicating whether or not the item has children
   */
  isHeaderCalculated: boolean;
}

/**
 *
 */
export type CategoryStack = string[];

export type KeyValueMarkdownParse = {
  parameters: Frontmatter;
  data: KeyValueMarkdownModelType[];
};

/**
 * all things that can be parsed from a single line
 */
export type KvmdLine = {
  /**
   * same as slug, used for model compatibility
   */
  id: string;
  /**
   * key
   *
   * should be english because it's kind of part of the codebase!
   */
  name: string;
  /**
   * calculated: slug for this key (kebab case form of the name)
   */
  slug: string;

  /**
   * value behind the semicolom (:). If not given, will be undefined.
   *
   * If possible, will be parsed to a number, boolean, null or undefined... otherwise it's a string
   *
   * can be any language that we can detect
   */
  value: string | number | boolean | null | undefined;

  /** comment in html syntax. if not given, will be null */
  comment: string | null;
};

/**
 * ---
 * isDbModel: false
 * ---
 *
 * TODO: make this be able to hold more than just the KV. If that's not really needed just throw this away...
 *
 * Simple recursive data structure for hierarchical categories. Should be used to make any category model
 *
 * Make sure, when extending this, to provide a reference `xxxSlug` and its content `xxx` as optional parameters to its parent categories.
 *
 * E.g. for a `CountryCategory`, you should provide `countryCategorySlug` and `countryCategory`
 */
export interface CategoryModelType extends KeyValueMarkdownModelType {}

/*

TODO: add support for languages

language:
   * 2 or 3 letter code for the language the value is detected to be in
   *
   * obviously, this can not always be detected. For example, it will be hard for one-word strings.
   * because of this, we can just parse the whole file first and only fill in the valueLanguage with high accuracy (99+ %)
   * at the end we just check the most common language (maybe count the more nearby ones higher, but this would be much less efficient) and fill in the blanks
   *
   * we can also have a toplevel frontmatter key with defaultLanguage or even language, if it's completely fixed
   *
   * obviously we can only detect the language for strings, the other primitives are universal.
   
 valueLanguage: Language;



 THINK: maybe add this back, but only if I need it...
  
   * line where the kv was found (at any given moment this is an unqiue identifier, but it may change without notice, so it's not a good idea to store stuff in kvmd if it has references to the id)
   
  // index: number;
  
   * relative index from the category header, starting count with 1. if there is no header, also counts starting with 1
  
  // indexRelative: number;
*/
