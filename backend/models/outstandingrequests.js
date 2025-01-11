const mongoose = require("mongoose")

// Define OutstandingRequest schema, requests made by your company to other companies
const outstandingRequestSchema = new mongoose.Schema({
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "CompanyAccount", required: true }, // Ref to initiating company
    requestorCompanyId: { type: mongoose.Schema.Types.ObjectId, ref: "CompanyAccount", required: true }, // Ref to receiving company
    carbonUnitPrice: { type: Number, required: true },
    carbonQuantity: { type: Number, required: true },
    requestReason: { type: String, required: true },
    requestStatus: { type: String, required: true }, // e.g., Pending, Approved
    requestType: { type: String, required: true },   // e.g., Buy, Sell
    requestReceived: { type: mongoose.Schema.Types.ObjectId, ref: "RequestReceived" }, // One-to-one with RequestReceived
    createdDatetime: { type: Date, default: Date.now },
    updatedDatetime: { type: Date, default: Date.now },
});


const OutstandingRequest = mongoose.model("OutstandingRequest", outstandingRequestSchema);
module.exports = OutstandingRequest;