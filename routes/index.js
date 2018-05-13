var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin2:admin2@ds237989.mlab.com:37989/lenditdb';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Define a schema
var Schema = mongoose.Schema;
var LendSchema = new Schema({
    title: {type:String},
    category: String,
    available: String,
    description: String
});
var UsersSchema = new Schema({
    username: String,
    password: String
})

router.get('/flash', function(req, res){
    // Set a flash message by passing the key, followed by the value, to req.flash().
    req.flash('info', 'Flash is back!')
    res.redirect('/');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.user){console.log('Logged in');}
  else{console.log('Quit');}
  res.render('index', { title: 'Express', userName: req.session.user});
});

router.post('/',function(req, res, next){
    if(req.body.LoginUsername) // Login
    {
        var UsersModel = mongoose.model('users', UsersSchema );
        UsersModel.find({'username':req.body.LoginUsername})
            .then(function (users) {
                if(Object.keys(users).length == 0)
                {
                    res.render('index', { title: 'Express', userName: req.session.user, error: 'The username '+
                        req.body.LoginUsername+' does not exists. Please sign up with it first.'});
                }
            for(var obj in users)
            {
                if(users[obj].password == req.body.LoginPassword)
                {
                    req.session.user = req.body.LoginUsername;
                    res.render('index', { title: 'Express', userName: req.session.user});
                }
                else
                {
                    res.render('index', { title: 'Express', userName: req.session.user, error:'Username / Password is ' +
                        'invalid. Please enter again' });
                }
            }
            });
    }
    else // Sign Up
    {
        // Create entry in Users document
        var UsersModel = mongoose.model('users', UsersSchema );

        // Check if username already exists
        UsersModel.find({'username':req.body.SignUpUsername})
            .then(function (users) {
                console.log(Object.keys(users).length);
                if(Object.keys(users).length > 0)
                {
                    res.render('index', { title: 'Express', userName: req.session.user, error: 'The username '+
                    req.body.SignUpUsername+' already exists. Please enter a new username.'});
                }
                else
                {
                    console.log('Create user');
                    UsersModel.create({ username: req.body.SignUpUsername, password:req.body.SignUpPassword});
                    req.session.user = req.body.SignUpUsername;
                    res.render('index', { title: 'Express', userName: req.session.user });

                }
            });
    }
});

router.post('/lend',function(req, res, next){
    var lend_data = req.body;
    console.log("Available: ", lend_data.available);
    // Compile model from schema
    var LendModel = mongoose.model('lenditdb', LendSchema );
    /*LendModel.create({ title: lend_data.title, category:lend_data.category,
                    description:lend_data.description, available:lend_data.available}, function (err, small) {
        if (err) console.log(err);
    });*/
    res.render('lend', { title: 'Lend', userName: req.session.user });
});

router.get('/lend', function(req, res, next) {
    res.render('lend', { title: 'Lend', userName: req.session.user  });
});


module.exports = router;
