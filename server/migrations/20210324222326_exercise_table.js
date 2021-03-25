exports.up = knex => {
    return knex.schema.createTable('exercise', (table) => {
        table.increments('id').primary();
        table.string('exerciseName')
        table.string('muscle')
        table.string('repsTime')
        table.string('weight')
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('exercise')
};
