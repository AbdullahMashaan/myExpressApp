const express = require("express");


const app = express();

app.get ("/", function(req,res){
    res.send({
        name: "Abdullah!",
        DateofBirth: "1991",
    });

});

app.listen("8000", ()=> {
    console.log("First BackEnd serve is Online!")
});





