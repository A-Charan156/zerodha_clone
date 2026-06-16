let dotenv = require('dotenv').config()
let users = require('../models/usermodel')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
// Registration
exports.register = async (req, res) => {
    try {
        const { username, password, email, role } = req.body
        if (!username || !password || !email || !role) {
            return res.json({ msg: "Missing Fields" })
        }
        // check the user already exist or not
        let checkuser = await users.findOne({ username })
        if (checkuser) return res.json({ msg: "User already exists" })
        // hash the password
        let hashpassword = await bcrypt.hash(password, 10)
        await users.create({ username, password: hashpassword, email, role })
        // generate a json web token
        // payload,secretkey,expiry date
        let payload = { username: username, emailaddress: email, role: role }
        let token = jwt.sign(payload, process.env.SECRETKEY, { expiresIn: '1d' })

        res.status(200).json({ msg: "Registration successful", token })
        mail(email, username).catch(err => console.log("Mail error:", err.message))
    } catch (error) {
        res.json({ msg: error.message })
    }
}

// login workflow
exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body
        if (!username || !password) return res.json({ msg: "missing fields" })
        let checkuser = await users.findOne({ username })
        if (!checkuser) return res.status(201).json({ msg: "User not found" })

        let ishashverified = await bcrypt.compare(password, checkuser.password)
        if (!ishashverified) return res.status(403).json({ msg: "username or password is wrong" })
        // verify the token first
        let token = req.headers.authorization.split(' ')[1]
        let isvalid = await jwt.verify(token, process.env.SECRETKEY)
        if (!isvalid) return res.status(403).json({ msg: "Token is invalid" })
        res.json({ msg: "Login Successfull" })

    } catch (error) {
        res.json({ msg: error.message })
    }
}