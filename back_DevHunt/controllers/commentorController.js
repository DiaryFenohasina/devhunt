const models = require('../models')
exports.createComment = async (req, res) => {
   const { comment } = req.body
   if(!comment) return res.status(409).json({ message: "Comment is required" })
   try {
      const commentor = await models.Commentor.create({
         comment,
         userId: req.user.id,
         postId: req.params.postId
      })
      return res.status(201).json(commentor)
   } catch (error) {
      return res.status(500).json(error)
   }
}
exports.deleteCommentById = async (req, res) => {
   const id = req.params.commentId
   try {
      const commentor = await  models.Commentor.findByPk(id)
      if(!commentor) return res.status(404).json({ message: "Comment not found"})
      if(req.user.id !== commentor.userId) return res.status(401).json({ message: "Cannot delete this comment"})
      await commentor.destroy()
      return res.status(200).json(commentor)
   } catch (error) {
      return res.status(500).json({ message: "Failed to delete this comment"})
   }
}
exports.updateCommentById = async (req, res) => {
   const { comment } = req.body
   try {
      const commentor = await models.Commentor.findByPk(req.params.commentId)
      if(!commentor) return res.status(404).json({ message: "Comment not found"})
      if(req.user.id !== commentor.userId) return res.status(401).json({ message: "Cannot update this comment"})
      await commentor.update({comment})
      return res.status(200).json(commentor)
   } catch (error) {
      return res.status(500).json({ message: "Failed to delete this comment"})
   }
}