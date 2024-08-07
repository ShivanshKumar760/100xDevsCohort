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
