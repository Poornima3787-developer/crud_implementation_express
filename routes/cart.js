const express=require('express');
const router=express.Router();
const cartController=require('../controllers/cartController');

router.get("/:userId",cartController.getCartId);

router.post("/:userId",cartController.postCartId);

module.exports=router;