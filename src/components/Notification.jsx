import React, { useState } from 'react';

const Notification = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, message: "New Community member Validated your Product Attributes from Catalog No. 540043.", time: "40 minutes ago" },
        { id: 2, message: "A Community member made your Product Attributes Go Live from Catalog No. 502006.", time: "55 minutes ago" },
        { id: 3, message: "You can Add 2 more Catalog to your Product Asset Now.", time: "2 hours ago" }
    ]);

    const clearAllNotifications = () => {
        setNotifications([]); 
    };

    return (
        <div className="absolute right-0 top-full mt-1 w-96 bg-black text-white rounded-lg shadow-lg z-50 overflow-hidden">
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
                <h2 className="text-lg font-semibold">Notifications</h2>
                <button onClick={clearAllNotifications} className="text-orange-600 hover:text-gray-400 text-sm">Clear all</button>
            </div>
            {notifications.length > 0 ? (
                <ul className="divide-y divide-gray-700 max-h-96 overflow-y-auto">
                    {notifications.map(notification => (
                        <li key={notification.id} className="px-4 py-3 flex items-center space-x-4">
                            <span className="flex-shrink-0 w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11h-2v4h2V7zm0 6h-2v2h2v-2z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <div className="flex-1">
                                <p className="text-sm">{notification.message}</p>
                                <p className="text-xs text-gray-400">{notification.time}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center py-4 text-sm text-orange-600">
                    0 New Notifications
                </div>
            )}
            <div className="text-center py-2 text-sm text-gray-400">
                {notifications.length > 0 ? "15 more unread notifications" : ""}
            </div>
        </div>
    );
};

export default Notification;
