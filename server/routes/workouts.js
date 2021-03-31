const express = require('express');
const router = express.Router();
const fs = require('fs');
const Workouts = require('../models/workout')
const Exercises = require('../models/exercise')

router.get('/', (_req, res) => {
    Workouts.fetchAll()
    .then(workouts => {
        res.status(200).json(workouts);
        // console.log(workouts)
      });

});

module.exports = router;