const express = require('express');
const router = express.Router();
const WorkoutExercise = require('../models/workoutExercise')

router.put('/:id', (req, res) => {
    // if (req.body.exerciseId) {
        WorkoutExercise.where( 'id', req.params.id)
            .fetch()
            .then(workoutExercise => {
                workoutExercise
                    .save({
                        workoutId: req.body.workoutId,
                        exerciseId: req.body.exerciseId,
                    })
                    .then(updatedWorkoutExercise => {
                        res.status(200).json({ updatedWorkoutExercise });
                    });
            })
    //         .catch(() => {
    //             res.status(404).json({ error: "Please provide valid warehouse id" });
    //         });
    // } else {
    //     res.status(400).json({ error: "Please provide warehouse id" });
    // }
});

module.exports = router;