__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/masuk', (req, res) => {
    res.sendFile(__path + '/views/masuk.html')
})

router.get('/admin', (req, res) => {
    res.sendFile(__path + '/views/admin.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : 'z',
            namabot: 'Alphabot',
            namaowner: 'zeeone',
            instagram: 'zee.oneee',
            youtube : 'wandi'
        }
    }
    res.json(config)
})

module.exports = router
