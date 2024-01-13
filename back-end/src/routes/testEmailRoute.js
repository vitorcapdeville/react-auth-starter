import { sendEmail } from "../util/sendEmail.js";

export const testEmailRoute = {
  path: "/api/test-email",
  method: "post",
  handler: async (req, res) => {
    try {
      await sendEmail({
        to: "vgcapdeville@hotmail.com",
        from: "vitor771@gmail.com",
        subject: "Sending Email using Node.js",
        text: "That was easy!",
      });
      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  },
};
