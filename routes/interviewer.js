const express=require('express');

const router=express.Router();
const interviewerController=require('../controllers/interviewer_controller');
router.get('/edit',interviewerController.edit);
router.post('/create',interviewerController.create);
router.get('/profile/:id',interviewerController.profile);

module.exports=router;