const express = require('express')
const registermodel = require('../models/registertb')
const registerRouter = express.Router()
const bcrypt = require('bcryptjs')

registerRouter.post('/save',async function(req,res){
   try {
    console.log(req.body);
   const hash = await bcrypt.hash(req.body.password, 12)
    const data = {
            name:req.body.name,
            phno:req.body.phno,
            address:req.body.address,
            email:req.body.email,
            username:req.body.username,
            password:hash,
            role:1
    }
     console.log(data);
    const olduser = await registermodel.findOne({username:data.username}) 
    console.log(olduser);
    if(olduser){       
        return res.status(400).json({
            success:false,
            error:true,
            message:'username already exist'
        })
    }
    const oldemail = await registermodel.findOne({email:data.email}) 
    
       if(oldemail)  {
       return res.status(400).json({
        success:false,
        error:true,
        message:'email already exist'
       })
       }
    registermodel(data).save().then(()=>{
        return res.status(200).json({
            success:true,
            error:false,
            message:'registration completed'
        })
    })
   } catch (error) {
    
   } 
})
module.exports = registerRouter



