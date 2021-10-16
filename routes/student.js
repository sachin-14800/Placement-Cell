const express=require('express');
const passport=require('passport');
const router=express.Router();
const studentController=require('../controllers/student_controller');
router.get('/add-student',passport.checkAuthentication,studentController.addStudent);
router.post('/create-student',passport.checkAuthentication,studentController.createStudent);
router.get('/profile/:id',passport.checkAuthentication,studentController.profile);
router.post('/update-student',passport.checkAuthentication,studentController.editStudent);
module.exports=router;