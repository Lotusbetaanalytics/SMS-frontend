import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AcademicData from "./screens/AcademicData";
import ConfirmPassword from "./screens/Auth/ConfirmPassword";
import ForgetPassword from "./screens/Auth/ForgetPassword";
import LoginPage from "./screens/Auth/LoginPage";
import Dashboard from "./screens/Dashboard";
import Faculty from "./screens/Faculty";
import FamilyData from "./screens/FamilyData";
import HealthData from "./screens/HealthData";
import NewDepartment from "./screens/NewDepartment";
import Profile from "./screens/Profile";
import StaffData from "./screens/StaffData";
import StudentData from "./screens/StudentData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route
          path="/staff/confirmpassword"
          exact
          element={<ForgetPassword />}
        />
        <Route
          path="/auth/confirmpassword"
          exact
          element={<ConfirmPassword />}
        />
        <Route path="/admin/dashboard" exact element={<Dashboard />} />
        <Route path="/admin/profile" exact element={<Profile />} />
        <Route path="/admin/staffs" exact element={<StaffData />} />
        <Route path="/admin/student" exact element={<StudentData />} />
        <Route path="/admin/academicdata" exact element={<AcademicData />} />
        <Route path="/admin/healthdata" exact element={<HealthData />} />
        <Route path="/admin/familydata" exact element={<FamilyData />} />
        <Route path="/admin/faculty" exact element={<Faculty />} />
        <Route path="/admin/department" exact element={<NewDepartment />} />
      </Routes>
    </Router>
  );
}

export default App;
