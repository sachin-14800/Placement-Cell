const Opportunity = require("../models/opportunity");

module.exports.add=function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.render('add_opportunity',{
            title:'Add an opportunity'
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
            let opp=await Opportunity.create(req.body);
        req.flash('success','Opportunity added');
        return res.redirect('/');
    }
    return res.render('user_sign_in',{
        title:'Placement Cell | Sign In'
    });
}
module.exports.open=async function(req,res)
{
    if(req.isAuthenticated())
    {
            let opportunity=await Opportunity.findById(req.params.id);
        return res.render('opportunity',{
            title:'Description',
            opportunity:opportunity
        });
    }
    return res.render('user_sign_in',{
        title:'Placement Cell | Sign In'
    });
}