var express = require('express');
var router = express.Router();
const knex = require('../knex.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('customers')
  .select('*')
  .then(data=>{
    res.status(200).json(data)
  })
})

router.get('/:id', function(req,res, next) {
  let id=req.params.id
  knex('customers')
  .where('id', id)
  .then(data=>{
    res.status(200).json(data[0])
  })
})

router.post('/', function(req, res, next){
  knex('customers')
    .insert(req.body)
    .returning(['id', 'firstName', 'lastName', 'emailAddress', 'userName', 'phoneNumber', 'favoritePlayerFirstName', 'favoritePlayerLastName',
    'favoritePlayerId', 'favoriteTeam', 'favoriteTeamId', 'favoriteSport', 'favoriteSportId', 'isActive', 'isAdmin', 'hashedPassword'])
    .then((data) => {
    res.status(200).json(data[0])
  })
})

router.patch('/:id', function(req,res,next){
    let id=req.params.id
    let info=req.body
    knex('customers')
    .where('id', id)
    .update(info)
    .returning(['id', 'firstName', 'lastName', 'emailAddress', 'userName', 'phoneNumber', 'favoritePlayerFirstName', 'favoritePlayerLastName',
    'favoritePlayerId', 'favoriteTeam', 'favoriteTeamId', 'favoriteSport', 'favoriteSportId', 'isActive', 'isAdmin', 'hashedPassword'])
    .then(data=>{
      res.status(200).json(data[0])
    })
})

router.delete('/:id', function(req, res, next){
    let id=req.params.id
    knex('customers')
    .where('id', id)
    .del()
    .returning(['id', 'firstName', 'lastName', 'emailAddress', 'userName', 'phoneNumber', 'favoritePlayerFirstName', 'favoritePlayerLastName',
    'favoritePlayerId', 'favoriteTeam', 'favoriteTeamId', 'favoriteSport', 'favoriteSportId', 'isActive', 'isAdmin', 'hashedPassword'])
    .then(data=>{
      res.status(200).json(data[0])
    })
})

module.exports = router;
