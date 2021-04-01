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
        });
});


router.put('/:id', (req, res) => {
    // if (req.body.exerciseId) {
        Exercises.where( 'id', req.params.id)
            .fetch()
            .then(exercises => {
                exercises
                    .save({
                        exerciseName: req.body.exerciseName,
                        muscle: req.body.muscle,
                        repsTime: req.body.repsTime,
                        weight: req.body.weight
                    })
                    .then(updatedExercise => {
                        res.status(200).json({ updatedExercise });
                    });
            })
    //         .catch(() => {
    //             res.status(404).json({ error: "Please provide valid warehouse id" });
    //         });
    // } else {
    //     res.status(400).json({ error: "Please provide warehouse id" });
    // }
});

router.delete('/:id', (req, res) => {
    Exercises.where( 'id', req.params.id )
    .destroy() 
    .then(() => {
      res.status(204).json({ status: "Deleted" });
    })
})



module.exports = router;