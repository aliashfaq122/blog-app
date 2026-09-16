import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import { ToastContainer, toast } from 'react-toastify';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path ="/register" element={<Register/>} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;