const Interview = require("../models/interview");
const Student = require("../models/student");
const User=require('../models/user');
const Opportunity=require('../models/opportunity');
module.exports.home=async function(req,res)
{
    if(req.isAuthenticated())
    {
        if(req.user.userType=="Employee")
        {
            let student=await Student.find({}).sort({"batch":-1});
            let interview=await Interview.find({}).sort({'date':-1}).populate('interviewer').populate('student');
            let opportunity=await Opportunity.find({}).sort({'deadline':-1});
        return res.render('home',{
            title:'Home',
            students:student,
            interviews:interview,
            opportunity:opportunity
        });
        }
        else if(req.user.userType=="Student")
        {
            let user=await User.findOne({email:req.user.email});
            if(!user)
            return res.redirect('/');
        return  res.redirect('/user/profile/'+req.user.id);
        }
        else if(req.user.userType=="Interviewer")
        {
            let user=await User.findOne({email:req.user.email});
            if(!user)
            return res.redirect('/');
            return res.redirect('/user/profile/'+req.user.id);
        }
    }
    else{
        return res.render('user_sign_in',{
            title:'Placement Cell | Sign In'
        });
    }
}