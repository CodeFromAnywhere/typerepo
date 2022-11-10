import { db } from "database";
import { MyJeepType } from "himalayajeep-types";

export const getMyJeep = async (
  loginToken: string
): Promise<{
  isSuccessful: boolean;
  message?: string;
  myJeep?: MyJeepType;
}> => {
  const jeeps = await db.get("JeepType");
  const jeep = jeeps.find((x) => x.loginToken === loginToken);

  if (!jeep) {
    return {
      isSuccessful: false,
      message: "Can't find that jeep",
    };
  }

  const {
    amountLuggageUnitsLeft,
    amountSeatsLeft,
    createdAt,
    id,
    isVerified,
    name,
    note,
    updatedAt,
    citizenshipNumber,
    email,
    licenseNumber,
    locationsCalculated,
    numberPlate,
    phone,
  } = jeep;

  const myJeep: MyJeepType = {
    amountLuggageUnitsLeft,
    amountSeatsLeft,
    createdAt,
    id,
    isVerified,
    name,
    note,
    updatedAt,
    citizenshipNumber,
    email,
    licenseNumber,
    locationsCalculated,
    numberPlate,
    phone,
  };

  return {
    isSuccessful: true,
    myJeep,
  };
};
