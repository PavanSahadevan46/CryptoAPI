const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require('request');
const { response } = require("express");


const app = express();

app.get("/",  function(req,res){
    request('https://api.coinlore.net/api/tickers/', function (error, response, body){
        if(!error && response.statusCode == 200){
            var cryptoData = JSON.parse(body);
            console.log(cryptoData.data[0].name);
            res.send(cryptoData.data[0].name);
        }

    })
    
});
   
    
    


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//TODO

app.listen(3000, function() {
console.log("Server started on port 3000");
});
















// let url = "https://api.coinlore.net/api/tickers/";
    // https.get(url,function(response){
    //     console.log(response.statusCode)
    
        // response.on("data",function(data){
        //     console.log(data);
        //     const cryptoData = JSON.parse(data)
        //     console.log(cryptoData);
        // })
        // let settings = { method: "Get" };

        // fetch(url, settings)
        // .then(res => res.json())
        // .then((json) => {
        //     res.send(url)
        // });

        // response.on("data",function(data){
        //     console.log(data)
        //     const name = cryptoData.data.name
        //     console.log(name)           
        // })    