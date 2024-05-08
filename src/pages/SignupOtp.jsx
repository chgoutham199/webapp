import React,{useRef,useEffect,useState} from 'react'
import { useNavigate } from 'react-router'
export default function SignupOtp() {
   const navigate = useNavigate()
  const [otp,setOtp]=useState(new Array(6).fill(""));
  const inputRef=useRef([])
  const handleBack=()=>{
    navigate("/signupValidate")
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const combinedOtp=otp.join("");
       if(combinedOtp.length===6){
        console.log("Otp is",combinedOtp)
          navigate("/signupValidate/verifyOtp/verifyPassword")
       }
  }
  useEffect(()=>{
    if(inputRef.current[0]){
      inputRef.current[0].focus()
    }
  },[])
  const hanleChange=(e,index)=>{
       const value=e.target.value;
       if (isNaN(value)) return;
       const newOTp=[...otp];
       newOTp[index]=value.substring(value.length-1);
       setOtp(newOTp);
      if(value && index<5 && inputRef.current[index+1]){
        inputRef.current[index+1].focus()
      }
  }
  const handleKeyDown=(e,index)=>{
         if (e.key==="Backspace" && index>0 && !otp[index] && inputRef.current[index-1]){
           inputRef.current[index-1].focus()
         }

  }
  return (

    <div className='flex flex-col mt-12 pt-12 '>
           <div className='flex flex-col  gap-1 '>
              <span className='text-orange-400 font-semibold text-2xl mx-auto shadow-md'>Password Validation </span>
              <div className='flex flex-col justify-center mx-auto'>
              <span className='text-base text-neutral-500 '>Enter the "6-digit" verification code sent to your e-mail address</span>
              

              </div>
           </div>
           <div className='flex justify-center items-center mt-3 max-w-screen max-h-screen'>
             <form   className='flex flex-col  w-full mx-auto'>
                <div className='flex items-center w-1/3 mx-auto justify-evenly'>
                 {
                  otp.map((value,index)=>{
                    return(
                       <input 
                          key={index}
                          type="Text"
                          value={value}
                          onKeyDown={(e) => handleKeyDown(e,index)}
                          onChange={(e)=> hanleChange(e,index)}
                          ref={(input)=>inputRef.current[index]=input}
                          className='w-10  bg-neutral-900  border-2 text-white border-neutral-600 rounded-lg p-3 py-2  text-center font-light  text-sm shadow-sm'                
                       />

                    );
                  })
                 } 
                </div>
                <div className='flex justify-end w-2/5 pr-24 pt-1 mx-auto'>
                  <span className='text-neutral-500 font-semibold text-sm underline cursor-pointer hover:opacity-80'>Resend Code?</span>
                  </div> 
                  <hr className="custom-hr flex w-3/6 mt-4 mx-auto " />
               <div className='flex  justify-between w-1/3 mx-auto pt-6'>
               <button type="reset" onClick={handleBack} className="bg-neutral-900 border-2 border-orange-600 text-neutral-300 font-semibold py-2 px-6  w-48  rounded-lg hover:opacity-75 ">
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
