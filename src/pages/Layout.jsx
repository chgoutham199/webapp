import React from 'react';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom'; // Ensure correct import
import Header from '../components/Header';
import ProfileBar from '../components/ProfileBar'; // Ensure this is imported if needed globally

export default function Layout() {
    return (
        <div className='bg-black flex flex-row h-screen w-screen overflow-hidden'>
            <SideBar />
            <div className='flex-1 text-white relative'> {/* Ensure Header has a positioning context if needed */}
                <Header />
                <div className='p-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
