const express = require('express');
const app = express();
const cors = require('cors')
const path = __dirname + '/public/'


app.use(cors())
app.use(express.static(path + 'home'))

// homepage
const homepage = require('./routes/home.js')

app.use('/', homepage)

// directly to talent show signups
app.use('/talent', (req, res) => {
    res.redirect('/#Talent')
})

app.use('/gigs', (req, res) => {
    res.redirect('https://gigs.mciafc.com')
})

app.use('/sets/:setname', (req, res) => {
    res.redirect(`https://sets.mciafc.com/${req.params.setname}`)
})

app.use('/equipment', (req, res) => {
    res.redirect(`https://docs.google.com/document/d/1W8aKsBnBCOlZrZC2G7InNZHMRTnumjWs2d8LKfsEagQ/edit?usp=sharing`)
})

app.listen(1738, () => console.log('Active on PORT 1738'))