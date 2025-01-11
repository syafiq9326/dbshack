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
const getReceivedRequestAlert = async(req,res)=>{
    try{
        // for this user's company, how can requests are pending
        if(!req.headers.authorization){
            return res.status(401).json({ message: 'Authorization header is missing' });
          }
        const token = req.headers.authorization.split(" ")[1] // Bearer token
        const identity = jwt.verify(token,process.env.JWT_SECRET).userId;
        const userObj = await User.findById(identity);
        const companyId = userObj.companyId;
        // find out how many outstanding requests belong to this company
        const current_time = new Date()
        const outstandingRequests = (await RequestReceived.find({companyId})).map((obj)=>{
            const obj_date_time = new Date(obj.createdDatetime)
            const diff = current_time-obj_date_time
            if(obj.alertStatus !== "Viewed" && diff.getDay() >= 7){
                return obj
            }
        })
        return res.status(200).json({requests:outstandingRequests})
       
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports = {
    getReceivedRequest,
    addReceivedRequest,
    getReceivedRequestAlert,
    deleteReceivedRequest,
    editReceivedRequest
}