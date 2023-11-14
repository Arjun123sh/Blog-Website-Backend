const mongoose=require("mongoose");

const like_schema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"POST",
    },
    user:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.Model("like",like_schema)