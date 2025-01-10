// -- mongoose version ---
const Product = require("../models/product");
const User = require("../models/users");

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch users", details: err.message });
    }
};

const addProductForUser = async (req, res) => {
    const { userId, product } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Add the product to the user's products array
        user.products.push(product);
        await user.save();

        res.status(200).json({ message: "Product added to user!", user });
    } catch (err) {
        res.status(500).json({ error: "Failed to add product to user", details: err.message });
    }
};


// Export controller functions
module.exports = {
    getAllProducts,
    addProductForUser
};