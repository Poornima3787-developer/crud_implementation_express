const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');

router.get("/",userController.getUser);

router.post("/",userController.postUser);

router.get('/:id',userController.getUserId); 

module.exports=router;