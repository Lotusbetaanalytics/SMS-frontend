import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddCourses from "./screens/admin/AddCourses";
import Dashboard from "./screens/admin/Dashboard";
import Department from "./screens/admin/Department";
import Faculty from "./screens/admin/Faculty";
import ForgotPassword from "./screens/admin/ForgotPassword";
import ConfirmPassword from "./screens/admin/ForgotPassword/ConfirmPassword";
import LoginPage from "./screens/admin/LoginPage";
import NewStaff from "./screens/admin/NewStaff";
import NewStudent from "./screens/admin/NewStudent";
import NoticeBoard from "./screens/admin/NoticeBoard";
import RegisterCourses from "./screens/admin/RegisterCourses";
import Specialization from "./screens/admin/Specialization";
import UserDataForm from "./screens/admin/UserDataForm";
import ViewstudentDetails from "./screens/admin/ViewStudentDetails";
import ViewStudentInfo from "./screens/admin/ViewStudentInfo";
import ViewStaffDetails from "./screens/admin/ViewStaffDetails";
import ViewStaffInfo from "./screens/admin/ViewStaffInfo";
import Information from "./screens/admin/Information";
import { InformationImage } from "./screens/admin/InformationImage";
import ViewInformation from "./screens/admin/ViewInformation";
import BioData from "./screens/admin/BioData";
import AcademicHistory from "./screens/admin/AcademicHistory";
import HealthData from "./screens/admin/HealthData";
import FamilyData from "./screens/admin/FamilyData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/admin/dashboard" exact element={<Dashboard />} />
        <Route path="/admin/newstudent" exact element={<NewStudent />} />
        <Route
          path="/staff/forgotpassword"
          exact
          element={<ForgotPassword />}
        />
        <Route
          path="/staff/confirmpassword"
          exact
          element={<ConfirmPassword />}
        />
        <Route path="/staff/newstaff" exact element={<NewStaff />} />
        <Route path="/staff/newfaculty" exact element={<Faculty />} />
        <Route path="/staff/newdepartment" exact element={<Department />} />
        <Route
          path="/staff/registercourses"
          exact
          element={<RegisterCourses />}
        />
        <Route path="/staff/noticeboard" exact element={<NoticeBoard />} />
        <Route
          path="/informationimage/:id"
          exact
          element={<InformationImage />}
        />
        <Route
          path="/staff/specialization"
          exact
          element={<Specialization />}
        />

        <Route path="/student/addcourse" exact element={<AddCourses />} />

        <Route path="/user/formdata" exact element={<UserDataForm />} />
        <Route
          path="/staff/viewstudent"
          exact
          element={<ViewstudentDetails />}
        />
        <Route
          path={"/viewstudentsinfo/:id"}
          exact
          element={<ViewStudentInfo />}
        />
        <Route path={"/staff/viewstaff"} exact element={<ViewStaffDetails />} />
        <Route path={"/viewstaffsinfo/:id"} exact element={<ViewStaffInfo />} />
        <Route path={"/viewinformation"} exact element={<ViewInformation />} />
        <Route path={"/staff/information"} exact element={<Information />} />
        <Route path={"/user/biodata"} exact element={<BioData />} />
        <Route path={"/user/healthdata"} exact element={<HealthData />} />
        <Route path={"/user/familydata"} exact element={<FamilyData />} />
        <Route
          path={"/user/academichistory"}
          exact
          element={<AcademicHistory />}
        />
        {/* <Route path={"/sidebarone"} exact element={<SidebarOne />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
