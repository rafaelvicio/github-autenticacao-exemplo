var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

// Modulos de Autenticação

var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

app.use(express.static('./public'));
app.use(bodyParser.json());

// Middlewares de Autenticação

app.use(cookieParser());
app.use(session({
  secret: 'mySecret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

consign({ cwd: 'app'})
  .include('models')
  .then('api')
  .then('routes')
  .into(app);

module.exports = app;
