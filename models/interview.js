//interview.js
const mongoose=require('mongoose');

const interviewSchema=new mongoose.Schema({
    interviewer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Interviewer',
        required:true
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student',
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        default:'On Hold'
    }
},{
    timestamps:true
});
const Interview=mongoose.model('Interview',interviewSchema);

module.exports=Interview;
