exports.up = (knex, Promise) => {
    return knex.schema.createTable('action-context', (tbl) => {
        tbl.increments();
        tbl
          .integer('action_id')
          .notNullable()
        tbl
          .integer('context_id')
          .notNullable()
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
      });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('action-context');
};