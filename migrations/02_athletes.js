exports.up = function(knex, Promise) {
  return knex.schema.createTable('athletes', function(table){
    table.increments('id')

    table.string('firstName').notNullable().defaultTo('')

    table.string('lastName').notNullable().defaultTo('')

    table.string('sport')
    table.foreign('sport').references('sports.name').onDelete('CASCADE')

    table.integer('sportId')
    table.foreign('sportId').references('sports.id').onDelete('CASCADE')

    table.string('teamName')
    table.foreign('teamName').references('teams.name').onDelete('CASCADE')

    table.integer('teamId')
    table.foreign('teamId').references('teams.id').onDelete('CASCADE')


    table.string('position')

    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('athletes')
}
