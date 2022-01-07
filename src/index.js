const express = require("express")
const app = express();
const path = require("path")
const port = process.env.port || 1234;


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false})); app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'))
})

app.listen(port,()=>{
    console.log("server running on port 1234")
})