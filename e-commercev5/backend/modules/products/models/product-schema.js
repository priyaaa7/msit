import mongoose, { SchemaTypes } from "mongoose";
const ProductSchema = mongoose.Schema({
    name:{type:SchemaTypes.String, maxLength:20, minLength:1, required:true},
    desc:{type:SchemaTypes.String},
    price:{type:SchemaTypes.Number, min: 100, max:500, required:true, default:200},
    image: {type:SchemaTypes.String, required:true}
})
export const ProductModel = mongoose.model('products', ProductSchema);