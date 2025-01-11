// // const mongoose = require("mongoose");
// // const User = require("../models/users");
// // // const Product = require("../models/product");
// // const {Product} = require("../models/product");

// // const seedDatabase = async () => {
// //     try {
// //         // Connect to MongoDB
// //         await mongoose.connect("mongodb://localhost:27017/testdb", {
// //             useNewUrlParser: true,
// //             useUnifiedTopology: true,
// //         });
// //         console.log("Connected to MongoDB");

// //         // Seed Users
// //         const existingUsers = await User.find();
// //         if (existingUsers.length === 0) {
// //             await User.insertMany([
// //                 { name: "Syafiq", email:"syafiq@gmail.com", age: 24 , password: "password"},
// //                 { name: "Justin", email: "bob@example.com", age: 100 , password: 123},
// //             ]);
// //             console.log("User collection seeded!");
// //         } else {
// //             console.log("Users already exist. Skipping user seeding.");
// //         }

// //         // Seed Products
// //         const existingProducts = await Product.find();
// //         if (existingProducts.length === 0) {
// //             await Product.insertMany([
// //                 { name: "Laptop", price: 1000, category: "Electronics", stock: 50 },
// //                 { name: "Phone", price: 500, category: "Electronics", stock: 100 },
// //                 { name: "Desk Chair", price: 150, category: "Furniture", stock: 25 },
// //             ]);
// //             console.log("Product collection seeded!");
// //         } else {
// //             console.log("Products already exist. Skipping product seeding.");
// //         }

// //         // Close connection
// //         mongoose.connection.close();
// //     } catch (err) {
// //         console.error("Error seeding database:", err);
// //     }
// // };

// // // Run the seed function
// // seedDatabase();

// const mongoose = require("mongoose");
// // const User = require("../models/users");

// // Define schemas and models
// const companyAccountSchema = new mongoose.Schema({
//     companyId: { type: Number, required: true, unique: true },
//     companyName: { type: String, required: true, unique: true },
//     activeAccount: { type: Boolean, required: true },
//     carbonBalance: { type: Number, required: true },
//     cashBalance: { type: Number, required: true },
//     createdDatetime: { type: Date, default: Date.now },
//     updatedDatetime: { type: Date, default: Date.now },
// });

// const outstandingRequestSchema = new mongoose.Schema({
//     id: { type: Number, required: true, unique: true },
//     companyId: { type: Number, ref: "CompanyAccount", required: true }, // Initiating company
//     requestorCompanyId: { type: Number, ref: "CompanyAccount", required: true }, // Receiving company
//     carbonUnitPrice: { type: Number, required: true },
//     carbonQuantity: { type: Number, required: true },
//     requestReason: { type: String, required: true },
//     requestStatus: { type: String, required: true }, // e.g., Pending, Approved, Rejected
//     requestType: { type: String, required: true },   // e.g., Buy, Sell
//     createdDatetime: { type: Date, default: Date.now },
//     updatedDatetime: { type: Date, default: Date.now },
// });


// const requestReceivedSchema = new mongoose.Schema({
//     id: { type: Number, required: true, unique: true },
//     requestId: { type: Number, ref: "OutstandingRequest", required: true }, // Links to OutstandingRequest
//     alertDatetime: { type: Date, required: true },
//     alertText: { type: String, required: true },
//     alertStatus: { type: String, required: true }, // e.g., Scheduled, Viewed
//     alertViewDate: { type: Date },
//     createdDatetime: { type: Date, default: Date.now },
//     updatedDatetime: { type: Date, default: Date.now },
// });

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     companyId: { type: Number, ref: "CompanyAccount" }, // Links to a company
// });

// const CompanyAccount = mongoose.model("CompanyAccount", companyAccountSchema);
// const OutstandingRequest = mongoose.model("OutstandingRequest", outstandingRequestSchema);
// const RequestReceived = mongoose.model("RequestReceived", requestReceivedSchema);


// // Seed function
// const seedDatabase = async () => {
//     try {
//         // Connect to MongoDB
//         await mongoose.connect("mongodb://localhost:27017/techtrek2025", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Connected to MongoDB");

//         // Seed Company Accounts
//         const companyAccounts = await CompanyAccount.find();
//         if (companyAccounts.length === 0) {
//             await CompanyAccount.insertMany([
//                 { companyId: 1, companyName: "Kemmer, Cronin and Walter", activeAccount: false, carbonBalance: 2147, cashBalance: 547973, createdDatetime: new Date("2023-02-10"), updatedDatetime: new Date("2024-11-18") },
//                 { companyId: 2000, companyName: "TTTTTTTTTTTTTechtrek is here", activeAccount: true, carbonBalance: 9999, cashBalance: 2026000, createdDatetime: new Date("2025-01-11 10:00:00"), updatedDatetime: new Date("2025-01-11 10:00:00") },
//                 // Add all other company account records here...
//             ]);
//             console.log("Company accounts seeded!");
//         } else {
//             console.log("Company accounts already exist. Skipping seeding.");
//         }

//         // Seed Outstanding Requests
//         const outstandingRequests = await OutstandingRequest.find();
//         if (outstandingRequests.length === 0) {
//             await OutstandingRequest.insertMany([
//                 { id: 1, companyId: 2045, requestorCompanyId: 2032, carbonUnitPrice: 287.36, carbonQuantity: 356, requestReason: "Request to purchase Carbon units", requestStatus: "Approved", requestType: "Buy", createdDatetime: new Date("2024-06-06 05:51:53"), updatedDatetime: new Date("2024-07-01") },
//                 // Add all other outstanding request records here...
//             ]);
//             console.log("Outstanding requests seeded!");
//         } else {
//             console.log("Outstanding requests already exist. Skipping seeding.");
//         }

//         // Seed Request Received
//         const requestReceived = await RequestReceived.find();
//         if (requestReceived.length === 0) {
//             await RequestReceived.insertMany([
//                 { id: 1, requestId: 1, alertDatetime: new Date("2024-06-13"), alertText: "Overdue Request 1: You have yet to approve Rodriguez Inc's request to Buy 356 units of carbon at $287.36.", alertStatus: "Viewed", alertViewDate: new Date("2024-06-14 00:03:12"), createdDatetime: new Date("2024-06-06 05:51:53"), updatedDatetime: new Date("2024-07-01") },
//                 // Add all other request received records here...
//             ]);
//             console.log("Requests received seeded!");
//         } else {
//             console.log("Requests received already exist. Skipping seeding.");
//         }

//         // Close connection
//         mongoose.connection.close();
//         console.log("Database connection closed.");
//     } catch (err) {
//         console.error("Error seeding database:", err);
//     }
// };

// // Run the seed function
// seedDatabase();

const mongoose = require("mongoose");

// Define CompanyAccount schema
const companyAccountSchema = new mongoose.Schema({
    companyName: { type: String, required: true, unique: true },
    activeAccount: { type: Boolean, required: true },
    carbonBalance: { type: Number, required: true },
    cashBalance: { type: Number, required: true },
    outstandingRequests: [
        { type: mongoose.Schema.Types.ObjectId, ref: "OutstandingRequest" }, // References to OutstandingRequest
    ],
    createdDatetime: { type: Date, default: Date.now },
    updatedDatetime: { type: Date, default: Date.now },
});

// Define OutstandingRequest schema
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

// Define User schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "CompanyAccount" }, // Ref to a company
});

// // Create models
// const CompanyAccount = mongoose.model("CompanyAccount", companyAccountSchema);
// const OutstandingRequest = mongoose.model("OutstandingRequest", outstandingRequestSchema);
// const RequestReceived = mongoose.model("RequestReceived", requestReceivedSchema);
// const User = mongoose.model("User", userSchema);

const CompanyAccount = mongoose.models.CompanyAccount || mongoose.model("CompanyAccount", companyAccountSchema);
const OutstandingRequest = mongoose.models.OutstandingRequest || mongoose.model("OutstandingRequest", outstandingRequestSchema);
const RequestReceived = mongoose.models.RequestReceived || mongoose.model("RequestReceived", requestReceivedSchema);
const User = mongoose.models.User || mongoose.model("User", userSchema);


const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect("mongodb://localhost:27017/techtrek2025", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");

        // Seed Company Accounts
        const existingCompanies = await CompanyAccount.find();
        if (existingCompanies.length === 0) {
            const companies = await CompanyAccount.insertMany([
                { companyName: "Kemmer, Cronin and Walter", activeAccount: false, carbonBalance: 2147, cashBalance: 547973 },
                { companyName: "Techtrek Pte Ltd", activeAccount: true, carbonBalance: 9999, cashBalance: 2026000 },
            ]);
            console.log("Company accounts seeded!");
        } else {
            console.log("Company accounts already exist. Skipping seeding.");
        }

        // Seed Users
        const existingUsers = await User.find();
        if (existingUsers.length === 0) {
            const users = await User.insertMany([
                { name: "Syafiq", email: "syafiq@gmail.com", password: "password123", companyId: existingCompanies[0]?._id },
                { name: "Justin", email: "justin@gmail.com", password: "secure456", companyId: existingCompanies[1]?._id },
            ]);
            console.log("Users seeded!");
        } else {
            console.log("Users already exist. Skipping seeding.");
        }

        // Seed Outstanding Requests
        const existingRequests = await OutstandingRequest.find();
        if (existingRequests.length === 0) {
            const outstandingRequests = await OutstandingRequest.insertMany([
                {
                    companyId: existingCompanies[0]?._id, // Kemmer, Cronin and Walter
                    requestorCompanyId: existingCompanies[1]?._id, // Techtrek Pte Ltd
                    carbonUnitPrice: 287.36,
                    carbonQuantity: 356,
                    requestReason: "Request to purchase Carbon units",
                    requestStatus: "Approved",
                    requestType: "Buy",
                },
                {
                    companyId: existingCompanies[1]?._id, // Techtrek Pte Ltd
                    requestorCompanyId: existingCompanies[0]?._id, // Kemmer, Cronin and Walter
                    carbonUnitPrice: 500,
                    carbonQuantity: 200,
                    requestReason: "Request to sell excess Carbon units",
                    requestStatus: "Pending",
                    requestType: "Sell",
                },
            ]);
            console.log("Outstanding requests seeded!");

            // Link Outstanding Requests to Company Accounts
            await CompanyAccount.findByIdAndUpdate(existingCompanies[0]?._id, {
                $push: { outstandingRequests: outstandingRequests[0]._id },
            });
            await CompanyAccount.findByIdAndUpdate(existingCompanies[1]?._id, {
                $push: { outstandingRequests: outstandingRequests[1]._id },
            });
        } else {
            console.log("Outstanding requests already exist. Skipping seeding.");
        }

        // Seed Request Received
        const existingRequestReceived = await RequestReceived.find();
        if (existingRequestReceived.length === 0) {
            const requestsReceived = await RequestReceived.insertMany([
                {
                    requestId: existingRequests[0]?._id,
                    alertDatetime: new Date("2024-06-13"),
                    alertText:
                        "Overdue Request 1: You have yet to approve Kemmer, Cronin and Walter's request to Buy 356 units of carbon at $287.36.",
                    alertStatus: "Viewed",
                    alertViewDate: new Date("2024-06-14 00:03:12"),
                },
                {
                    requestId: existingRequests[1]?._id,
                    alertDatetime: new Date("2024-07-10"),
                    alertText:
                        "Overdue Request 2: You have yet to approve Techtrek Pte Ltd's request to Sell 200 units of carbon at $500.",
                    alertStatus: "Scheduled",
                    alertViewDate: null,
                },
            ]);
            console.log("Requests received seeded!");

            // Link RequestReceived to Outstanding Requests
            await OutstandingRequest.findByIdAndUpdate(existingRequests[0]?._id, {
                requestReceived: requestsReceived[0]._id,
            });
            await OutstandingRequest.findByIdAndUpdate(existingRequests[1]?._id, {
                requestReceived: requestsReceived[1]._id,
            });
        } else {
            console.log("Requests received already exist. Skipping seeding.");
        }

        // Close connection
        // mongoose.connection.close();
        // console.log("Database connection closed.");
    } catch (err) {
        console.error("Error seeding database:", err);
    }
};


module.exports = {
    CompanyAccount,
    OutstandingRequest,
    RequestReceived,
    User,
  };

// Run the seed function
seedDatabase();
