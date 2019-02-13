
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rosters').del()
    .then(function () {
      // Inserts seed entries
      return knex('rosters').insert([
        {id: 1, customerId: 1, athleteId1:1, athleteId2:2, athleteId3:3, athleteId4:4,
        athleteId5:null, athleteId6:null, athleteId7:null, athleteId8:null, athleteId9:null, athleteId10:null},

        {id: 2, customerId: 2, athleteId1:1, athleteId2:2, athleteId3:3, athleteId4:4,
        athleteId5:null, athleteId6:null, athleteId7:null, athleteId8:null, athleteId9:null, athleteId10:null},

        {id: 3, customerId: 3, athleteId1:1, athleteId2:2, athleteId3:3, athleteId4:4,
        athleteId5:null, athleteId6:null, athleteId7:null, athleteId8:null, athleteId9:null, athleteId10:null},

        {id: 4, customerId: 4, athleteId1:1, athleteId2:2, athleteId3:3, athleteId4:4,
        athleteId5:null, athleteId6:null, athleteId7:null, athleteId8:null, athleteId9:null, athleteId10:null},
      ])
      .then(() => {
        return knex.raw("SELECT setval('rosters_id_seq', (SELECT MAX(id) FROM rosters))")
      })
    })
}
