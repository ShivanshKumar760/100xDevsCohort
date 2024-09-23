// let a=(num)=>{return num+1;}
// a(2);

// console.log(a(2));


// let data="this is me ";
// function kiratsReadFile() {
    
//     return new Promise(//resolve function
//     function(resolve,reject) {
//         resolve("123")
//     });
// }
// kiratsReadFile().then();
// // console.log("Hey theres");
// console.log(kiratsReadFile());


//     //one thing to understand is even if we have a resolve function its state wont change until we apply .then method 
//     //we need to attach handler to a promise in order for that resolve and reject function retunred value to get prosseced
// };
// import fs from "node:fs"
// function kiratsReadFile() {
//     // intiates a object pointing to class Promise;
//     //so basically we will return a promise object 
//     //of pending state as promise is waiting for async process to be finished and there are two ways we 
//     //can change the state of promise from pending and that is by either resolving the promise or rejecting it 
//     //so we call a anonymous function with two args which are resolve and reject both are function 
//     //and then we apply the reolve function on the data which need to be called on a function
//     return new Promise(//resolve function
//     function(resolve,reject) {
//         fs.readFile("a.txt", "utf-8", function(err, data) {
//             resolve(data);});
//     });
// };

// function logger(data)
// {
//     console.log(data);
// }
// // console.log(kiratsReadFile());
// //.then() is called after receiveing a status from Promise object if it's resolve or rejected and then replace the resolve and reject function
// //with the .then(passedFunction) 
// kiratsReadFile().then(logger)



// console.log(kiratsReadFile().then(logger));

// let data="Hi there";
// function ReadData(value) {
    
//     return new Promise(//resolve function
//     function(resolve,reject) {
//         resolve(value)
//     });
// }
// // kiratsReadFile().then(console.log);
// // console.log("Hey theres");
// console.log(ReadData(data));
// let promise = new Promise(function(resolve, reject){
//     //do something
//     setTimeout(()=>{
//         resolve("Hi there");},1000);
// });
// let sum=0;
// console.log(promise);


// function doSomething1(cb,a1,a2)
// {
// //    setTimeout(cb,1000);
//     console.log(cb(a1,a2));
// }

// function sum(a,b)
// {
//     return a+b;
// }
// doSomething1(sum,4,5);



// function testLogger()
// {
//     return "hello";
// }
// setTimeout(testLogger,1000);


// function doSomething2(cb)
// {
//     setTimeout(cb,1000);
// }

// function logger()
// {
//     console.log("hello");
// }

// console.log(doSomething2(logger));

// doSomething2(logger);
// // console.log(doSomething(logger));


let data="Hi,there!";
function quick()
{
    return new Promise((resolve,reject)=>{
        //this data will get resolved immediately 
        //and if we will try to log the quick() function it will give us the return Promise object with  it's state as data 
        setTimeout(()=>{resolve(data)},1000);
    })
}
console.log(quick());//trying to get the state of promise object 

// async function callQuick()
// {
//     let retriveValue=await quick();
//     console.log(retriveValue);
// }

// callQuick();
// console.log(`This is agian calling-${quick()}`);

//But in modern JS enviorment like node 14 and above we dont  necessaryly have to include await inside async function level we can even access it
//at top level
let catchValue=await quick();
 console.log(catchValue);


// and js runtime immediately changes it into:
/*
async function fetchData() {
    const response = await quick();
    console.log(response);
}

fetchData(); 
*/

// async function f1()
// {
//     return "Hi thereeeeee ";
// }
// console.log(f1());
// f1().then(console.log);
// console.log("before!");


// async function f2()
// {
//     return new Promise((resolve)=>{
//         resolve("This is explictly returned Promise from async");//now although this data will get resolved immediately
//         //this wont change the Promise state from pending to data state as this explicitly return Promise is not held
//         //inside async function so either we .then or await 
//     })
// }
// console.log(f2());//this will show pending state;
// f2().then(console.log);
// function f3()
// {
//     return new Promise((resolve)=>{
//         resolve("This is explictly returned Promise from Normal function");
//     });
// }

// console.log(f3());
