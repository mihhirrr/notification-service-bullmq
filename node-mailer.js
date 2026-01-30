const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mihirdongare1045@gmail.com",
    pass: process.env.GMAIL_PASSWORD,
  },
});

const mailOptions = {
  from: "mihirdongare1045@gmail.com",
  to: "mihir.dongare@icloud.com",
  subject: "Working on Message Queue",
  text: "Practicing BullMQ",
};

module.exports = transporter