const express = require("express");
const router = express.Router();
const { getCompanyAccountById } = require("../controller/companyAccountController");

// Route to get a CompanyAccount by ID
router.get("/:id", getCompanyAccountById);

module.exports = router;

