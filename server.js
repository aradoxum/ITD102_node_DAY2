require('dotenv').config();
const express = require('express');
const app = express();
const Port = process.env.APP_Port;

app.get('/', function(req, res){
    res.send('เสี่ยโป้พ่อทุกสถาบัน');
});

app.get('/about', function(req, res){
    res.send('About');
});

app.listen(Port, function(){
    console.log('server is running on port ' + Port)
});