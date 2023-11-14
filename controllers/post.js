 const Post=require("../models/postmodal")

exports.create_post=async(req,res)=>{
    try{
        const {title,body}=req.body;
        const post=new Post({
            title,body
        })
        const save_post=await post.save()
        res.json({
            post:save_post
        })
    }
    catch(err){
        return res.status(400).json({
            error:err.message
        })
    }
}

exports.get_all_post=async(req,res)=>{
    try{
        const posts=await Post.find({}).populate("like").populate("comment").exec();
        res.json({
            posts,
        })
    }
    catch(err){
        return res.json({
            message:"Error Occured"
        })
    }
}