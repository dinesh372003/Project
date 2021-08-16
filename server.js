const express=require("express");
const app=express();
const ejs=require("ejs");
const mongoose=require("mongoose");
app.set("view engine","ejs");
const database="mongodb+srv://dinesh372003:Dinesh@741@school.0eq55.mongodb.net/Project?retryWrites=true&w=majority";
const session=require("express-session");
const User=require("./Schema/Userschema");
app.use(express.urlencoded({extended:true}));

mongoose.connect(database,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(result=>
    {
        app.listen(3000);
        console.log("Listening on Port 3000");
    })
    .catch((err)=>console.log(err))

