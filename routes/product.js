const express = require('express'),
    router = express.Router();


router.get('/products/televisions', (req, res) => {
    res.sendFile(__dirname + '/pages/televisions.html');
});

router.get('/products/mobiles', (req, res) => {
    res.sendFile(__dirname + '/pages/mobile.html');
});

module.exports = router;