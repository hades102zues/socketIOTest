const expressed = require('express')();
const app = require('http').Server(expressed);
const io = require('socket.io')(app);




app.listen(3000);