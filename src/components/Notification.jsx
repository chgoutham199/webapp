import React, { useState } from 'react';

const Notification = () => {
  const [displayCount, setDisplayCount] = useState(3);

  const notifications = new Array(3).fill({
    id: 1,
    message: "New Community member Validated your Product Attributes from Catalog No. 540043.",
    time: "40 minutes ago"
  });

  const viewMore = () => {
    setDisplayCount(displayCount + 16);
  };
 const handleClear = () => {
       setDisplayCount(0)
 }
  return (
<div className="absolute right-0 top-full mt-2 w-80 h-80 rounded-sm shadow-lg p-4 z-10 bg-neutral-950 ">
  <div className="flex justify-between items-center mb-2">
    <h2 className="font-semibold text-lg">Notifications</h2>
    <button onClick={handleClear} className={`text-sm ${displayCount==0 ?"text-neutral-600":"text-orange-400" } font-medium mr-1`} style={{fontSize:"13px"}}>Clear all</button>
  </div>
  {displayCount === 0  ? (
   
   <div className='flex items-center justify-center h-64 text-orange-400 font-normal text-sm'>

      0 New Notifications
    </div>
  ) : (
    <div>
      {notifications.map((notification, index) => (
        <div key={index} className="border border-neutral-800 rounded p-3 mb-2 flex  ">
            <div className='h-full pr-2'>
                <div className="bg-white rounded-full h-4 w-4 mt-1"></div>

<<<<<<< HEAD
    const highlightNumbers = (message) => (
        <span dangerouslySetInnerHTML={{ __html: message.replace(/(\d+)/g, '<span class="text-orange-500">$1</span>') }}></span>
    );

    return (
        <div className="absolute right-0 top-full mt-1 w-96 bg-gray-700 text-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-600">
                <h2 className="text-lg font-semibold">Notifications</h2>
                <button onClick={clearAllNotifications} className="text-orange-500 hover:text-orange-300 text-sm">Clear all</button>
            </div>
            {notifications.length > 0 ? (
                <ul className="divide-y bg-gray-900 max-h-96 overflow-y-auto">
                    {notifications.map(notification => (
                        <li key={notification.id} className="px-4 py-3 flex items-center space-x-4 bg-transparent text-white rounded-md my-1 shadow">
                            <span className="flex-shrink-0 w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11h-2v4h2V7zm0 6h-2v2h2v-2z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <div className="flex-1">
                                <p className="text-sm">{highlightNumbers(notification.message)}</p>
                                <p className="text-xs text-gray-400">{notification.time}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center py-4 text-sm text-orange-500">
                    0 New Notifications
                </div>
            )}
            <div className="text-center py-2 text-sm text-gray-400">
                {notifications.length > 0 ? "15 more unread notifications" : ""}
=======
            </div>
            <div> 
          <p className='text-xs text-neutral-#00'>{notification.message}</p>
          <p className=" text-neutral-500" style={{fontSize:"10px"}}>{notification.time}</p>

>>>>>>> daef8dd8e2dd3a7c2f35ebfea79c6500845c786b
            </div>
        </div>
      ))}
      <div className='flex justify-center border items-center rounded-sm border-neutral-800'>

      <button onClick={viewMore} className="text-xs text-orange-500 font-normal py-1">View 16 more notifications</button>
        </div>
    </div>
  )}
</div>
);
};

export default Notification;