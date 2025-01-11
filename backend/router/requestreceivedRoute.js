const express = require("express");
const router = express.Router();
const {getReceivedRequestAlert, addReceivedRequest, deleteReceivedRequest, editReceivedRequest} = require("../controller/receivedRequestsController")

// Route to get a CompanyAccount by ID
router.get("/getReceivedAlert",getReceivedRequestAlert)
router.post("/add",addReceivedRequest)
router.delete("/delete",deleteReceivedRequest)
router.put("/update",editReceivedRequest)

module.exports = router;