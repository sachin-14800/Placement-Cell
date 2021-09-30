const { application } = require('express');
const express=require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const port=8000;
const app=express();

app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use(expressEjsLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine','ejs');
app.set('views','./views');



app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err)
    {
        console.log("Error in running the server");
    }
    else{
        console.log("Server is running on port "+port);
    }
});