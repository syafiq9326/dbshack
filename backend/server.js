const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose')
var { expressjwt: jwt } = require("express-jwt");
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = 3001;

const connectDB = require("./database/mongo"); // Import the connectDB function
connectDB(); // Initializes the MongoDB connection when the server starts

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000"
const allowedOrigins = [FRONTEND_URL]

const corsOptions = {
    origin: function (origin, callback) {
        //Check if the origin is in the allowed origins array or if the origin is undefined (for requests like curl or mobile apps).
        if (!origin || allowedOrigins.includes(origin)){
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true, // Important for cookies, authorization headers withCredentials must be set to true on the client side as well.
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed HTTP methods
    allowedHeaders: "Content-Type, Authorization", // Allowed headers
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(jwt({secret:process.env.JWT_SECRET,algorithms:["HS256"],getToken:(req)=>{
    if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
      ) {
        return req.headers.authorization.split(" ")[1];
      } else if (req.query && req.query.token) {
        return req.query.token;
      }
      return null;
}}).unless({path:["/users/login","/users/register"]}))

app.use(corsOptions);
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


