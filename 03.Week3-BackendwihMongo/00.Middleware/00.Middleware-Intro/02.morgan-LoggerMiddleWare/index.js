import express from "express";
//import morgan middleware to log the request data from user 
import morgan from "morgan";
const app=express();
const port=3000;
//mount the morgan middleware using use()
app.use(morgan("tiny"));

app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>");
});

app.listen(port);