import { getDbConnection } from "../db.js";
import { v4 as uuid } from "uuid";
import { sendEmail } from "../util/sendEmail.js";

export const forgotPasswordRoute = {
  path: "/api/forgot-password/:email",
  method: "put",
  handler: async (req, res) => {
    const { email } = req.params;

    const db = getDbConnection("react-auth-db");

    const passwordResetCode = uuid();

    const result = await db
      .collection("users")
      .updateOne(
        { email: email },
        { $set: { passwordResetCode: passwordResetCode } }
      );

    if (result.modifiedCount > 0) {
      try {
        await sendEmail({
          to: email,
          from: "vitor771@gmail.com",
          subject: "Password Reset",
          text: `
            To reset your password, click this link:
            http://localhost:3000/reset-password/${passwordResetCode}
          `,
        });
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    }
    res.sendStatus(200);
  },
};
