const express = require('express')
const app = express()
const { engine } = require( 'express-handlebars')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}));


app.post('/like',(req,res)=> {
  console.log(req.body);
  res.send('Yes! Je hebt '+ req.body.userId + ' een ' + req.body.voorkeur + ' gegeven.');
});

app.post('/dislike',(req,res)=> {
  console.log(req.body);
  res.send('Ah, Je hebt '+ req.body.userId + ' een ' + req.body.voorkeur + ' gegeven.');
});

const PORT = 3000
  app.use('/static',express.static('static'))
  app.engine('handlebars', engine())
  app.set('view engine', 'handlebars')
  app.set('views', './views')

  app.get('/', onhome)
  app.get('/about', onabout)
  app.get('/match', onmatch)

function onhome(req, res){
  res.render('home', {
    restaurant1: {
      naam: "Eetcafé Klaas",
      prijs: "€€",
      omschrijving: "Een fijne plek in Uitgeest om te genieten van goede wijnen, gin en tonics en mooie smakelijke gerechten voor een schappelijke prijs."
    }
  })
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


// Moet altijd onderaan blijven!
app.listen(PORT, function() {
  console.log("Port running on ", PORT)
})