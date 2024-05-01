import React from 'react'
import SearchBar from '../components/SearchBar';

export default function Home() {
  return ( 
      <>
       <div className='flex  items-center justify-center pt-3 mt-3'>
        <div className=''>
         <h1 className='font-semibold text-3xl mb-2'>Suggest & Review a Product </h1>
         <span className='flex items-center justify-center mx-auto text-md mb-2'>Any Electirc & Electronics Products</span>
         </div>
         </div> 
         <div className=''>
          <SearchBar />
          </div>
          
       </>  
  );
}