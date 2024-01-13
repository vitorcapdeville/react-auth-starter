import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";
import { getDbConnection } from "../db.js";

export const verifyEmailRoute = {
  path: "/api/verify-email",
  method: "put",
  handler: async (req, res) => {
    const { verificationString } = req.body;

    const db = getDbConnection("react-auth-db");
    const result = await db.collection("users").findOne({ verificationString });
    if (!result) {
      return res.sendStatus(401);
    }

    const { _id: id, email, info } = result;

    await db.collection("users").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: { isVerified: true },
        // $unset: { verificationString: "" },
      }
    );

    jwt.sign(
      { id, email, isVerified: true, info },
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      },
      (err, token) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Something went wrong. Please try again." });
        }
        res.status(200).json({ token });
      }
    );
  },
};
