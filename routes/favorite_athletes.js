var express = require('express');
var router = express.Router();
const knex = require('../knex.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('favorite_athletes')
  .select('*')
  .then(data=>{
    res.status(200).json(data)
  })
})

router.get('/:id', function(req,res, next) {
  let id=req.params.id
  knex('favorite_athletes')
  .where('id', id)
  .then(data=>{
    res.status(200).json(data[0])
  })
})

router.post('/', function(req, res, next){
  knex('favorite_athletes')
    .insert(req.body)
    .returning(['id', 'customerId', 'athleteId', 'sportId', 'teamId'])
    .then((data) => {
    res.status(200).json(data[0])
  })
})

router.patch('/:id', function(req,res,next){
    let id=req.params.id
    let info=req.body
    knex('favorite_athletes')
    .where('id', id)
    .update(info)
    .returning(['id', 'customerId', 'athleteId', 'sportId', 'teamId'])
    .then(data=>{
      res.status(200).json(data[0])
    })
})

router.delete('/:id', function(req, res, next){
    let id=req.params.id
    knex('favorite_athletes')
    .where('id', id)
    .del()
    .returning(['id', 'customerId', 'athleteId', 'sportId', 'teamId'])
    .then(data=>{
      res.status(200).json(data[0])
    })
})

module.exports = router;
