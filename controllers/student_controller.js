const Student=require('../models/student');
const User=require('../models/user');
module.exports.addStudent=function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.render('add_student',{
            title:'Add a Student'
        });
    }
    return res.render('user_sign_in',{
        title:'Placement Cell | Sign In'
    });
}
module.exports.createStudent=async function(req,res)
{
        let student=await Student.findOne({email:req.body.email,college:req.body.college});
        let user=await User.findOne({email:req.body.email});
        
        if(!student)
        {
            student=await Student.updateOne({email:req.body.email},{$set:{college:req.body.college,status:req.body.status,
                batch:req.body.batch,dsa_score:req.body.dsa_score,web_score:req.body.web_score,react_score:req.body.react_score}});
        }
        if(!user || user.userType!="Student")
        {
            console.log("Student needs to be present before adding");
            res.redirect('/');
        }
        return res.redirect('/user/profile/'+user.id);
        
}
module.exports.profile=async function(req,res)
{
    let student=await Student.findById(req.params.id);
    let user=await User.findOne({email:student.email});
    return res.redirect('/user/profile/'+user.id);
}

