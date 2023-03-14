const express = require('express');
const morgan = require('morgan');

const server = express();

server.use(morgan('dev'));

server.get('/', (req, res) => {

});


server.listen(3001, () => {
    console.log('listening on port 3001');
});