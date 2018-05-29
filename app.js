var express = require('express');
var path = require('path');
var router = express.Router();
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./routes');
var mysql = require('mysql');


const index = require('./routes');

//var router = express.Router();
var session;

var app = express();
// patrse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('home', {
  	title: "Sistem Informasi Mesjid Cibiru"
  })
});
app.use('/home',index);


app.set('view engine', 'ejs');
//path
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



/*app.use(function(req, res, next) {
  var err =  new Error('Not Found');
  err.status = 404;
  next(err);
});
*/


//session
app.use(session({
    secret:'askfhla09013*&*afdajfa#',
    resave:false,
    saveUninitialized:true
}));



/*''
app.post('login', routes.login);
app.get('/sign-up/add', routes.signup);
app.get('/profil', routes.profil);
app.get('/kegiatan', routes.kegiatan);
app.get('/admin', routes.admin);
app.post('/sign-up/add', routes.save);
app.post('/admin', routes.session);
app.get('/redirects', routes.redirects);
app.post('/homeAdmin', routes.homeAdmin);
app.get('*', routes.notFound);
*/

app.listen('3000', routes.listen);



/**
 * get api/status
 */
router.get('/status',(req, res) =>res.send('ok'));

/**
 * GET api/docs
 */



module.exports = router;

module.exports = app;
module.exports = routes;
