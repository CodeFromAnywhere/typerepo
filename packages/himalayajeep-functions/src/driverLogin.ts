import { db } from "database";
import { encryptPassword, comparePassword } from "server-login";

/**
 * login form for the driver to login
 */
export const driverLogin = async (
  emailOrPhone: string,
  password: string
): Promise<{
  isSuccessful: boolean;
  message: string;
  loginToken?: string;
}> => {
  const jeeps = await db.get("JeepType");

  console.log({ password, emailOrPhone });

  const augmentedJeeps = await Promise.all(
    jeeps.map(async (jeep) => {
      const passwordMatches = jeep.encrypedPassword
        ? await comparePassword(password, jeep.encrypedPassword)
        : false;

      return { ...jeep, passwordMatches };
    })
  );

  const ourJeep = augmentedJeeps.find((jeep) => {
    const isHandleMatch =
      jeep.phone === emailOrPhone || jeep.email === emailOrPhone;

    if (isHandleMatch && jeep.passwordMatches) {
      return true;
    }

    return false;
  });

  if (!ourJeep) {
    return {
      isSuccessful: false,
      message: "Couldn't find anyone with those credentials",
    };
  }

  return {
    isSuccessful: true,
    message: "You're logged in",
    loginToken: ourJeep.loginToken,
  };
};
