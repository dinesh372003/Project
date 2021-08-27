const express=require("express");
const app=express();
const ejs=require("ejs");
const mongoose=require("mongoose");
const session=require("express-session");
const User=require("./Schema/Userschema");
const router=require("./Router/Usersrouter");
const routers=require("./Router/Dashboardrouter");
const {ensureAuthenticated}=require("./auth.js");
const flash = require('connect-flash');
const passport=require("passport");
const bodyParser=require("body-parser");
require("./passport")(passport);   
require("dotenv").config();
const{PORT,MONGODB_USERNAME,MONGODB_PASSWORD}=process.env;
const database="mongodb+srv://"+MONGODB_USERNAME+":"+MONGODB_PASSWORD+"@school.0eq55.mongodb.net/Project?retryWrites=true&w=majority";
app.use(bodyParser.urlencoded({extended:false}));

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("Styles"));
app.use(express.static("img"));
//connecting db
mongoose.connect(database,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(result=>
    {
        app.listen(PORT);
        console.log("Listening on Port "+PORT);
    })
    .catch((err)=>console.log(err))

app.use(session({
    secret:"secret",
    resave:true,
    saveUninitialized:true
}));
        
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
//Directing to different pages
app.use("/users",router);
app.use("/",ensureAuthenticated,routers);
