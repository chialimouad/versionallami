const userserv =require('../services/services')


exports.register= async(req,res,next)=>{try{
    const {email,fullname,phonenumber,idnumber,desc,Skills,grade}=req.body
    const usercontrol =await userserv.registeruser(email,fullname,phonenumber,idnumber,desc,Skills,grade)

    res.json({status:true,success:"user succsefully"})
    
}catch(err){console.log(err)}}

