// import React from 'react';
// import "../index.css";

// const Signup = () => {
//   return (
//     <>
//       <div className="imaga">
//       </div>
//     </>
//   )
// }

// export default Signup

import React from 'react';
import "../index.css";

const Signup = () => {
  return (
    <div className="imaga flex justify-end items-center h-screen">
      <div className="w-3/4 flex justify-end p-10">
        {/* Your form */}
        <form className="flex flex-col space-y-4">
          {/* Input fields with labels */}
          <div className="flex flex-col">
            <label htmlFor="username" className="font-bold">Username:</label>
            <input type="text" id="username" name="username" className="p-1 border border-neutral-400 bg-neutral-800 w-52  mr-24" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-bold">Email:</label>
            <input type="text" id="email" name="email" className="p-1 rounded border border-gray-300 w-40" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-bold">Password:</label>
            <input type="password" id="password" name="password" className="p-1 rounded border border-gray-300 w-40" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="font-bold">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="p-1 rounded border border-gray-300 w-40" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="font-bold">Phone Number:</label>
            <input type="text" id="phoneNumber" name="phoneNumber" className="p-1 rounded border border-gray-300 w-40" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
