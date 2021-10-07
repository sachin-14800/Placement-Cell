const express=require('express');

const router=express.Router();
const interviewController=require('../controllers/interview_controller');
router.get('/add-interview',interviewController.add);
router.post('/create-interview',interviewController.create);
module.exports=router;