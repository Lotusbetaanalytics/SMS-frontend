import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import { totalStaff } from "../../../redux/action/getAllUsersAction";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function ViewStaffInfo() {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(totalStaff());
  }, [dispatch]);

  const [staffInfo, setStaffInfo] = React.useState();

  const totalStaffNo = useSelector((state) => state.totalStaffNo);
  const { allStaff = [], success: staff } = totalStaffNo;
  const data = allStaff.filter((x) => x.id === parseInt(id));

  React.useEffect(() => {
    if (staff) {
      setStaffInfo(data && data);
    }
  }, [staff]);
  console.log(staffInfo && staffInfo[0].user.first_name);

  return (
    <div className={styles.viewInfoContainer}>
      <Sidebar />
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
                {staffInfo && staffInfo[0].user.first_name}
              </p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Last Name</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>
                {staffInfo && staffInfo[0].user.last_name}
              </p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Matric No</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>
                {staffInfo && staffInfo[0].employee_id}
              </p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Email</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>
                {staffInfo && staffInfo[0].user.email}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewStaffInfo;
