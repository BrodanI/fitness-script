const express = require('express');
const router = express.Router();
const fs = require('fs');
const Workouts = require('../models/workout')
const Exercises = require('../models/exercise')

router.get('/selectWorkout', (_req, res) => {
    // Workouts.fetchAll()
    // .then(workouts => {
    //     res.status(200).json(workouts);
    //   });

    knex("workout").select().then(workout => {
        res.status(200).json(workout);
      });

    knex
});

module.exports = router;