import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));//can accept application/json, application/x-www-form-urlencoded, and multipart/form-data
app.use(bodyParser.json());
/* 
To accept JSON data using the body-parser middleware in Node.js, you need to configure it and access the parsed data from the req.body object in your route handlers. Here's a step-by-step guide:

1. Install body-parser:

Bash
npm install body-parser
Use code with caution.

2. Import and Use:

JavaScript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Configure body-parser to parse JSON
app.use(bodyParser.json());

// Define a route to handle POST requests with JSON data
app.post('/data', (req, res) => {
    const data = req.body; // Access the parsed JSON data from the request body

    console.log('Received data:', data);

    // Process the data as needed
    res.send('Data received successfully');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
Use code with caution.

Explanation:

The bodyParser.json() middleware is used to parse JSON-encoded request bodies.
The app.post('/data', ...) route handler listens for POST requests to the /data endpoint.
The req.body object contains the parsed JSON data from the request.
You can access and process the data as needed within the route handler.
Key Points:

Ensure the Content-Type header in your request is set to application/json.
Place the body-parser middleware before any route handlers that need to access the parsed JSON data.
You can customize the parsing options using bodyParser.json() if necessary.
By following these steps, you can effectively accept and process JSON data in your Node.js application using the body-parser middleware.

*/


//In Memory data --that is data of user stored in file itself 
let accounts = [
    {
      "id": 1,
      "username": "paulhal",
      "role": "admin"
    },
    {
      "id": 2,
      "username": "johndoe",
      "role": "guest"
    },
    {
      "id": 3,
      "username": "sarahjane",
      "role": "guest"
    }
];

app.get("/accounts",(req,res)=>{
    res.json(accounts);
});

//now suppose we want to access each account for that what we can do is use dynamic routing:
/*
In Express.js, /accounts/:id is a route pattern that defines a dynamic route.

/account/: This is a static part of the URL. It specifies that the route should match any URL that starts with /account/.
:id-> This is a dynamic segment. It represents a variable part of the URL that can be any string value. When a request matches this route, 
the value of the id parameter will be available in the req.params object.
Example:

If you have a route defined as /file/:filename, it will match the following URLs:

/file/image.jpg
/file/document.pdf
/file/any_file_name
In the route handler for this route, you can access the value of the filename parameter using req.params.filename*/

app.get("/accounts/:id",(req,res)=>{
    let accountId=req.params.id;
    console.log(accountId);
    console.log(typeof accountId);//this is string but in our accounts array the object carry id value as number 
    //so convert to number 
    accountId=Number(accountId);
    console.log(typeof accountId);
    let getAccount=0;
    for(let i=0;i<accounts.length;i++)
    {
        if(accounts[i].id===accountId)
        {
            getAccount=accounts[i];
           
        }
    }
   
    if(!getAccount){
        res.status(500).send("account not found");
    }
    else{
        res.json(getAccount);
    }
});

app.post('/accounts', (request, response) => {
    const incomingAccount = request.body;//Now here we can also send json data cause of app.use(bodyParser.json());
    console.log(incomingAccount);
    accounts.push(incomingAccount);
  
    response.json(accounts);
});

app.put('/accounts/:id', (request, response) => {
    const accountId = Number(request.params.id);
    const body = request.body;
    console.log(body);
    // const account = accounts.find((account) => account.id === accountId);
    let account=0;
    for(let i=0;i<accounts.length;i++)
    {
        if(accounts[i].id===accountId)
        {
            account=accounts[i];
           
        }
    }
    const index = accounts.indexOf(account);
  
    if (!account) {
      response.status(500).send('Account not found.');
    } else {
      const updatedAccount = { ...account, ...body };
    /*
      Breakdown of const updatedAccount = { ...account, ...body };:
      This line of code in JavaScript creates a new object called updatedAccount by combining the properties of two 
      existing objects: account and body.
      Here's a step-by-step explanation:
      
      Spread Operator (...):
      The spread operator is used to spread the properties of an object into another object.{ ...account }:,
      This part creates a new object containing all the properties and values from the account object.{ ...body }:
      This part creates a new object containing all the properties and values from the body object.
      Combining the Objects:
      The two objects created using the spread operator are combined into a single new object. 
      If there are any property conflicts (i.e., both account and body have a property with the same name), 
      the properties from body will overwrite the properties from account.
    */
  
      accounts[index] = updatedAccount;
  
      response.send(updatedAccount);
    }
  });


app.delete('/accounts/:id', (request, response) => {
    const accountId = Number(request.params.id);
    // const newAccounts = accounts.filter((account) => account.id != accountId);
    let notValid=false;
    for(let i=0;i<accounts.length;i++)
    {
        if(accounts[i].id!==accountId)
        {
            // flag=false;
            notValid=true;
           
        }
        else if(accounts[i].id===accountId)
        {
            notValid=false;
            break;
        }
       
    }
    console.log(notValid);
    let newAccounts=[];
    for(let i=0;i<accounts.length;i++)
    {
        if(accounts[i].id!==accountId)
        {
            newAccounts.push(accounts[i]);
           
        }
    }
  
    console.log(newAccounts.length===0);
    // if (!(newAccounts.length===0 && flag)) {
    //   response.status(500).send('Account not found.');
    if ((newAccounts.length===0)||(notValid)) {
      response.status(500).send('Account not found.');
    } 
    // if(!flag)
    // {
    //     response.status(500).send('Account not found.');
    // }
    else {
      accounts = newAccounts;
      response.send(accounts);
    }
});

app.listen(port);