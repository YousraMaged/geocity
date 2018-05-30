const mongoose = require ('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    firstName : String,
    lastName : String,
    resident : Boolean,
    email : String,
    contacts : [ Number ],
    type : String
});

mongoose.model('users', userSchema);