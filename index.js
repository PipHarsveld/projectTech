const express = require('express')
const app = express()
const { engine } = require( 'express-handlebars')

const PORT = 3000
  app.use('/static',express.static('static'))
  app.engine('handlebars', engine())
  app.set('view engine', 'handlebars')
  app.set('views', './views')

  app.get('/', onhome)
  app.get('/about', onabout)
  app.get('/match', onmatch)

function onhome(req, res){
  res.render('home')
}

function onabout(req, res){
  res.render('about')
}

function onmatch(req, res){
  res.render('match')
}

app.use((req, res, next) => {
  res.status(404).send('404 page not found')
})


app.listen(PORT, function() {
  console.log("Port running on ", PORT)
})
