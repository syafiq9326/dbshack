const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

const connectDB = require("./database/mongo"); // Import the connectDB function
connectDB(); // Initializes the MongoDB connection when the server starts


// Middleware
app.use(cors());
app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`Backend is running on http://localhost:${port}`);
});

//define routes
const userRoute = require("./router/userRoute");
const productRoute = require("./router/productRoute");


// list of routes used
app.use("/users", userRoute); // All /users routes will be handled by userRoutes.js
app.use("/products", productRoute); // All /products routes will be handled by productRoutes.js


