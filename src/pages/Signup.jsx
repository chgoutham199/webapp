import React, { useState } from 'react';
import "../index.css";

const Signup = () => {

  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 122 }, (_, i) => currentYear - i);

  return (
    <div className="imaga flex justify-center items-center h-screen text-white">
      <div className="w-3/4 flex justify-center ml-72 mt-9 p-5 mb-10">
        <form className="flex flex-col space-y-2">
          <div className="">
            <img src='./logo.svg' className='w-52 cursor-pointer ml-36' />
          </div>
          <div className="h-0.5 w-full bg-gradient-to-r from-neutral-800 via-orange-800 to-orange-400"></div>
          <div className="flex flex-col">
            <label htmlFor="username" className=" text-sm ml-0.5">Enter Full Name<label className=' text-orange-500 text-sm' > *</label> </label>
            <div className=" flex flex-row">
              <input type="text" id="username" name="username" placeholder='First Name' className="px-4 py-2 border border-neutral-600 rounded-lg bg-neutral-800 w-1/2 mt-1" />
              <input type="text" id="username" name="username" placeholder='Last Name' className="px-4 py-2 ml-4 border border-neutral-600 rounded-lg bg-neutral-800 w-1/2 mt-1" />
            </div>
          </div>
          <div className="">
            <label htmlFor="dob" className="text-sm ml-0.5">Select DOB
              <label className='text-orange-500 text-sm'> *</label>
            </label>
            <div className="flex flex-row">
              <select id="day" name="day" className="px-4 py-2 border border-neutral-600 rounded-lg bg-neutral-800 w-40 mt-1 text-gray-400 scrollbar-nav1" value={selectedDay} onChange={handleDayChange}>
                <option value="">Day</option>
                {[...Array(31).keys()].map(day => (
                  <option key={day + 1} value={day + 1}>{day + 1}</option>
                ))}
              </select>
              <select id="month" name="month" className="px-4 py-2 ml-3 border border-neutral-600 rounded-lg bg-neutral-800 w-40 mt-1 text-gray-400 scrollbar-nav1" value={selectedMonth} onChange={handleMonthChange}>
                <option value="">Month</option>
                {[...Array(12).keys()].map(month => (
                  <option key={month + 1} value={month + 1}>{month + 1}</option>
                ))}
              </select>
              <select id="year" name="year" className="px-4 py-2 ml-3 border border-neutral-600 rounded-lg bg-neutral-800 w-40 mt-1 text-gray-400 scrollbar-nav1" value={selectedYear} onChange={handleYearChange}>
                <option value="">Year</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="">
            <label htmlFor="password" className=" text-sm">Select Gender
              <label className=' text-orange-500 ml-1' > *</label>
            </label>
            <select className="px-4 py-2 border border-neutral-600 rounded-lg bg-neutral-800 w-full mt-1 text-gray-400">
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Others</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="confirmPassword" className="font-bold">Select District <label className=' ml-1 text-orange-500'>*</label></label>
            <select className="px-4 py-2 border border-neutral-600 rounded-lg bg-neutral-800 w-full mt-1 text-gray-400">
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Others</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="phoneNumber" className="font-bold">Select State <label className=' ml-1 text-orange-500'>*</label></label>
            <select className="px-4 py-2 border border-neutral-600 rounded-lg bg-neutral-800 w-full mt-1 text-gray-400">
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Others</option>
            </select>
          </div>
          <div className=""></div>
        </form>
      </div>
    </div>
  );
};

export default Signup;