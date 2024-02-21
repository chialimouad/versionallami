const route=require('express').Router()
const dbcontrol=require('../controller/controller')
route.post('/register',dbcontrol.register)
route.get('/fetch',async (req,res)=>{
    try{
    const fecthsyh= await dbq.find({})
      res.status(200).json(fecthsyh)
    }catch(err){console.log(err)}
  })
module.exports=route