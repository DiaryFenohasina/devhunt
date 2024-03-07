const router = require('express').Router()
const multer = require('../middlewares/multer')
// const uploadImages = multer.fields([{name: 'imageProfile' , maxCount: 1}, {name: 'imageArticle' , maxCount: 1}])
const uploadImages = multer.single('image')

router.route('/').post((req, res) => {
   uploadImages(req, res, (err) => {
      if(err){
         res.status(400).json({ message: err.message })
      }else if(req.file){
         const image = req.file.filename
         // const imageArticle = req.files['imageArticle'] ? req.files['imageArticle'][0].filename : null
         res.status(200).json({
            message: "Images uploaded succesfully",
            image
         })
      }else{
         res.status(400).json({ message: "No files provided" })
      }
   })
})
module.exports = router