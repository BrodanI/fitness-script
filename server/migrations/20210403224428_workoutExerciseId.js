
exports.up = function(knex) {
    return knex.schema.table('workout_exercise', (table) => {

    table.increments('id').primary();
    })
};

exports.down = function(knex) {
    return knex.schema.table('workout_exercise', (table) => {
        table.dropColumn('workoutExerciseId');
    })
};
