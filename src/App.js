import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LectureSidebar from "./components/lecturerSidebar";
import StudentSidebar from "./components/Sidebar";
import {  AcademyData, Assignment, AvailableCourses, BasicProfile, BioData, ConfirmPassword, CourseRegisteration, DashBoard, EditAcademyData, EditBasicProfile, Editbiodata, Editfamilydata, EditHealthdata, EditLecturerProfile, FamilyData, ForgotPassword, HealthData, Home, LecturerProfile, ProfilePicture, StartPage, TestList, TestScreen } from "./screens";
import LecturerDashboard from "./screens/Staff/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/student/forgotpassword" exact element={<ForgotPassword />} />
        <Route path="/student/dashboard" exact element={<DashBoard />} />
        <Route path="/student/newpassword" exact element={<ConfirmPassword/>} />
        <Route path="/sidebar" exact element={<StudentSidebar/>} />
        <Route path="/student/profile/basic" exact element={<BasicProfile/>} />
        <Route path="/student/profile/basic/edit" exact element={<EditBasicProfile/>} />
        <Route path="/student/profile/biodata" exact element={<BioData/>} />
        <Route path="/student/profile/academy" exact element={<AcademyData/>} />
        <Route path="/student/profile/academy/edit" exact element={<EditAcademyData/>} />
        <Route path="/student/profile/biodata/edit" exact element={<Editbiodata/>} />
        <Route path="/student/profile/health" exact element={<HealthData/>} />
        <Route path="/student/profile/health/edit" exact element={<EditHealthdata/>} />
        <Route path="/student/profile/family" exact element={<FamilyData/>} />
        <Route path="/student/profile/family/edit" exact element={<Editfamilydata/>} />
        <Route path="/student/course/registeration" exact element={<AvailableCourses/>} />
        <Route path="/student/course/registered" exact element={<CourseRegisteration/>} />
        <Route path="/student/test" exact element={<TestList/>} />
        <Route path="/student/test/:id" exact element={<StartPage/>} />
        <Route path="/student/test/testscreen" exact element={<TestScreen/>} />
        <Route path="/student/profile/picture" exact element={<ProfilePicture/>} />
        <Route path="/lecturer" exact element={<LectureSidebar/>} />
        <Route path="/lecturer/dashboard" exact element={<LecturerDashboard/>} />
        <Route path="/lecturer/profile" exact element={<LecturerProfile/>} />
        <Route path="/lecturer/profile/edit" exact element={<EditLecturerProfile/>} />
        <Route path="/lecturer/assessment/assignment" exact element={<Assignment/>} />
      </Routes>
    </Router>
  );
}

export default App;
