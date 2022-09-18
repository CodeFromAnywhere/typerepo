/**
 * an exported test can be a single callback, or multiple callbacks that promise to tell you whether the test has passed or not
 */
export type Test = (() => Promise<boolean>) | (() => Promise<boolean>)[];
