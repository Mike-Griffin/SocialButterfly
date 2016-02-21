
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var login = require('./routes/login');
var signup = require('./routes/signup');
var firstLogin = require('./routes/firstLogin');
var quizIntro = require('./routes/quizIntro');
var quizOne = require('./routes/quizOne');
var quizTwo = require('./routes/quizTwo');
var quizThree = require('./routes/quizThree');
var quizFour = require('./routes/quizFour');
var quizFive = require('./routes/quizFive');
var index = require('./routes/index');
var meetNewPeople = require('./routes/meetNewPeople');
var connect = require('./routes/connect');
var events = require('./routes/events');
var newActivity = require('./routes/newActivity');
var settings = require('./routes/settings');
var faq = require('./routes/faq');
var newConnect = require('./routes/newConnect');
// var project = require('./routes/project');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here

app.get('/', login.view);
app.get('/signup', signup.view);
app.get('/firstLogin', firstLogin.view);
app.get('/quizIntro', quizIntro.view);
app.get('/quizOne', quizOne.view);
app.get('/quizTwo', quizTwo.view);
app.get('/quizThree', quizThree.view);
app.get('/quizFour', quizFour.view);
app.get('/quizFive', quizFive.view);
app.get('/meetNewPeople', meetNewPeople.view);
app.get('/connect', connect.view)
app.get('/events', events.view);
app.get('/newActivity', newActivity.view);
app.get('/settings', settings.view);
app.get('/faq', faq.view);
app.get('/index', index.view);
app.get('/newConnect', newConnect.view);

/*
app.get('/project/:name', project.viewProject);
*/
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
