const mongoose=require('mongoose')
const db=require('../config/db')
const { Schema }=mongoose
const userschema =new Schema({
    email :{
        type:String,
        required:true,
        unique:true,
      
    },
    fullname :{
        type:String,
        required:true,
       
    },
    phonenumber:{
       type:String,
       required:true,
       unique:true,
    },
    idnumber:{
        type:String,
        required:true,
        unique:true,
     },
     Skills:{
        type:Array,
        required:true,
     },
     desc:{
        type:String,
        required:true,
     },
     grade:{
        type:String,
        required:true,
     },


})


const user=db.model('user',userschema)
module.exports=user