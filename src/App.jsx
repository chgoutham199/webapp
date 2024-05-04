import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import  Home  from "./pages/Home"
import AddProduct from "./pages/AddProduct";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
        <Route path="/search" element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path="/search/AddProduct" element={<AddProduct/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}