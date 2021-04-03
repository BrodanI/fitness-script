const express = require('express');
const router = express.Router();
const Exercises = require('../models/exercise')

router.get('/', (_req, res) => {
    Exercises.fetchAll()
        .then(exercises => {
            res.status(200).json(exercises);
        });
});

router.post('/', (req, _res) => {
    new Exercises({
        exerciseName: req.body.exerciseName,
        muscle: req.body.muscle,
        repsTime: req.body.repsTime,
        weight: req.body.weight
    })
        .save().then(newExercises => {
            res.status(200).json(newExercises)
        });
});


router.put('/:id', (req, res) => {
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
});

router.delete('/:id', (req, res) => {
    Exercises.where( 'id', req.params.id )
    .destroy() 
    .then(() => {
      res.status(204).json({ status: "Deleted" });
    })
})

module.exports = router;