const Activity = require("../models/activity.js");

function index(req, res) {
        Activity.find({username: req.user.username}, (error, allActivities) => {
            res.render('activities/index', {
                activity: allActivities
            })
        })
}


function newActivity(req, res) {
    res.render("activities/new.ejs")
}

function destroy(req, res) {
    Activity.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect("/activities")
    })
}


function update(req, res) {
  if(req.body.booked === 'on') {
      req.body.booked = 'true'
  } else {
      req.body.booked = 'false'
  }
  Activity.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedModel) => (res.redirect('/activities')))
}

function create(req, res) {
    if (req.body.booked === "on") {
        req.body.booked = true;
      } else {
        req.body.booked = false;
      }
    
      req.body.username = req.user.username
      Activity.create(req.body, (error, createdActivity) => {
        console.log(createdActivity)
        res.redirect("/activities")
      })
    }

function edit(req, res) {
    Activity.findById(req.params.id, (err, foundActivity) => {
        console.log("foundActivity", foundActivity);
        res.render("activities/edit", {
            activity: foundActivity
        })
    })
}


function show(req, res) {
    Activity.findById(req.params.id, (err, foundActivity) => {
        res.render("activities/show", {activity: foundActivity})
    })
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
