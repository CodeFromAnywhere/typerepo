import { SlugModelType } from "model-types";
import { Authorization } from "auth-types";
import { AuthenticationMethodMethod } from "./AuthenticationMethjod";
/**

A `Person` is able to be part of one or multiple `Group`s.
A `Device` without `Person` is just part of group `unidentified` and can only access `public` info and features.
`Group`s and individual `Person`s can be given `Authorization`

Functions that require authorization can have

`AUTH-[GROUP]: authorization1, authorization2, etc.` in their doc-comment

*/
export interface Group extends SlugModelType {
    /**
     * Name of the group (will set slug)
     *
     * NB: this can be used in functions to specify certain access to groups. It should there fore be unique and you should be careful when changing it!
     */
    name: string;
    authorizations: Authorization[];
    /**
     * By default, one is enough, but if this is defined, the users in this group need to use this amount of authentication methods before he/she is authenticated. Must be at least one.
     */
    amountAuthenticationMethodsRequired?: number;
    /**
     * Optionally, you can specify which authentication methods are required for the whole group
     */
    requiredAuthenticationMethods?: AuthenticationMethodMethod[];
}
//# sourceMappingURL=Group.d.ts.map