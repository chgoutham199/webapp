import { FiEye, FiEyeOff } from "react-icons/fi";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { IoMdCheckmark } from "react-icons/io";
export default function SignupPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [strength, setStrength] = useState(0);
  const [conditons, setConditions] = useState({
    length: false,
    upper: false,
    number: false,
    special: false,
  })
  const navigate = useNavigate();
  const passwordRef = useRef();
  useEffect(() => {
    passwordRef.current.focus();
  }, []);
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleToggle1 = () => {
    setShowPassword1(!showPassword1);
  };
  const handleChange = (e) => {
    let value = e.target.value;
    value=value.trim()
    setPassword(value);
  
    let newStrength = 0;
    let newConditions = { ...conditons };
  
    if (value.length >= 8) {
      newStrength++;
      newConditions.length = true;
    } else {
      newConditions.length = false;
    }
  
    if (/[A-Z]/.test(value)) {
      newStrength++;
      newConditions.upper = true;
    } else {
      newConditions.upper = false;
    }
  
    if (/[0-9]/.test(value)) {
      newStrength++;
      newConditions.number = true;
    } else {
      newConditions.number = false;
    }
  
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)) {
      newStrength++;
      newConditions.special = true;
    } else {
      newConditions.special = false;
    }
    if (e.target.value.length > 0) {
      newStrength++;
    }
    if (e.target.value.length > 4) {
      newStrength++;
    }

    console.log(newStrength);
    setStrength(newStrength);
    setConditions(newConditions);
  };
 const handleSubmit = (e) => {
    e.preventDefault();
    if(password==password1 && conditons.length && conditons.upper && conditons.number && conditons.special && password.length>=8){
     navigate("/signup");  
 }
}
  return (
    <div className="flex flex-col mt-3 pt-3 ">
      <div className="flex flex-col  gap-2 ">
        <span className="text-orange-400 font-semibold text-2xl mx-auto shadow-md">
          Password Validation{" "}
        </span>
        <span className="text-neutral-600 mx-auto   shadow-md">
          Enter New password
        </span>
      </div>
      <hr className="custom-hr flex w-3/6 mt-4 mx-auto " />
      <div className="flex w-screen max-h-screen flex-col">
        <form className="flex flex-col  w-full " onSubmit={handleSubmit}>
          <div className="flex flex-col  relative w-1/3 mt-6 mb-1  gap-1 mx-auto">
            <label
              for="password"
              className="text-neutral-300 text-sm font-semibold "
            >
              *Enter New Password
            </label>
            <input
              ref={passwordRef}
              value={password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`bg-neutral-900 p-2 pl-3 border ${
                notFound ? "border-red-600" : "border-neutral-600"
              }  rounded-lg text-white placeholder-neutral-600 placeholder:text-sm font-normal shadow-sm`}
              required
              minLength={8}
              maxLength={20}
            />
            {showPassword ? (
              <FiEyeOff
                className="absolute top-9 right-4 text-neutral-500 cursor-pointer"
                onClick={handleToggle}
              />
            ) : (
              <FiEye
                className="absolute top-9 right-4 text-neutral-500 cursor-pointer"
                onClick={handleToggle}
              />
            )}
          </div>
          <div className="flex justify-between w-1/3 mx-auto p-2">
            <span
              className={`border border-neutral-600 ${
                strength > 0 ? " bg-red-600 " : ""
              }  w-16 h-1.5 rounded-xl`}
            ></span>
            <span
              className={`border border-neutral-600 ${
                strength > 1 ? " bg-orange-600 " : ""
              }  w-16 h-1.5 rounded-xl`}
            ></span>
            <span
              className={`border border-neutral-600 ${
                strength > 2 ? " bg-yellow-600 " : ""
              }  w-16 h-1.5 rounded-xl`}
            ></span>
            <span
              className={`border border-neutral-600 ${
                strength > 3 ? " bg-yellow-300 " : ""
              }  w-16 h-1.5 rounded-xl`}
            ></span>
            <span
              className={`border border-neutral-600 ${
                strength > 4 ? " bg-lime-400 " : ""
              }  w-16 h-1.5 rounded-xl`}
            ></span>
            <span
              className={`border border-neutral-600 ${
                strength > 5 ? " bg-green-600 " : ""
              }  w-16 h-1.5 rounded-xl`}
            ></span>
          </div>
          <span className="text-neutral-400 text-xs font-semibold w-1/3 mx-auto ">
            PASSWORD MUST CONTAIN
          </span>

          <div className="flex flex-col w-1/3 mx-auto mt-2 gap-1 justify-start ">
            <div className="flex items-center gap-2">
              <span
                className={`${conditons.length ? "text-green-400" : " text-neutral-400 "}  font-normal  `}
                style={{ fontSize: "11px" }}
              >
                Between 8 and 20 characters
              </span>
            { conditons.length && <IoMdCheckmark className="text-green-400 font-light i" size={12} />}
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`${conditons.upper? "text-green-400" : " text-neutral-400 "}  font-normal  `}
                style={{ fontSize: "11px" }}
              >
                1 or more upper case letters
              </span>{" "}
              { conditons.upper && <IoMdCheckmark className="text-green-400  font-light" size={12} />}
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`${conditons.number ? "text-green-400" : " text-neutral-400 "}  font-normal  `}
                style={{ fontSize: "11px" }}
              >
                1 or more numbers
              </span>{" "}
              {conditons.number && <IoMdCheckmark className="text-green-400  font-light" size={12} /> }
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`${conditons.special ? "text-green-400" : " text-neutral-400 "}  font-normal  `}
                style={{ fontSize: "11px" }}
              >
                1 or more special characters
              </span>{" "}
             {conditons.special &&  <IoMdCheckmark className="text-green-400  font-light" size={12} /> }
            </div>
          </div>

          <div className="flex flex-col  relative w-1/3 mt-1   gap-1 mx-auto">
            <label
              for="password"
              className="text-neutral-300 text-sm font-semibold"
            >
              *Re-enter Password
            </label>
            <input
              type={showPassword1 ? "text" : "password"}
              onChange={(e) => setPassword1(e.target.value.trim())}
              placeholder="Confirm password"
              className={`bg-neutral-900 p-2 pl-3 border ${
                notFound ? "border-red-600" : "border-neutral-600"
              }  rounded-lg text-white placeholder-neutral-600 placeholder:text-sm font-normal shadow-sm`}
              required
              minLength={8}
              maxLength={20}
            />
            {showPassword1 ? (
              <FiEyeOff
                className="absolute top-9 right-4 text-neutral-500 cursor-pointer"
                onClick={handleToggle1}
              />
            ) : (
              <FiEye
                className="absolute top-9 right-4 text-neutral-500 cursor-pointer"
                onClick={handleToggle1}
              
              />
            )}
           {password ===password1 && password!="" && <span className="text-green-500  font-semibold" style={{fontSize:"11px"}}>PASSWORD MATCHED</span> }
          </div>

          <div className="flex  justify-between w-screen mx-auto pt-6">
            <button
              type="submit"
              
              className=" bg-orange-500 text-white rounded-lg w-1/3 mx-auto p-2 hover:opacity-70"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
