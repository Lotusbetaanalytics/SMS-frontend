import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import { totalStudent } from "../../../redux/action/getAllUsersAction";
import styles from "./styles.module.css";

function ViewStudentInfo() {
  const dispatch = useDispatch();
  let { id } = useParams();

  // const id = match.params.id;

  console.log(id);

  const studentInfo = JSON.parse(localStorage.getItem("getAllStudents"));
  const studentDetails = studentInfo;
  // console.log(studentDetails.results[0].user.email);

  useEffect(() => {
    dispatch(totalStudent());
  }, [dispatch]);

  const totalStudentNo = useSelector((state) => state.totalStudentNo);
  const { allStudent = [] } = totalStudentNo;
  const data = allStudent.filter((x) => x._id === id);
  console.log(studentDetails && studentDetails.results && data[0]);

  return (
    <div className={styles.viewInfoContainer}>
      <Sidebar />
      <Header />

      <div className={styles.viewInfo}>
        <div className={styles.viewInfoBtn}></div>
        <Link to="/staff/viewstudent">
          <button>Back</button>
        </Link>
        <div className="gridBox">
          <div className="eachGridBox">
            <header>First Name</header>
            <span className="titleContainer">
              <p className="titleName">{}</p>
            </span>
          </div>

          <div className="eachGridBox">
            <header>Last Name</header>
            <span className="titleContainer">
              <p className="titleName">
                {studentDetails && studentDetails.results[0].user.last_name}
              </p>
            </span>
          </div>

          <div className="eachGridBox">
            <header>Matric No</header>
            <span className="titleContainer">
              <p className="titleName">
                {studentDetails &&
                  studentDetails.results[0].user.student[0].matric_no}
              </p>
            </span>
          </div>

          <div className="eachGridBox">
            <header>Email</header>
            <span className="titleContainer">
              <p className="titleName">
                {studentDetails && studentDetails.results[0].user.email}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewStudentInfo;
