var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/lend',function(req, res, next){
    var test = req.body;
    console.log("Received Something " + test.title);
    res.render('lend', { title: 'Lend' });
});

router.get('/lend', function(req, res, next) {
    res.render('lend', { title: 'Lend' });
});


module.exports = router;
