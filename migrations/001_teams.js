exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', function(table){
    table.increments('id')

    table.string('name').unique().notNullable().defaultTo('')

    table.string('city').notNullable().defaultTo('')

    table.string('state').notNullable().defaultTo('')

    table.string('sportName')
    table.foreign('sportName').references('sports.name').onDelete('CASCADE')

    table.integer('sportId')
    table.foreign('sportId').references('sports.id')

    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams')
}
