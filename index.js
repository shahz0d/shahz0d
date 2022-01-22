const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const {engine} = require('express-handlebars')// expressHandlebars'ni orniga {engine} ishlatdik


app.engine('handlebars', engine({ defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

/*app.get('/', (req, res) => { // if home app.get orqali domin larni kiritib quyishimiz mumkin 
    res.type('text/plain')
    res.send('Meadowlark Travel');})
app.get('/about', (req, res) => { // if /about
    res.type('text/plain') 
    res.send('0 Meadowlark Travel')})*/// data junatish
    
app.get('/', (req, res) => res.render('home'))
app.get('/about', (req, res) => res.render('about'))
app.get('/img', (req, res) => res.render('image'))

app.use((req, res) => { 
    res.status(404) 
    res.render('404')})

app.use((err,req, res, next) => {
    console.error(err.message)
    res.type('type/plain')
    res.status(500)
    res.send('500-oshibka servera')
})

app.listen(port, () => console.log('Express rabotayet na http://localhost:3000'))