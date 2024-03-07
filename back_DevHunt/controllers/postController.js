const model = require('../models')
const fs = require('fs')

//POST
exports.createPost = async (req, res) => {
   const { content, pieceJoint } = req.body
   if(!content) return res.status(409).json({ message: "Content is required." })

   // Check the attachement if define
   // const attachement = pieceJoint
   //    ? `${req.protocol}://${req.get('host')}/images/${pieceJoint}`
   //    : `${req.protocol}://${req.get('host')}/images/default.jpg`
   // create the post
   try {
      const post = await model.Post.create({ content, pieceJoint, userId: req.user.id})
      return res.status(201).json(post)
   } catch (error) {
      return res.status(500).json({message: "Failed to create post."})
   }
}
exports.updatePostById = async (req, res) => {
   const { content, pieceJoint } = req.body
   const post = await model.Post.findByPk(req.params.postId)
   if(!post) return res.status(404).json({ message: "Post not found" })
   try{
      if(req.user.id !== post.UserId) return res.status(401).json({ message: "You cannot update this Post" })
      if(pieceJoint){
         const filename = post.pieceJoint.split('/images/')[1]
         if(filename !== 'default.jpg'){
            fs.unlink(`uploads/${filename}`, (err) => {
                  if(err) throw err
            })
         }
      }
      post.content = content || post.content
      post.pieceJoint = pieceJoint
         ? `${req.protocol}://${req.get('host')}/images/${pieceJoint}` 
         : post.pieceJoint
      
      //update event
      await post.save()
      return res.status(200).json(post)
   } catch (error) {
      return res.status(500).json({ message: "Failed to update post" })
   }
}
exports.getPostById = async (req, res) => {
   try {
      const post = await model.Post.findByPk(req.params.postId, {
         include: [
            {model: model.User, as: 'author', attributes: ['id', 'name', 'firstname', 'imageProfile']},
            {model: model.Commentor, as: 'comments', include: [
               {model: model.User, as: 'user', attributes: ['id', 'name', 'firstname', 'imageProfile']},
               {model: model.CommentResponse, as: 'replies'}
            ]}
         ],
      })
      if(!post) return res.status(404).json({ message: "Post not found" })
      return res.status(200).json(post)
   } catch (error) {
      return res.status(500).json({ message: "Internal server error" })
   }
}
exports.getAllPost = async (req, res) => {
   try {
      const posts = await model.Post.findAll({
         include: [
            {model: model.User, as: 'author', attributes: ['id', 'name', 'firstname', 'imageProfile']},
            {model: model.Commentor, as: 'comments'}
         ],
      })
      if(posts.length === 0) return res.status(404).json({ message: "No such post" })
      return res.status(200).json(posts)
   } catch (error) {
      return res.status(500).json({ message: "Internal server error" })
   }
}
exports.deletePostById = async (req, res) => {
   const post = await model.Post.findByPk(req.params.postId)
   if(!post) return res.status(404).json({ message: "Post not found"})
   try{
      if(req.user.id !== post.UserId) return res.status(401).json({ message: "You cannot delete this Post" })
      await post.destroy()
      // const filename = post.pieceJointe.split('/images/')[1]
      // if(filename !== 'default.jpg'){
      //    fs.unlink(`uploads/${filename}`, (err) => {
      //          if(err) throw err
      //    })
      // }
      return res.status(200).json(post)
   } catch (error) {
      return res.status(500).json({ message: "Failed to delete this Post" })
   }
}

