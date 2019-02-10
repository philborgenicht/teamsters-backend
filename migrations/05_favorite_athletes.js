exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorite_athletes', function(table){
    table.increments('id')

    table.integer('customerId')
    table.foreign('customerId').references('customers.id').onDelete('CASCADE')


    table.integer('athleteId')
    table.foreign('athleteId').references('athletes.id').onDelete('CASCADE')

    // table.string('athleteFirstName')
    // table.foreign('athleteFirstName').references('athletes.firstName').onDelete('CASCADE')
    //
    // table.string('athleteLastName')
    // table.foreign('athleteLastName').references('athletes.lastName').onDelete('CASCADE')



    table.integer('sportId')
    table.foreign('sportId').references('sports.id').onDelete('CASCADE')


    table.integer('teamId')
    table.foreign('teamId').references('teams.id').onDelete('CASCADE')

    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorite_athletes')
}
