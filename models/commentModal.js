const mongoose=require("mongoose");

const comment_schemma=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"POST",
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("comment",comment_schemma)