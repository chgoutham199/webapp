import React, { useState, useEffect } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaCaretDown } from 'react-icons/fa';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Notification from './Notification';
export default function Header() {
  const location = useLocation();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Updates every minute
    return () => clearInterval(timer);
  }, []);
    const formattedDate=currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  let headerText;
  switch (location.pathname) {
    case '/':
      headerText = 'Home';
      break;
    case '/AddProduct':
      headerText = 'Add Product';
      break;
    default:
      headerText = 'Unknown';
  }
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };
  return (
    
     <div className='relative flex p-4 h-16  items-center justify-between  '>
      <div className=''>
       <Link to='/'>
            <h1 className='font-semibold text-xl flex flex-wrap'>
              <span className='text-orange-500'>{headerText}</span>
            </h1>
          </Link>
        </div>
         <div className='pr-2 mr-2'>
        <ul className='flex gap-4 w-full items-center '>
          <li className='text-neutral-400 font-normal text-xs cursor-default'>
              {formattedDate}
            </li>    
           <li onClick={toggleNotification} className='hover:text-orange-500 cursor-pointer'>
              <IoIosNotificationsOutline  size={25} />
            </li> 
            {isNotificationOpen && <Notification />}
            <li className='flex flex-col hover:text-orange-500 '>
                 <span className='text-sm cursor-pointer'>Aisha Sharma</span>
                 <span className='text-xs font-extralight text-neutral-400'>Fresher</span>
            </li>
            <li className=' cursor-pointer hover:opacity-55 '>
            <CgProfile size={35} />
            </li>
            <li className=' cursor-pointer hover:opacity-55 '>
            <FaCaretDown />
              </li>
        </ul>
        </div>
     </div>
  );
}