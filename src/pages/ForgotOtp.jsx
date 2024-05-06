import React from 'react'
import { useNavigate } from 'react-router'
export default function ForgotOtp() {
   const navigate = useNavigate()

  const handleBack=()=>{
    navigate("/forgotpassword")
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    // navigate("/forgotpassword/resetpassword")
  }
  return (

    <div className='flex flex-col mt-10 pt-10 '>
           <div className='flex flex-col  gap-2 '>
              <span className='text-orange-400 font-semibold text-2xl mx-auto shadow-md'>Password Validation </span>
              <div className='flex flex-col justify-center mx-auto'>
              <span className='text-base text-neutral-500 '>Enter the "6-digit" verification code sent to your e-mail address</span>
              

              </div>
           </div>
           <hr className="custom-hr flex w-3/6 mt-2 mx-auto " />
           <div className='flex justify-center items-center mt-3 max-w-screen max-h-screen'>
             <form   className='flex flex-col gap-6 w-1/3 mx-auto'>
                <div className='flex justify-between gap-1'>
                      
                </div>
               <div className='flex  justify-between'>
               <button onClick={handleBack} className="bg-neutral-900 border-2 border-orange-600 text-neutral-300 font-semibold py-2 px-6  w-48  rounded-lg hover:opacity-75 ">
                Back
              </button>
              <button
              type="submit"
              onClick={handleSubmit}
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
