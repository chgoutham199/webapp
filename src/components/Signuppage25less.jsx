import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../index.css";

const Signuppage25less = () => {
    const [formData, setFormData] = useState({
        education: '',
        yeareducation: '',
        instituteName: '',
        catalogvariants: '',
        catalogskillstatus:''
    });
    const [Error, setError] = useState({
        education: false,
        yeareducation: false,
        instituteName: false,
        catalogvariants: false,
        catalogskillstatus: false
    });
    const navigate = useNavigate();
    const Ref=useRef();

    useEffect(()=>{
        Ref.current.focus()
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        let hasError = false;
        Object.entries(formData).forEach(([key, value]) => {
            if (!value) {
                hasError = true;
                setError(prevState => ({ ...prevState, [key]: true })); 
            }
        });
        if (!hasError) {
            navigate('/signuplast');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError({ ...Error, [name]: false });
    };

    return (
        <>
            <div className="imaga bg-neutral-900 flex justify-center items-center h-screen text-white">
                <div className="w-3/4 flex justify-center ml-96 mt-2 p-5 mb-28">
                    <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
                        <div className="">
                            <img src='./logo.svg' className=' w-56 cursor-pointer ml-32' alt="logo" />
                        </div>
                        <div className="">
                            <hr className="custom-hr flex w-full mt-2 mb-3" />
                        </div>
                        <div className="">
                            <label htmlFor="education" className=" text-sm ml-0.5">Engineering Education Background<label className=' text-orange-500 text-sm' > *</label> </label>
                            <div className=" flex flex-row">
                                <input type="text" ref={Ref} id="education" name="education" placeholder='Engineering Education Background' className={`px-4 py-2 border ${!Error.education ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-full mt-1`} value={formData.education} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="yeareducation" className=" text-sm ml-0.5">Year of Education<label className=' text-orange-500 text-sm' > *</label> </label>
                            <div className=" flex flex-row">
                                <input type="text" id="yeareducation" name="yeareducation" placeholder='Year of Education' className={`px-4 py-2 border ${!Error.yeareducation ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-full mt-1`} value={formData.yeareducation} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="instituteName" className=" text-sm ml-0.5">Institute Name<label className=' text-orange-500 text-sm' > *</label> </label>
                            <div className=" flex flex-row">
                                <input type="text" id="instituteName" name="instituteName" placeholder='Institute Name' className={`px-4 py-2 border ${!Error.instituteName ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-full mt-1`} value={formData.instituteName} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="catalogvariants" className="text-sm">Catalog Variants<label className=' ml-0.5 text-orange-500'>*</label></label>
                            <select id="catalogvariants" name="catalogvariants" className={`px-4 py-2 border ${!Error.catalogvariants ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-full mt-1 text-gray-400`} value={formData.catalogvariants} onChange={handleChange}>
                                <option value="">Catalog Variants</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className="">
                            <label htmlFor="catalogskillstatus" className="text-sm">Catalog Skill Status<label className=' ml-0.5 text-orange-500'>*</label></label>
                            <select id="catalogskillstatus" name="catalogskillstatus" className={`px-4 py-2 border ${!Error.catalogskillstatus ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-full mt-1 text-gray-400`} value={formData.catalogskillstatus} onChange={handleChange}>
                                <option value="">Catalog Skill Status</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
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
    );
};

export default Signuppage25less;
