// Here used the express
// NOTE : Remeber first you need to create the root server / after you will be creating the /bmiCalculator beacuse sequance importent

const express = require("express"); //import the express
const bodyParser = require("body-parser"); // imoprt the body-parser used for the calculaete the requested data

const app = express(); // Save express in the app variable

app.use(bodyParser.urlencoded({ extended: true })); // Body-parser middleway


// This is server code for the calculator

app.get("/", function (req, res) {
    
    res.sendFile(__dirname + "/index.html"); // Here used __dirname + filename beacuse that will help when your file path is change than this emthod will chnage autometicaly fill path

});

app.post("/", function (req, res) {
    
    var num1 = Number(req.body.n1); // Here you need to convert string into the number
    var num2 = Number(req.body.n2);
    
    var result = num1 + num2;

    res.send("The result of addition is " + result);
});

// This is a server code of the bmi calculator

app.get("/bmiCalculator", function (req, res) { // This is put the html file into server 
    
    res.sendFile(__dirname + "/bmiCalculator.html");

});

app.post("/bmiCalculator", function (req, res) { // When user enter the data and after the send the data using the pist method and give the response

    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = weight / (height * height);

    res.send("The Calculated data of the bmi is : " + bmi);

});

app.listen(3000, function () { // using the litsen method spin up over server
    
    console.log("Server 3000 is live");
});