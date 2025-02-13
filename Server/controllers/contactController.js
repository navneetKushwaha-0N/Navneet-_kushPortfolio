// server/controllers/contactController.js

const transporter = require("../config/email");

const sendContactEmail = (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Error sending email:", error);
      return res.status(500).send("❌ Error sending email");
    }
    console.log("✅ Email sent:", info.response);
    return res.status(200).send("✅ Email sent successfully");
  });
};

module.exports = { sendContactEmail };
