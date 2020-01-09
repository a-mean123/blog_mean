var mongoose = require('mongoose');

var Author = mongoose.model('Author', {
 

 name:{
     type: String
 },
 description:{
    type: String
},
photo:{
    type: String
}

}); 

module.exports = {Author};

