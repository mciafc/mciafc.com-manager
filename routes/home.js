const express = require('express')
const router = express.Router();
const path = __dirname + '/public/'

router.get('/', (req, res) => {
    res.sendFile(path + 'home/dist')
})


module.exports = router