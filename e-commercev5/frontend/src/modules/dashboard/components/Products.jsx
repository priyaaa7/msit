import { Product } from "./Product";

export const Products = ({products})=>{
    console.log('All Products are ', products);
    return (<>{products.map(product=><Product key={product['_id']} product = {product}/>)}</>);
}