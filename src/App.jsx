import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgotlayout from "./pages/forgotlayout";
import ForgotEmail from "./pages/ForgotEmail";
import ProductVariants from "./pages/ProductVariants";
import Layout from "./pages/Layout";
import Home from "./pages/Home"
import AddProduct from "./pages/AddProduct";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotOtp from "./pages/ForgotOtp";
import SetPassword from "./pages/SetPassword";
import Signupage25g from "./components/Signupage25g";
import Signuppage2g from "./components/Signuppage2g";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotpassword" element={<Forgotlayout />}>
          <Route index element={<ForgotEmail />} />
          <Route path="/forgotpassword/verifyotp" element={<ForgotOtp />} />
          <Route path="/forgotpassword/setpassword" element={< SetPassword />} />
          
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupg" element={<Signupage25g />} />
        <Route path="/signup2g" element={<Signuppage2g/>}/>
        <Route path="/search" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/search/AddProduct" element={<AddProduct />} />
          <Route path="/search/product-variants" element={<ProductVariants />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}