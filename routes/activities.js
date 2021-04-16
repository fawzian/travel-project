const express = require("express");
const router = express.Router();
const activitiesCtrl = require('../controllers/activities')

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