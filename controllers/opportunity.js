const Opportunity = require("../models/opportunity");

module.exports.add=function(req,res)
{
    return res.render('add_opportunity',{
        title:'Add an opportunity'
    });
}
module.exports.create=async function(req,res)
{
    let opp=await Opportunity.create(req.body);
    return res.redirect('/');
}
module.exports.open=async function(req,res)
{
    let opportunity=await Opportunity.findById(req.params.id);
    return res.render('opportunity',{
        title:'Description',
        opportunity:opportunity
    });
}