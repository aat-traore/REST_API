const mongoose= require('mongoose')
const UserSchema = new mongoose.Schema({
    FirstName:String,
    LastName:String,
    LogAuth:[String],
    cordonnes:[String]

})
module.exports = mongoose.model('User', UserSchema)