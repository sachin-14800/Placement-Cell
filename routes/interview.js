const express=require('express');
const passport=require('passport');
const router=express.Router();
const interviewController=require('../controllers/interview_controller');
router.get('/add-interview',passport.checkAuthentication,interviewController.add);
router.post('/create-interview',passport.checkAuthentication,interviewController.create);
router.post('/update',passport.checkAuthentication,interviewController.update);
module.exports=router;