const express = require('express');
const server = express();

// enable * CORS
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// serve static files
server.use(express.static("./"));
console.log("Server listening on 4400");
server.listen(4400);