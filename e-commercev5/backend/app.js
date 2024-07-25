import express from 'express';
import { createConnection } from './shared/db/connection.js';
import dotenv from 'dotenv';
import { productRoutes } from './modules/products/routes/product-route.js';
import cors from 'cors';
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
// app.use(middleware)
// middleware - function(req, res, next)
app.use('/', productRoutes);
// app.use('/', orderRoutes);
//app.use('/', paymentRoutes);
const promise = createConnection();
promise.then(r=>{
    app.listen(4444, err=>{
        if(err){
            console.log('Application Crash ', err);
        }
        else{
            console.log('Application Up and Running');
        }
    })
}).catch(err=>{
    console.log("Application Can't UP DB is Down ")
})
