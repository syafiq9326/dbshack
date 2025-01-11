const mongoose = require('mongoose')

const companyAccountSchema = new mongoose.Schema({
    companyName: { type: String, required: true, unique: true },
    activeAccount: { type: Boolean, required: true },
    carbonBalance: { type: Number, required: true },
    cashBalance: { type: Number, required: true },
    // outstandingRequests: [
    //     { type: mongoose.Schema.Types.ObjectId, ref: "OutstandingRequest" }, // References to OutstandingRequest
    // ],
    createdDatetime: { type: Date, default: Date.now },
    updatedDatetime: { type: Date, default: Date.now },
});

const CompanyAccount = mongoose.model("CompanyAccount", companyAccountSchema);
module.exports = CompanyAccount;