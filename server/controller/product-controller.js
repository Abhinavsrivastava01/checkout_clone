import Product from '../model/product-schema.js';


export const getProducts=async(request,response)=>{
try{
    const Products=await Product.find({});
    response.status(200).json(Products);
}
catch(error){
     response.status(500).json({message:error.message});
}
}