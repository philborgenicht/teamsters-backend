exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorite_teams', function(table){
    table.increments('id')



    table.integer('customerId')
    table.foreign('customerId').references('customers.id').onDelete('CASCADE')

    table.integer('teamId')
    table.foreign('teamId').references('teams.id').onDelete('CASCADE')

    table.string('teamName')
    table.foreign('teamName').references('teams.name').onDelete('CASCADE')

    table.integer('sportId')
    table.foreign('sportId').references('sports.id').onDelete('CASCADE')



    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorite_teams')
}
