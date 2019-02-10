
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {id: 1, name: 'Los Angeles Lakers', city:'Los Angeles', state:'California', sportName:'Basketball', sportId:1},
        {id: 2, name: 'Denver Broncos', city:'Denver', state:'Colorado', sportName:'Football' , sportId:2},
        {id: 3, name: 'Colorado Rockies', city:'Denver', state:'Colorado', sportName:'Baseball' , sportId:3},
        {id: 4, name: 'New York Rangers', city:'New York City', state:'New York', sportName:'Hockey' , sportId:4},
      ])
      .then(() => {
        return knex.raw("SELECT setval('teams_id_seq', (SELECT MAX(id) FROM teams))")
      })
    })
}
