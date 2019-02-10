require('dotenv').config()

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var athletesRouter= require('./routes/athletes');
var customersRouter=require('./routes/customers');
var teamsRouter=require('./routes/teams');
var sportsRouter=require('./routes/sports');
var favoriteTeamsRouter=require('./routes/favorite_teams')
var favoriteAthletesRouter=require('./routes/favorite_athletes')
var favoriteSportsRouter=require('./routes/favorite_sports')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/athletes', athletesRouter)
app.use('/customers', customersRouter)
app.use('/teams', teamsRouter)
app.use('/sports', sportsRouter)
app.use('/favorite_teams', favoriteTeamsRouter)
app.use('/favorite_sports', favoriteSportsRouter)
app.use('/favorite_athletes', favoriteAthletesRouter)
module.exports = app;
