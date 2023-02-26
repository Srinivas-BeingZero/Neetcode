const express = require("express");
const app = express();
app.use(express.static("frontend"))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/frontend/simple.html");
});

app.listen(3000,()=>{
    console.log("server up and running");
});