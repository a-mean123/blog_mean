var mongoose = require('mongoose');

var File = mongoose.model('File', {



caption:{
  type: String
},
 name:{
     type: String
 },
 categories:{
   type:String
 }

});

module.exports = {File};

