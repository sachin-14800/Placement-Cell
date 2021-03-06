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
        if(req.isAuthenticated())
        {
                let student=await Student.findOne({email:req.body.email});
            let user=await User.findOne({email:req.body.email});
            
            if(!student)
            {
                student=await Student.create({email:req.body.email,college:req.body.college,name:req.body.name,batch:req.body.batch});
                let date=req.body.dob.split("-").reverse().join("-");
                user=await User.create({email:req.body.email,name:req.body.name,userType:"Student",password:date});
                req.flash('success','Student Created');
            }
            else
            {
                req.flash('error','Student already present');
            }
            return res.redirect('/user/profile/'+user.id);
        }
        return res.render('user_sign_in',{
            title:'Placement Cell | Sign In'
        });
        
}
module.exports.profile=async function(req,res)
{
    if(req.isAuthenticated())
    {
            let student=await Student.findById(req.params.id);
        let user=await User.findOne({email:student.email});
        return res.redirect('/user/profile/'+user.id);
    }
    return res.render('user_sign_in',{
        title:'Placement Cell | Sign In'
    });
}
module.exports.editStudent=async function(req,res)
{
    if(req.isAuthenticated())
    {
            let student=await Student.updateOne({email:req.body.email},{$set:{dsa_score:req.body.dsa_score,web_score:req.body.web_score,react_score:req.body.react_score,status:req.body.status}});
            req.flash('success','Successfully updated');
        return res.redirect('back');
    }
    return res.render('user_sign_in',{
        title:'Placement Cell | Sign In'
    });
}

