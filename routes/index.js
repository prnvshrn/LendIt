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
    description: String,
    username: String
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
                    UsersModel.create({ username: req.body.SignUpUsername, password:req.body.SignUpPassword});
                    req.session.user = req.body.SignUpUsername;
                    res.render('index', { title: 'Express', userName: req.session.user });

                }
            });
    }
});

router.post('/lend',function(req, res, next){
    var lend_data = req.body;
    // Compile model from schema
    var LendModel = mongoose.model('lenditdb', LendSchema );
    if(typeof(req.session.user) == 'undefined')
    {
        res.render('lend', { title: 'Lend', userName: req.session.user, error:'You are not logged in. Please click' +
            ' on the top right icon to do so.' });
    }
    else{
    LendModel.create({ title: lend_data.title, category:lend_data.category,
                    description:lend_data.description, available:lend_data.available, username:req.session.user},
        function (err, small) {
        if (err) console.log(err);
    });
    res.render('lend', { title: 'Lend', userName: req.session.user });
    }
});

router.get('/lend', function(req, res, next) {
    res.render('lend', { title: 'Lend', userName: req.session.user  });
});

router.get('/borrow', function(req, res, next) {
    var LendModel = mongoose.model('lenditdb', LendSchema );
    LendModel.find()
        .then(function (users) {
            var temp = [];
            for(var obj in users)
            {
                temp.push(
                    {'title':users[obj].title,'category': users[obj].category,
                'available': users[obj].available,
                'description': users[obj].description,
                'username': users[obj].username}
                );
                //temp.push(users[obj].category);
            }
            res.render('borrow', { title: 'Lend', userName: req.session.user, borrow:temp  });
        });


});


module.exports = router;
