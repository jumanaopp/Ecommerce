const express = require("express");
const bcrypt = require("bcryptjs");
const loginRouter = express.Router();
const registermodel = require("../models/registertb");
const jwt = require("jsonwebtoken");

loginRouter.post("/checklogin", async function (req, res) {
  console.log(req.body.password);
  console.log(req.body.username);
  try {
    const user = await registermodel.findOne({ username: req.body.username });
    // console.log(user);
    if (!user) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Invalid username",
      });
    } 
    //  console.log("user",user);
    const pass = await bcrypt.compare(req.body.password, user.password);
    console.log(pass);
    if (pass) {
      const token = jwt.sign(
        { user_id: user._id, role: user.role },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );

      return res.status(200).json({
        success: true,
        error: false,
        token: token,
        role: user.role,
        expiresIn: 3600,
        user_id:user._id,
        message: "login success",
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Incorrect password",
      });
    }
  } catch (error) {}
});
module.exports = loginRouter;
