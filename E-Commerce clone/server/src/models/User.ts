const mongoose = require('mongoose') ;
import {Schema,model,InferSchemaType} from 'mongoose' ;
const UserSchema = new Schema({
    username : {type: String,required:true},
    email : {type:String,required:true},
    password : {type:String,required:true},
    role : {type:String}
});
export type IUser = InferSchemaType<typeof UserSchema>;
const userModel = model('users',UserSchema) ;
export default userModel;

