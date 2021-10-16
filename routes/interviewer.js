const express=require('express');
const passport=require('passport');
const router=express.Router();
const interviewerController=require('../controllers/interviewer_controller');
router.get('/edit',passport.checkAuthentication,interviewerController.edit);
router.post('/create',passport.checkAuthentication,interviewerController.create);
router.get('/profile/:id',passport.checkAuthentication,interviewerController.profile);

module.exports=router;