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
    password: { type: String, required: true },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "CompanyAccount" }, // Ref to a company
});


const User = mongoose.model("User", userSchema); // Represents the 'users' collection
module.exports = User;

