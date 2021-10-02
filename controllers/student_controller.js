const Student=require('../models/student');
const Course=require('../models/course');
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
        let student=await Student.findOne({email:req.body.email});
        if(!student)
        {
        student=await Student.create(req.body);
        return res.redirect('back');
        }
        else{
        return res.redirect('/');
        }
}

