const Student = require("../models/student");
const User=require('../models/user');
module.exports.home=async function(req,res)
{
    if(req.user.userType=="Employee")
    {
    return res.render('home',{
        title:'Home'
    });
    }
    else if(req.user.userType=="Student")
    {
        let user=await User.findOne({email:req.user.email});
        if(!user)
        return res.redirect('/');
       return  res.redirect('/student/profile/'+req.user.id);
    }
    else if(req.user.userType=="Interviewer")
    {
        console.log(req.user.id);
        let user=await User.findOne({email:req.user.email});
        if(!user)
        return res.redirect('/');
        return res.redirect('/interviewer/profile/'+req.user.id);
    }
}