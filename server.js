const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

//Bodyparses middleware
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(bodyParser.json());

//Database configuration
const db = require("./config/keys").mongoURI;

//Conect to MongoDb
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB successfully connected");
    })
    .catch((err) => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

//Routes 
app.use("/api/users", users);




const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up and running on ${port} !`));