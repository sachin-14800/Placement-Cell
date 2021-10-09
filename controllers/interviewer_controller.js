const Interviewer=require('../models/interviewer');
const User=require('../models/user');
const Interview=require('../models/interview');
module.exports.edit=async function(req,res)
{
    let interviewer=await Interviewer.findOne({email:req.user.email});
    console.log(interviewer);
    return res.render('interviewer_details',{
        title:'Edit-details',
        interviewer:interviewer
    });
}
module.exports.create=async function(req,res)
{
    
    let interviewer=await Interviewer.updateOne({email:req.user.email},{$set:{company:req.body.company,other:req.body.other}});
    interviewer=await Interviewer.findOne({email:req.user.email});
    let interview=await Interview.find({interviewer:interviewer}).populate('interviewer').populate('student');
    return res.render('interviewer',{
        title:'profile',
        interviewer:interviewer,
        interview:interview
    });
}
module.exports.profile=async function(req,res)
{
    let interviewer=await Interviewer.findById(req.params.id);
    let user=await User.findOne({email:interviewer.email});
    return res.redirect('/user/profile/'+user.id);
}