const express =require('express')
const bodyparser =require('body-parser')
const cors =  require('cors')
const useroute =require('./routes/routes')
const app = express()
app.use(bodyparser.json())
app.use(bodyparser.raw())
app.use(bodyparser.text())
app.use(bodyparser.urlencoded({extended:true}))
app.use('/',useroute)
app.use(cors({origin:'mongodb+srv://chialimouad:mouadchiali@cluster0.z6qhktx.mongodb.net/test',
credentials:true,            //access-control-allow-credentials:true
optionSuccessStatus:200}))
module.exports=app