const express = require('express');
const User = require('../models/userModel');
const errorMesssage=require('../config/errorMessage');
const userService=require('../services/userService')

module.exports.PostUserData = async (req, res, next) => {
    try {
       let getData=await userService.query1(req.body);
        return res.status(200).send({ message: "Post done", data: getData })
    } catch (e) {
        return res.status(500).send({ message: "Post not done", data: e.message })
    }

}


module.exports.UserGet=async(req,res,next)=>{
    try{
       
        const GetUser=await userService.query2()
        return res.status(200).send({ message: "Post not done", data: GetUser })
    }catch(e){
        return res.status(500).send({ message: errorMesssage.SERVER_ERROR, data: e.message }) 
    }
   

}



module.exports.UpdateUser=async(req,res,next)=>{
    try{
        let updates=Object.keys(req.body);
        let allowUpdates=['name','age'];
        const isValid=allowUpdates.every((item)=>updates.includes(item))
        let tmpIs={}
       
        if(!isValid){
            return res.status(500).send({ message: errorMesssage.UPDATE_ERROR, data: req.body })
        }
        const data=req.body;
        const updateIs=await User.findByIdAndUpdate({_id:req.body._id},{data})
        return res.status(200).send({ message: "Post not done", data: updateIs })
    }catch(e){
        return res.status(500).send({ message: errorMesssage.SERVER_ERROR, data: e.message }) 
    }
   

}
