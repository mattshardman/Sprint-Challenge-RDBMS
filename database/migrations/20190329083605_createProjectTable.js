exports.up = (knex, Promise) => {
    return knex.schema.createTable('projects', (tbl) => {
        tbl.increments();
        tbl
          .string('name', 255)
          .notNullable()
          .unique('uq_projects_name');
        tbl
          .string('description', 255)
          .notNullable()
        tbl
          .boolean('completed')
          .notNullable()
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
      });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('projects');
};
