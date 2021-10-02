const express=require('express');
const passport=require('passport');
const router=express.Router();

const homeController=require('../controllers/home_contoller');
router.get('/',passport.checkAuthentication,homeController.home);
router.use('/user',require('./user'));
router.use('/student',require('./student'));
router.use('/course',require('./course'));
router.use('/interviewer',require('./interviewer'));
module.exports=router;