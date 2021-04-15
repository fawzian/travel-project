const Activity = require("../models/activity.js");

function index(req, res) {
    Activity.find({}, (error, allActivities) => {
        activities: allActivities
    })
}



module.exports = {
    index
}