import React from 'react'
import ForgotHeader from '../components/forgotHeader'
import  { Outlet } from 'react-router'
export default function Forgotlayout() {
  return (
    <div className='bg-neutral-900 min-h-screen min-w-screen  overflow-auto'>
      <ForgotHeader />
      <Outlet/>
    </div>
  )
}
