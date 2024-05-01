import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router'
import Header from '../components/Header'

export default function 
() {
  return (
    <div className='bg-black flex flex-row h-screen w-screen overflow-y-auto '>
        <SideBar />
    <div className='flex-1 text-white'>
        <div className=''>  <Header />  </div>
        <div className='p-3'>{<Outlet/>}</div>
        </div>
    </div>
  )
}
