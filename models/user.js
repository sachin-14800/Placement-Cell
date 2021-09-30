const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        required:true,
        enum:['Employee','Interviewer','Student']
    }
},{
    timestamps:true
});
const User=mongoose.model('User',userSchema);

module.exports=User;