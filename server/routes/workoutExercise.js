const express = require('express');
const router = express.Router();
const WorkoutExercise = require('../models/workoutExercise')

router.get('/', (req, res) => {
    WorkoutExercise.fetchAll()
    .then(workoutExercise => {
        res.status(200).json(workoutExercise);
    });
})

router.put('/', (req, res) => {
    console.log("server put");
    new WorkoutExercise({
        workoutId: req.body.workoutId,
        exerciseId: req.body.exerciseId,
    })
        .save().then(newWorkoutExercise => {
            res.status(200).json(newWorkoutExercise)
        });
});

module.exports = router;