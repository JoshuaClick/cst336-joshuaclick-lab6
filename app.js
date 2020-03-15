const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("test");
});

app.listen("8081", "127.0.0.1", function(){
    console.log("xpress Server is Running...");
});
