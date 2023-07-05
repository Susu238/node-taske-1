const express = require('express')
const app = express()
app.use(express.json())
const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl ='mongodb://127.0.0.1:270'
const cors=require('cors')
const mongoose=require('mongoose')
const cookieParser=require("cookie-parser")


app.use(cors());
app.use(cookieParser());

require('./mongoose')

 const PORT=process.env.PORT || 5000
 const path= require ('path')

const publicPath= path.join(__dirname, "../public")

app.use(express.static(publicPath))
app.get('*', (req,res)=>{
    res.send(' 404 Page not found')
})

 app.listen(PORT , ()=>{console.log(`App is running on port ${PORT}`);})
