import ProductModel from "../../models/Products";
import {Request,Response} from 'express'
import * as z from 'zod' ;
// need to validate the input response from client
const input = z.object({
        imageurl : z.string().url(),
        title : z.string().min(1),
        description : z.string().min(10) ,
        category : z.enum(['Men','Kids','Women','Footwear','Accessories']),
        brand : z.enum(['Nike','Puma','Levi','Adidas']),
        price : z.number().min(1),
        stocks : z.number().min(1) ,
})
export async function addproduct(req:Request,res:Response) {
    const result = input.safeParse(req.body) ;
    if(!result.success){
        res.status(400).json({
            msg : 'Some error occured!!',
            e : result.error,
        })
        return ;
    }
    const {imageurl,title,description,stocks,price,brand,category} = result.data;
    // add this product to ProductModel 
    const product = await ProductModel.create({
        imageurl , title , description , stocks , price , brand ,category
    });
    console.log('hey my name is typescript and c++ and i hope this is fixed') ;
    res.status(201).json({
        product,
    })
}
