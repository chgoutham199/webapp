import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import  Home  from "./pages/Home"
import AddProduct from "./pages/AddProduct";
import Signup from "./components/Signup";
import Login from "./components/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path="/home/AddProduct" element={<AddProduct/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}