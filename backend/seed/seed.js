const mongoose = require("mongoose");
const User = require("../models/users");
// const Product = require("../models/product");
const {Product} = require("../models/product");

const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect("mongodb://localhost:27017/testdb", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");

        // Seed Users
        const existingUsers = await User.find();
        if (existingUsers.length === 0) {
            await User.insertMany([
                { name: "Syafiq", email:"syafiq@gmail.com", age: 24 , password: "password"},
                { name: "Justin", email: "bob@example.com", age: 100 , password: 123},
            ]);
            console.log("User collection seeded!");
        } else {
            console.log("Users already exist. Skipping user seeding.");
        }

        // Seed Products
        const existingProducts = await Product.find();
        if (existingProducts.length === 0) {
            await Product.insertMany([
                { name: "Laptop", price: 1000, category: "Electronics", stock: 50 },
                { name: "Phone", price: 500, category: "Electronics", stock: 100 },
                { name: "Desk Chair", price: 150, category: "Furniture", stock: 25 },
            ]);
            console.log("Product collection seeded!");
        } else {
            console.log("Products already exist. Skipping product seeding.");
        }

        // Close connection
        mongoose.connection.close();
    } catch (err) {
        console.error("Error seeding database:", err);
    }
};

// Run the seed function
seedDatabase();
