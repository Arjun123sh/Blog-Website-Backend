const express=require("express");
const router=express.Router()

const {create_comment}=require("../controllers/comment")
const {create_post}=require("../controllers/post")
const {likepost}=require('../controllers/like')

router.post("/createComment",create_comment)
router.post("/createPost",create_post)
router.post("likes/like",likepost)
// router.post("/viewPosts",view_post)

module.exports=router