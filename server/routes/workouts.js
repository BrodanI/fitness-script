const express = require('express');
const router = express.Router();
const Workouts = require('../models/workout')

router.get('/', (_req, res) => {
  Workouts.fetchAll()
    .then(workouts => {
      res.status(200).json(workouts);
    });
});

router.post('/', (req, res) => {
  console.log("server post");
  new Workouts({
    workoutName: req.body.workoutName,
})
    .save().then(newWorkout => {
        res.status(200).json(newWorkout)
    });
});

module.exports = router;