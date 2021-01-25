/**
 * import dotenv file
 */
//require('dotenv').config();
const http=require('http');
const app=require('./express');

/**
 * import db file 
 */
const db=require('./src/database/db');

//create server
const server=http.createServer(app());
server.listen(8000,(err)=>{
if(!err)console.log("Server is Running at port: "+8000)
else (err)
})