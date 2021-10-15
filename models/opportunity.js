const mongoose=require('mongoose');
const opportunitySchema=mongoose.Schema({
    company:{
        type:String,
        required:true
    },
    criteria:{
        type:String,
    },
    designation:{
        type:String
    },
    place:{
        type:String
    },
    ctc:{
        type:String,
    },
    registerLink:{
        type:String
    },
    deadline:{
        type:Date,
        required:true
    },
    otherLinks:{
        type:String
    }
},{
    timestamps:true
});

const Opportunity=mongoose.model('Opportunity',opportunitySchema);

module.exports=Opportunity;