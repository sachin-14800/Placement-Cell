const Interviewer = require("../models/interviewer");
const Student = require("../models/student");
const Interview=require("../models/interview");
module.exports.add=function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.render('interview',{
            title:'Schedule Interview'
        });
    }
    return res.render('user_sign_in',{
        title:'Placement Cell | Sign In'
    });
    
}
module.exports.create=async function(req,res)
{
    if(req.isAuthenticated())
    {
        let interviewer=await Interviewer.findOne({email:req.body.interviewer});
        let student=await Student.findOne({email:req.body.student});
        if(interviewer && student)
        {
            let interview =await Interview.create({interviewer:interviewer,student:student,date:req.body.date,company:req.body.company});
            req.flash('success','Interview Scheduled');
        }
        else
        {
            req.flash('error','Error in creation');
        }
        return res.redirect('/');
    }
    return res.render('user_sign_in',{
        title:'Placement Cell | Sign In'
    });
}
module.exports.update=async function(req,res)
{
    if(req.isAuthenticated())
    {
        let interviewer=await Interviewer.findOne({email:req.body.interviewer});
    let student=await Student.findOne({email:req.body.student});
    let interview=await Interview.updateOne({interviewer:interviewer,student:student,date:req.body.date},{$set:{status:req.body.status}});
    req.flash('success','Successfully updated');
    return res.redirect('back');
    }
    return res.render('user_sign_in',{
        title:'Placement Cell | Sign In'
    });
    
}