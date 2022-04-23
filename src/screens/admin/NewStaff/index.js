import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import { newStaff } from "../../../redux/action/staffAction";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { getSpecialization } from "../../../redux/action/departmentAction";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    dispatch(getSpecialization());
  }, [dispatch]);

  const getSpecilize = useSelector((state) => state.getSpecilize);
  const { specializationid } = getSpecilize;

  return (
    <div className={styles.newStaffContainer}>
      <Sidebar />
      <Header />
      <div className={styles.newStaff}>
        <div className={styles.newStaffTitle}>
          <Link to="/staff/viewstaff">
            <button>View Staff Details</button>
          </Link>
        </div>
        <div className={styles.newStaffContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.newStaffForm}>
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

              <select
                onChange={(e) => setSpecialization(e.target.value)}
                value={specialization}
                required={true}
                className={styles.newStaffSelect}
              >
                <option>Specialization..</option>
                {specializationid &&
                  specializationid.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.name}
                    </option>
                  ))}
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
