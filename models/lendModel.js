var mongoose = require('mongoose');
var LendSchema = mongoose.Schema({
    title: {type:String},
    category: String,
    available: String,
    description: String,
    username: String
});
var LendModel = module.exports = mongoose.model('lenditdb', LendSchema);