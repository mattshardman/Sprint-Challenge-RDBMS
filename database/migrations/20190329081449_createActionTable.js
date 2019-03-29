exports.up = (knex, Promise) => {
    return knex.schema.createTable('actions', (tbl) => {
        tbl.increments();
        tbl
          .string('description', 255)
          .notNullable()
          .unique('uq_actions_description');
        tbl
          .string('notes', 255)
          .notNullable()
          .unique('uq_actions_notes');
        tbl
          .string('boolean')
          .notNullable()
          .unique('uq_actions_completed');
        tbl
          .integer('project_id')
          .unsigned()
          .references('id')
          .inTable('projects')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
      });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('actions');
};