///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()
const activitiesCtrl = require('../controllers/activities')


// user and password stuff
const bcrypt = require("bcryptjs")
const User = require("../models/user")



// authorization

const addUserToRequest = async (req, res, next) => {
    if (req.session.userId){
        req.user = await User.findById(req.session.userId)
        next()
    } else {
        next()
    }
}

// authorization

const isAuthorized = (req, res, next) => {
    if (req.user){
        next()
    } else {
        res.redirect("/auth/login")
    }
}


///////////////////////////////
// Router Specific Middleware
////////////////////////////////

// middleware runs everytime route is requested - checking if the user is logged in
router.use(addUserToRequest)









///////////////////////////////
// Router Routes
////////////////////////////////
router.get("/", (req, res) => {
    res.render("home")
})


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





// app pages

// index
router.get('/activities', isAuthorized, activitiesCtrl.index)


// new
router.get('/activities/new', isAuthorized, activitiesCtrl.new)


// delete
router.delete('/activities/:id', isAuthorized, activitiesCtrl.delete)

// update
router.put("/activities/:id", isAuthorized, activitiesCtrl.update)

// create
router.post("/activities", isAuthorized,activitiesCtrl.create)


// edit
router.get('/activities/:id/edit', isAuthorized, activitiesCtrl.edit)

// show 
router.get('/activities/:id', isAuthorized, activitiesCtrl.show)






///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router