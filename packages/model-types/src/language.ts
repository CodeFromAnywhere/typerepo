/**
 * keys are the iso codes which will be saved in the db, the values are values which can be shown to the user in any UI
 */
export const languages = {
  en: "English",
  nl: "Dutch (Nederlands)",
  np: "Nepali",
  pt: "Portuguese",
  de: "German (Deutsch)",
  fr: "French",
  es: "Spanish",
  it: "Italian",
  no: "Norwegian",
  sw: "Swedish",
  da: "Danish",
  vn: "Vietnamese",
  in: "Indonesian (Bahasa)",
  vl: "Vlamish",
  af: "South African (Afrikaans)",
  tk: "Toki Pona",
};

/**
 * all currently supported languages
 */
export type Language = keyof typeof languages;
