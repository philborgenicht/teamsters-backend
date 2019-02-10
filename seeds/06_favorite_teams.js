
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorite_teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorite_teams').insert([
        {id: 1, customerId:1,
        teamId:1, teamName:'Los Angeles Lakers', sportId:1},

        {id: 2,  customerId:2,
        teamId:2, teamName:'Denver Broncos', sportId:2},

        {id: 3, customerId:3,
        teamId:3, teamName:'Colorado Rockies', sportId:3},

        {id: 4, customerId:4,
        teamId:4, teamName:'New York Rangers', sportId:4}

      ])
      .then(() => {
        return knex.raw("SELECT setval('favorite_teams_id_seq', (SELECT MAX(id) FROM favorite_teams))")
      })
    })
}
