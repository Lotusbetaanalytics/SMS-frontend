import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";

function Department() {
  const [faculty_Name, setFaculty_Name] = useState("");
  const [nameOfDepartment, setNameOfDepartment] = useState("");
  const [departmentCode, setDepartmentCode] = useState("");
  const [headOfDepartment, setHeadOfDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState("");

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const submitHandler = () => {};

  return (
    <div className={styles.newDepartmentContainer}>
      <Sidebar />
      <Header userN="Fonsus" />
      <div className={styles.newDepartment}>
        <div className={styles.newDepartmentTitle}>
          <span>Create New Department</span>
        </div>
        <div className={styles.newDepartmentContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.newDeparmentForm}>
              {/* <div className={styles.studentCardTitle}>First Name</div> */}
              <select
                onChange={(e) => setFaculty_Name(e.target.value)}
                value={faculty_Name}
                required={true}
                className={styles.newDepartmentSelect}
              >
                <option>Faculty Name..</option>
                <option>Business Associate</option>
              </select>

              <input
                type="text"
                onChange={(e) =>
                  setNameOfDepartment(e.currentTarget.value.slice(0, 15))
                }
                value={nameOfDepartment}
                placeholder="Name of Department"
                required={true}
              />
              <input
                type="text"
                onChange={(e) =>
                  setDepartmentCode(e.currentTarget.value.slice(0, 15))
                }
                value={departmentCode}
                placeholder="Department Code"
                required={true}
              />

              <select
                onChange={(e) => setHeadOfDepartment(e.target.value)}
                value={headOfDepartment}
                required={true}
                className={styles.newDepartmentSelect}
              >
                <option>Head of Department..</option>
                <option>Mr Okafor</option>
              </select>

              <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Description (optional)"
                required={true}
              />
            </div>

            <div className={styles.departBtn}>
              <button type="submit" className={styles.stBtn}>
                Create Department
              </button>
              <div className={styles.facultyRadioContainer}>
                <div className={styles.radioBtn} onChange={handleClick}>
                  <input
                    type="checkbox"
                    value={isActive}
                    disable={isActive ? "false" : "true"}
                  />
                  Publish
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Department;
