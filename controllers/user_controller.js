const Student = require('../models/student');
const User=require('../models/user');
const Interviewer=require('../models/interviewer');
const Interview = require('../models/interview');
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
            user=await User.create(req.body);
            if(req.body.userType=="Student"){
            let student=await Student.create({email:req.body.email});
            }
            else if(req.body.userType=="Interviewer")
            {
                let interviewer=await Interviewer.create({email:req.body.email});
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
    let student=await Student.findOne({email:user.email}).populate('courses');
    interview=await Interview.find({student:student})
    .populate('interviewer')
    .populate('student');
    return res.render('student',{
        title:'profile',
        student:student,
        interview:interview
    });
    }
    else{
    let interviewer=await Interviewer.findOne({email:user.email});
    interview=await Interview.find({interviewer:interviewer}).populate('interviewer').populate('student');
    return res.render('interviewer',{
        title:'profile',
        interviewer:interviewer,
        interview:interview
    });
    }
}
