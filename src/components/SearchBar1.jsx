import { Search } from 'lucide-react'
import React,{ useState }  from 'react'
import Card from './Card';
export default function SearchBar() {
    const handleSubmit = (e) => {
        e.preventDefault();
      };
      const [search, setSearch] = useState('');
  return (
    <div className='m-4 '>
    <form
      className='flex justify-between  max-w-3xl mx-auto gap-4 '
      onSubmit={handleSubmit} 

    > 
        <button
        className=' disabled:text-gray-400 cursor-pointer'
        disabled={search === ''}     
     >
          <Search size={15}/> 
      </button>
      <input
        type='text'
        placeholder='Search only by Brand or Model Name'
        className='flex w-full h-14 rounded-md placeholder-neutral-400 outline-none bg-transparent flex-1 font-normal text-sm  mx-auto'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
    </form>
      {search && <Card title={search} /> }  
    </div>
  )
}
