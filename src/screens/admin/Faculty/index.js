import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";

function Faculty() {
  const [faculty_Name, setFaculty_Name] = useState("");
  const [faculty_Code, setFaculty_Code] = useState("");
  const [deanOfFaculty, setDeanOfFaculty] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = () => {};

  return (
    <div className={styles.createFacultyContainer}>
      <Sidebar />
      <Header userN="Fonsus" />
      <div className={styles.newFaculty}>
        <div className={styles.newFacultyTitle}>
          <span>Create New Faculty</span>
        </div>
        <div className={styles.newFacultyContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.newFacultyForm}>
              {/* <div className={styles.studentCardTitle}>First Name</div> */}
              <input
                type="text"
                onChange={(e) => setFaculty_Name(e.target.value)}
                value={faculty_Name}
                placeholder="Faculty Name"
                required={true}
              />

              <input
                type="text"
                onChange={(e) =>
                  setFaculty_Code(e.currentTarget.value.slice(0, 11))
                }
                value={faculty_Code}
                placeholder="Middle Name"
                required={true}
              />

              <input
                type="text"
                onChange={(e) => setDeanOfFaculty(e.target.value)}
                value={deanOfFaculty}
                placeholder="Last Name"
                required={true}
              />
              <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Description (optional)"
                required={true}
              />
            </div>

            <div className={styles.facultyBtn}>
              <button type="submit" className={styles.stBtn}>
                Create Faculty
              </button>
              <button type="submit" disable={true} className={styles.stBtn2}>
                Activate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
