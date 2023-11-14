const mongoose=require("mongoose");


const post_schemma=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"like"
    }],
    comment:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"comment" 
        }
    ]
})


module.exports=mongoose.model("POST",post_schemma)