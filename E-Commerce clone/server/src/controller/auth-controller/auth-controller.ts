import { NextFunction, Request,Response } from "express";
const jwt = require('jsonwebtoken') ;
import userModel from '../../models/User' ; 
async function authRegister(req:Request,res:Response) {
    const username:string = req.body.username ;
    const password:string = req.body.password ;
    const role : string = req.body.role ;
    const email : string = req.body.email ;
    // check if the user is already registered
    const isUserExists = await userModel.findOne({
        username : username,
        email : email ,
    })
    if(isUserExists){
        res.json({
            msg : 'user already exists or username/email already registered !!! Log IN',
            isUserExists,

        })
        return ;
    }
    // if no registered , register the user 
    const User = new userModel({
        username : username,
        password : password ,
        email : email,
        role : role ,
    });
    await User.save() ;
    res.json({
        msg:'msg is sent!!!',
    })
}
async function loginUser(req:Request,res:Response){
    // const username : string = req.body.username ;
    const email : string = req.body.email ;
    const password : string = req.body.password ;
    const isUserExists = await userModel.findOne({
        // username : username,
        email : email ,
    });
    if(!isUserExists){
        res.status(404).json({
            msg : 'User doesnt exists !!! Register first'
        })
        console.log(`User donest exists!!`);
        return ;
    }
    // if it does exists we need to verify the passwords
    if(password !== isUserExists.password){
        res.status(404).json({
            msg : 'Password donot match',
        })
        console.log(`Password dont match`);
        return ;
    }
    const token:string =  jwt.sign(isUserExists._id.toString(),'123') ; // i need to use odjectId 
    res.cookie("token",token,{httpOnly:true,secure:false}).json({
        msg : 'user is logged in ',
        token : token,
    }) ;

}
async function logoutUser(req:Request,res:Response) {
    // there is no token out there after we log out 
    // just remove the token ( can be done in client side ?? ) 
    res.clearCookie("token").json({
        msg : 'User Logged Out',
    });
}
async function authmiddleware(req:Request,res:Response,next:NextFunction){
   const token:string | null = req.cookies.token ;
   if(!token){
        res.status(404).json({
            msg : 'token not available' ,
        })
        return ;
   }
   const decoded : string | null = jwt.verify(token , '123') ;
   if(!decoded){
    res.status(404).json({
        msg : 'decoded not available'
    })
    return ;
   }
   const isUserExists= await userModel.findById(decoded) ;
   if(!isUserExists){
    res.status(404).json({
        msg : 'user not found' ,
    })
    return ;
   }
   req.user = isUserExists;
   next() ;
}
module.exports={authRegister,loginUser,logoutUser,authmiddleware}
