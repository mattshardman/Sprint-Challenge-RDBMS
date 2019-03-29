exports.up = (knex, Promise) => {
    return knex.schema.createTable('contexts', (tbl) => {
        tbl.increments();
        tbl
          .string('name', 255)
          .notNullable()
          .unique('uq_context_name');
        tbl
          .string('description', 255)
          .notNullable()
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
      });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('contexts');
};