var mongoose = require('mongoose');

var Admin = mongoose.model('Admin', {
 

 email:{
     type: String
 },
 password:{
    type: String
}

}); 

module.exports = {Admin};

