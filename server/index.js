const express = require('express');
const cors = require('cors');
const mycon = require('mysql');
const bodyparser = require('body-parser');
const fileupload = require('express-fileupload');

const app = express();
app.use(cors());
app.use(fileupload());
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

const c = mycon.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "cannotopen",
    database : "crud_app"
})

c.connect(function(err){
    if (err){console.log(err);}
    else{console.log('database connected');}
})