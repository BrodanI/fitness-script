const workoutData = require('../seed_data/workoutsData')
const exerciseData = require('../seed_data/exercisesData')
const workoutExerciseData = require('../seed_data/workoutExerciseData')


exports.seed = function (knex) {
  return knex("workout").del()
    .then(function () {
      return knex("workout").insert(workoutData);
    })
    .then(() => {
      return knex("exercise").del()
    })
    .then(() => {
      return knex("exercise").insert(exerciseData)
    })
    .then(() => {
      return knex("workout_exercise").del()
    })
    .then(() => {
      return knex("workout_exercise").insert(workoutExerciseData)
    });
};
