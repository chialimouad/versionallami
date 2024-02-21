const express =require('express')
const bodyparser =require('body-parser')
const cors =  require('cors')
const useroute =require('./routes/routes')
const app = express()
app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended:true}))
app.use('/',useroute)
app.use(cors())
module.exports=app