const express = require('express')
const productsRouter = express.Router()
const productsmodel = require('../models/productstb')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
     cb(null, '../client/public/assets/')
  },
    filename: function (req, file, cb) {
    cb(null, req.body.name)
  }
})

const upload = multer({ storage: storage })

productsRouter.post('/upload', upload.single('file'), (req,res)=>{
 return res.json("image uploaded")
})

productsRouter.post('/saveproducts',async function(req,res){
    try {
        console.log(req.body);
        data = {
            pname:req.body.pname,
            category:req.body.category,
            rate:req.body.rate,
            image:req.body.image
            
            
        }
        console.log(data);
        await productsmodel(data).save().then(()=>{
            return res.status(200).json({
                success:true,
                error:false,
                message:'Product Added'
            })
         })
     }catch (error) {
    
     } 
    })


// viewproducts
    productsRouter.get('/allproducts',async function(req,res){
        try {
            const data = await productsmodel.find()
           
            res.status(200).json({
                success:true,
                error:false,
                details:data,
                message:'products list'
            })
        } catch(error){
    console.log(error);
        }
    
    })
    
    

    productsRouter.delete('/delete/:name', async function(req,res){
        try {
            const id = req.params.name;
             await productsmodel.deleteOne({_id:id}).then((data)=>
            { res.status(200).json({
                success:true,
                error:false,
                message:'deleted'
            })
             }
    )}catch(error){
    
    }
    
    })


// view one product
    productsRouter.get('/viewone/:name',async function(req,res){
        try {
            const id = req.params.name
            await productsmodel.findOne({_id:id}).then((data)=> {
                res.status(200).json({
                    success:true,
                    error:false,
                    details:data,
                    
                    message:'products details'
                })
    
            })
        }catch {
    
        }
    })


// edit and update
productsRouter.post('/edit/:name', async function(req,res){
    try{
        const id = req.params.name
    const data = await productsmodel.findOne({_id:id})
    console.log(data);
    }catch(error) {

    }
})
productsRouter.post('/update/:name',async function(req,res){
    try {
        const id = req.params.name
        console.log(id);
        
    var updates = {
        pname:req.body.pname,
        category:req.body.category,
        rate:req.body.rate,
        image:req.body.image
           
        
    };
    await productsmodel.updateOne({_id:id},{$set:updates}).then((data)=>{
        res.status(200).json({
            success:true,
            error:false,
            // details:data,
            message:'product updated'
        })

    })
    }catch(error){

    }
})

// view where categoryis fruits
productsRouter.get('/fruits',async function(req,res){
    try {
        const data = await productsmodel.find({ category:'fruits' })
       
        res.status(200).json({
            success:true,
            error:false,
            details:data,
            message:'fruits list'
        })
    } catch(error){
console.log(error);
    }

})


// view where categoryis vegetables
productsRouter.get('/vegetables',async function(req,res){
    try {
        const data = await productsmodel.find({ category:'vegetables' })
       
        res.status(200).json({
            success:true,
            error:false,
            details:data,
            message:'vegetables list'
        })
    } catch(error){
console.log(error);
    }

})






module.exports =  productsRouter