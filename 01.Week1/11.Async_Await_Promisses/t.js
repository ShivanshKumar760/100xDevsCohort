// function findSum(n)
// {
//     let ans=0;
//     for(let i=0;i<n;i++)
//     {
//         ans+=i;
//     }
//     return ans;

// }


// function findSumTil100()
// {
//     console.log(findSum(100));
// }

// setTimeout(findSumTil100,5*1000);//Now this is a async function which means as soon as the control reach here at this line it will wait for 5 sec to execute this code but while this is 
// //waiting for 5 sec to get executd it will context switch with the line below it and will execute all the code below it and once executed all code below it then it will context switch
// //with the async function
// console.log("Hello World");


// const fs = require("fs");
// fs.readFile("./hello.txt","utf-8",function(err,data){
//     console.log(data);
// });


// console.log("hello world");


// const fs = require('fs');

// my own asynchronous function
// function kiratsReadFile() {
//   return new Promise(function(resolve) {
//     fs.readFile("./hello.txt", "utf-8", function(err, data) {
//       resolve(data);
//     });
//   })
// }

// // callback function to call
// function onDone(data) {
//   console.log(data)
// }


// let promiseHolder=kiratsReadFile();
// console.log(promiseHolder);
// console.log("promise executed");
// kiratsReadFile().then(onDone);
// console.log("Hello");

// let promiseHolder=new Promise();//intiates a object pointing to class Promise;

// console.log(promiseHolder);



let promiseHolder=new Promise(function(resolve){
  resolve("hi there")  
});//intiates a object pointing to class Promise;

console.log(promiseHolder);


let d=new Date();
console.log(d);
console.log(d.getDate());
promiseHolder.then((data)=>{console.log(data)});
console.log(promiseHolder);
