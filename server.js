const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
app.use(express.static("frontend"))
const mongoose = require('mongoose');
const dbString = process.env.MONGO_CONNECTION_STRING;

mongoose.set('strictQuery', true);
mongoose.connect(dbString,(err)=>{
    if(err){
        console.log(err);
    }else{
        app.listen(3000,()=>{
            console.log("server up and running");
        });
        console.log("db Connected successfully");
    }
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/frontend/simple.html");
});