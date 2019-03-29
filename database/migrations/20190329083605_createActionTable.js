exports.up = (knex, Promise) => {
    return knex.schema.createTable('actions', (tbl) => {
        tbl.increments();
        tbl
          .string('description', 255)
          .notNullable()
        tbl
          .string('notes', 255)
          .notNullable()
        tbl
          .boolean('completed')
          .notNullable()
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