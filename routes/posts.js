const Post = require("../models/Post")
const express = require("express")
const router = express.Router()

//gets back all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch {}
})
//submits a post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  })

  try {
    const savedpost = await post.save()
    res.json(savedpost)
  } catch (err) {
    res.json({ message: err })
  }
})

//getting back specific post

router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
  } catch (error) {
    res.json({ message: error })
  }
})

//delete a post bois

router.delete("/:postId", async (req, res) => {
  try {
    const post = await Post.findByIdAndRemove(req.params.postId)
    res.json(post)
  } catch (error) {
    res.json({ message: error })
  }
})

//update a single post
router.patch("/:postId", async (req, res) => {
  try {
    const post = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    )
    res.json(post)
  } catch (err) {
    res.json({ message: error })
  }
})

module.exports = router
