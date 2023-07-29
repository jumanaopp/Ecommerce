const mongoose = require("mongoose")

const schema = mongoose.Schema

const cartschema = new schema({
productid: {type: mongoose.Types.ObjectId,ref:'products_tb' },
userid: {type: mongoose.Types.ObjectId,ref:'register_tb' },
status: {type: String },
quantity: {type: String }

})
const cartmodel = mongoose.model("cart_tb",cartschema);
module.exports = cartmodel;
