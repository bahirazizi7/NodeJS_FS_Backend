const express = require("express")
const router = express.Router()
const User = require("../model/userModel")
const { findUser, saveUser } = require('../db/db')
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const errorTemplate = require("../templates/errorTemplate")
const { loginUser, registerUser } = require("../services/userServices")

router.post("/register", registerUser)

router.post("/login", loginUser)


module.exports = router