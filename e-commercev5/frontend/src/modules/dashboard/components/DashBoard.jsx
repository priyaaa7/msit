
import { useEffect, useState } from 'react'
import { Header } from '../../../shared/components/Header'
import { Product } from './Product'
import { getApiCall } from '../../../shared/services/api-client'
import { Products } from './Products'

export const DashBoard = () => {
  const [loading, setLoading] = useState(true);
  const [pizzas, setPizzas ] = useState([]);
  const [errors, setErrors] = useState(null);
  useEffect(()=>{
    //return function(){}
    getPizzas();
  },[])
  const getPizzas = async ()=>{
    try{
    const PIZZA_ENDPOINT = import.meta.env.VITE_PIZZA_URL;
    const pizzas = await getApiCall(PIZZA_ENDPOINT);
    console.log('Pizzas are ', pizzas);
    setLoading(false);
    setPizzas(pizzas['products']);
    }
    catch(err){
      setErrors(err);
    }
  }
  return (
    <div className = 'container'>
        <Header/>
        <div className='row'>
            <div className = 'col-8'>
                <div className = 'row'>
                  {loading?<p>Loading.....</p>:<Products products = {pizzas}/>}
                    {/* <Product/>
                    <Product/>
                    <Product/> */}
                </div>
            </div>
            <div className = 'col-4'>

            </div>
        </div>
    </div>
  )
}
