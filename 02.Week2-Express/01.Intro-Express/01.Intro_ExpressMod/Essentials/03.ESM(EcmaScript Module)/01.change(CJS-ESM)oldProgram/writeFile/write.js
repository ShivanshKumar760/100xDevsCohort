import {writeFile} from "node:fs";

writeFile("./message.txt","Hello",(err)=>
{
    if(err)
    {
        throw err;
    }
    else
    {
        console.log("Saved");
    }
});