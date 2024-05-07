import React, { useState } from 'react';
import "../index.css";
import Signupfirst from '../components/Signupfirst';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate()

  return (
   <>
   <Signupfirst/>
   </>
  );
};

export default Signup;
