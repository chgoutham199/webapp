import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router'
import Header from '../components/Header'

export default function 
() {
  return (
    <div className='bg-black flex flex-row h-screen w-screen overflow-hidden'>
        <SideBar />
    <div className='flex-1 text-white'>
        <div>  <Header />  </div>
        <div className='p-4'>{<Outlet/>}</div>
    </div>
        
    </div>
  )
}
