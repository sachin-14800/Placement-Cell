const Interviewer = require("../models/interviewer");
const Student = require("../models/student");
const Interview=require("../models/interview");
module.exports.add=function(req,res)
{
    return res.render('interview',{
        title:'Schedule Interview'
    });
}
module.exports.create=async function(req,res)
{
    let interviewer=await Interviewer.findOne({email:req.body.interviewer});
    let student=await Student.findOne({email:req.body.student});
    if(interviewer && student)
    {
        let interview =await Interview.create({interviewer:interviewer,student:student,date:req.body.date});
        console.log('created successfully');
    }
    else
    {
        console.log('not created');
    }
    res.redirect('/interview/add-interview');
}