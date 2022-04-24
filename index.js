const express=require('express');
const path=require('path');
const bodyparser=require('body-parser');
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"static")));

app.set('view engine','pug'); //set template engine as pug
app.set('views',path.join(__dirname,'views')); //set the views directory

app.get('/',(req,res)=>{
    res.send("hello");
});

app.post('/cprofile',(req,res)=>{
    const name=req.body.nam;
    const message={message1:`Welcome ${name} to Vocal For Vocal`,message2:"Wow,your are all set to go !!!"};
    res.status(200).render('cprofile.pug',message);

});

app.listen(3000,()=>{
    console.log(`http://127.0.0.1:3000`);
});