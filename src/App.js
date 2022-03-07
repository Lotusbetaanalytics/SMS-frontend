import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Input from "./components/Input";
import LoginPage from "./screens/admin/LoginPage";
import StudentPage from "./screens/student/studentLogin";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/student/login" exact element={<StudentPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
