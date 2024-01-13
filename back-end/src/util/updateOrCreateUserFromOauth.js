import { getDbConnection } from "../db.js";

export const updateOrCreateUserFromOauth = async ({ oauthUserInfo }) => {
  const { id: googleId, verified_email: isVerified, email } = oauthUserInfo;

  const db = await getDbConnection("react-auth-db");

  const existingUser = await db.collection("users").findOne({ email });

  if (existingUser) {
    await db.collection("users").updateOne(
      { email },
      {
        $set: { googleId, isVerified },
      }
    );
  } else {
    await db.collection("users").insertOne({
      email,
      googleId,
      isVerified,
      info: {},
    });
  }
  const result = await db.collection("users").findOne({ email });
  return result;
};
