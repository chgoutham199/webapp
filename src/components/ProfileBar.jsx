import React from 'react';

const ProfileBar = () => {
    return (
        <div className="fixed top-16 right-0 w-80 h-[calc(100%-4rem)] bg-black text-white z-50 overflow-y-auto">
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-white">Hi, Madhav</h2>
                    <div className="text-gray-400">Your Profile</div>
                    <span className="cursor-pointer">
                    </span>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg my-2">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">History</h3>
                </div>
                <div className="flex justify-between text-sm mt-2">
                    <div>
                        <p>Previous Assets</p>
                        <p className="font-bold text-lg">16</p>
                    </div>
                    <div>
                        <p className='mr-6'>Previously Live</p>
                        <p className="font-bold text-lg">06</p>
                    </div>
                </div>
                <span className="text-blue-500 cursor-pointer text-right block w-full">View more</span>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg my-2">
                    <h3 className="text-lg font-semibold text-white">Earnings</h3>
                    <div className="flex justify-between text-sm mt-2">
                        <div>
                            <p>UBC Wallet</p>
                            <p className="font-bold text-lg">₹21,320</p>
                            </div>
                                <div>
                                        <p className='mr-6'>Total Earnings</p>
                                        <p className="font-bold text-lg">₹85,320</p>
                                    </div>
                                </div>
                <h4 className="text-md font-semibold mb-2 text-orange-500 mt-4">Catalog Earnings</h4>
                <div className="flex justify-between text-sm mb-1 gap-2">
                    <p>Washing Machine</p>
                    <p className="font-bold text-right gap-2">₹38,012/Month</p>
                </div>
                <div className="flex justify-between text-sm mb-1 gap-2">
                    <p>Laptop</p>
                    <p className="font-bold text-right gap-2">₹12,000/Month</p>
                </div>
                <div className="flex justify-between text-sm gap-2">
                    <p>Smart Watch</p>
                    <p className="font-bold text-right gap-2">₹22,005/Month</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileBar;