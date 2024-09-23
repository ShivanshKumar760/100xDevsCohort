import express, { response } from "express";
import https from "node:https";
import http from "node:http";
import { request } from 'node:https';

const app=express();
const port=4000;


app.get("/",(req,res)=>{
    const options = {
      // hostname: 'api.openweathermap.org', // Only the hostname
      // path: '/data/2.5/weather?q=london&appid=d8e1e27954db7cc38e3d812642a05d99', // Only the path with query parameters

      hostname:'localhost:3000',
      path:'/',
      method: 'GET'};
      

    const request = http.request(options, (response) => {
        let data=" ";
        response.on('data', (chunk) => {
          console.log(chunk);
          data+=chunk;//now here data is a string and we are doing a concatenation operation on string plus buffer so buffer will change to string 
          console.log(data);
        });

        response.on('end', () => {
          try{
            const result=JSON.parse(data);
            console.log(result);
          }
          catch(error)
          {
            console.error("Failed");
            res.sendStatus(500);
          }
            
        });
          
      });

      request.end();
      
     

});


app.listen(port,()=>{
console.log("calling server");
})