const express= require('express')
const router=express.Router()

router.get('/', (req, res) => {

    /*res.writeHead(200,{'Content-type':'text-html'});*/
  
  res.render('index')
  
  })


  router.get('/index', (req, res) => {

    /*
res.writeHead(200,{'Content-type':'text-html'});*/

  res.render('index')
  
})


router.get('/juego', (req, res) => {

    res.render('juego.')
  
})



  
module.exports = router;