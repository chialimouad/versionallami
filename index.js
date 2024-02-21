const express =require('express')
const bodyparser =require('body-parser')
const useroute =require('./routes/routes')
const cors = require('cors')
const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use('/',useroute)
app.use(cors())

module.exports=app