const express = require("express");
const router = express.Router();
const activitiesCtrl = require('../controllers/activities')


router.get('/', activitiesCtrl.index)

module.exports = router