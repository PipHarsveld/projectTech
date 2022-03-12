const express = require('express')
const app = express()
const { engine } = require( 'express-handlebars')
const connectDB = require('./config/connect')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const restaurant = require('./models/restaurant')


app.use(bodyParser.urlencoded({
  extended: true
}));

require('dotenv').config()

connectDB()

const PORT = 3000
  app.use('/static',express.static('static'))
  app.engine('handlebars', engine())
  app.set('view engine', 'handlebars')
  app.set('views', './views')

  app.get('/', onhome)
  app.get('/like', onlike)
  app.get('/dislike', ondislike)

app.post('/like',(req,res)=> {
  console.log('Yes! Je hebt '+ req.body.naam + ' een ' + req.body.voorkeur + ' gegeven.');
});

app.post('/dislike',(req,res)=> {
  console.log('Ahh, je hebt '+ req.body.naam + ' een ' + req.body.voorkeur + ' gegeven.');
});

// Wordt getoond op de card, zichtbaar voor gebruiker
async function onhome(req, res){
  const data = await restaurant.find({})

  res.render('home', {data: data})
  console.log(data)

  // res.render('home', {
  //   restaurant1: {
  //     naam: "Eetcafé Klaas",
  //     prijs: "€€",
  //     tags: [
  //       "Eetcafé",
  //       "Huiselijke sfeer",
  //       "Uitgeest",
  //     ],
  //     omschrijving: "Een fijne plek in Uitgeest om te genieten van goede wijnen, gin en tonics en mooie smakelijke gerechten voor een schappelijke prijs."
  //   },
  //   restaurant2: {
  //     naam: "'t Schippersrijk",
  //     prijs: "€€",
  //     tags: [
  //       "Bistro",
  //       "Vega",
  //       "Uitgeestermeer",
  //     ],
  //     omschrijving: "Kom langs en beleef onze gezellige sfeer aan het Uitgeestermeer! Een ongedwongen sfeer waar goed eten, lekker zitten en persoonlijke service op de absolute nummer één staan."
  //   },
  //   restaurant3: {
  //     naam: "Spijkers",
  //     prijs: "€€",
  //     tags: [
  //       "Bistro",
  //       "Modern",
  //       "Heemskerk",
  //     ],
  //     omschrijving: "Spijkers Heemskerk is de perfecte plek om volop te genieten van heerlijke gerechten tijdens een gezellige lunch of een mooie avond."
  //   }
  // })
}

function onlike(req, res){
  res.render('like', {title: "like pagina"})
}

function ondislike(req, res){
  res.render('dislike')
}

app.use((req, res, next) => {
  res.status(404).send('404 page not found')
})


// Moet altijd onderaan blijven!
app.listen(PORT, function() {
  console.log("Port running on ", PORT)
})