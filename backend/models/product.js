const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
});

// const productSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     price: { type: Number, required: true },
//     category: { type: String },
//     stock: { type: Number },
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the user
// });



const Product = mongoose.model("Product", productSchema);
module.exports = { Product, productSchema }; // Export both the model and the schema
