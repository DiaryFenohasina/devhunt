const dotenv = require("dotenv")
dotenv.config()
const path = require('path')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const uploadRoutes = require('./routes/uploadRoutes')
const userRoutes = require('./routes/userRoutes')
const clubRoutes = require('./routes/clubRoutes')
const postRoutes = require('./routes/postRoutes')
const PORT = process.env.SERVER_PORT
const HOST = process.env.SERVER_HOST
const server = express()
/**
 * @SERVER @SIDE 
 * const socketIo = require('socket.io')
 * const io = socketIo(server)
 * io.on('connection', (socket) => {
 *    console.log('User connected')
 *    socket.on('disconnect', () => {
 *       console.log('User disconnected')
 *    })
 *    socket.on('comment', (commentData) => {
 *       if(commentData.articleAuthorId !== commentData.commentAuthorId){
 *          io.emit('notification', {
 *             userId: articleAuthorId,
 *             message: `Un utilisateur a commenter votre article ${commentData.articleTitle}`
 *          })
 *       }
 *    })
 * })
 */

/**
 * @CLIENT @SIDE
 * import io from 'socket.io-client'
 * const socket = io('http://localhost:3000')
 * @COMMENT
 * const handlePostComment = (commentContent) => {
 *    socket.emit('comment', {
 *       articleId,
 *       articleAuthorId,
 *       articleTitle,
 *       commentAuthorId,
 *       commetContent
 *    })
 * }
 * @NOTIFICATION
 * useEffect(() => {
 *    socket.on('connect', () => {
 *       console.log('Connected au server socket.io')
 *    })
 *    socket.on('notification', (data) => {
 *       if(data.userId === userInfo.userId){
 *          //useState
 *          setNotif(prevNotif => [...prevNotif, data.notification])
 *       }
 *    })
 *    return () => {
 *       socket.disconnect()
 *    }
 * }, [userInfo.userId, handlePostComment])
 */

//middlewares
server.use(cors());

const corsOptions = {
   origin: 'http://localhost:8081/', // Remplacez par l'origine autorisée
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
   credentials: true,
   optionsSuccessStatus: 204,
 };
 
 server.use(cors(corsOptions));
 

server.use(express.json())
server.use(cookieParser())

//routes
server.use('/api/users', userRoutes)
server.use('/api/clubs', clubRoutes)
server.use('/api/posts', postRoutes)

//uploads images
server.use('/api/uploads', uploadRoutes)
//get image via URL
server.use('/images', express.static(path.join(__dirname, 'uploads')))

server.listen(PORT, HOST, () => {
   console.log(`Server en écoute: http://${HOST}:${PORT}`)
})