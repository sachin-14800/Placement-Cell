const express=require('express');
const passport=require('passport');
const router=express.Router();
const downloadController=require('../controllers/download_controller');
router.get('/',passport.checkAuthentication,downloadController.download);

module.exports=router;