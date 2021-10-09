
//student.js
const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    college:{
        type:String,
    },
    batch:{
        type:String,
    },
    status:{
        type:String,
    },
    dsa_score:{
        type:Number,
        default:0
    },
    web_score:{
        type:Number,
        default:0
    },
    react_score:{
        type:Number,
        default:0
    }
},{
    timestamps:true
});

const Student=mongoose.model('Student',studentSchema);

module.exports=Student;
