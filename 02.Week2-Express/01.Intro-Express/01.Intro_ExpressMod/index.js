/*
In Previous Module we learnt HTTP very theoretically that we focused more on technicality and we got to know that :
HTTP Methods :as we got to know that http is nothing but a set of rule for client to communicate with server or backend(Hyper Text Transfer Protocol) just like how us Human communicate like we as Human when we want to communicate with each other 
or Transfer our thoughts with each other we use language it can be english ,it can be hindi,it can be french ,it can be bengali etc so this language act as thought transfer protocol :
So using language we make ceratin sound and the  travel across the air to the person we are trying to communicate

Person1->Hey------sounds travel through air->Person2
Person1<---Sound travel through air---Hi<--Person2
Similarly when computer want to talk to each other they need HTTP or Hyper Text Transfer Protocol 
Comp1--->req[http followed]--->Comp2[Server]
[client]
Comp1<---[http followed]response---Comp2[Server]
[client]

But  this is very technical way to describe http lets try a different approach to define http 
using a real world example:

Going To Doctor :
Doctors have a skill They have acquired that skill over years by studying medicine and 
human anatomy ,so that they provide service to other people who want to use their skill and who are in need of doctor 

Now one thing to note is :Attending Patient is a single threaded process 
That is doctor can attend or asses single patient at  a time hence The doctor is single threaded


How to reach to a doctor :so doctor’s clinic will have some address that can be for example:
India->delhi->Vasant Kunj->Sector 47->plot:320->clinic so the patient’s will visit this address 
that is they get doctor address and navigate to it

So Patient will enter the door one by one that p1 will enter than p2 will enter and so on

Now just after by entering through the door doctor wont meet them they will have to wait for 
there turn that is one by one so they will wait in waiting hall

Then based on priority and who comes first ->Doctor will attend them one by one .

So suppose p1 got diagnosed like what doctor addressed what p1 is suffering from but there are test 
which needs to be done on p1 so doctor tell p1 ->fine go gets some medicine first which I prescribe 
and ones you are done taking medicine come back and wait in waiting room and then after some time I 
will call you for your test until then let me attend some other patients

This demonstrates JavaScript Async Process that is let Doctor be the runtime of js and p1 and p2 be the process 1 and 2 where p1 takes more time to get processed so we make it async and while the p1 is executing in background doctor/nodejs will attend p2

Now Having this real world example lets compare It with our code :
our logic is like a doctor that is 

function calculate(n)
{
    /this here is the logic 
    it can be any type 
    of algorithm and this 
    is the core logic
    and we can interpret 
    this as doctor's degree/

    let ans=0;
    for(let i=0;i<=n;i++)
    {
        ans+=i;
    }
    return ans;
}

/
And  this ans that's 
function calling can be 
interpreted as our 
relative using us as there
personal doctor/

let result=calculate(5);
console.log(result);

Now in order to get treated Relative doesn’t 
need to find your address,as
They stay in the same house so they can directly
approach you->but we studied for so many
years honed our skill so that we can
use our skill to serve everyone and not just our
relative so what our 
code we are writting should get used by whole world
and not just by us But how can we expose this logic to the world?

To expose our code to the world we will use http that is hyper text transfer
protocol it lets you create a clinic or hospital on a land that is it lets us 
create a web application on web which user can acces using a url like:
http://localhost:3000 or www.google.com this are address of web app which 
are expose and people can go and use them just like our doctor clinic address
India->delhi->Vasant Kunj->Sector 47->plot:320->clinic that is:
India/delhi/vasantKunj/Sector47/320/clinic where clinic is the endpoint we 
have to hit in order to  access doctor

and for that http website creation we will use express*/

import { calculate } from "./calculate.js";
import express from "express";

const app=express();
const port=3000;

app.get("/",(req,res)=>{
    
    res.send(`<h1>Welcome to our site to calculate sum of n whole number hit this endpoint->
    /calN`);

});
app.get("/calN",(req,res)=>{
    //for query to be sent we will access the endpoint first /calN followed by question mark
    //->localhost:3000/calN? followed by the input user should give /calN?number=3
    const num=req.query.number;
    const result=calculate(num);
    // res.send(result.toString());
    res.send(`<h1>${result}</h1>`)

});

app.listen(port,()=>{
    console.log("Server is running");
});