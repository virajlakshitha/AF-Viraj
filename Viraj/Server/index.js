const express=require('express');

const app=express();
const bodyparser=require('body-parser');
const Route=require('./Route');
const cors=require('cors');

app.use(bodyparser.json());
app.use(cors());
app.use('/',Route);

app.listen(8001,'localhost',function (err) {
   if(err){
       console.log(err);
       process.exit(-1);
   }
   console.log('Connected to the server');
});