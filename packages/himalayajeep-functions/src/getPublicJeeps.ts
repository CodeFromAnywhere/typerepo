import { db } from "database";
import { Position } from "geo-types";
import { PublicJeepType } from "himalayajeep-types";
import { earthDistance } from "./earthDistance";

export const getPublicJeeps = async (
  position?: Position
): Promise<{
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

  const sorted = publicJeeps.sort((a, b) => {
    const distanceA = earthDistance(
      a.locationsCalculated?.pop()?.latitude || 0,
      a.locationsCalculated?.pop()?.longitude || 0,
      position?.latitude || 0,
      position?.longitude || 0,
      "m"
    );
    const distanceB = earthDistance(
      b.locationsCalculated?.pop()?.latitude || 0,
      b.locationsCalculated?.pop()?.longitude || 0,
      position?.latitude || 0,
      position?.longitude || 0,
      "m"
    );

    return distanceA < distanceB ? -1 : 1;
  });

  return {
    publicJeeps: sorted,
  };
};
