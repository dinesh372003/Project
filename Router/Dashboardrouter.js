const express=require("express");
const router=express.Router();
const dashcont=require("../Controlller/Dashboardcontroller");

router.get("/",dashcont.dashboard);

router.get("/newclass",dashcont.newclass);

router.get("/joinclass",dashcont.joinclass);

router.get("/:id",dashcont.clas)

router.post("/newclass",dashcont.newclasspost);

module.exports=router;