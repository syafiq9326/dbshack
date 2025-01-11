const mongoose = require("mongoose")
const ReceivedRequest = require("../models/requestsreceived")
const User = require("../models/users")
const CompanyAccount = require("../models/companyaccount")
const jwt = require("jsonwebtoken")
const OutstandingRequest = require("../models/outstandingrequests")
const RequestReceived = require("../models/requestsreceived")

const addReceivedRequest = ()=>{
    
}

const deleteReceivedRequest = ()=>{

}

const editReceivedRequest = ()=>{

}

const getReceivedRequest =()=>{

}

// POINT 7
const getReceivedRequestAlert = async (req, res) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Authorization header is missing' });
        }

        const token = req.headers.authorization.split(" ")[1];
        const identity = jwt.verify(token, process.env.JWT_SECRET).userId;
        const userObj = await User.findById(identity);

        if (!userObj || !userObj.companyId) {
            return res.status(400).json({ message: 'User or Company not found' });
        }

        const companyId = userObj.companyId;
        const current_time = new Date();
        // optimized search
        const outstandingRequests = await RequestReceived.find({
            companyId,
            alertStatus: { $ne: "Viewed" }, 
            createdDatetime: { $lt: new Date(current_time.getTime() - 7 * 24 * 60 * 60 * 1000) } 
        });

        return res.status(200).json({ requests: outstandingRequests });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    getReceivedRequest,
    addReceivedRequest,
    getReceivedRequestAlert,
    deleteReceivedRequest,
    editReceivedRequest
}