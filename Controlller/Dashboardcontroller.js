const Class=require("../Schema/Classschema");
const Users=require("../Schema/Userschema");
const mongoose=require("mongoose");

const dashboard=(req,res)=>
{
    res.render("dashboard",{User:req.user,title:"Dashboard"});
};

const newclass=(req,res)=>
{
    res.render("newclass",{User:req.user,title:"New Class"});
};

const joinclass=(req,res)=>
{
    res.render("joinclass",{User:req.user,title:"Join Class"});
};

const clas=(req,res)=>
{
    const id=req.params.id;
    Class.findById(id)
    .then(result=>
        res.render("class",{User:req.user,title:result.classname,Class:result})
    )
    .catch(err=>console.log(err));
};

const newclasspost=(req,res)=>
{
    const classes=new Class;
    classes.classname=req.body.classname;
    classes.mainteacher=req.user.email;
    classes.subteacher=req.user.email;
    classes.save()
    .then(result=>
    {
        mongoose.set('useFindAndModify', false);
        Users.findOneAndUpdate(
            {
                _id:req.user._id,
            },
            {$addToSet:
            {
                classes:classes.id,
                classname:classes.classname,
            }})
            .then(result=>res.redirect("/"))
            .catch(err=>console.log(err));
    })
    .catch(err=>console.log(err));
    
};

module.exports={
    dashboard,
    newclass,
    joinclass,
    clas,
    newclasspost,
};