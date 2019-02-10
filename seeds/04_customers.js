
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {id: 1, firstName: 'Phillip', lastName: 'Borgenicht', emailAddress:'philborgneicht@gmail.com', userName:'philborg',
        phoneNumber:'908-268-8456', favoritePlayerFirstName:'Lebron', favoritePlayerLastName:'James',
        favoritePlayerId:1, favoriteTeam:'Los Angeles Lakers', favoriteTeamId:1, favoriteSport:'Basketball',
        favoriteSportId:1, isActive:true, isAdmin:true, hashedPassword:'abcdefg1234567' },

        {id: 2, firstName: 'Marc', lastName: 'Wilk', emailAddress:'marcwilk@gmail.com', userName:'markymarc',
        phoneNumber:'555-555-5555', favoritePlayerFirstName:'Von', favoritePlayerLastName:'Miller',
        favoritePlayerId:1, favoriteTeam:'Denver Broncos', favoriteTeamId:2, favoriteSport:'Football',
        favoriteSportId:2, isActive:true, isAdmin:false, hashedPassword:'hijklmn2345678' },

        {id: 3, firstName: 'Owen', lastName: 'Thompson', emailAddress:'ot@gmail.com', userName:'otonomy',
        phoneNumber:'444-444-4444', favoritePlayerFirstName:'Nolan', favoritePlayerLastName:'Arenado',
        favoritePlayerId:3, favoriteTeam:'Colorado Rockies', favoriteTeamId:3, favoriteSport:'Baseball',
        favoriteSportId:3, isActive:true, isAdmin:false, hashedPassword:'opqrstu3456789' },

        {id: 4, firstName: 'Justin', lastName: 'Roberts', emailAddress:'jrob@gmail.com', userName:'jayrobby',
        phoneNumber:'333-333-3333', favoritePlayerFirstName:'Henrik', favoritePlayerLastName:'Lundqvist',
        favoritePlayerId:4, favoriteTeam:'New York Rangers', favoriteTeamId:4, favoriteSport:'Hockey',
        favoriteSportId:4, isActive:true, isAdmin:false, hashedPassword:'vwxyzab4567890' },

      ])
      .then(() => {
        return knex.raw("SELECT setval('customers_id_seq', (SELECT MAX(id) FROM customers))")
      })
    })
}
