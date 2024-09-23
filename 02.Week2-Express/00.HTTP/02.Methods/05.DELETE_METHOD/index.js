import express from "express";

const app=express();
const port=3000;

app.get("/",(req,res)=>{res.send("<h1>Home page</h1>");});
//Delete method
app.delete("/user/shivansh",(req,res)=>{
    res.sendStatus("201");
})

app.listen(port,()=>{
    console.log("Server running");
});