const router = require('express').Router()
const { createComment, updateCommentById, deleteCommentById } = require('../controllers/commentorController')
const { getAllPost, createPost, getPostById, updatePostById, deletePostById } = require('../controllers/postController')
const { replyComment, updateReplyCommentById, deleteReplyCommentById } = require('../controllers/replyController')
const { authenticate } = require('../middlewares/auth')

//postRoutes
router.route('/')
   .get(getAllPost)
   .post(authenticate, createPost)
router.route('/:postId')
   .get(authenticate, getPostById)
   .put(authenticate, updatePostById)
   .delete(authenticate, deletePostById)

//likePost

//CommentRoutes   
router.route("/:postId/comment")
   .post(authenticate, createComment)
router.route("/:postId/comment/:commentId")
   .put(authenticate, updateCommentById)
   .delete(authenticate, deleteCommentById)

// ReplyComment
router.route("/:postId/comment/:commentId/reply")
   .post(authenticate, replyComment)
router.route("/:postId/comment/:commentId/reply/:replyId")
   .put(authenticate, updateReplyCommentById)
   .delete(authenticate, deleteReplyCommentById)


module.exports = router