exports.up = function(knex, Promise) {
  return knex.schema.createTable('rosters', function(table){
    table.increments('id')

    table.integer('customerId')
    table.foreign('customerId').references('customers.id').onDelete('CASCADE')

    table.integer('athleteId1').defaultTo(null)
    table.foreign('athleteId1').references('athletes.id').onDelete('CASCADE')

    table.integer('athleteId2').defaultTo(null)
    table.foreign('athleteId2').references('athletes.id').onDelete('CASCADE')

    table.integer('athleteId3').defaultTo(null)
    table.foreign('athleteId3').references('athletes.id').onDelete('CASCADE')

    table.integer('athleteId4').defaultTo(null)
    table.foreign('athleteId4').references('athletes.id').onDelete('CASCADE')

    table.integer('athleteId5').defaultTo(null)
    table.foreign('athleteId5').references('athletes.id').onDelete('CASCADE')

    table.integer('athleteId6').defaultTo(null)
    table.foreign('athleteId6').references('athletes.id').onDelete('CASCADE')

    table.integer('athleteId7').defaultTo(null)
    table.foreign('athleteId7').references('athletes.id').onDelete('CASCADE')

    table.integer('athleteId8').defaultTo(null)
    table.foreign('athleteId8').references('athletes.id').onDelete('CASCADE')

    table.integer('athleteId9').defaultTo(null)
    table.foreign('athleteId9').references('athletes.id').onDelete('CASCADE')

    table.integer('athleteId10').defaultTo(null)
    table.foreign('athleteId10').references('athletes.id').onDelete('CASCADE')


    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rosters')
}
