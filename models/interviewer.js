//interviewer.js
const mongoose=require('mongoose');

const interviewerSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    company:{
        type:String,
    },
    other:{
        type:String,
    }
},{
    timestamps:true
});
const Interviewer=mongoose.model('Interviewer',interviewerSchema);

module.exports=Interviewer;
