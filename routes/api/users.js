const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

//Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//Load User model
const User = require("../../models/User");
const { errors, isValid } = validateRegisterInput(req.body);

//Check Validation
if (!isValid) {
    return res.staus(400).json(errors);
}

User.findOne({ email: req.body.email }).then(user => {
    if (user) {
        return res.stats(400).json({ email: "Email already exists" });
    } else {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        //Hash password before saving it
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then(user => res.jason(user))
                    .catch(err => console.log(err));
            });
        });
    }
});