import React, { useEffect, useState } from "react";
// import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import { newStaff } from "../../../redux/action/staffAction";
import { useDispatch, useSelector } from "react-redux";
import { Button, useToast } from "@chakra-ui/react";
import { getSpecialization } from "../../../redux/action/departmentAction";
import { Link } from "react-router-dom";
import SidebarNav from "../../../components/SidebarNav";
// import { NEWSTAFF_RESET } from "../../../redux/constants/staffConstants";

function NewStaff() {
  const [first_Name, setFirst_Name] = useState("");
  const [middle_Name, setMiddle_Name] = useState("");
  const [last_Name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [employee_id, setEmployee_id] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  console.log(isActive);

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
        is_staff: isActive,
      },
      employee_id,
      specialization,
      is_superuser: isActive,
    };
    dispatch(newStaff(data, toast));
    // dispatch({ type: NEWSTAFF_RESET });
    console.log(data);
  };

  useEffect(() => {
    dispatch(getSpecialization());
  }, [dispatch]);

  const getSpecilize = useSelector((state) => state.getSpecilize);
  const { specializationid } = getSpecilize;

  const postNewStaff = useSelector((state) => state.postNewStaff);
  const { loading } = postNewStaff;

  return (
    <div className={styles.newStaffContainer}>
      <SidebarNav />
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
              <div className={styles.newForm}>
                <label>First Name</label>
                <input
                  type="text"
                  onChange={(e) => setFirst_Name(e.target.value)}
                  value={first_Name}
                  required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Middle Name</label>
                <input
                  type="text"
                  onChange={(e) => setMiddle_Name(e.target.value)}
                  value={middle_Name}
                  required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Last Name</label>
                <input
                  type="text"
                  onChange={(e) => setLast_Name(e.target.value)}
                  value={last_Name}
                  required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Email Address</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Staff Identity Number</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setEmployee_id(e.currentTarget.value.slice(0, 11))
                  }
                  value={employee_id}
                  required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Specialization</label>
                <select
                  onChange={(e) => setSpecialization(e.target.value)}
                  value={specialization}
                  required={true}
                  className={styles.newStaffSelect}
                >
                  <option></option>
                  {specializationid &&
                    specializationid.map((item, i) => (
                      <option key={i} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className={styles.staffBtn}>
              {loading ? (
                <Button
                  isLoading
                  loadingText="Validating Credentials..."
                  colorScheme="teal"
                  variant="outline"
                  isFullWidth
                  style={{ height: "5rem" }}
                />
              ) : (
                <button type="submit" className={styles.stBtn}>
                  Create Staff
                </button>
              )}
              <div className={styles.toggleBtnContainer}>
                <div className={styles.toggleBtn} onChange={handleClick}>
                  <input
                    type="checkbox"
                    value={isActive}
                    disable={isActive ? "false" : "true"}
                  />
                  <span className={styles.toggleRound}>Publish Staff</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewStaff;
