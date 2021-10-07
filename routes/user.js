const express=require('express');
const passport=require('passport');
const router=express.Router();

const userController=require('../controllers/user_controller');

router.get('/sign-in',userController.signIn);
router.get('/sign-up',userController.signUp);
router.post('/create',userController.create);
router.post('/create-session',passport.authenticate('local',{
    failureRedirect:'/user/sign-in'
}),userController.createSession);
router.get('/sign-out',userController.destroySession);
router.get('/profile/:id',userController.profile);
module.exports=router;