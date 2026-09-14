import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import { ToastContainer, toast } from 'react-toastify';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path ="/register" element={<Register/>} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;