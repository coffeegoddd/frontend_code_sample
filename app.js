const express = require('express');
const path = require('path');

const http = require('http');

const port = 3000;

const app = express();

app.use(express.static(path.join('public')))

app.listen(port, (err) => {
    if(err) console.log(err);
    else console.log('Listening on port', port);
})