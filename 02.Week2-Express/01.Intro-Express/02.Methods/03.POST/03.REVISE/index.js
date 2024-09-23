import express from "express";

const app=express();
const port=3000;

app.post("/",(req,res)=>{
    //In your browser, you can't directly send POST requests by simply
    // going to "/" (which would be a GET request). You'll need to use a tool like 
    //Postman or browser extensions that allow sending POST requests. In Postman:

    res.json({
        Name:req.query.name
    });
   

});


app.listen(port,()=>{
    console.log("Server is running");
});