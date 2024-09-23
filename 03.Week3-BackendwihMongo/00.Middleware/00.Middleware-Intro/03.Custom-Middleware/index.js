import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app=express();
const port=3000;
/*
All middleware functions in Express.js accept three arguments following the request,
response, and next lifecycle methods. In your index.js file, define a function with the 
three lifecycle methods as arguments:

index.js
function myCustomMiddleware(req, res, next) {
  // ...
}
The first argument, req, is shorthand for the request object with built-in 
properties to access data from the client side and facilitate HTTP requests. 
The res argument is the response object with built-in methods to send data to the client 
side through HTTP requests. The argument, next, is a function that tells Express.js to 
continue on to the following middleware you have configured for your application.

Middleware has the ability to modify the req and res objects, run any code you wish, 
end the request and response cycle, and move onto the following functions.

Note the order of your middleware, as invoking the next() function is required in each 
preceding middleware.

Now that you’ve reviewed the three arguments that build a middleware, 
let’s look at how to assemble a custom middleware.*/
function logger(req,res,next)
{
    console.log(req.method);
    console.log(req.url);
    next();
}

app.use(logger);

const __dirname=dirname(fileURLToPath(import.meta.url));
app.get("/",(req,res)=>{
    console.log(__dirname);
    console.log(req);
    // res.send("Hello");
    res.json({
        method:req.method,
        url:req.url
    });
});

app.listen(port);
