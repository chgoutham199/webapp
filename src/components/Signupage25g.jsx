import React from 'react'
import "../index.css";
import { useNavigate } from 'react-router-dom';

const Signupage25g = () => {
 
    const navigate = useNavigate()

    const handlesubmit=(e)=>{
        e.preventDefault()
        navigate('/signup2g')
    }

  return (
    <>
    <div className="imaga bg-neutral-900 flex justify-center items-center h-screen text-white">
            <div className="w-3/4 flex justify-center ml-96 mt-2 p-5 mb-28" onSubmit={handlesubmit} >
                <form className="flex flex-col space-y-2">
                    <div className="">
                        <img src='./logo.svg' className=' w-56 cursor-pointer ml-32' />
                    </div>
                    <div className="">
                        <hr className="custom-hr flex w-full mt-2 mb-3" />
                    </div>
                    <div className="">
                        <label htmlFor="username" className=" text-sm ml-0.5">Designation<label className=' text-orange-500 text-sm' > *</label> </label>
                        <div className=" flex flex-row">
                            <input type="text" id="username" name="username" placeholder='Enter the Designation' className="px-4 py-2 border border-neutral-600 rounded-lg bg-neutral-900 w-full mt-1" />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="username" className=" text-sm ml-0.5">Experience (In Years)<label className=' text-orange-500 text-sm' > *</label> </label>
                        <div className=" flex flex-row">
                            <input type="text" id="username" name="username" placeholder='Enter Number of Years' className="px-4 py-2 border border-neutral-600 rounded-lg bg-neutral-900 w-full mt-1" />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="username" className=" text-sm ml-0.5">Company Name<label className=' text-orange-500 text-sm' > *</label> </label>
                        <div className=" flex flex-row">
                            <input type="text" id="username" name="username" placeholder='Company Name' className="px-4 py-2 border border-neutral-600 rounded-lg bg-neutral-900 w-full mt-1" />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="username" className=" text-sm ml-0.5">Engineering Skills<label className=' text-orange-500 text-sm' > *</label> </label>
                        <div className=" flex flex-row">
                            <input type="text" id="username" name="username" placeholder='Eg.Quality Assurance' className="px-4 py-2 border border-neutral-600 rounded-lg bg-neutral-900 w-full mt-1" />
                        </div>
                        <label className=' text-sm text-white mt-0.5'>Select up to 5 skills your preferred</label>
                    </div>
                    <div className=" flex flex-row pt-1">
                        <div className="">
                            <p className=' text-neutral-900 text-sm' >Log into existing account</p>
                        </div>
                        <div className="">
                            <button type='submit' className=' bg-orange-500 px-5 py-1 rounded-lg ml-60 mt-1' >Continue</button>
                        </div>
                    </div>
                </form>
            </div>
    </div>
    </>
  )
}

export default Signupage25g
