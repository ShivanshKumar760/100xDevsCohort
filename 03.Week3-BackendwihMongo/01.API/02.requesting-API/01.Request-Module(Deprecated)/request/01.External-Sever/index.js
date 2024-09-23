import express from "express";

const app=express();
const port=3000;

app.get("/",(req,res)=>{
    res.json({
        message:"HELLLLLLO WORLDDD!!!"
    });
});

app.listen(port,()=>{
    console.log("External Sever Running");
});