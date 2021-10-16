const express=require('express');
const passport=require('passport');
const router=express.Router();
const opportunity_controller=require('../controllers/opportunity');
router.get('/add',passport.checkAuthentication,opportunity_controller.add);
router.post('/create',passport.checkAuthentication,opportunity_controller.create);
router.get('/:id',passport.checkAuthentication,opportunity_controller.open);
module.exports=router;