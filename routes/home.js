///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()

// user and password stuff
const bcrypt = require("bcryptjs")
const User = require("../models/user")



// SIGNUP ROUTES
// signup page
router.get("/auth/signup", (req, res) => {
    res.send("signup")
})

// after sign up is clicked

router.post("/auth/signup", async (req, res) => {
    try {
        res.send("signup")

    } catch (error) {
        res.json(error)
    }
})

// LOGIN ROUTES
// login page

// after login is clicked








///////////////////////////////
// Router Specific Middleware
////////////////////////////////

///////////////////////////////
// Router Routes
////////////////////////////////
router.get("/", (req, res) => {
    res.render("home")
})

///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router