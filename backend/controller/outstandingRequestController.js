const OutstandingRequest = require('../models/outstandingrequests');
const mongoose = require('mongoose');

// Get all Outstanding Requests by Requestor Company ID
const getOutstandingRequestsByRequestorId = async (req, res) => {
  try {
    const { requestorCompanyId } = req.params;

    // Validate requestorCompanyId
    if (!requestorCompanyId) {
      return res.status(400).json({ message: "Requestor Company ID is required" });
    }

    // const outstandingRequests = await OutstandingRequest.find({requestorCompanyId})


    const outstandingRequests = await OutstandingRequest.find({
      requestorCompanyId: new mongoose.Types.ObjectId(requestorCompanyId),
    }).populate("companyId requestReceived"); // Populate if needed

    console.log("or:", outstandingRequests);


    if (!outstandingRequests || outstandingRequests.length === 0) {
      return res.status(404).json({ message: "No outstanding requests found" });
    }

    res.status(200).json(outstandingRequests);
  } catch (error) {
    console.error("Error fetching outstanding requests:", error.stack);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getOutstandingRequestsByRequestorId };
