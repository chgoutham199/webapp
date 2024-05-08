import React, { useState,useRef,useEffect } from "react";
import {useNavigate} from 'react-router-dom';

    export default function ForgotEmail() {
       const emailRef = useRef();
       const navigate = useNavigate()
       const [formData, setFormData] = useState({})
       const handleChange = (e) => {
         setFormData({...formData,[e.target.name]:e.target.value})
         console.log(formData);
         
       }
       const handleBack = () => {
          navigate('/')
       }
       const hansleSubmit = (e) => {
          e.preventDefault()
          navigate('/forgotpassword/verifyotp')
       }   
        useEffect(()=>{
          emailRef.current.focus()
        },[])   

      return (
        <div className='flex flex-col mt-12 pt-10 '>
           <div className='flex flex-col  gap-2 '>
              <span className='text-orange-400 font-semibold text-2xl mx-auto shadow-md'>Password Validation </span>
              <div className='flex flex-col justify-center mx-auto'>
              <span className='text-base text-neutral-600 '>Enter your registered e-mail,a verification code  will be sent to your email</span>
              <span className='text- base text-neutral-600'>address</span>

              </div>
           </div>
           <hr className="custom-hr flex w-3/6 mt-2 mx-auto " />
           <div className='flex justify-center items-center mt-3 max-w-screen max-h-screen'>
             <form  onSubmit={hansleSubmit} className='flex flex-col gap-6 w-1/3 mx-auto'>
               <div className='flex flex-col gap-2'>
                 <label htmlFor="email" className='text-neutral-500 text-sm'>Enter your registered e-mail</label>
                 <input ref={emailRef} type="email" id="email"name="email" onChange={handleChange} className=' bg-neutral-900 p-2 pl-3 border border-neutral-600 rounded-lg text-white  placeholder-neutral-600 placeholder:text-sm font-normal shadow-sm ' required/>
               </div>
               <div className='flex  justify-between'>
               <button  type="button" onClick={handleBack} className="bg-neutral-900 border-2 border-orange-600 text-neutral-300 font-semibold py-2 px-6  w-48  rounded-lg hover:opacity-75 ">
                Back
              </button>
              <button
               onClick={hansleSubmit}
              type="submit"
              className="bg-orange-500 text-neutral-300 font-semibold py-2 px-6 w-48 rounded-lg hover:opacity-75 "
            > 
             Next
            </button>
               </div>
             </form>
           </div>
        </div>
    
)
    }
