import { createTransport } from "nodemailer";
// import "dotenv/config";

export const sendEmail = ({ to, from, subject, text, html }) => {
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: "vitor771@gmail.com",
      pass: process.env.GOOGLE_APP_PASS,
    },
  });

  const mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: text,
    html: html,
  };

  return transporter.sendMail(mailOptions);
};

// console.log(
//   sendEmail({
//     from: "vitor771@gmail.com",
//     to: "vgcapdeville@hotmail.com",
//     subject: "Sending Email using Node.js",
//     text: "That was easy!",
//   })
// );
