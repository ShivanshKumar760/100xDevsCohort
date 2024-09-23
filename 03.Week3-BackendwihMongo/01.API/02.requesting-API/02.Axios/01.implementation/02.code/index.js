import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
import {z} from "zod";

const app=express();
const port=3000;
let city="";
const __dirname__=dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended:true}));


const citySchema = z.object({
    cityName: z.string().min(3),
  });
  
//creating our own middleware :
function getData(req,res,next)
{
    city=req.body.cityName;
    next();
}
app.use(getData);//mounting our middleware
const apiKey='d8e1e27954db7cc38e3d812642a05d99';



app.get("/",(req,res)=>{
    console.log(req.body);
    console.log(citySchema.safeParse({"cityName":1}))
    if(citySchema.safeParse({"cityName":1}).success)
    {
        console.log("True");
    }
    else{
    console.log("False");
    }
    res.sendFile(__dirname__+"/public/index.html");
    
});
app.get("/style.css",(req,res)=>{
    res.sendFile(__dirname__+"/public/style.css");
    
});
app.post("/weather",async (req,res)=>{
    console.log(req.body);
    console.log(city);
    console.log(citySchema.safeParse(req.body));
    if(citySchema.safeParse(req.body).success){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    //here comes the axios logic 
    //so axios will return a promise so there are two ways either use .then() or use keyword 
    //await cause axios will return promise

    /*
    axios.get(url).then((gotData_fromPromsie)=>{res.json(gotData_fromPromsie.data)});
    */
    
    let fetchdata=await axios.get(url);//this will automatically parse the request in json
    console.log(fetchdata);
    console.log([fetchdata.data.weather[0],fetchdata.data.name]);
    // res.json(fetchdata.data.weather[0]);
    let mainData=fetchdata.data.weather[0].main;
    let description=fetchdata.data.weather[0].description;
    let cityName=fetchdata.data.name;

    //Inserting the image offered by openweather :
    let icon=fetchdata.data.weather[0].icon;
    console.log(icon);
    const imageUrl="https://openweathermap.org/img/wn/"+icon+"@2x.png";
    if(city==cityName)
    {
        res.send(`
        <style>
            img{height:100px;width:100px;padding-left:50px}
            .container{
                display:flex;
                align-item:center;
                justify-content:center;
            }
        </style>
        <div class="container">
        <h1>
        The weather in ${cityName} have ${mainData} which 
        can be described as ${description} </h1>
       
            <img src=${imageUrl}>

        </div>
        `);
    }
    else{
        res.send("Not found");
    }}

    else{
        res.json({
            msg:"Wrong Input"
        });
    }


});


app.listen(port,()=>{
    console.log("Server is running");
});