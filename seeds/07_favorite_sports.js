
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorite_sports').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorite_sports').insert([
        {id: 1, customerId:1, sportId:1, sportName:'Basketball'},
        {id: 2, customerId:2, sportId:2, sportName:'Football'},
        {id: 3, customerId:3, sportId:3, sportName:'Baseball'},
        {id: 4, customerId:4, sportId:4, sportName:'Hockey'},
      ])
      .then(() => {
        return knex.raw("SELECT setval('favorite_sports_id_seq', (SELECT MAX(id) FROM favorite_sports))")
      })
    })
}
