import express, { response } from "express";
import bodyParser from "body-parser";

//going to introduce some more function and pre built module which we will dive in later 
import {dirname} from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(request,response)=>{
    // response.send("<h1>Hello World</h1>")
    response.sendFile(
        __dirname+"/public/index.html");
})

//POST Request :

app.post("/register",(request,response)=>{
    //so here this is a  post handler but this post handler 
    //will not be handling any data or processing it as we havent define any function right now


    //we can send some random data to this check point
    //nothing will happen to that data as no middlewares or 
    //function are define to process that data 
    //so we will just respond with the status code.
    console.log(request.body);//for this to work we need a body parser middleware->we will study
    //what middleware is later on
    response.sendStatus("200");
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});