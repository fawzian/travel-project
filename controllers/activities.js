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
  if(req.body.booked === 'on') {
      req.body.booked = 'true'
  } else {
      req.body.booked = 'false'
  }
  Activity.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedModel) => (res.redirect('/activities')))
}

// if (req.body.readyToEat === 'on') {
//     req.body.readyToEat = 'true'
// } else {
//     req.body.readyToEat = 'false'
// }
// // res.send(req.body)
// Fruit.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedModel) => (res.redirect('/fruits')))
// })

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
    Activity.findById(req.params.id, (err, foundActivity) => {
        console.log("foundActivity", foundActivity);
        res.render("activities/edit", {
            activity: foundActivity
        })
    })
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
