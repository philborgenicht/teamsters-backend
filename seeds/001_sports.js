
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sports').del()
    .then(function () {
      // Inserts seed entries
      return knex('sports').insert([
        {id: 1, name: 'Basketball'},
        {id: 2, name: 'Football'},
        {id: 3, name: 'Baseball'},
        {id: 4, name: 'Hockey'}
      ])
      .then(() => {
        return knex.raw("SELECT setval('sports_id_seq', (SELECT MAX(id) FROM sports))")
      })
    })
}
