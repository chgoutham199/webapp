import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './New.css'
import Card from './Card';
const Search = () => {
  const [data, setData] = useState('');
  // const navigate = useNavigate();
  // const products = useSelector((state) => state.products.products);
  // console.log(products);
  // const handleAddProduct = () => {
  //   navigate('/AddProduct');
  // };

//   const filteredProducts = data.trim() !== '' ? products.filter(product => {
//     const searchWords = data.toLowerCase().split(' ');
//     return searchWords.some(word => product.modelName.toLowerCase().includes(word));
//   }) : [];
//   console.log((filteredProducts));
//  console.log(data)
  return (
    <div className="m-3">
    <div className='flex items-center max-w-3xl mx-auto border border-slate-100 hover:border-slate-400 rounded-md mt-3 pl-3 mb-5'>
      <FaSearch className="text-white mr-2" />
        
        <input
          type="text"
          value={data}
          placeholder="Search only by Brand or Model Name"
          className="flex w-full h-14 rounded-md placeholder-neutral-400 outline-none bg-transparent flex-1 font-normal text-sm  mx-auto flex-grow py-3"
          onChange={(e) => setData(e.target.value)}
          style={{ minWidth: '500px'}}
        />
      </div>
        {data && <Card title={data} />}  
      </div> 
  )
};

export default Search;