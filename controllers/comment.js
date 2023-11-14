const Comment=require('../models/commentModal')
const posts=require('../models/postmodal')

exports.create_comment=async(req,res)=>{
    try{
        // fetch data
        const {post,user,body}=req.body;
        const comment=new Comment({
            post,user,body
        })
        const savecomment=await comment.save()
        // find the post using id and add the comment to post
        const updated_post=await posts.findByIdAndUpdate(post,{$push:{comment:savecomment._id}},{$new:true}).populate("comment").exec()
        res.json({
            post:updated_post,
        })
    }
    catch(err){
        return res.status(500).json({
            error:"Error Has Occured",
            message:err.message
        })
    }
}