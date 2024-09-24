import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var result=0;
app.use(bodyParser.urlencoded({extended:true}));

function calculate(req,res,next)
{
    let num1=req.body["num1"];
    let num2=req.body["num2"];
    let opr=req.body["operation"];
    if(opr==='+')
    {
       // result=Number(num1)+Number(num2);
      // result=(num1)+(num2);//Here the value enter will be taken as character or string in
       //form and + is the only operation which can be performed on character/string as
       //well as number so it will concatenate the string 
       //to change it into number use Number() function or parseInt()

       result=Number(num1)+Number(num2);
       //result=parseInt(num1)+parseInt(num2);
    }

    else if(opr==='*')
    {
        result=num1*num2;
    }
    else if(opr==="/")
    {
        result=num1/num2;
    }
    next();
}
let bmi=0;
function bmiCalculation(req,res,next)
{
    let h=req.body["height"];
    let w=req.body["weight"];
    bmi=w/(h*h);
    next();
}
app.use(calculate);
app.get("/",(req,res)=>{
    console.log(req.body);
    console.log(result);
    console.log(bmi);
    res.sendFile(__dirname+"/public/index.html");
    
});

app.post("/calculate",(req,res)=>
{
    console.log(req.body);
    console.log(result); 
    console.log(bmi);
    res.send(`<h1>Result is ${result}</h1>`);
});
app.use(bmiCalculation);
//setting up another route for new page 
app.get("/bmi",(req,res)=>
{
    res.sendFile(__dirname+"/public/bmi.html");
});
//post method associated with new page
app.post("/calcBmi",(req,res)=>
{
    console.log(req.body);
    console.log(bmi);
    res.send(`<h1>BMI is ${bmi}</h1>`);
});

app.listen(port,()=>{
    console.log("Server running");
});