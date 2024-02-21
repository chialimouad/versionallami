const express =require('express')
const bodyparser =require('body-parser')
const useroute =require('./routes/routes')
const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use('/',useroute)

module.exports=app