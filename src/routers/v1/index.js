const express=require('express');

const router=express.Router();

router.get('/',()=>{
    console.log("hi there");
})

module.exports=router;