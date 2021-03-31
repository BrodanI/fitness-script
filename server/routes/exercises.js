const express = require('express');
const router = express.Router();
const fs = require('fs');
const Workouts = require('../models/workout')
const Exercises = require('../models/exercise')

router.get('/', (_req, res) => {
    Exercises.fetchAll()
    .then(exercises => {
        res.status(200).json(exercises);
        // console.log(exercises)
      });
});

router.post('/', (req, res) => {
    new Exercises({
        exerciseName: req.body.exerciseName,
        muscle: req.body.muscle,
        repsTime: req.body.repsTime,
        weight: req.body.weight
    })
    .save().then(newExercises => {
        res.status(200).json(newExercises)
        console.log(req.body);
    })
})

module.exports = router;