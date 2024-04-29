import React from 'react'
import SearchBar from '../components/SearchBar';
// import SearchBar1 from '../components/SearchBar';

export default function Home() {
  return ( 
      <>
       <div className='flex  items-center justify-center pt-3'>
        <div className='p-4'>
         <h1 className='font-semibold text-3xl pb-4'>Suggest & Review a Product </h1>
         <span className='flex items-center justify-center mx-auto pb-4 '>Any Electirc & Electronics Products</span>
         </div>
         </div> 
         <div className=''>
          <SearchBar />
          </div>
          
       </>  
  );
}
