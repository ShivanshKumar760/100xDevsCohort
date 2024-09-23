import express from "express";
import bodyParser from "body-parser";

var users=[{
    Name:"John",
    Kidneys:[{//kidney:1
        healthy:true
    },{
        //kidney:2
        healthy:false
    }],
    KidneyBank:[]
}]
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));//can accept application/json, application/x-www-form-urlencoded, and multipart/form-data

app.get("/kidneyInfo",(req,res)=>{
    const johnKidneys=users[0].Kidneys;
    console.log(johnKidneys);
    //lets find number of kidney
    const totalNumberOfKidneys=johnKidneys.length;
    //lets find total number of healthy kidney:

    let healthyKindey=0;
    for(let i=0;i<totalNumberOfKidneys;i++)
    {
        if(johnKidneys[i].healthy/*this should be true than only if statement will get executed*/)
        {
            healthyKindey++;
        }
    }
    const unhealthyKidney=totalNumberOfKidneys-healthyKindey;
    const kidneyDonated=users[0].KidneyBank;
    res.json({
        johnKidneys,
        totalNumberOfKidneys,
        healthyKindey,
        unhealthyKidney,
        kidneyDonated
    });
});


app.post("/donate",(req,res)=>{
    const isHealthy=req.body.isHealthy;
    users[0].KidneyBank.push({
        healthy:isHealthy
    });
    res.json({
        message:"posted"
    });
});

app.put("/surgery",(req,res)=>{
    for(let i=0;i<users[0].Kidneys.length;i++)
    {
        users[0].Kidneys[i].healthy=true;
    }
    res.json({
        surgery:"success"
    });
});

app.delete("/remove",(req,res)=>{
    //first we will check if there is  any unhealthy kindey or not caue if not there is no use to use delete method on  
    //healthy kindey
    let anyUnhealthy=false;
     for(let i=0;i<users[0].Kidneys.length;i++)
    {
        if(!users[0].Kidneys[i].healthy)
        {
            anyUnhealthy=true;
        }
      
    }

    if(anyUnhealthy)
    {
        const newKidney=[];
        for(let i=0;i<users[0].Kidneys.length;i++)
        {
            if(users[0].Kidneys[i].healthy)
            {
                newKidney.push({
                    healthy:true
                })
            }
        }
        users[0].Kidneys=newKidney;
        res.json({
            message:"removed"
        });

    }
    else{
        res.sendStatus(411);
    }
})
app.listen(port);