import express, { response } from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));//can accept application/json, application/x-www-form-urlencoded, and multipart/form-data
app.use(express.json());//will only accept json formated data

//bodyparser is much flexible compare express.json

app.get("/",(request,response)=>{
    response.send("<h1>Hello World</h1>")
})

//POST Request :

app.post("/register",(request,response)=>{
    //so here this is a  post handler but this post handler 
    //will not be handling any data or processing it as we havent define any function right now

    //1.
    //we can send some random data to this check point
    //nothing will happen to that data as no middlewares or 
    //function are define to process that data 
    //so we will just respond with the status code.
    console.log(request);
    //let's see what is the body of request for that we can use body parser
    console.log(request.body);//for this to work we need a body parser library and then use middleware->we will study or use express.json built in

    //***what middleware is later on

    //2.NOTE:
    // response.json({
    //     output:"2+2 is 4"
    // })
    // response.sendStatus("200");--->this will give an error :Cannot set headers after they are sent to the client

    //this error is given to us cause :HTTP uses a cycle that requires one response per request. 
    //When the client sends a request (e.g. POST or GET) the server should only send one response back to it.

    //so just return one response :

    response.json({
        //since its a register end point we will be sending the Name of user and age of user and request will have body property and body prop is 
        //a object
        name:request.body["Name"],
        age:request.body["age"]
    });
});

//another way to post data or even get data is through query param
app.post("/registerAgain",(request,response)=>{
    //so what is a query params ????
    //https://www.google.com/search?q=int+size+in+cpp here this part ?q=int+size+in+cpp is a query parameter and we are saying hey google get me this 
    //int size in cpp result 

    //so similarly we can give a query params like localhost:3000/registerAgain?Name="Shivansh"&age=20
    console.log(request);
    const message=request.query;//for this to work i need to use express.json to covert the request into json
    console.log(message);


    //and lets just respond with a status code
    response.sendStatus(200);
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});