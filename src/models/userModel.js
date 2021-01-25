//init code
const mongoose=require('mongoose');

//declaire schema
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true
    }
});


//export user module
module.exports=mongoose.model('users',userSchema)


