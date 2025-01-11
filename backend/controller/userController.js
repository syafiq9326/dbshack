//const mysql = require("mysql2");
//const db = require("../database/mysql");

//---- mysql version ---

// Get all users
// const getAllUsers = (req, res) => {
//     const sql = "SELECT * FROM users";
//     db.query(sql, (err, result) => {
//         if (err) {
//             return res.status(500).send(err);
//         }
//         res.status(200).json(result);
//     });
// };

// Add a new user
// const addUser = (req, res) => {
//     const { name, email, age } = req.body;
//     const sql = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
//     db.query(sql, [name, email, age], (err, result) => {
//         if (err) {
//             return res.status(500).send(err);
//         }
//         res.status(201).json({ message: "User added!", id: result.insertId });
//     });
// };

// -- end of mysql ---

// -- mongoose version ---
const User = require("../models/users");
const jwt = require('jsonwebtoken')

function generateAccessToken(userEmail) {
    // using userEmail to sign the document, this can be decrypted out of the token from the request.authorization header
    return jwt.sign({ userEmail }, jwtSecret, { expiresIn: '1h' }); // Set expiration time appropriately
  }  

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch users", details: err.message });
    }
};

// Add a new user
const addUser = async (req, res) => {
    const { name, email, age, password } = req.body;  
    try {
        const newUser = new User({ name, email, age, password });
        const savedUser = await newUser.save();
        res.status(201).json({ message: "User added!", id: savedUser._id });
    } catch (err) {
        res.status(500).json({ error: "Failed to add user", details: err.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        if (updatedUser) {
            res.status(200).json({ message: "User updated!", user: updatedUser });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Failed to update user" });
    }
};


// Delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params; // Get the user ID from the route params

    try {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ message: "User deleted!", user: deletedUser });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete user", details: err.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body; // Extract email and password from request body

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check if the password matches
        if (user.password !== password) {
            return res.status(401).json({ error: "Invalid password" });
        }

        // Login successful
        res.status(200).json({ message: "Login successful!", user });
    } catch (err) {
        res.status(500).json({ error: "Failed to log in", details: err.message });
    }
};

const getProductsByUser = async (req, res) => {
    const { userId } = req.params; // Get the user ID from the route parameters

    try {
        // Find the user by ID and populate their products
        const user = await User.findById(userId).select("products");

        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }

        if (!user.products || user.products.length === 0) {
            return res.status(200).json({ message: "No products found for this user." });
        }

        res.status(200).json(user.products);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products for user.", details: err.message });
    }
};

// -- end of mongoose version ---


// Export controller functions
module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser,
    loginUser,
    getProductsByUser
};
