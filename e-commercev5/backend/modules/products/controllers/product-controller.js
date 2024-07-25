import { ProductModel } from "../models/product-schema.js";

export const getProducts = async (request , response, next)=>{
    try{
    const docs  = await ProductModel.find({}).exec();
    response.status(200).json({"products":docs});
    }
    catch(err){
        response.status(500).json({message:'No Record Found, Some Error in DB'});
    }
}
export const addProduct = async (request , response)=>{
    const product = request.body;
    try{
    const doc = await ProductModel.create(product);
    if(doc && doc._id){
        response.status(200).json({message:'New Pizza Added in DB'});
    }
    else{
        response.status(500).json({message:'Unable to add New Pizza  in DB'});
    }
}
catch(err){
    response.status(500).json({message:'Unable to add New Pizza  in DB'});
}
   
}