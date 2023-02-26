const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.get("/myName",(req,res)=>{
    res.send("Srinivas is my name");
});

app.listen(3000,()=>{
    console.log("server up and running");
});