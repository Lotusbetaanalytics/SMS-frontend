import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import { createNewFaculty } from "../../../redux/action/facultyAction";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";

function Faculty() {
  const [faculty_Name, setFaculty_Name] = useState("");
  const [faculty_Code, setFaculty_Code] = useState("");
  const [deanOfFaculty, setDeanOfFaculty] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState("");

  const handleClick = () => {
    setIsActive(!isActive);
  };
  console.log(isActive);

  const dispatch = useDispatch();
  const toast = useToast();

  const submitHandler = (e) => {
    e.preventDefault();
    const facultyData = {
      name: faculty_Name,
      code: faculty_Code,
      description: description,
      dean: deanOfFaculty,
      isActive: isActive,
    };
    dispatch(createNewFaculty(facultyData, toast));
    console.log(facultyData);
  };

  return (
    <div className={styles.createFacultyContainer}>
      <Sidebar />
      <Header />
      <div className={styles.newFaculty}>
        <div className={styles.newFacultyTitle}>
          <span>Create New Faculty</span>
        </div>
        <div className={styles.newFacultyContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.newFacultyForm}>
              <input
                type="text"
                onChange={(e) => setFaculty_Name(e.target.value)}
                value={faculty_Name}
                placeholder="Faculty"
                required={true}
              />

              <input
                type="text"
                onChange={(e) =>
                  setFaculty_Code(e.currentTarget.value.slice(0, 11))
                }
                value={faculty_Code}
                placeholder="Faculty Code"
                required={true}
              />

              <select
                onChange={(e) => setDeanOfFaculty(e.target.value)}
                value={deanOfFaculty}
                required={true}
                className={styles.newFacultySelect}
              >
                <option>Dean of Faculty..</option>
                <option>9</option>
              </select>

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

              <div className={styles.facultyRadioContainer}>
                <div className={styles.radioBtn}>
                  <input
                    onChange={handleClick}
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

export default Faculty;
