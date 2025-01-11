const express = require("express");
const { getAllUsers, addUser, updateUser, deleteUser,loginUser,getProductsByUser } = require("../controller/userController");
const router = express.Router();

// Define routes
router.get("/getAllUsers", getAllUsers);
router.post("/addUser", addUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);
router.post("/login", loginUser);
router.get("/:userId/products", getProductsByUser);
router.get("/users/register", ()=>{}) // Add controller

module.exports = router;
    