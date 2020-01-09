var mongoose = require('mongoose');

var Categories = mongoose.model('Categories', {
    id:{
        type: String
    },
 name:{
     type: String
 }
}); 

module.exports = {Categories};