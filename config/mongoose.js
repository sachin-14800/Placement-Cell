//importing the mongoose module
const mongoose=require('mongoose');

//connecting the localhost and mongoose
mongoose.connect('mongodb://localhost/placement_cell');

//connection stored in db variable
const db=mongoose.connection;

//if there is a connection error
db.on('error',console.error.bind(console,"Error in connecting the database"));

//Successful connection
db.once('open',function(){
    console.log("Successfully connected to the database");
});

//exporting the db module
module.exports=db;