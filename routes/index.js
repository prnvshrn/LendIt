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
  res.render('index', { title: 'Express', userName: req.session.user });
});

router.post('/',function(req, res, next){
    if(req.body.LoginUsername) // Login
    {
        var UsersModel = mongoose.model('users', UsersSchema );
        var password;
        UsersModel.findOne({ 'username': req.body.LoginUsername })
            .exec(function (err, users) {
                if (err) return handleError(err);
                //console.log('The password is %s', users.password);
                if(users.password){console.log('Exists')}
                else{console.log('Not Exists');}
                // prints "The author is Bob Smith"
            });
        /*db.collection("users").findOne({'username': req.body.LoginUsername}, function(err, result) {
            if (err)
            {
                console.log('here');
            }
            try{
                //password = result.password;
            }
            catch(error){
                console.log(error);
                res.redirect('/');
            }
            db.close();
        });*/

        req.session.user = req.body.LoginUsername;
    }
    else // Sign Up
    {
        // Create entry in Users document
        var UsersModel = mongoose.model('users', UsersSchema );
        UsersModel.create({ username: req.body.SignUpUsername, password:req.body.SignUpPassword}
        , function (err, small) {
            if (err) console.log(err);
        });
        req.session.user = req.body.SignUpUsername;
    }
    res.render('index', { title: 'Express', userName: req.session.user });
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
