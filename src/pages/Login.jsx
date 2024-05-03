import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "../components/LoginHeader";
import LoginFooter from "../components/LoginFooter";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../index.css";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handlenav = () => {
    navigate("/search");
  };
  console.log(formData)

  const handlenave = () => {
    navigate("/signup");
  };
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-neutral-900 h-screen w-screen text-white  mx-auto">
      <LoginHeader />
      <div className="justify-center flex items-center pt-8 mt-8 pb-2 ">
        <img src="./logo.svg" className="w-60  " />
      </div>
      <div className="flex flex-col pt-3">
        <form
          className="flex flex-col gap-5   items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-3 w-1/3 ">
            <input
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              type="text"
              placeholder="Enter E-mail Address"
              className="bg-neutral-900 p-2 pl-3 border border-neutral-600 rounded-lg text-white  placeholder-neutral-600 placeholder:text-sm font-normal shadow-sm "
              required
            />
          </div>
          <div className="flex flex-col relative w-1/3">
            <input
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="bg-neutral-900 p-2 pl-3 border border-neutral-600  rounded-lg text-white placeholder-neutral-600 placeholder:text-sm font-normal shadow-sm"
              required
           />
            {showPassword ? (
              <FiEyeOff
                className="absolute top-3 right-4 text-neutral-500 cursor-pointer"
                onClick={handleToggle}
              />
            ) : (
              <FiEye
                className="absolute top-3 right-4 text-neutral-500 cursor-pointer"
                onClick={handleToggle}
              />
            )}
          </div>
          <div className="flex flex-col items-end justify-end w-1/3">
            <span className="text-orange-500 underline cursor-pointer hover:opacity-75 ">
              Forgot Password?
            </span>
          </div>
          <div className=" flex flex-col gap-3 w-1/3 ">
            <button
              className="p-2 bg-orange-500 rounded-lg hover:opacity-85"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="pt-4">
        <hr className="custom-hr flex w-3/6 mt-5 mx-auto " />
      </div>
      <div className="flex justify-center pt-4">
      Don't have an account?  <span className="text-orange-500  cursor-pointer hover:opacity-75 pl-1" onClick={handlenave}>Sign Up</span>
      </div>
      <LoginFooter />
    </div>
  );
};

export default Login;
