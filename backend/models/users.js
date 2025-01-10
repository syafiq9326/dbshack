const mongoose = require("mongoose");
const { productSchema } = require("./product"); // Import the productSchema


// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     age: { type: Number, required: true },
//     password: { type: String, required: true }, // Add password field
// });

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    password: { type: String, required: true }, // Password field
    products: [productSchema] // Embed products as an array of subdocuments
});

const User = mongoose.model("User", userSchema); // Represents the 'users' collection
module.exports = User;

