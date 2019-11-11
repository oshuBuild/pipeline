var express = require("express");
var app = express();
var port = 3700;
app.get("/", function(req, res){
    res.send("heys world");
});
app.listen(port);
module.exports = app;
console.log("Listening on port " + port);