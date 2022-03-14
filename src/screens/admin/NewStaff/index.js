import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import { newStaff } from "../../../redux/action/staffAction";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";

function NewStaff({ success }) {
  const [first_Name, setFirst_Name] = useState("");
  const [middle_Name, setMiddle_Name] = useState("");
  const [last_Name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [employee_id, setEmployee_id] = useState("");
  //   const [role, setRole] = useState("");

  const dispatch = useDispatch();
  const toast = useToast();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      user: {
        first_name: first_Name,
        middle_name: middle_Name,
        last_name: last_Name,
        email,
        specialization,
      },
      employee_id,
      specialization,
    };
    dispatch(newStaff(data, toast));
  };

  // if (success) {
  //   window.location.reload(false);
  // }

  return (
    <div className={styles.newStaffContainer}>
      <Sidebar />
      <Header userN="Fonsus" />
      <div className={styles.newStaff}>
        <div className={styles.newStaffTitle}>
          <span>Create New Staff</span>
        </div>
        <div className={styles.newStaffContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.newStaffForm}>
              {/* <div className={styles.studentCardTitle}>First Name</div> */}
              <input
                type="text"
                onChange={(e) => setFirst_Name(e.target.value)}
                value={first_Name}
                placeholder="First Name"
                required={true}
              />

              <input
                type="text"
                onChange={(e) => setMiddle_Name(e.target.value)}
                value={middle_Name}
                placeholder="Middle Name"
                required={true}
              />

              <input
                type="text"
                onChange={(e) => setLast_Name(e.target.value)}
                value={last_Name}
                placeholder="Last Name"
                required={true}
              />

              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
                required={true}
              />

              <input
                type="text"
                onChange={(e) =>
                  setEmployee_id(e.currentTarget.value.slice(0, 11))
                }
                value={employee_id}
                placeholder="Staff Identity Number"
                required={true}
              />

              {/* <input
                type="text"
                onChange={(e) => setRole(e.target.value)}
                value={role}
                placeholder="Role"
                required={true}
              /> */}

              <select
                onChange={(e) => setSpecialization(e.target.value)}
                value={specialization}
                required={true}
                className={styles.newStaffSelect}
              >
                <option>Specialization..</option>
                <option>
                  https://sms-lotus.herokuapp.com/academics/specialization/1/
                </option>
              </select>
            </div>

            <div className={styles.staffBtn}>
              <button type="submit" className={styles.stBtn}>
                Create Staff
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewStaff;
