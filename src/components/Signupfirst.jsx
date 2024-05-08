import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../index.css";

const Signupfirst = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        day: '',
        month: '',
        year: '',
        gender: '',
        district: '',
        state: '',
        country: ''
    });
    const [Error,setError] = useState({
        firstName: false,
        lastName:false,
        day:false,
        month:false,
        year:false,
        gender:false,
        district:false,
        state: false,
        country: false
    });
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 122 }, (_, i) => currentYear - i);
    const Ref=useRef()

    useEffect(()=>{
        Ref.current.focus();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        let hasError = false;
        let yer=parseInt(formData.year)
        let yy=parseInt(years)
        Object.entries(formData).forEach(([key, value]) => {
            if (!value) {
                hasError = true;
                setError(prevState => ({ ...prevState, [key]: true })); 
            }
        });
        if (!hasError) {
            if (yy-yer<25){
                navigate('/signup25l')
            }
            else{
                navigate('/signupg');
            }
        }
    };

    const handlenavo =()=>{
        navigate('/')
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError({ ...Error, [name]: false });
    };

    return (
        <div className="imaga bg-neutral-900 flex justify-center items-center h-screen text-white">
            <div className="w-3/4 flex justify-center ml-96 mt-10 p-5 mb-10">
                <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
                    <div className="">
                        <img src='./logo.svg' className=' w-56 cursor-pointer ml-36' alt="logo" />
                    </div>
                    <div className="">
                        <hr className="custom-hr flex w-full mt-2 mb-3" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="firstName" className=" text-sm ml-0.5">Enter Full Name<label className=' text-orange-500 text-sm' > *</label> </label>
                        <div className=" flex flex-row">
                            <input type="text" ref={Ref} id="firstName" name="firstName" placeholder='First Name' className={`px-4 py-2 border ${!Error.firstName ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-1/2 mt-1`} value={formData.firstName} onChange={handleChange} />
                            <input type="text" id="lastName" name="lastName" placeholder='Last Name' className={`px-4 py-2 ml-4 border ${!Error.lastName ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-1/2 mt-1`} value={formData.lastName} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="dob" className="text-sm ml-0.5">Select DOB<label className='text-orange-500 text-sm'> *</label></label>
                        <div className="flex flex-row">
                            <select id="day" name="day"  className={`px-4 py-2 border ${!Error.day ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-1/3 mt-1 text-gray-400 scrollbar-nav1`} value={formData.day} onChange={handleChange}>
                                <option value="">Day</option>
                                {[...Array(31).keys()].map(day => (
                                    <option key={day + 1} value={day + 1}>{day + 1}</option>
                                ))}
                            </select>
                            <select id="month" name="month"  className={`px-4 py-2 ml-3 border ${!Error.month ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-1/3 mt-1 text-gray-400 scrollbar-nav1`} value={formData.month} onChange={handleChange}>
                                <option value="">Month</option>
                                {[...Array(12).keys()].map(month => (
                                    <option key={month + 1} value={month + 1}>{month + 1}</option>
                                ))}
                            </select>
                            <select id="year" name="year"  className={`px-4 py-2 ml-3 border ${!Error.year ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-1/3 mt-1 text-gray-400 scrollbar-nav1`} value={formData.year} onChange={handleChange}>
                                <option value="">Year</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="gender" className=" text-sm">Select Gender<label className=' text-orange-500 ml-0.5'> *</label></label>
                        <select id="gender" name="gender" className={`px-4 py-2 border ${!Error.gender ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-full mt-1 text-gray-400`} value={formData.gender} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="">
                        <label htmlFor="district" className="text-sm">Select District<label className=' ml-0.5 text-orange-500'>*</label></label>
                        <select id="district" name="district"  className={`px-4 py-2 border ${!Error.district ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-full mt-1 text-gray-400`} value={formData.district} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="">
                        <label htmlFor="state" className="text-sm">Select State<label className=' ml-0.5 text-orange-500'>*</label></label>
                        <select id="state" name="state"  className={`px-4 py-2 border ${!Error.state ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-full mt-1 text-gray-400`} value={formData.state} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="">
                        <label htmlFor="country" className="text-sm">Select Country<label className=' ml-0.5 text-orange-500'>*</label></label>
                        <select id="country" name="country"  className={`px-4 py-2 border ${!Error.country ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-full mt-1 text-gray-400`} value={formData.country} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="flex flex-row pt-3">
                        <div className=" mt-2">
                            <p className=' text-orange-500 text-sm cursor-pointer' onClick={handlenavo} >Log into existing account</p>
                        </div>
                        <div className="">
                            <button type='submit' className=' bg-orange-500 px-5 py-1 rounded-lg ml-60 mt-1' >Continue</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signupfirst;

