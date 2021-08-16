const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const usersSchema=new Schema(
{
    email:
    {
        type:String,
        required:true,
    },
    name:
    {
        type:String,
        required:true,
    },
    password:
    {
        type:String,
        required:true
    },
    role:
    {
        type:String,
        required:true,
    }
},{timestamps:true});
const user=mongoose.model("User",usersSchema);
module.exports=user;