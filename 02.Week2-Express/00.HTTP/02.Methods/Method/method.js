import express from "express";

const app=express();
const port=3000;


//Now lets study about HTTP methods:

//1.get ----->used to retrive data from server:
app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>")
})//this will send a request to server at endpoint / which basically is the starting endpoint 
//and ask server to revert with a response to send <h1> tag back to client 

//2.post ----->used to send user data and meta data from browser to server and get response:

app.post("/conversation",(req,res)=>{
    console.log(req.headers["authorization"]);
    res.sendStatus(200);
});

app.put("/user/shivansh",(req,res)=>
{res.sendStatus(201);});

app.patch("/user/shivansh",(req,res)=>{
    res.sendStatus(201);
    }
);

app.delete("/user/shivansh",(req,res)=>{
    res.sendStatus(201);}
);
app.listen(port,()=>{
    console.log("Listening on port 3000")
})