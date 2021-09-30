const { application } = require('express');
const express=require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const port=8000;
const app=express();
const db=require('./config/mongoose');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const passport=require('passport');
const pasportLocal=require('./config/passport-local-strategy');


app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressEjsLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
    name:'placement_cell',
    secret:'something',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }
}));
app.use(passport.initialize());
app.use(passport.session());

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