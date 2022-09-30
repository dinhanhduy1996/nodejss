const express = require('express');
const app = express();
const mysql = require('mysql');
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {origin: "*"}
});
/* kết nối database */
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"laravel"
  });

/*  */
/* database tiep tuc */
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
/*  */
    io.on('connection',(socket)=>{
        /* phấn của socket io, socket.on là nhận, io.mit là gởi */
            socket.on('chat message', function(msg){
            io.emit('chat message',msg);
            console.log(msg);
        /*  */
        /* thêm vào database */
            var sql = "INSERT INTO chatting (noidung) VALUES ("+'"'+msg+'"'+")";
            con.query(sql, function (err, result) {
              if (err) throw err;
              console.log("da them vao database");
            });
        /*  */
            });
        });
    });
const PORT = 5000;
server.listen(process.env.PORT||PORT,()=>{
    console.log('server dang chay');
});
