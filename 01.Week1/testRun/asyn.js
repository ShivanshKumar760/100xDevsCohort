let numberLimiter = 5;
let sum = 0;
function calSum(sum){
    for (let i = 0; i <= numberLimiter; i++) {
         sum += i;
    }
    console.log(sum);
}
setTimeout(()=>{
    calSum(sum)
},3000);
console.log('Done!');
console.log(sum);




