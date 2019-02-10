exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorite_sports', function(table){
    table.increments('id')

    table.integer('customerId')
    table.foreign('customerId').references('customers.id').onDelete('CASCADE')

    table.integer('sportId')
    table.foreign('sportId').references('sports.id').onDelete('CASCADE')

    table.string('sportName')
    table.foreign('sportName').references('sports.name').onDelete('CASCADE')

    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorite_sports')
}
