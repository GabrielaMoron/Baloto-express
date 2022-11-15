const express = require('express')
const app = express()
const port = 3001
app.use( express.static(__dirname + '/public/img'));
app.use( express.static(__dirname + '/public/vendor'));
app.use( express.static(__dirname + '/public'));
app.set('view engine','ejs')
app.set('views',__dirname + '/views')

app.use('/',require('./routes/route'))


  app.use( (req, res,next) => {
    res.status(404).sendFile(__dirname+ '/public/404.html')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
