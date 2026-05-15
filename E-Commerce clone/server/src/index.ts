const express = require('express') ;
const mongoose = require('mongoose') ;
const authRouter = require('./routes/auth/auth-route') ;
const cookieParser = require('cookie-parser') ;
const cors = require('cors') ; 
import productRouter from './routes/admin/product-route'
require('dotenv').config() ;
const app = express() ;
app.use(express.json()) ; // middleware for json data
app.use(cookieParser()) ; // middleware for cookie-parser
app.use(cors({
    origin : "http://localhost:5173",
    methods : ["GET","POST","PUT","DELETE"],
    allowedHeaders : [
        "Content-Type",
        "Authorization",
    ],
    credentials : true,
}))

// connect to moongose server 
const url = process.env.URL ;
async function connectdb(){
    await mongoose.connect(url) ;
    try{
        console.log('mongodb connected successfully') ;
    }
    catch(e){
        console.log(e) ;
    }
}
connectdb() ;


app.use('/',authRouter) ;
app.use('/admin',productRouter);

const PORT = process.env.PORT || 3000 ;
app.listen(PORT,()=>{
    console.log(`Server is listening at port ${PORT}`);
})