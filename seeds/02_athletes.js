
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('athletes').del()
    .then(function () {
      // Inserts seed entries
      return knex('athletes').insert([
        {id: 1, firstName:'Lebron', lastName:'James', sport:'Basketball', sportId:1, teamId:1, teamName:'Los Angeles Lakers', position:'Forward'},
        {id: 2, firstName:'Von', lastName:'Miller', sport:'Football', sportId:2, teamId:2, teamName:'Denver Broncos', position:'Linebacker'},
        {id: 3, firstName:'Nolan', lastName:'Arenado', sport:'Baseball', sportId:3, teamId:3, teamName:'Colorado Rockies', position:'Third Baseman'},
        {id: 4, firstName:'Henrik', lastName:'Lundqvist', sport:'Hockey', sportId:4, teamId:4, teamName:'New York Rangers', position:'Goaltender'},

      ])
      .then(() => {
        return knex.raw("SELECT setval('athletes_id_seq', (SELECT MAX(id) FROM athletes))")
      })
    })
}
