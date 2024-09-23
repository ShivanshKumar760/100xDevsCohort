import express from "express";

const app=express();
const port=3000;

app.get("/",(req,res)=>{
    //with one get handler or any other method handler we can send 
    //only one res from server:

    /*We cant do like this:
    res.send("<h1>Hello</h1>");
    res.send("<h2>World</h2>");-->we cant do like this 

    */
   
    //but we can send a single response res:
    // res.send("<h1> Hello World </h1>");

    //we can send a multiple content from sever to client via wrapping 
    //that content inside a variable 

    /*
    const content=`<h1>HelloWorld</h1>
    <p>This is a paragraph</p>
    <img src="https://www.google.com/logos/doodles/2024/paris-games-archery-6753651837110536-la202124.gif">`
    res.send(content);


    */

    //We can even send json data using .json
    res.json({
        name:"Shivansh Kumar",
        age:21
    })
  
})
app.listen(port,function(){
    console.log("Server is running on port 3000");
    
})