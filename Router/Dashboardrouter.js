const express=require("express");
const router=express.Router();
const dashcont=require("../Controlller/Dashboardcontroller");
const Class = require("../Schema/Classschema");
//Get request

    //Rendering dashboard
    router.get("/",dashcont.dashboard);

    //Rendering new class page
    router.get("/newclass",(req,res)=>
    {
        res.render("newclass",{User:req.user,title:"New Class"});
    });

    //Rendering join class page
    router.get("/joinclass",(req,res)=>
    {
        res.render("joinclass",{User:req.user,title:"Join Class"});
    });

    //Rendering class page
    router.get("/:id",(req,res)=>
    {
        const id=req.params.id;
        Class.findById(id)
        .then(result=>
            res.render("class",{User:req.user,title:result.classname,Class:result})
        )
        .catch(err=>console.log(err));
    })

//Post Request
    //Getting new class post request
    router.post("/newclass",dashcont.newclass);
module.exports=router;