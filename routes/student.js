const express=require('express');

const router=express.Router();
const studentController=require('../controllers/student_controller');
router.get('/add-student',studentController.addStudent);
router.post('/create-student',studentController.createStudent);

module.exports=router;