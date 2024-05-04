import React from 'react'

export default function LoginFooter() {
  return (
    <div className='flex flex-col justify-center items-center bottom-0 fixed inset-x-0 pb-5 mb-5 text-sm shadow-md'>
        <p>By logging in, you agree to UnBoxing Community's <span className='underline font-medium hover:opacity-75 cursor-pointer'>Terms of use </span> and </p>
          <span className='underline font-medium hover:opacity-75 cursor-pointer'>Privacy policy</span>
        </div>
  )
}

