exports.up = function (knex) {
  return knex.schema.createTable('announced_pu_results', (table) => {
    table.increments('result_id').primary();
    table.string('polling_unit_uniqueid').notNullable();
    table.string('party_abbreviation', 4).notNullable();
    table.integer('party_score').notNullable();
    table.string('entered_by_user').notNullable();
    table.datetime('date_entered').notNullable();
    table.string('user_ip_address').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('announced_pu_results');
};
