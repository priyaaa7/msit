import express from 'express';
import { addProduct, getProducts } from '../controllers/product-controller.js';
export const productRoutes = express.Router();
productRoutes.get('/view-products',getProducts)
productRoutes.post('/add-product',addProduct)
// routes.put('/update-products',(request, response)=>{
//     // Array - Pizzas
//     response.send('Products');
// })
// routes.get('/search-product',(request, response)=>{
//     // Array - Pizzas
//     response.send('Products');
// })