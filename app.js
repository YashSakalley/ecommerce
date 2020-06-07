const express = require('express'),
    app = express(),
    PORT = 3000;

const productRoute = require('./routes/product');

app.use(productRoute);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/routes/pages/index.html');
});

app.listen(PORT, () => {
    console.log('Server listening on port:', PORT);
});