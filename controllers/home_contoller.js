const Interview = require("../models/interview");
const Student = require("../models/student");
const User=require('../models/user');
module.exports.home=async function(req,res)
{
    if(req.user.userType=="Employee")
    {
        let student=await Student.find({})
        .sort({"batch":-1})
        let interview=await Interview.find({}).sort({'date':-1}).populate('interviewer').populate('student');
    return res.render('home',{
        title:'Home',
        students:student,
        interviews:interview
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
        // console.log(req.user.id);
        let user=await User.findOne({email:req.user.email});
        if(!user)
        return res.redirect('/');
        return res.redirect('/user/profile/'+req.user.id);
    }
}