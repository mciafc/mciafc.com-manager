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

app.listen(1738, () => console.log('Active on PORT 1738'))