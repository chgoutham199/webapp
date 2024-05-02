import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()

  const handlenav=()=>{
    navigate('/home')
  }

  const handlenave =()=>{
    navigate('/signup')
  }

  return (
    <div className=' bg-black h-screen w-screen'>
      <p className=' text-white'>Hii</p>
      <button className=' bg-orange-600 p-3 m-6' onClick={handlenave}>Signup page</button>
      <button className=' bg-orange-600 p-3 m-6' onClick={handlenav}>Home page</button>
    </div>
  )
}

export default Login;