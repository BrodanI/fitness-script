
exports.up = knex => {
    return knex.schema.createTable('workout_exercise', (table) => {
        table.integer("workoutId")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable("workout")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

        table.integer("exerciseId")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable("exercise")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('workout_exercise')
};
