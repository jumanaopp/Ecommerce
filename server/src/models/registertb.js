const mongoose = require("mongoose")

const schema = mongoose.Schema

const registerschema = new schema({
name: { type: String },
phno: { type: String },
address: { type: String },
email: { type: String },
username: { type: String },
password: { type: String },
role: { type: String },
})
const registermodel = mongoose.model("register_tb",registerschema);
module.exports = registermodel;



