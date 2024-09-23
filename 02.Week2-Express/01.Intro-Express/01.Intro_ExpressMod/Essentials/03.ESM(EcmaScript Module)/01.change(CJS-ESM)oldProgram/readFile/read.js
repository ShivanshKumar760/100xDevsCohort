import {readFile} from "node:fs";

readFile("./ex.txt","utf8",(err,data)=>
{
    if(err)
    {
        throw err;
    }
    else{
        console.log(data);
    }
});