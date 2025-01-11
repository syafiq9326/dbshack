const mongoose = require('mongoose')
// Define RequestReceived schema
const requestReceivedSchema = new mongoose.Schema({
    requestId: { type: mongoose.Schema.Types.ObjectId, ref: "OutstandingRequest", required: true }, // Ref to OutstandingRequest
    alertDatetime: { type: Date, required: true },
    alertText: { type: String, required: true },
    alertStatus: { type: String, required: true }, // e.g., Scheduled, Viewed
    alertViewDate: { type: Date },
    createdDatetime: { type: Date, default: Date.now },
    updatedDatetime: { type: Date, default: Date.now },
});

const RequestReceived = mongoose.model("RequestReceived", requestReceivedSchema);
module.exports = RequestReceived;