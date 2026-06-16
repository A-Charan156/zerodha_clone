require('dotenv').config();
const mongoose = require('mongoose')
let connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("DB Connected")
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = connection