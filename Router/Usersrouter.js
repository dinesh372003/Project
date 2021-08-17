const express=require("express");
const router=express.Router();
const UserController=require("../Controlller/Usercontroller");
router.get("/register",(req,res)=>{res.render("register")});
router.get("/login",(req,res)=>{res.render("login")});
router.post("/register",UserController.register);
router.post("/login",UserController.login);

module.exports=router;