import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../index.css";

const Signupage25g = () => {
    const [nav,setNav] = useState(false)
    const [formData, setFormData] = useState({
        designation: '',
        experience: '',
        companyName: '',
        engineeringSkills: ''
    });
    const [Error, setError] = useState({
        designation: false,
        experience: false,
        companyName: false,
        engineeringSkills: false
    });
    const navigate = useNavigate();
    const Ref=useRef()

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
        if (!hasError && nav) {
            setError(false);
            navigate('/signuplast');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'engineeringSkills') {
            const skills = value.split(',').map(skill => skill.trim());
            const skillCount = skills.filter(skill => skill !== '').length;
            if (skillCount >= 5) {
                setFormData({ ...formData, [name]: value });
                setError({ ...Error, [name]: false });
                setNav(true)
            } else {
                setNav(false)
                setFormData({ ...formData, [name]: value });
                setError({ ...Error, [name]: true });
            }
        }else {
            setFormData({ ...formData, [name]: value });
            setError({ ...Error, [name]: false });
        }
    };
    

    return (
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
                        <label htmlFor="experience" className=" text-sm ml-0.5">Experience (In Years)<label className=' text-orange-500 text-sm' > *</label> </label>
                        <select name="experience" id="experience" className={`px-4 py-2 border ${!Error.experience ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-full mt-1`} value={formData.experience} onChange={handleChange} >
                            <option value="">Select Experience</option>
                            <option value="Entry Level">Entry Level</option>
                            <option value="+2 years">+2 years</option>
                            <option value="+5 years">+5 years</option>
                            <option value="+10 years">+10 years</option>
                            <option value="+20 years">+20 years</option>
                        </select>
                    </div>
                    <div className="">
                        <label htmlFor="designation" className=" text-sm ml-0.5"> Current Designation<label className=' text-orange-500 text-sm' > *</label> </label>
                        <div className=" flex flex-row">
                            <input type="text" ref={Ref} id="designation" name="designation" placeholder='Enter the Designation' className={`px-4 py-2 border ${!Error.designation ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-full mt-1`} value={formData.designation} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="companyName" className=" text-sm ml-0.5">Current Company Name<label className=' text-orange-500 text-sm' > *</label> </label>
                        <div className=" flex flex-row">
                            <input type="text" id="companyName" name="companyName" placeholder='Company Name' className={`px-4 py-2 border ${!Error.companyName ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-full mt-1`} value={formData.companyName} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="engineeringSkills" className=" text-sm ml-0.5">Engineering Skills<label className=' text-orange-500 text-sm' > *</label> </label>
                        <div className=" flex flex-row">
                            <input type="text" id="engineeringSkills" name="engineeringSkills" placeholder='Eg. Quality Assurance, Quality Manager' className={`px-4 py-2 border ${!Error.engineeringSkills ? 'border-neutral-600' : 'border-red-500'} rounded-lg bg-neutral-900 w-full mt-1`} value={formData.engineeringSkills} onChange={handleChange} />
                        </div>
                        <label className={` text-sm ${!Error.engineeringSkills ? 'text-white' : 'text-red-500'} ml-1 mt-0.5`}>Select up to 5 skills you prefer</label>
                    </div>
                    <div className=" flex flex-row pt-0.5">
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
    );
};

export default Signupage25g;
