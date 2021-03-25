const bookshelf = require('../bookshelf');

const Workout = bookshelf.model('Workout', {
  tableName: 'workout',
  workout_exercise: function() {
    return this.belongsTo('WorkoutExercise');
  }
});

module.exports = Workout;