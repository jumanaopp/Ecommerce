const mongoose = require("mongoose")
const schema = mongoose.Schema

const productsschema = new schema({

pname: { type: String },
category: { type: String },
rate: { type: String },
image:{type:String},


})
const productsmodel = mongoose.model("products_tb", productsschema);
module.exports =  productsmodel;