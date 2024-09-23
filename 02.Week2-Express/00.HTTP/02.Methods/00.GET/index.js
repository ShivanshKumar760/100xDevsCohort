import express from "express";
const app=express();
const port=3000;

app.get("/",(req,res)=>{
   //console.log(req);
   console.log(req.rawHeaders);
    res.send("<h1>Hey ,Welcome to world of web dev</h1>");
});

//we can create more end points:

app.get("/about",(req,res)=>{
    res.send("<h1>Hey ,This is a  dummy file to teach about get method</h1>");
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
