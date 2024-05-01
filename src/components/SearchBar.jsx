import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Card from './Card';
const Search = () => {
  const [data, setData] = useState('');
  return (
    <div className="m-3">
    <div className='flex items-center max-w-3xl mx-auto border border-gray-800 rounded-md mt-3 pl-3 mb-5'>
      <FaSearch className="text-white mr-2" />
        <input
          type="text"
          value={data}
          placeholder="Search only by Brand or Model Name"
          className="flex w-full h-10 rounded-md placeholder-neutral-400 outline-none bg-transparent flex-1 font-normal text-sm  mx-auto flex-grow py-3"
          onChange={(e) => setData(e.target.value)}
          style={{ minWidth: '0px'}}
        />
      </div>
        {data && <Card title={data} />}  
      </div> 
  )
};

export default Search;