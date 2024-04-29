import React from 'react'
import {Link} from "react-router-dom"
import { useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './New.css'
export default function Card(props) {
   const data= props.title ;
   console.log(data);
  const products = useSelector((state) => state.products.products);
   console.log(data.trim())
  const filteredProducts = data.trim() !== '' ? products.filter(product => {
    const searchWords = data.toLowerCase().split(' ');
    return searchWords.some(word => product.modelName.toLowerCase().includes(word));
  }) : [];
   console.log(filteredProducts)
  return (
    <div className=''>
     {filteredProducts.length > 0 ? ( filteredProducts.map((product)=>(
     <div className='flex  justify-between max-w-2xl mx-auto bg-neutral-900  h-24 px-5 py-3  rounded-md items-center text-neutral-300'>
        <div>
            <h1 className='text-2xl'>{product.modelName}</h1>
            <span className='font-extralight text-xs'>{product.brandName}</span>
        </div>
  
        <div className='flex float-right '>
            <button className='bg-orange-500 text-neutral-300 font-normal text-sm rounded-sm items-center px-2 py-1 h-7 mr-3 pr-3'>
                  Add Review
            </button>
        </div>
    </div>
     )
    )
  ) 
 :(
    <div className='flex  justify-between max-w-2xl mx-auto bg-neutral-900  h-24 px-5 py-3  rounded-md items-center text-neutral-300'>
        <div>
            <h1 className='text-2xl'>{props.title}</h1>
            <span className='font-extralight text-xs'>Product Not Found</span>
        </div>
        <Link to="/AddProduct">    
        <div className='flex float-right '>
            <button className='bg-orange-500 text-neutral-300 font-normal text-sm rounded-sm items-center px-2 py-1 h-7 mr-3 pr-3'>
                  Add Product
            </button>
        </div>
        </Link>
    </div>
  
)
}
</div>
  )
}
