const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("test");
});

app.get("/mercury", function(req, res){
    res.send("Mercury page");
});

app.get("/venus", function(req, res){
    res.send("Venus page");
});

app.listen("8081", "127.0.0.1", function(){
    console.log("Express Server is Running...");
});
