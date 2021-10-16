const Interviewer=require('../models/interviewer');
const User=require('../models/user');
const Interview=require('../models/interview');
module.exports.edit=async function(req,res)
{
    if(req.isAuthenticated())
    {
            let interviewer=await Interviewer.findOne({email:req.user.email});
        return res.render('interviewer_details',{
            title:'Edit-details',
            interviewer:interviewer
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
            let interviewer=await Interviewer.updateOne({email:req.user.email},{$set:{company:req.body.company,other:req.body.other}});
        interviewer=await Interviewer.findOne({email:req.user.email});
        let interview=await Interview.find({interviewer:interviewer}).populate('interviewer').populate('student');
        req.flash('success','Successfully updated');
        return res.render('interviewer',{
            title:'profile',
            interviewer:interviewer,
            interview:interview
        });
    }
    return res.render('user_sign_in',{
        title:'Placement Cell | Sign In'
    });
}
module.exports.profile=async function(req,res)
{
    if(req.isAuthenticated())
    {
        let interviewer=await Interviewer.findById(req.params.id);
    let user=await User.findOne({email:interviewer.email});
    return res.redirect('/user/profile/'+user.id);
    }
    return res.render('user_sign_in',{
        title:'Placement Cell | Sign In'
    });
}