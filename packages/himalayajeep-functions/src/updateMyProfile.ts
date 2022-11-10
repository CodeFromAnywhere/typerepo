import { db } from "database";
import { JeepType, MyJeepType, MyJeepAdminTypes } from "himalayajeep-types";

export const updateMyProfile = async (
  loginToken: string,
  myJeep: Omit<
    MyJeepType,
    "id" | "createdAt" | "updatedAt" | keyof MyJeepAdminTypes
  >
): Promise<{
  isSuccesful: boolean;
  message: string;
}> => {
  const jeeps = await db.get("JeepType");
  const jeep = jeeps.find((x) => x.loginToken === loginToken);

  if (!jeep) {
    return {
      isSuccesful: false,
      message: "Can't find that jeep",
    };
  }

  const { isSuccesful, message } = await db.update(
    "JeepType",
    (item) => item.id === jeep.id,
    (old) => {
      const newJeep: JeepType = { ...old, ...myJeep };
      return newJeep;
    }
  );

  return {
    isSuccesful: isSuccesful || false,
    message: isSuccesful
      ? "You've updated your profile"
      : message || "Something went wrong",
  };
};
