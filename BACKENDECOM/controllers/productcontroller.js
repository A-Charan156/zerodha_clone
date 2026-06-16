let products = require('../models/productmodel')

exports.getproduct = async (req, res) => {
    try {
        let allproducts = await products.find()
        res.status(200).json(allproducts)
    } catch (error) {
        res.json({ msg: error.message })
    }
}

exports.createproduct = async (req, res) => {
    try {
        await products.create(req.body)
        res.status(201).json({ msg: "Product saved successfully" })
    } catch (error) {
        res.json({ msg: error.message })
    }
}

exports.createbulk = async (req, res) => {
    try {
        await products.insertMany(req.body)
        res.status(201).json({ msg: "Products are saved successfully" })
    } catch (error) {
        res.json({ msg: error.message })
    }
}

exports.updateproduct = async (req, res) => {
    try {
        await products.findByIdAndUpdate(req.params.id, req.body)
        res.status(201).json({ msg: "Product is updated successfully" })
    } catch (error) {
        res.json({ msg: error.message })
    }
}

exports.deleteproduct = async (req, res) => {
    try {
        await products.findByIdAndDelete(req.params.id)
        res.status(201).json({ msg: "Product is deleted successfully" })
    } catch (error) {
        res.json({ msg: error.message })
    }
}