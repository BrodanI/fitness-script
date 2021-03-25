exports.up = knex => {
    return knex.schema.createTable('workout', (table) => {
        table.increments('id').primary();
        table.string('workoutName').notNullable()
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('workout')
};
