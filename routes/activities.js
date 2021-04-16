const express = require("express");
const router = express.Router();
const activitiesCtrl = require('../controllers/activities')

// user and password stuff
const bcrypt = require("bcryptjs")
const User = require("../models/user")



// SIGNUP ROUTES
// signup page
router.get("/auth/signup", (req, res) => {
    res.send(signup)
})

// after sign up is clicked

router.post("/auth/signup", async (req, res) => {
    try {

    } catch (error) {
        res.json(error)
    }
})

// LOGIN ROUTES
// login page

// after login is clicked





// index
router.get('/', activitiesCtrl.index)


// new
router.get('/new', activitiesCtrl.new)


// delete
router.delete('/:id', activitiesCtrl.delete)

// update
router.put("/:id", activitiesCtrl.update)

// create
router.post("/", activitiesCtrl.create)


// edit
router.get('/:id/edit', activitiesCtrl.edit)

// show 
router.get('/:id', activitiesCtrl.show)

module.exports = router