const Interviewer=require('../models/interviewer');
const User=require('../models/user');
module.exports.edit=function(req,res)
{
    return res.render('interviewer_details',{
        title:'Edit-details'
    });
}
module.exports.create=async function(req,res)
{
    
    let interviewer=await Interviewer.updateOne({email:req.user.email},{$set:{company:req.body.company,other:req.body.other}});
    interviewer=await Interviewer.findOne({email:req.user.email});
    return res.render('interviewer',{
        title:'profile',
        interviewer:interviewer
    });
}
module.exports.profile=async function(req,res)
{
    let interviewer=await Interviewer.findById(req.params.id);
    let user=await User.findOne({email:interviewer.email});
    return res.redirect('/user/profile/'+user.id);
}