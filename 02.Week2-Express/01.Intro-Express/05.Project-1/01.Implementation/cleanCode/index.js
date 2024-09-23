import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

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

app.get("/accounts/:id",(req,res)=>{
    let accountId=req.params.id;
    //so convert to number 
    accountId=Number(accountId);
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
    const incomingAccount = request.body;
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
            notValid=true;
           
        }
        else if(accounts[i].id===accountId)
        {
            notValid=false;
            //as soon as we find a id no need to search more just break
            break;
        }
       
    }
    let newAccounts=[];
    for(let i=0;i<accounts.length;i++)
    {
        if(accounts[i].id!==accountId)
        {
            newAccounts.push(accounts[i]);
           
        }
    }
    if ((newAccounts.length===0)||(notValid)) {
      response.status(500).send('Account not found.');
    }
    else {
      accounts = newAccounts;
      response.send(accounts);
    }
});

app.listen(port);