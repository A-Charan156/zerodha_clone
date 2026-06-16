const mongoose = require("mongoose");
let product_schema = new mongoose.Schema({
    // id: {}, // -> this is not needed as it will be created by default
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String, required: true },
    image: { type: String, required: true },
    rating: { rate: Number, count: Number }
})
module.exports = mongoose.model('Product', product_schema)