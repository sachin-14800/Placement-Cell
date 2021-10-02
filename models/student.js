
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
