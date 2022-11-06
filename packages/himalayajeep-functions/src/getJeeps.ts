import { db } from "database";
import { PublicJeepType } from "himalayajeep-types";

export const getPublicJeeps = async (): Promise<{
  publicJeeps: PublicJeepType[];
}> => {
  const jeeps = await db.get("JeepType");

  const publicJeeps = jeeps.map((jeep) => {
    const {
      amountLuggageUnitsLeft,
      amountSeatsLeft,
      createdAt,
      id,
      name,
      note,
      updatedAt,
      email,
      locationsCalculated,
      phone,
    } = jeep;

    const publicJeep: PublicJeepType = {
      amountLuggageUnitsLeft,
      amountSeatsLeft,
      createdAt,
      id,
      name,
      note,
      updatedAt,
      email,
      locationsCalculated,
      phone,
    };

    return publicJeep;
  });

  return {
    publicJeeps,
  };
};
