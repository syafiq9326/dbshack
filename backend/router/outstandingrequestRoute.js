const express = require("express");
const router = express.Router();
const { createNewRequest } = require("../controller/outstandingRequestController")

// Route to get a CompanyAccount by ID
// router.get("/getReceivedAlert",getReceivedRequestAlert)
// router.post("/add",addReceivedRequest)
// router.delete("/delete",deleteReceivedRequest)
// router.put("/update",editReceivedRequest)
router.post("/add", createNewRequest)

module.exports = router;