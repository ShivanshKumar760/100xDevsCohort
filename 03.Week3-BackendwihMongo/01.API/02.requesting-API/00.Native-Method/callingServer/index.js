import express from "express";
import http from "http";
//similar to http we have https for https request 
//import https from "https";
const app=express();
const port=5000;

app.get("/",(req,res)=>
{
    //here we have a get method define in http module so basically http is a class module which 
    //as has many pre-define method and one of them is get which gets or request the external
    //http sever to get response and in response we get lots  of meta data like the 
    //status code of the request sent to external server and if the status code is 200 that is 
    //ok and the request is received 

    //and then the response which we got on that we can apply a .on() method:
    /*
    n Node.js, when making HTTP requests using the http or https modules, 
    the res.on method is used to handle different events emitted by the response object. This method is a way to attach event listeners to the response stream so you can process incoming data, handle the end of the response, and manage any errors.

    Here’s a breakdown of how res.on is used in conjunction with http.get:

    Understanding res.on:

    res.on('data', callback): This event is emitted whenever a chunk of data is received from 
    the server. The callback function is called with each chunk of data as it is received. 
    You typically concatenate these chunks to form the complete response body.

    res.on('end', callback): This event is emitted when the entire response has been received. 
    This signifies that no more data will be sent, and you can process or finalize the 
    handling of the response.

    res.on('error', callback): This event is emitted if an error occurs during the request. 
    This is used to handle any issues that arise while making the request or receiving the 
    response.
    
    const http = require('http');

// URL of the request
const url = 'http://www.example.com';

// Make an HTTP GET request
http.get(url, (res) => {
    let data = '';

    // Listen for data events
    res.on('data', (chunk) => {
        data += chunk; // Append each chunk of data
    });

    // Listen for end event
    res.on('end', () => {
        console.log('Response Body:', data); // Output the complete response body
    });

    // Listen for error events
    res.on('error', (err) => {
        console.error('Error:', err.message);
    });
}).on('error', (e) => {
    console.error('Request Error:', e.message);
});

    
    
    */
    http.get("http://localhost:3000",(response)=>{//console.log(response);
        response.on("data",(data)=>{
            console.log(JSON.parse(data));
        });
    });

});

app.listen(port,()=>{
    console.log("running");
});