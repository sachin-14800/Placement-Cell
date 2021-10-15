const express=require('express');
const router=express.Router();
const opportunity_controller=require('../controllers/opportunity');
router.get('/add',opportunity_controller.add);
router.post('/create',opportunity_controller.create);
module.exports=router;