var mongoose = require('mongoose');

var Papier = mongoose.model('Papier', {
 

 text:{
    type: String
},

file : String
 
}); 

module.exports = {Papier};