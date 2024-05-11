import React, { useState ,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { FaCaretDown } from 'react-icons/fa';
import Notification from './Notification';
import ProfileBar from './ProfileBar'; 
import { ChevronLeft } from 'lucide-react';
export default function Header() {
    const location = useLocation();
    const [isNotificationOpen, setNotificationOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false); 
    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentDate(new Date());
      }, 60000); // Updates every minute
      return () => clearInterval(timer);
    }, []);

    let headerText;
    switch (location.pathname) {
        case '/search':
            headerText = 'Home';
            break;
        case '/search/ProductVariants':
            headerText = 'Product Profile';
            break;
        case '/search/AddProduct':
            headerText = 'Add Product';
            break;
        default:
            headerText = 'Unknown';
    }
    const formattedDate=currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

    const toggleNotification = (e) => {
        setNotificationOpen(!isNotificationOpen);
      };

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
        if (isNotificationOpen) setIsNotificationOpen(false); 
    };

    return (
        <div className='relative flex p-4 h-16 items-center justify-between mr-4'>
            <div className='flex items-center gap-3'>
                <Link to='/search' className=''>
                {location.pathname!="/search" && <ChevronLeft className='text-orange-500' size={28}/> }
                </Link>
                    <h1 className='font-semibold text-xl flex flex-wrap '>
                         <span className='text-orange-500'>{headerText}</span>
                    </h1>
                
            </div>
            <div className='pr-2 mr-2'>
                <ul className='flex gap-4 w-full items-center'>
                    <li className='text-neutral-400 font-normal text-xs cursor-default'>
                        {formattedDate}
                    </li>
                    <li onClick={toggleNotification} className='hover:text-orange-500 cursor-pointer'>
                        <img src='/Notification.svg' alt="Notification" className='w-6' />
                    </li>
                    {isNotificationOpen && <Notification  />}
                    <li className='flex flex-col hover:text-orange-500'>
                        <span className='text-sm cursor-pointer'>Aisha Sharma</span>
                        <span className='text-xs font-extralight text-neutral-400 '>Fresher</span>
                    </li>
                    <li className='flex items-center gap-3 hover:opacity-50 cursor-pointer ' onClick={toggleProfile}>
                        <CgProfile size={30} />
                        <FaCaretDown size={15} />
                    </li>
                    {isProfileOpen && <ProfileBar />}
                </ul>
            </div>
        </div>
    );
}