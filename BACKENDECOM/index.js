const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
let limiter = require('./middlewares/ratelimit')
let connection = require('./config/db')

// routes
let productroutes = require('./routes/productroute')
let authroutes = require('./routes/Authroute')
const app = express()
const port = process.env.PORT


// middlewares
app.use(cors())
app.use(express.json())
app.use(limiter)
app.use('/products', productroutes)
app.use('/auth', authroutes)

// app.get('/products', async (req, res) => {
//     try {
//         let allproducts = await products.find()
//         res.status(200).json(allproducts)
//     } catch (error) {
//         res.json({ msg: error.message })
//     }
// })

// app.post('/products', async (req, res) => {
//     try {
//         await products.create(req.body)
//         res.status(201).json({ msg: "Product saved successfully" })
//     } catch (error) {
//         res.json({ msg: error.message })
//     }
// })

// app.post('/bulkproducts', async (req, res) => {
//     try {
//         await products.insertMany(req.body)
//         res.status(201).json({ msg: "Products are saved successfully" })
//     } catch (error) {
//         res.json({ msg: error.message })
//     }
// })

// app.put('/products/:id', async (req, res) => {
//     try {
//         await products.findByIdAndUpdate(req.params.id, req.body)
//         res.status(201).json({ msg: "Product is updated successfully" })
//     } catch (error) {
//         res.json({ msg: error.message })
//     }
// })

// app.delete('/products/:id', async (req, res) => {
//     try {
//         await products.findByIdAndDelete(req.params.id)
//         res.status(201).json({ msg: "Product is deleted successfully" })
//     } catch (error) {
//         res.json({ msg: error.message })
//     }
// })

// // Registration
// app.post('/register', async (req, res) => {
//     try {
//         const { username, password, email, role } = req.body
//         if (!username || !password || !email || !role) {
//             return res.json({ msg: "Missing Fields" })
//         }
//         // check the user already exist or not
//         let checkuser = await users.findOne({ username })
//         if (checkuser) return res.json({ msg: "User already exists" })
//         // hash the password
//         let hashpassword = await bcrypt.hash(password, 10)
//         await users.create({ username, password: hashpassword, email, role })
//         // generate a json web token
//         // payload,secretkey,expiry date
//         let payload = { username: username, emailaddress: email, role: role }
//         let token = jwt.sign(payload, process.env.SECRETKEY, { expiresIn: '1hr' })

//         res.status(200).json({ msg: "Registration successful", token })
//         mail(email, username).catch(err => console.log("Mail error:", err.message))
//     } catch (error) {
//         res.json({ msg: error.message })
//     }
// })

// // login workflow
// app.post('/login', async (req, res, next) => {
//     try {
//         const { username, password } = req.body
//         if (!username || !password) return res.json({ msg: "missing fields" })
//         let checkuser = await users.findOne({ username })
//         if (!checkuser) return res.status(201).json({ msg: "User not found" })

//         let ishashverified = await bcrypt.compare(password, checkuser.password)
//         if (!ishashverified) return res.status(403).json({ msg: "username or password is wrong" })
//         // verify the token first
//         let token = req.headers.authorization.split(' ')[1]
//         let isvalid = await jwt.verify(token, process.env.SECRETKEY)
//         if (!isvalid) return res.status(403).json({ msg: "Token is invalid" })
//         res.json({ msg: "Login Successfull" })

//     } catch (error) {
//         res.json({ msg: error.message })
//     }
// })


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
    connection();
})