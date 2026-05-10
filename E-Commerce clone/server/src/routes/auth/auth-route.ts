import express from 'express' ;
import { Request, Response} from 'express';
const router = express.Router() ;
const {authRegister,loginUser,logoutUser,authmiddleware} = require('../../controller/auth-controller/auth-controller')
router.post('/register',authRegister);
router.post('/login',loginUser) ;
router.post('/logout',logoutUser) ;
router.get('/check-auth',authmiddleware,(req:Request,res:Response)=>{
    res.json({
        isAuthenticated : true,
        user:{
            username : req.user.username,
            email : req.user.email,
            role : req.user.role,
        }
    })
}) ;
module.exports = router;