import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";
const __dirname=dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    console.log(__dirname);
    // D:\coding\development\Web Development\Cohort\03.Week3-BackendwihMongo\00.Middleware\00.Middleware-Intro\test
    // res.sendFile('D:/coding/development/Web Development/Cohort/03.Week3-BackendwihMongo/00.Middleware/00.Middleware-Intro/test/public/index.html');
    res.sendFile(__dirname+"/public/index.html");
})
app.post("/submit",(req,res)=>{
    // console.log("request body is :")
    console.log(req.body);
    res.json({
        email:req.body.email,
        password:req.body.password
    });
});

app.listen(port);