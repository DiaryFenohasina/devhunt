const models = require('../models')
const fs = require('fs')

exports.replyComment = async (req, res) => {
   const { comment } = req.body
   if(!comment) return res.status(409).json({ message: "Comment is required" })
   try {
      const reply = await models.CommentResponse.create({
         comment,
         userId : req.user.id,
         commentorId: req.params.commentId,
      })
      return res.status(201).json(reply)
   } catch (error) {
      return res.status(500).json({message: "Internal server error"})
   }
}
exports.updateReplyCommentById = async (req, res) => {
   const { comment } = req.body
   try {
      const commentor = await models.CommentResponse.findByPk(req.params.replyId)
      if(!commentor) return res.status(404).json({ message: "Response to a comment not found"})
      if(req.user.id !== commentor.userId) return res.status(401).json({ message: "Cannot update this comment"})
      await commentor.update({comment})
      return res.status(200).json(commentor)
   } catch (error) {
      return res.status(500).json({ message: "Failed to delete this comment"})
   }
}
exports.deleteReplyCommentById = async (req, res) => {
   const id = req.params.replyId
   try {
      const commentor = await  models.CommentResponse.findByPk(id)
      if(!commentor) return res.status(404).json({ message: "Response to a comment not found"})
      if(req.user.id !== commentor.userId) return res.status(401).json({ message: "Cannot delete this comment"})
      await commentor.destroy()
      return res.status(200).json(commentor)
   } catch (error) {
      return res.status(500).json({ message: "Failed to delete this comment"})
   }
}