const express = require("express");
const orderRouter = express.Router();
const ordermodel = require("../models/ordertb");
const jwt = require("jsonwebtoken");
const checkAuth = require("../middleware/check-auth");
const productsmodel = require("../models/productstb");
const mongoose = require("mongoose");
const cartmodel = require("../models/carttb");

const objectId = mongoose.Types.ObjectId;

orderRouter.post("/save-order-details", checkAuth,  async (req, res) => {
    try {
        const { productid } = req.body;
        const userid = req.userData.userid;
        const datas = [];
       
        const cartDetails = await cartmodel.aggregate([
            {
              $lookup: {
                from: "register_tbs",
                localField: "userid",
                foreignField: "_id",
                as: "user",
              },
            },
            {
              $lookup: {
                from: "products_tbs",
                localField: "productid",
                foreignField: "_id",
                as: "product",
              },
            },
      
            {
              $unwind: "$user",
            },
      
            {
              $match: {
                userid: new objectId(userid),
              },
            },
            {
              $group: {
                _id: "$_id",
                productname: { $first: "$product.pname" },
                rate: { $first: "$product.rate" },
                image: { $first: "$product.image" },
                quantity: { $first: "$quantity" },
                productid: { $first: "$productid" },
                userid: { $first: "$userid" },
              },
            },
          ]);
console.log(cartDetails);

if(cartDetails[0] != undefined)
{
for (let i = 0; i < cartDetails.length; i++) {
 
cartDetails.forEach((item) => {
    item.total = parseInt(item.rate) * parseInt(item.quantity);
  });

  let totalPrice = 0;

  for (let i = 0; i < cartDetails.length; i++) {
    totalPrice += cartDetails[i].total;
  } 

    const oderData = new ordermodel({
     
      userid: cartDetails[i].userid,
      productid: cartDetails[i].productid,
      totalAmount: cartDetails[i].total,
      // totalAmount:totalPrice,
      status: 0,
    });

    datas.push(await oderData.save());
  }
}
    const cart_data = await cartmodel.updateMany({ userid:req.userData.userid  }, { $set: { status: 1 } })

    res.status(200).json({
        success: true,
         error: false,
        message: 'Order completed'
      })
  
    }
    catch (err) {
      res.status(400).json({ 
        success: false, 
        error: true,
         message: 'Something Went Wrong' 
        })
      console.log(err)
    }
  })


  orderRouter.get('/view-order',async function(req,res){
    try {
        const data = await ordermodel.find()
       
        res.status(200).json({
            success:true,
            error:false,
            details:data,
            message:'order list'
        })
    } catch(error){
console.log(error);
    }

})
module.exports = orderRouter