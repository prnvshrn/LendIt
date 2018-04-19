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


var userName = 'Guest';

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.user);
  res.render('index', { title: 'Express', userName: userName });
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
    res.render('lend', { title: 'Lend', userName: userName });
});

router.get('/lend', function(req, res, next) {
    res.render('lend', { title: 'Lend', userName: userName  });
});


module.exports = router;
