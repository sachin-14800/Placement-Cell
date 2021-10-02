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
            student=await Student.updateOne({email:req.body.email},{$set:{college:req.body.college,status:req.body.status,batch:req.body.batch}});
            
        }
        return res.redirect('/student/profile/'+user.id);
        
}
module.exports.profile=async function(req,res)
{
    let user=await User.findById(req.params.id);
    let student=await Student.findOne({email:user.email}).populate('courses');
    return res.render('student',{
        title:'profile',
        student:student
    });
}

