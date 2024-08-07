// Callbacks --so as the name suggest call something and get back something:


// So in JavaScript a function can take another function as argument or as an input so when we talk about call-back it basically means that function1 is taking a function2
// as an argument/parameter and calling it to get back something  ,lets understand this with a problem or use case 


// suppose we are given a code base which looks like this :


// function calculator(a,b,typeOfOperation)
// {
//     if(typeOfOperation==="sum")
//     {
//         return a+b;
//     }
//     else if(typeOfOperation==="sub")
//     {
//         return a-b;
//     }
// }
// let result=calculator(3,4,"sum");
// console.log(result);


// Now as we can see it is fairly a large code base which hosts multiple problem that is if we look carefully calculator() function conducts two main operation and they are addition 
// and subtraction now although the code here is fairly simple but suppose if we have add more logic into the code like finding  out the greater of two number so that when subtracted it 
// gives us a positive integer like:{if(a>b){return a-b;}else{return b-a;)} now we can add more logic for other operation also but that will complicate the function and if we run into
// any error it will get for us to debug it .

// so to keep the code clean we can seprate the two operation into two function like this :

// function calculator(a,b,typeOfOperation)
// {
//     if(typeOfOperation==="sum")
//     {
//         return sum(a,b)
//     }
//     else if(typeOfOperation==="sub")
//     {
//         return sub(a,b)
//     }
// }
// let sum=(a,b)=>{return a+b};//here we used arrow function as it has single line logic 

// function sub(a,b)
// {
//     if(a>b)
//     {
//         return a-b;
//     }
//     else
//     {
//         return b-a;
//     }
// }

// let result=calculator(3,4,"sum");
// console.log(result);

// so now every logic component is seprated for easy debuging but suppose inside the calculator() function we need to eliminate if and else if statement and do the operation without passing the type of operation with
// exact same functionality that is if there are two user let user-1 be u1 and user-2 be u2 u1 wants to do addition and u2 wants to do subtraction but we need to eliminate typeOfOperation and if and else if statement.


// this where callback comes into play so now instead of using if and else if we can directly pass the function which is responsible for doing that perticular mathematical operation 

// function calculator(a,b,fnToCall)//fnToCall will hold the inputed function name and then it will call it 
// {
//    return fnToCall(a,b);//so this here is a callback 
// }
// let sum=(a,b)=>{return a+b};//here we used arrow function as it has single line logic 

// function sub(a,b)
// {
//     if(a>b)
//     {
//         return a-b;
//     }
//     else
//     {
//         return b-a;
//     }
// }

// let result=calculator(3,4,sum);
// console.log(result);


// ->In JavaScript we also have inbuilt callback functions like setTimeout and setInterval 

// function helloWorld()
// {
//     console.log("Hello World");
// }
// setTimeout(helloWorld,10*1000);// setTimeout takes a function as  input and execute that function after a specific duration
// setInterval(helloWorld,2*1000);// setInterval takes a function as  input and keeps on executing that function after a specific duration until stopped 

function calculator(a,b,fnToCall)
{
   return fnToCall(a,b);
}
let sum=(a,b)=>{return a+b};//here we used arrow function as it has single line logic 

function sub(a,b)
{
    if(a>b)
    {
        return a-b;
    }
    else
    {
        return b-a;
    }
}

let user1=calculator(3,4,sum);
console.log(user1);
let user2=calculator(5,4,sub);
console.log(user2);

function helloWorld()
{
    console.log("Hello World");
}
setTimeout(helloWorld,10*1000)
