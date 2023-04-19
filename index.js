const express = require('express');
const app = express();
const cors = require('cors')
const public = __dirname + '/public/'
const path = require('path')


app.use(cors())
app.use(express.static(public + 'home/dist'))
app.use(express.static(public + 'dash/talent/dist'))

// homepage
const homepage = require('./routes/home.js')

app.use('/', homepage)

// directly to talent show signups
app.use('/talent', (req, res) => {
    res.redirect('/#Talent')
})

app.use('/book', (req, res) => {
    res.redirect('/#Book')
})

app.use('/gigs', (req, res) => {
    res.redirect('https://gigs.mciafc.com')
})

app.use('/sets/:setname', (req, res) => {
    res.redirect(`https://sets.mciafc.com/${req.params.setname}`)
})

app.use('/equipment', (req, res) => {
    res.redirect(`https://docs.google.com/spreadsheets/d/1TCJ0tCgmkN2dp9DVNebDUcWMQnzhv5vU0iRf5Nc-18E/edit?usp=sharing`)
})

// DASHBOARD

app.use('/dash/talent', (req, res) => {
    res.sendFile('index.html', {root: path.resolve('public/dash/talent/dist')})
})

app.use(["/gigs", "/dash/gigs"], (req, res) => {
  res.redirect("https://gigs.mciafc.com");
});

app.listen(1738, () => console.log('Active on PORT 1738'))
