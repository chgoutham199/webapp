import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { FaCaretDown } from 'react-icons/fa';
import Notification from './Notification';
import ProfileBar from './ProfileBar'; 

export default function Header() {
    const location = useLocation();
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false); 

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

    function getFormattedDate() {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth();
        const weekday = today.getDay();
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return `${day} ${months[month]}, ${weekdays[weekday]}`;
    }

    const formattedDate = getFormattedDate();

    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
        if (isProfileOpen) setIsProfileOpen(false); 
    };

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
        if (isNotificationOpen) setIsNotificationOpen(false); 
    };

    return (
        <div className='relative flex p-4 h-16 items-center justify-between mr-4'>
            <div>
                <Link to='/'>
                    <h1 className='font-semibold text-xl flex flex-wrap'>
                        <span className='text-orange-500'>{headerText}</span>
                    </h1>
                </Link>
            </div>
            <div className='pr-2 mr-2'>
                <ul className='flex gap-4 w-full items-center'>
                    <li className='text-neutral-400 font-light text-xs cursor-default'>
                        {formattedDate}
                    </li>
                    <li onClick={toggleNotification} className='hover:text-orange-500 cursor-pointer'>
                        <IoIosNotificationsOutline size={25} />
                    </li>
                    {isNotificationOpen && <Notification />}
                    <li className='flex flex-col hover:text-orange-500'>
                        <span className='text-sm cursor-pointer'>Aisha Sharma</span>
                        <span className='text-xs font-extralight text-neutral-400 '>Fresher</span>
                    </li>
                    <li className='flex items-center hover:text-orange-500 cursor-pointer ' onClick={toggleProfile}>
                        <CgProfile size={35} />
                        <FaCaretDown size={25} />
                    </li>
                    {isProfileOpen && <ProfileBar />}
                </ul>
            </div>
        </div>
    );
}
