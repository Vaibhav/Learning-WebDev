var express = require("express");
var book = require("./intro.js").book;
var app = express();

// request and respond
app.get("/", function(req, res) {
    res.send("Hello, World!");
});

app.get("/grade", function(req,res){
    // "1,2,3".split(",") =>  [1,2,3]
    var grades = req.query.grades.split(",");
    for(var i = 0; i < grades.length; i+=1) {
        book.addGrade(parseInt(grades[i]));
    }
    var avg = book.getAverageGrade()
    book.reset();

    res.send("Average Grade: " + avg);
});

app.listen(3000);
console.log("Server ready...");
