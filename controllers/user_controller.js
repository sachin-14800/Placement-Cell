const User=require('../models/user');
module.exports.signIn=function(req,res)
{
    return res.render('user_sign_in',{
        title:'Placement Cell | Sign In'
    });
}
module.exports.signUp=function(req,res)
{
    return res.render('user_sign_up',{
        title:'Placement Cell | Sign Up'
    });
}
module.exports.create=function(req,res)
{
    if(req.body.password!=req.body.confirm_password)
    {
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err)
        return ;
        if(!user)
        {
            User.create(req.body,function(err,user){
                if(err)
                return;
                return res.redirect('/user/sign-in');
            });
        }
        else
        {
            return res.redirect('/user/sign-in');
        }
    });
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
