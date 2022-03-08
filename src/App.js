import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./components/cards";
import Info from "./components/Info";
import StudentSidebar from "./components/StudentSidebar";
import Dashboard from "./screens/admin/Dashboard";
import LoginPage from "./screens/admin/LoginPage";
import ConfirmPassword from "./screens/student/confirmPassword";
import StudentDashboard from "./screens/student/dashboard";
import ForgotPassword from "./screens/student/forgotPassword";
import StudentLogin from "./screens/student/studentLogin";
// import StudentPage from "./screens/student/studentLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/student/login" exact element={<StudentLogin />} />
        <Route path="/admin/dashboard" exact element={<Dashboard />} />
        <Route path="/student/forgotpassword" exact element={<ForgotPassword/>} />
        <Route path="/student/newpassword" exact element={<ConfirmPassword/>} />
        <Route path="/sidebar" exact element={<StudentSidebar/>} />
        <Route path="/card" exact element={<Cards/>} />
        <Route path="/info" exact element={<Info/>} />
        <Route path="/student/dashboard" exact element={<StudentDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
