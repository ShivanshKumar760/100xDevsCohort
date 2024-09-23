import request from "request";
import express from "express";
const app=express();
const port=5000;
const url="http://localhost:3000";

app.get("/",(req,res)=>{
    request(url,function(err,response,body){
        console.log(response);
        console.log(response.statusCode);
        console.log(body);
    });
});

app.listen(port,()=>{
    console.log("Running");
});