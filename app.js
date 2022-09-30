const express = require('express');
const app = express();
const mysql = require('mysql');
const server = require('http').createServer(app);

/* kết nối database */


/*  */
/* database tiep tuc */

const PORT = 5000;
server.listen(process.env.PORT||PORT,()=>{
    console.log('server dang chay');
});
