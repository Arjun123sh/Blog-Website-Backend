const Like=require('../models/likeModal')
const posts=require('../models/postmodal')

exports.like_post=async(req,res)=>{
    try{
        const {post,user}=req.body;
        const like=new Like({
            post,user
        })
        const data=await like.save();

        const updated_post=await posts.findByIdAndUpdate(post,{$pull:{like:data._id}},{$new:true}).populate("like");
        res.json({
            data:updated_post
        })
    }
    catch(err){
        return res.json({
            error:"error message"
        })
    }
}

exports.unlike_post=async(req,res)=>{
    try{
        const{post,like}=req.body;
        const data=await Like.findOneAndDelete({post:post},{__id:like})
        // update post collection
        const updated_post=await posts.findByIdAndUpdate(post,{$pull:{like:data._id}},{$new:true});

        res.json({
            post:updated_post
        })
    }
    catch(err){

    }
}