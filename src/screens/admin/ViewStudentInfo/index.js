import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../../../components/Header";
import Modal from "../../../components/Modal";
// import Sidebar from "../../../components/Sidebar";
import SidebarNav from "../../../components/SidebarNav";
import { totalStudent } from "../../../redux/action/getAllUsersAction";
import styles from "./styles.module.css";

function ViewStudentInfo() {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  let { id } = useParams();

  console.log(id);

  useEffect(() => {
    dispatch(totalStudent());
  }, [dispatch]);

  const [studentInfo, setStudentInfo] = React.useState();

  const totalStudentNo = useSelector((state) => state.totalStudentNo);
  const { allStudent = [], success: student } = totalStudentNo;
  const data = allStudent.filter((x) => x.id === parseInt(id));

  React.useEffect(() => {
    if (student) {
      setStudentInfo(data && data);
    }
  }, [student]);
  console.log(studentInfo && studentInfo[0].user.first_name);

  return (
    <div className={styles.viewInfoContainer}>
      <SidebarNav />
      <Header />

      <div className={styles.viewInfo}>
        <div className={styles.viewInfoBtn}>
          <Link to="/staff/viewstudent">
            <button>Back</button>
          </Link>
        </div>

        <div className={styles.gridBox}>
          <div className={styles.eachGridBox}>
            <header>First Name</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>
                {studentInfo && studentInfo[0].user.first_name}
              </p>
            </span>
          </div>
          <div className={styles.eachGridBox}>
            <header>Middle Name</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>
                {studentInfo && studentInfo[0].user.middle_name}
              </p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Last Name</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>
                {studentInfo && studentInfo[0].user.last_name}
              </p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Matric No</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>
                {studentInfo && studentInfo[0].matric_no}
              </p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Email</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>
                {studentInfo && studentInfo[0].user.email}
              </p>
            </span>
          </div>
        </div>
        <div className={styles.editbtn}>
          <button
            type="button"
            className={styles.stBtn}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Edit Student Details
          </button>
        </div>
        {openModal && <Modal closeModal={setOpenModal} />}
      </div>
    </div>
  );
}

export default ViewStudentInfo;
