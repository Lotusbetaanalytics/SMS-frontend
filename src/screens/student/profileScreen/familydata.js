import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditNavbar from "../../../components/navigation_";
import StudentSidebar from "../../../components/StudentSidebar";
import SidebarTwo from "../../../components/StudentSidebar/sidebar";
import styles from "./styles.module.css";

const FamilyData = () => {

  const navigate = useNavigate();
  const myDetail = JSON.parse(localStorage.getItem("studentDetails"));
  const mystudentDetails = myDetail;

  const next_of_kin_full_name = mystudentDetails.next_of_kin_full_name;
  const next_of_kin_phone_no_1 = mystudentDetails.next_of_kin_phone_no_1;
  const next_of_kin_phone_no_2 = mystudentDetails.next_of_kin_phone_no_2;
  const next_of_kin_address = mystudentDetails.next_of_kin_address;
  const guardian_full_name = mystudentDetails.guardian_full_name;
  const guardian_phone_no_1 = mystudentDetails.guardian_phone_no_1;
  const guardian_phone_no_2 = mystudentDetails.guardian_phone_no_2;
  const guardian_address = mystudentDetails.guardian_address;

  const submitHandler = () => {
    navigate("/student/profile/familydataEdit")
  };
  return (
    <div>
      <div>
        <div className={styles.layout}>
          <div className={styles.Sidebar}>
            <StudentSidebar profile={styles.remote} />
          </div>
          <div className={styles.editContainer}>
            <EditNavbar photo={styles.remote} />
            <div className={styles.formContainer}>
              <form onSubmit={submitHandler}>
                <div className={styles.inputContainer_}>
                  <label>Next of kin fullname</label>
                  <input
                    type="text"
                    value={next_of_kin_full_name}
                    disabled
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Next of kin phone number_1</label>
                  <input
                    type="text"
                    value={next_of_kin_phone_no_1}
                    disabled
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Next of kin phone number_2</label>
                  <input
                    type="text"
                    value={next_of_kin_phone_no_2}
                    disabled
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Next of kin address</label>
                  <input
                    type="text"
                    value={next_of_kin_address}
                    disabled
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Guardian fullname</label>
                  <input
                    type="text"
                    value={guardian_full_name}
                    disabled
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Guardian phone number_1</label>
                  <input
                    type="text"
                    value={guardian_phone_no_1}
                    disabled
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Guardian phone number_2</label>
                  <input
                    type="text"
                    value={guardian_phone_no_2}
                    disabled
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Guardian address</label>
                  <input
                    type="text"
                    value={guardian_address}
                    disabled
                  />
                </div>
              </form>
              <button
                onClick={submitHandler}
                className={`${styles.btn} ${styles.lilac}`}
              >
                Edit information
              </button>
            </div>
          </div>
          <div className={styles.leftBar}>
            <SidebarTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyData;
