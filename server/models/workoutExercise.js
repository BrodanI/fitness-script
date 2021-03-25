const bookshelf = require('../bookshelf');

const WorkoutExercise = bookshelf.model('WorkoutExercise', {
  tableName: 'workout_exercise',
  workout: function() {
    return this.hasMany('Workout')
  },

  exercise: function(){
      return this.hasMany('Exercise')
  },
});

module.exports = WorkoutExercise;