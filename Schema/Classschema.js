const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const classSchema=new Schema(
    {
        classname:
        {
            type:String,
            required:true,
        },
        mainteacher:
        {
            type:String,
            required:true,
        },
        subteacher:
        {
            type:[String],
        },
        subjects:
        {
            type:[String],
        },
        students:
        {
            type:[String],
        },
    },{timestamps:true});
    const Class=mongoose.model("Class",classSchema);
    module.exports=Class;
