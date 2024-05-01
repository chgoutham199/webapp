import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../index.css'
export default function Card(props) {
  const data = props.title;
  const products = useSelector((state) => state.products.products);
  const filteredProducts = data.trim() !== '' ? products.filter(product => {
    const searchWords = data.toLowerCase().split(' ');
    return searchWords.some(word => product.modelName.toLowerCase().includes(word));
  }) : [];

  return (
    <>
      <div className=' flex flex-col justify-center items-center'>
        <div className='scrollbar-nav overflow-y-auto max-h-96 pr-4'>
          {filteredProducts.length > 0 ? (filteredProducts.map((product) => (
            <div className="flex flex-row text-zinc-300 cursor-pointer bg-[#141416] border-2 border-gray-700 mb-3 h-56 w-full">
              <div className="flex">
                <div className="w-52 mr-5 bg-black">
                </div>
                <div className="w-2/3 mr-10 pt-2 ml-4">
                  <p className=' text-xl mt-2 mb-0.5 ml-3'>{product.modelName}</p>
                  <p className=' text-sm text-[#464646]'>Laptop/Gaming Laptop</p>
                  <div className="mt-3 flex flex-row">
                    <div className="flex flex-col mr-2"><div className=""><p className=' text-sm text-[#464646]'>Model</p></div><div className="">
                      <p className=' text-zinc-300 txt-md mt-1'>Titan GT76</p></div></div>
                    <div className="border border-t-1 border-gray-600" style={{ height: "70px" }}/>
                    <div className="flex flex-col mr-2 ml-2"><div className=""><p className=' text-sm text-[#464646]'>Manufacturer</p></div><div className="">
                      <p className=' text-md text-zinc-300'>Micro-Star <br /> International</p></div></div>
                      <div className="border border-t-1 border-gray-600" style={{ height: "70px" }}/>
                    <div className="flex flex-col mr-2 ml-2"> <div className=""><p className=' text-sm text-[#464646]'>Manufactored</p></div><div className="">
                      <p className=' text-md text-zinc-300 text-center mt-1' >China</p></div></div>
                  </div>
                  <div className=" flex flex-row mt-3">
                    <div className=""><p className=' text-[#464646] text-md' >Variants</p></div>
                    <div className="flex flex-col ml-4">
                      <div className=""><a className=' text-orange-600 underline'>#i3-12700HX</a></div>
                      <div className=""><a className=' text-orange-600 underline'>#i3-12700HX</a></div>
                    </div>
                    <div className="flex flex-col ml-4">
                      <div className=""><a className=' text-orange-600 underline'>#i3-12700HX</a></div>
                      <div className=""><a className=' text-orange-600 underline'>#i3-12700HX</a></div>
                    </div>
                    <div className="flex flex-col ml-4">
                      <div className=""><a className=' text-orange-600 underline'>#i3-12700HX</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-14 pt-5 mt-5 pr-6">
                <div className=""><button className='bg-orange-600 px-2 py-1 mb-6'>Button 1</button></div>
                <div className=""><button className='border border-orange-600 px-2 py-1 mb-6'>Button 2</button></div>
                <div className="">  <button className='border border-orange-600 px-2 py-1 mb-2'>Button 3</button></div>
              </div>
            </div>
          )
          )
          )
            : (
              <div className='flex flex-row gap-80 bg-neutral-900  h-24 px-5 py-3  rounded-md items-center text-neutral-300'>
                <div className=' mr-20'>
                  <h1 className='text-2xl'>{props.title}</h1>
                  <span className='font-extralight text-xs'>Product Not Found</span>
                </div>
                <div className=" ml-20">
                <Link to="/AddProduct">
                  <div className='flex float-right '>
                    <button className='bg-orange-500 text-neutral-300 font-normal text-sm rounded-sm items-center px-2 py-1 h-7 mr-3 pr-3'>
                      Add Product
                    </button>
                  </div>
                </Link>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}