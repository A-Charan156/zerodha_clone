const nodemailer = require('nodemailer')
let dotenv = require('dotenv').config()
// step-1: Create a transport
let mail = async (email, username) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAILUSER,
            pass: process.env.GMAILPASS            // app password
        }
    })

    // compose a message
    let message = {
        from: process.env.GMAILUSER,
        to: email,
        subject: "Account creation",
        html: `Hi ${username}, Your account has been created successfully`,
    }

    // step-3: Send a mail
    await transporter.sendMail(message)
    console.log("email sent")
}
module.exports = mail