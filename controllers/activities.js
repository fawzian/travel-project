const Activity = require("../models/activity.js");

function index(req, res) {
        Activity.find({}, (error, allActivities) => {
            res.render('activities/index', {
                activity: allActivities
            })
        })
}


function newActivity(req, res) {
    res.render("activities/new.ejs")
}

function destroy(req, res) {
    res.send("destroy")
}

function update(req, res) {
    res.send("update")
}

function create(req, res) {
    if (req.body.booked === "on") {
        req.body.booked = true;
      } else {
        req.body.booked = false;
      }
    
      Activity.create(req.body, (error, createdActivity) => {
        console.log(createdActivity)
        res.redirect("/activities")
      })
    }

function edit(req, res) {
    res.send("edit")
}

function show(req, res) {
    res.send("show")
}


module.exports = {
    index,
    new: newActivity,
    delete: destroy,
    update,
    create,
    edit,
    show
  }
