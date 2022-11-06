import { db } from "database";
import { UpsertQueryConfig } from "fs-orm";
import { JeepType, SignupJeepType } from "himalayajeep-types";
import { Creation, generateRandomString, isEmail } from "model-types";
import { encryptPassword, isValidPassword } from "server-login";

/**
 * Driver signup
 */
export const driverSignup = async (
  driverInfo: SignupJeepType
): Promise<{ isSuccesful: boolean; message: string }> => {
  const loginToken = generateRandomString(32);

  const { email, name, phone, password, repeatPassword } = driverInfo;

  if (!name || name.length < 3) {
    return {
      isSuccesful: false,
      message: "Please enter a name (at least 3 characters)",
    };
  }

  if (!email && !phone) {
    return {
      isSuccesful: false,
      message: "Please enter a phone or email",
    };
  }

  if (phone && phone.length < 10) {
    return {
      isSuccesful: false,
      message: "Please enter a correct phone number",
    };
  }

  if (email && !isEmail(email)) {
    return {
      isSuccesful: false,
      message: "Please enter a correct email",
    };
  }

  if (password !== repeatPassword) {
    return {
      isSuccesful: false,
      message: "Those passwords do not match",
    };
  }

  if (!password || !isValidPassword(password)) {
    return {
      isSuccesful: false,
      message: "Please provide a safer password (min. 6 characters)",
    };
  }

  const encrypedPassword = await encryptPassword(password);

  const allCurrentJeeps = await db.get("JeepType");

  const foundEmailJeep = allCurrentJeeps.find((jeep) => jeep.email === email);
  const isEmailCorrect = !email || !foundEmailJeep;

  if (!isEmailCorrect) {
    return {
      isSuccesful: false,
      message:
        "There is already a driver with that email. Please try logging in, or sign up with a different phone or email.",
    };
  }

  const foundPhoneJeep = allCurrentJeeps.find((jeep) => jeep.phone === phone);
  const isPhoneCorrect = !phone || !foundPhoneJeep;

  if (!isPhoneCorrect) {
    return {
      isSuccesful: false,
      message:
        "There is already a driver with that phone number. Please try logging in, or sign up with a different phone or email.",
    };
  }

  const data: Creation<JeepType> | Creation<JeepType>[] = {
    phone,
    name,
    email,
    note: "",
    amountLuggageUnitsLeft: 0,
    amountSeatsLeft: 0,
    isVerified: false,
    loginToken,
    encrypedPassword,
  };
  const config: UpsertQueryConfig | undefined = undefined;

  //@ts-ignore
  const upsertResult = await db.upsert("JeepType", data, config);

  if (upsertResult.isSuccesful === false) {
    console.log({ upsertResult });
    return { isSuccesful: false, message: "Something went wrong" };
  }

  return {
    isSuccesful: true,
    message:
      "You have succesfully registered. Your account now needs to be verified before your jeep will appear on the app. Please hang on and drive safely.",
  };
};
