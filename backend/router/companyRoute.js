const express = require("express");
const router = express.Router();
const { getCompanyAccountById, getCompanyAccounts } = require("../controller/companyAccountController");

// Route to get a CompanyAccount by ID
router.get("/:id", getCompanyAccountById);
router.get("/", getCompanyAccounts);

module.exports = router;

