import React, { useState } from "react";
import StudentSidebar from "../../../components/StudentSidebar";
import EditNavbar from "../../component/navigation_";
import styles from "./styles.module.css";

const FamilyData = () => {
  const [next_of_kin_full_name, setNext_of_kin_full_name] = useState("");
  const [next_of_kin_phone_no_1, setNext_of_kin_phone_no_1] = useState("");
  const [next_of_kin_phone_no_2, setNext_of_kin_phone_no_2] = useState("");
  const [next_of_kin_address, setNext_of_kin_address] = useState("");
  const [guardian_full_name, setGuardian_full_name] = useState("");
  const [guardian_phone_no_1, setGuardian_phone_no_1] = useState("");
  const [guardian_phone_no_2, setGuardian_phone_no_2] = useState("");
  const [guardian_address, setGuardian_address] = useState("");

  const submitHandler = () => {};
  return (
    <div>
      <div>
        <div className={styles.layout}>
          <div className={styles.Sidebar}>
            <StudentSidebar />
          </div>
          <div className={styles.editContainer}>
            <EditNavbar photo={styles.remote} />
            <div className={styles.formContainer}>
              <form onSubmit={submitHandler}>
                <div className={styles.inputContainer_}>
                  <label>next_of_kin_full_name</label>
                  <input
                    type="text"
                    value={next_of_kin_full_name}
                    onChange={(e) => setNext_of_kin_full_name(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>next_of_kin_phone_no_1</label>
                  <input
                    type="text"
                    value={next_of_kin_phone_no_1}
                    onChange={(e) => setNext_of_kin_phone_no_1(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>next_of_kin_phone_no_2</label>
                  <input
                    type="text"
                    value={next_of_kin_phone_no_2}
                    onChange={(e) => setNext_of_kin_phone_no_2(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>next_of_kin_address</label>
                  <input
                    type="text"
                    value={next_of_kin_address}
                    onChange={(e) => setNext_of_kin_address(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>guardian_full_name</label>
                  <input
                    type="text"
                    value={guardian_full_name}
                    onChange={(e) => setGuardian_full_name(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>guardian_phone_no_1</label>
                  <input
                    type="text"
                    value={guardian_phone_no_1}
                    onChange={(e) => setGuardian_phone_no_1(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>guardian_phone_no_2</label>
                  <input
                    type="text"
                    value={guardian_phone_no_2}
                    onChange={(e) => setGuardian_phone_no_2(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>guardian_address</label>
                  <input
                    type="text"
                    value={guardian_address}
                    onChange={(e) => setGuardian_address(e.target.value)}
                  />
                </div>
              </form>
              <button
                onClick={submitHandler}
                className={`${styles.btn} ${styles.lilac}`}
              >
                Save information
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
