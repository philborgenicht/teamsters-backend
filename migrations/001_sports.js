exports.up = function(knex, Promise) {
  return knex.schema.createTable('sports', function(table){
    table.increments('id')

    table.string('name').unique().notNullable().defaultTo('')

    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sports')
}
