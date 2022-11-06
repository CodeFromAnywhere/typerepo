import { DefaultModelType } from "model-types";
/**
 * Jeep location
 */
export interface LocationType extends DefaultModelType {
    jeepId: string;
    latitude: number;
    longitude: number;
    /**
     * calculate the most nearby village based on the hardcoded village location data we have for all villages in nepal.
     *
     */
    nearbyVillage: string;
}
/**
 * Jeep driver signup FORM (not part of the model)
 */
export interface SignupJeepType {
    name: string;
    email?: string;
    /**
     * mobile phone number
     */
    phone?: string;
    password: string;
    repeatPassword: string;
}
/**
 * Passenger public jeep overview
 */
export interface PublicJeepType {
    id: string;
    /**
     * passenger seats left inside the jeep
     */
    amountSeatsLeft: number;
    /**
     * m3 of luggage left
     */
    amountLuggageUnitsLeft: number;
    /**
     * note that the driver can set
     */
    note: string;
    locationsCalculated?: LocationType[];
    name: string;
    email?: string;
    /**
     * mobile phone number
     */
    phone?: string;
    createdAt: number;
    updatedAt: number;
}
/**
 * Driver login jeep info
 *
 * will be returned when you request your own information (when logged in)
 */
export interface MyJeepType extends PublicJeepType {
    /**
     * inputted by admin
     */
    numberPlate?: string;
    /**
     * inputted by admin
     *
     (verify that the jeep is real)
     */
    lisenceId?: string;
    /**
     * inputted by admin
     */
    citizenshipId?: string;
    /**
     * inputted by admin
     */
    isVerified: boolean;
}
/**
 * Everyting about the jeep, in the model...
 */
export interface JeepType extends MyJeepType, PublicJeepType, DefaultModelType {
    loginToken: string;
    encrypedPassword: string;
}
//# sourceMappingURL=types.d.ts.map