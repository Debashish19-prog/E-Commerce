import mongoose, { mongo } from "mongoose";
const ProductSchema = new mongoose.Schema({
    imageurl : String,
    title : String,
    description : String,
    category : {
        type : String,
        enum : ['Men','Women','Kids','Footwear','Accessories'],
        required : true,
    },
    brand : {
        type : String,
        enum : ['Nike','Puma','Adidas','Levi'],
        required : true,
    },
    price : Number,
    stocks : Number
})
const ProductModel =  mongoose.model('products',ProductSchema) ;
export default ProductModel ;