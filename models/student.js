
//student.js
const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true,
    },
    batch:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true
    },
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Course'
        }
    ]
},{
    timestamps:true
});

const Student=mongoose.model('Student',studentSchema);

module.exports=Student;
