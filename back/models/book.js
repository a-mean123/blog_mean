var mongoose = require('mongoose');

var Book = mongoose.model('Book', {
 

 name:{
     type: String
 },
 description:{
    type: String
},
categories:{
    type: String
},
author:{
    type: String
},
pageNumber:{
    type: String
},
photo:{
    type: String
},
pdf:{
    type: String
}
}); 

module.exports = {Book};

