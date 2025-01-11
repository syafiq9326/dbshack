// -- mongoose version ---
const OutstandingRequest = require("../models/outstandingrequests");
const CompanyAccount = require("../models/companyaccount");
const User = require("../models/users");
const jwt = require("jsonwebtoken");

const createNewRequest = async (req, res) =>  {
    const { companyName, carbonUnitPrice, carbonQuantity, requestReason, requestType } = req.body;
    // Request Date, Company Name (to which req is made), Carbon Price (SGD/Tonnes), Carbon Quantity, Requesting Reason, Request Type (Buy/Sell)
    // Request Status: default is unfulfilled first 
    // updatedDateTime: default to createdDateTime first 

    if (!req.headers.authorization) { 
        return res.status(401).json({ message: 'Authorization header is missing' });
    }
    const token = req.headers.authorization.split(" ")[1];
    console.log(jwt.verify(token, "TECH_TRACK_JWT_TOKEN"));
    const identity = jwt.verify(token, "TECH_TRACK_JWT_TOKEN").userId;
    // console.log(`Adding expense for user ${identity}`);
    const currUser = await User.findById(identity, {companyId: 1});
    let requestorCompanyId; 
    if (currUser) {
        requestorCompanyId = currUser.companyId; // Extract the `companyId` field
        console.log("requestor");
        console.log(requestorCompanyId);
    } else {
        console.error('User not found');
    }

    const requestStatus = "Pending";   
    
    const companyId = await CompanyAccount.find({"companyName": companyName}, {companyId: 1})
    try {
        const newReq = new OutstandingRequest({ companyId, requestorCompanyId, carbonUnitPrice, carbonQuantity, requestReason, requestStatus, requestType })
        const savedReq = await newReq.save();
        // // Add the product to the user's products array
        // user.products.push(newReq);
        // await user.save();
        // const currCompany = await CompanyAccount.findById(requestorCompanyId)
        // currCompany.outstandingRequests.push(newReq._id)

        res.status(200).json({ message: "New outstanding request added", newReq });
    } catch (err) {
        res.status(500).json({ error: "Failed to create new request", details: err.message });
    }
};


// Export controller functions
module.exports = {
    createNewRequest
};