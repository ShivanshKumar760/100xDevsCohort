import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

//importing body parser middleware ESM syntax:
import bodyParser from "body-parser";

const app=express();
const port=3000;

const __dirname=dirname(fileURLToPath(import.meta.url));
//mount middleware using .use()
app.use(bodyParser.urlencoded({extended:true}));

//get route to fetch html page:
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

app.post("/submit",function(req,res){
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(port,()=>{
    console.log("Server is running on 3000");
});
