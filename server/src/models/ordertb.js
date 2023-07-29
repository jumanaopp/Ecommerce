const mongoose = require("mongoose")
const schema = mongoose.Schema

const orderschema = new schema({

 productid: {type: mongoose.Types.ObjectId,ref:'products_tb' },
 userid: {type: mongoose.Types.ObjectId,ref:'register_tb' },
// quantity : { type: String },
totalAmount: { type: String }

})
const ordermodel = mongoose.model("order_tb", orderschema);
module.exports =  ordermodel;