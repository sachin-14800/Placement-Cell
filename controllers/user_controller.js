const Student = require('../models/student');
const User=require('../models/user');
const Interviewer=require('../models/interviewer');
const Interview = require('../models/interview');
const Opportunity = require('../models/opportunity');
module.exports.signIn=function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/');
    }
    return res.render('user_sign_in',{
        title:'Placement Cell | Sign In'
    });
}
module.exports.signUp=function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/');
    }
    return res.render('user_sign_up',{
        title:'Placement Cell | Sign Up'
    });
}
module.exports.create=async function(req,res)
{
    if(req.body.password!=req.body.confirm_password)
    {
        return res.redirect('back');
    }
    let user=await User.findOne({email:req.body.email});
        if(!user)
        {
            
            if(req.body.userType=="Student"){
            // let student=await Student.create({email:req.body.email});
            console.log('ask the department to add you');
            return res.redirect('/');
            }
            else if(req.body.userType=="Interviewer")
            {
                user=await User.create(req.body);
                let interviewer=await Interviewer.create({email:req.body.email,name:user.name});
            }
                return res.redirect('/user/sign-in');
        }
        else
        {
            return res.redirect('/user/sign-in');
        }
}
module.exports.createSession=function(req,res)
{
    // req.flash('success','Logged In successfully');
    return res.redirect('/');
}

module.exports.destroySession=function(req,res)
{
    req.logout();
    // req.flash('success','Logged Out successfully');
    return res.redirect('/');
}

module.exports.profile=async function(req,res)
{
    let user=await User.findById(req.params.id);
    let interview;
    if(user.userType=="Student")
    {
    let student=await Student.findOne({email:user.email});
    let date=new Date();
    console.log(date);
    interview=await Interview.find({student:student})
    .sort({date:-1})
    .populate('interviewer')
    .populate('student');
    let opportunity=await Opportunity.find({deadline:{$gt:date}});
    return res.render('student',{
        title:'profile',
        student:student,
        interview:interview,
        opportunity:opportunity
    });
    }
    else{
    let interviewer=await Interviewer.findOne({email:user.email});
    interview=await Interview.find({interviewer:interviewer}).sort({date:-1}).populate('interviewer').populate('student');
    return res.render('interviewer',{
        title:'profile',
        interviewer:interviewer,
        interview:interview
    });
    }
}
