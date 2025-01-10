const express = require("express");
const router = express.Router();
const {addProductForUser} = require("../controller/productController");

router.post("/addProductForUser", addProductForUser);

module.exports = router;
