const express =require('express')
const bodyparser =require('body-parser')
const cors =  require('cors')
const useroute =require('./routes/routes')
const app = express()
app.use(bodyparser.json())
app.use(cors({origin:"https://k-linker-club.netlify.app/registration",}))
app.use(bodyparser.urlencoded({extended:true}))
app.use('/12',useroute)
module.exports=app