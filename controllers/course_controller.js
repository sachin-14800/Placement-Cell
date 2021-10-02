const Student=require('../models/student');
const Course=require('../models/course');
module.exports.addCourse=async function(req,res)
{
        let student=await Student.findById(req.params.id);
        return res.render('add_course',{
            title:'Add a Course',
            student:student
        });
    return res.render('user_sign_in',{
        title:'Placement Cell | Sign In'
    });
}
module.exports.createCourse=async function(req,res){
    let student=await Student.findById(req.params.id);
    let course=await Course.create({name:req.body.name,startDate:req.body.date,completionScore:req.body.score});
    student.courses.push(course.id);
    course.students.push(student.id);
    student.save();
    course.save();
    return res.redirect('/');
}