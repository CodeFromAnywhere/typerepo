import { MyJeepType, MyJeepAdminTypes } from "himalayajeep-types";
export declare const updateMyProfile: (loginToken: string, myJeep: Omit<MyJeepType, "id" | "createdAt" | "updatedAt" | keyof MyJeepAdminTypes>) => Promise<{
    isSuccesful: boolean;
    message: string;
}>;
//# sourceMappingURL=updateMyProfile.d.ts.map