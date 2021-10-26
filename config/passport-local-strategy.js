const passport=require('passport');
//importing passport local strategy
const localStrategy=require('passport-local').Strategy;
//user model
const User=require('../models/user');

//creating a new passport strategy
passport.use(new localStrategy({
    usernameField:'email',
    passReqToCallback:true},
    function(req,email,password,done){
        User.findOne({email:email},function(err,user){
            if(err){
                req.flash('error',"Error in finding the user");
            return done(err);}
            if(!user)
            {
                //if not a user
                req.flash('error','Invalid user');
                return done(null,false);
            }
            if(user.password!=password || user.userType!=req.body.userType)
            {
                //if password matches then permit and grant authentication
                req.flash('error','Invalid password or user type');
                return done(null,false);
            }
            return done(null,user);
        });
    }
));

//serialiser for coding the session credentials
passport.serializeUser(function(user,done){
    done(null,user.id);
});

//deserialiser for decoding the session credentials
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err)
        {
            console.log(err);
            return done(err);
        }
        return done(null,user);
    });
});

//function for checking if a user is being authenticated or not
passport.checkAuthentication=function(req,res,next)
{
    if(req.isAuthenticated())
    {
        return next();
    }
    return res.redirect('/user/sign-in');
}

//if authentication is granted then setting the user in locals for easy access
passport.setAuthenticatedUser=function(req,res,next)
{
    if(req.isAuthenticated())
    {
        res.locals.user=req.user;
        // console.log(res.locals.user);
    }
    next();
}
//exporting the passport strategy
module.exports=passport;