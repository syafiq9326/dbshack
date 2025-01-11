const express = require("express");
const router = express.Router();
const { getOutstandingRequestsByRequestorId } = require("../controller/outstandingRequestController");


// Route to get all outstanding requests by requestor company ID
router.get("/:requestorCompanyId", getOutstandingRequestsByRequestorId);
module.exports = router;


