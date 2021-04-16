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
    res.render("auth/signup")
})

// after sign up is clicked

router.post("/auth/signup", async (req, res) => {
    try {
       const salt = await bcrypt.genSalt(10)
       req.body.password = await bcrypt.hash(req.body.password, salt)
       console.log(req.body)
       await User.create(req.body)
       res.redirect("/auth/login")
    } catch (error) {
        res.json(error)
    }
})

// LOGIN ROUTES
// login page

router.get("/auth/login", (req, res) => {
    res.render("auth/login")
})


// after login is clicked


router.post("/auth/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username})
        if (user) {
            const result = await bcrypt.compare(req.body.password, user.password)
            if(result) {
                req.session.userId = user._id
                res.redirect("/activities")
            } else {
                res.json({ error: "Password does not match"})
            }
        } else {
            res.json({ error: "User Doesn't Exist" })
        }
    } catch (error) {
        res.json(error)
    }
})

// logout route

router.get("/auth/logout", (req, res) => {
    req.session.userId = null
    res.redirect('/')
})





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