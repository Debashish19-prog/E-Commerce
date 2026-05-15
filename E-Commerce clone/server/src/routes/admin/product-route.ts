import ProductModel from "../../models/Products";
import { Request,Response } from "express";
import {addproduct} from '../../controller/admin-controller/admin-controller'
import express from 'express' ;
const route = express.Router() ;
route.post('/add-product',addproduct);
export default route;