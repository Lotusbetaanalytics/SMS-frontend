import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./components/cards";
import CardTwo from "./components/cards/card";
import NotificationCard from "./components/cards/notificationCard";
import Info from "./components/Info";
import StudentSidebar from "./components/StudentSidebar";
import SidebarTwo from "./components/StudentSidebar/sidebar";
import Dashboard from "./screens/admin/Dashboard";
import LoginPage from "./screens/admin/LoginPage";
import ConfirmPassword from "./screens/student/confirmPassword";
import StudentDashboard from "./screens/student/dashboard";
import ForgotPassword from "./screens/student/forgotPassword";
import AcademicHistory from "./screens/student/profileScreen/academy";
import AcademicHistoryEdit from "./screens/student/profileScreen/academyEdit";
import BasicProfile from "./screens/student/profileScreen/basicProfile";
import EditBasicInfo from "./screens/student/profileScreen/basicProfileEdit";
import BioData from "./screens/student/profileScreen/biodata";
import BioDataEdit from "./screens/student/profileScreen/biodataEdit";
import FamilyData from "./screens/student/profileScreen/familydata";
import FamilyDataEdit from "./screens/student/profileScreen/familydataEdit";
import HealthData from "./screens/student/profileScreen/health";
import HealthDataEdit from "./screens/student/profileScreen/healthEdit";
import StudentLogin from "./screens/student/studentLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/student/login" exact element={<StudentLogin />} />
        <Route path="/student/forgotpassword" exact element={<ForgotPassword />} />
        <Route path="/admin/dashboard" exact element={<Dashboard />} />
        <Route path="/student/newpassword" exact element={<ConfirmPassword/>} />
        {/* <Route path="/sidebar" exact element={<StudentSidebar/>} />
        <Route path="/card" exact element={<Cards/>} />
        <Route path="/card2" exact element={<CardTwo/>} />
        <Route path="/info" exact element={<Info/>} />
        <Route path="/notification" exact element={<NotificationCard/>} /> */}
        <Route path="/student/dashboard" exact element={<StudentDashboard/>} />
        <Route path="/sidebar2" exact element={<SidebarTwo/>} />
        <Route path="/student/profile/academyhistory" exact element={<AcademicHistory/>} />
        <Route path="/student/profile/academyhistoryEdit" exact element={<AcademicHistoryEdit/>} />
        <Route path="/student/profile/basicInfo" exact element={<BasicProfile/>} />
        <Route path="/student/profile/basicInfoEdit" exact element={<EditBasicInfo/>} />
        <Route path="/student/profile/biodata" exact element={<BioData/>} />
        <Route path="/student/profile/biodataEdit" exact element={<BioDataEdit/>} />
        <Route path="/student/profile/healthdata" exact element={<HealthData/>} />
        <Route path="/student/profile/healthdataEdit" exact element={<HealthDataEdit/>} />
        <Route path="/student/profile/familydata" exact element={<FamilyData/>} />
        <Route path="/student/profile/familydataEdit" exact element={<FamilyDataEdit/>} />
      </Routes>
    </Router>
  );
}

export default App;
