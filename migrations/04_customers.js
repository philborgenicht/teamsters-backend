exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', function(table){
    table.increments('id')
    table.string('firstName').notNullable().defaultTo('')

    table.string('lastName').notNullable().defaultTo('')

    table.string('emailAddress').unique().notNullable().defaultTo('')

    table.string('userName').unique().notNullable().defaultTo('')

    table.string('phoneNumber').notNullable().defaultTo('')

    table.string('favoritePlayerFirstName').notNullable().defaultTo('')

    table.string('favoritePlayerLastName').notNullable().defaultTo('')

    table.integer('favoritePlayerId')
    table.foreign('favoritePlayerId').references('athletes.id').onDelete('CASCADE')

    table.string('favoriteTeam')
    table.foreign('favoriteTeam').references('teams.name').onDelete('CASCADE')

    table.integer('favoriteTeamId')
    table.foreign('favoriteTeamId').references('teams.id').onDelete('CASCADE')

    table.string('favoriteSport')
    table.foreign('favoriteSport').references('sports.name').onDelete('CASCADE')

    table.integer('favoriteSportId')
    table.foreign('favoriteSportId').references('sports.id').onDelete('CASCADE')

    table.boolean('isActive').notNullable().defaultTo(true)

    table.boolean('isAdmin').defaultTo(false)

    table.string('hashedPassword').unique().notNullable().defaultTo('')


    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers')
}
