const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Server is up and running...');
});

app.get("/home",(req,res)=>{
    res.json({msg:"this is message"});
});

app.get("/list",(req,res)=>{
    res.json({msg:"this is list items"});
});

app.post("/login",(req,res)=>{
    console.log('Received ', req.body);
    res.json(req.body);
});


app.get('/user',(req,res)=>{
    res.json({
        name:"User one",
        role:'admin',
        email:'userone@gmail.com'
    });
})

app.listen(3000,()=>{
    console.log('Server is running at 3000');
})