import { IndexPage } from "./pages/index";
import { JeepSignupPage } from "./pages/jeep-signup";
import { EditProfile } from "./pages/edit-profile";
import { JeepList } from "./pages/jeep-list";
import { JeepLogin } from "./pages/jeep-login";
import { JeepView } from "./pages/jeep-view";

import { PageType } from "./types";

export const pagesObject = {
  JeepSignupPage,
  EditProfile,
  IndexPage,
  JeepList,
  JeepLogin,
  JeepView,
};
// based on this, a type is created for all page keys
type PageKey = keyof typeof pagesObject;
// these keys are put in an array
const pageKeys = Object.keys(pagesObject) as PageKey[];
// then we generate an PageType object for every page,
// based on the pagesObject and the pageKey, and put the result in an array
export const pages: PageType[] = pageKeys.map((pageKey) => ({
  ...pagesObject[pageKey].options,
  component: pagesObject[pageKey],
  key: pageKey,
}));
/**
 * utility function to get a title from a page
 */
export const getPageTitle = (page: PageType) =>
  page.title || page.key.charAt(0).toUpperCase().concat(page.key.slice(1));
