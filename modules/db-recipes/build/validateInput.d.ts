import { TsFunction } from "code-types";
declare type ValidationResult = {
    isValid: boolean;
    errors?: {
        fieldStack: string[];
        error: string;
    }[];
};
/** wrapper function that takes that data but also the interface of the function and validates the parameters before it executes the function.*/
export declare const validateInput: (functionName: string, parameters: undefined | any[], tsFunction: TsFunction) => ValidationResult;
export {};
//# sourceMappingURL=validateInput.d.ts.map