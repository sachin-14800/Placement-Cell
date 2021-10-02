const express=require('express');

const router=express.Router();
const courseController=require('../controllers/course_controller');
router.get('/add-course/:id',courseController.addCourse);
router.post('/create-course/:id',courseController.createCourse);

module.exports=router;