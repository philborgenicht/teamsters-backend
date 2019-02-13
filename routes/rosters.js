var express = require('express');
var router = express.Router();
const knex = require('../knex.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('rosters')
  .select('*')
  .then(data=>{
    res.status(200).json(data)
  })
})

router.get('/:id', function(req,res, next) {
  let id=req.params.id
  knex('rosters')
  .where('id', id)
  .then(data=>{
    res.status(200).json(data[0])
  })
})

router.post('/', function(req, res, next){
  knex('rosters')
    .insert(req.body)
    .returning(['id', 'customerId', 'athleteId1', 'athleteId2', 'athleteId3', 'athleteId4', 'athleteId5',
                  'athleteId6', 'athleteId7', 'athleteId8', 'athleteId9', 'athleteId10'
                ])
    .then((data) => {
    res.status(200).json(data[0])
  })
})

router.patch('/:id', function(req,res,next){
    let id=req.params.id
    let info=req.body
    knex('rosters')
    .where('id', id)
    .update(info)
    .returning(['id', 'customerId', 'athleteId1', 'athleteId2', 'athleteId3', 'athleteId4', 'athleteId5',
                  'athleteId6', 'athleteId7', 'athleteId8', 'athleteId9', 'athleteId10'
                ])
    .then(data=>{
      res.status(200).json(data[0])
    })
})

router.delete('/:id', function(req, res, next){
    let id=req.params.id
    knex('rosters')
    .where('id', id)
    .del()
    .returning(['id', 'customerId', 'athleteId1', 'athleteId2', 'athleteId3', 'athleteId4', 'athleteId5',
                  'athleteId6', 'athleteId7', 'athleteId8', 'athleteId9', 'athleteId10'
                ])
    .then(data=>{
      res.status(200).json(data[0])
    })
})

module.exports = router;
