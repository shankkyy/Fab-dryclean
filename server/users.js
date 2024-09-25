const {mongoose}= require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/NewDB");
const userSchema= mongoose.Schema({
    name: String,
    email: String,
    age:Number
});

const User = mongoose.model('User', userSchema);
module.exports=User;