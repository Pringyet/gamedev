var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser")
    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(res, req){
   res.send("Hello"); 
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Game running!");
});