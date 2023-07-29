const express = require("express");
const cartRouter = express.Router();
const cartmodel = require("../models/carttb");
const jwt = require("jsonwebtoken");
const checkAuth = require("../middleware/check-auth");
const productsmodel = require("../models/productstb");
const mongoose = require("mongoose");

const objectId = mongoose.Types.ObjectId;


// save data to cart model
cartRouter.post("/savecart", checkAuth, async (req, res) => {
  try {
    const { productid } = req.body;
    const userid = req.userData.userid;

    // const existingCart = await cartmodel.findOne({ productid, userid });

    const user = await cartmodel.findOne({ userid ,productid });

          console.log(user);
          if (user) {
            return res.status(400).json({
              success: false,
              error: true,
              message: "Item already added to cart",
            });
          }
    
      const cart = await cartmodel.create({
        productid,
        quantity: 1,
        userid,
        status: 0,
      });

      return res.status(200).json({
        success: true,
        error: false,
        message: "Added to cart",
        quantity: cart.quantity, 
      });
    
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Something went wrong",
    });
  }
});

// aggregate 

cartRouter.get("/viewcart", checkAuth, async (req, res) => {
  

  try {

    // const log = await cartmodel.find({ status:1});

    // if(log){
    const id = req.userData.userid;
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
          userid: new objectId(id),
        },
      },
      {
        $group: {
          _id: "$_id",
          productname: { $first: "$product.pname" },
          rate: { $first: "$product.rate" },
          image: { $first: "$product.image" },
          quantity: { $first: "$quantity" },
        },
      },
    ]);


    cartDetails.forEach((item) => {
      item.total = parseInt(item.rate) * parseInt(item.quantity);
    });

    let totalPrice = 0;

    for (let i = 0; i < cartDetails.length; i++) {
      totalPrice += cartDetails[i].total;
    } 
    console.log(cartDetails);
    if (cartDetails[0]) {
      return res.status(200).json({
        success: true,
        error: false,
        data: cartDetails,
        TotalPrice:totalPrice
      });
    }
  // }
  } catch (error) {
    console.log(error);
  }
});

// cart product delete
cartRouter.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await cartmodel.deleteOne({ _id: id });
    res.status(200).json({
      success: true,
      error: false,
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
});


cartRouter.get("/increacevalue/:id", async (req, res) => {
  const id = req.params.id;
  const existingCart = await cartmodel.findOne({ _id: id }); //cart id is matched

  if (existingCart) {
    const quantity = parseInt(existingCart.quantity) + 1;
    await cartmodel.updateOne({ _id: id }, { $set: { quantity } });

    return res.status(200).json({
      success: true,
      error: false,
      message: "Quanity updated",
    });
  }
});
cartRouter.get("/decreacevalue/:id", async (req, res) => {
  const id = req.params.id;
  const existingCart = await cartmodel.findOne({ _id: id }); //cart id is matched

  if (existingCart) {
    const quantity = parseInt(existingCart.quantity) - 1;
    await cartmodel.updateOne({ _id: id }, { $set: { quantity } });

    return res.status(200).json({
      success: true,
      error: false,
      message: "Quanity updated",
    });
  }
});



module.exports = cartRouter;
