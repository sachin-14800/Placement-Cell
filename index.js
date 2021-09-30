const express=require('express');
const port=8000;
const app=express();

const path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.listen(port,function(err){
    if(err)
    {
        console.log("Error in running the server");
    }
    else{
        console.log("Server is running on port "+port);
    }
});