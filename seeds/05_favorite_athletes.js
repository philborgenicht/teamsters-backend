
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorite_athletes').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorite_athletes').insert([
        {id: 1, customerId:1, athleteId:1,   sportId:1, teamId:1},

        {id: 2, customerId:2, athleteId:2,  sportId:2, teamId:2},

        {id: 3, customerId:3, athleteId:3,  sportId:3, teamId:3},

        {id: 4, customerId:4,  athleteId:4,  sportId:4, teamId:4},
      ])
      .then(() => {
        return knex.raw("SELECT setval('favorite_athletes_id_seq', (SELECT MAX(id) FROM favorite_athletes))")
      })
    })
}
