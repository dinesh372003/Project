const express=require("express");
const router=express.Router();
const dashcont=require("../Controlller/Dashboardcontroller");

router.get("/",dashcont.dashboard);

router.route("/newclass")
.get(dashcont.newclass)
.post(dashcont.newclasspost)

router.get("/joinclass",dashcont.joinclass);

router.get("/:id",dashcont.clas)
module.exports=router;