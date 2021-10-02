//course.js
const mongoose=require('mongoose');

const courseSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    startDate:{
        type:Date,
        required:true,
    },
    completionScore:{
        type:Number,
        required:true,
    },
    students:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Student'
        }
    ]

},{
    timestamps:true
});

const Course=mongoose.model('Course',courseSchema);

module.exports=Course;
