export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export type Email = string;

export function isEmail(email: string) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/**
 * use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example.
 */
export type Slug = string;

/**
 * used for md files. index is the line
 */
export type Index = number;
/**
 * text can be in multiple formats.
 * most texts in data are probably just text
 * but they can also contain markdown
 * ----
 * if there is a data model with just a single text and it is clear from the name of the model what it should be, better call it either text or markdown.
 */
export type Text = string;

/**
 * a string that is known to contain markdown.
 */
export type Markdown = string;

/**
 * valid url, can be validated
 */
export type Url = string;

/**
 * country code without +
 */
export type PhoneNumber = number;
