const express = require('express');
const path = require('path');
const router = require('./router.js');
const PORT = 3001;
const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, '../client/dist')));
server.use('/api', router);

server.listen(PORT, (err) => {
    console.log(err ? err : `Listening on port ${PORT}`);
})