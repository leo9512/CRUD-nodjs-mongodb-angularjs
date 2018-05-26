let mongoose = require('mongoose');  
let Schema = mongoose.Schema;  
let UserSchema = new Schema({  
    name: String,
    email:String,  
    year: String,
    password:String,
    rol:String  
});  
module.exports = mongoose.model('User', UserSchema);  
