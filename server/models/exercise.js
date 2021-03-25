const bookshelf = require('../bookshelf');

const Exercise = bookshelf.model('Exercise', {
  tableName: 'exercise',
  workout_exercise: function() {
    return this.belongsTo('WorkoutExercise');
  }
});

module.exports = Exercise;