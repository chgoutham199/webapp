import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import  Home  from "./pages/Home"
import AddProduct from "./pages/AddProduct";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path="/AddProduct" element={<AddProduct/>} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
