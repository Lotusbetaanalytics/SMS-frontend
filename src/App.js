import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import StudentSidebar from "./components/Sidebar";
import {  ConfirmPassword, DashBoard, ForgotPassword, Home } from "./screens";









function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/student/forgotpassword" exact element={<ForgotPassword />} />
        <Route path="/student/dashboard" exact element={<DashBoard />} />
        <Route path="/student/newpassword" exact element={<ConfirmPassword/>} />
        <Route path="/sidebar" exact element={<StudentSidebar/>} />
        
        
        
       
      </Routes>
    </Router>
  );
}

export default App;
