import express from "express";

const app=express();
const port=3000;

//200 and 304 status code :
app.get("/",(req,res)=>{
    // res.send("Hello World");
    // res.sendStatus(200);--->now this will result in error cause with one request we can only send one response so how can we 
    //send both data and status code for that we follow the below syntax:

    res.status(200).send("<h1>Hello World</h1>");//so the first time we will hit this root endpoint / right click inspect goto network
    //we can see status code 200 but when we will refresh the web site it will show status code 304 which basiclly indicate 
    //nothing in the page is modified but our api tool will always show 200
})


//404 status code 

// app.get("/reg",(req,res)=>{
// });--->since we have commented this out if we try to access /reg endpoint it will give us Cannot GET /reg ie 404


//500 status code --->Server erro

app.get("/errorTester",(req,res)=>{
    throw new Error("Error");//there is a error from server side so it will show 500 status code 
});
app.listen(port);