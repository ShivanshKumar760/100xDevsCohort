import express from "express";
const app=express();
const port=3000;

app.get("/",(req,res)=>{
    res.json({
        message:"hello world!!!"
    });
});

app.listen(port,()=>{
    console.log("local server is running");
});