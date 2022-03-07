import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Input from "./components/Input";
import Dashboard from "./screens/admin/Dashboard";
import LoginPage from "./screens/admin/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/input" exact element={<Input />} />
        <Route path="/admin/dashboard" exact element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
