import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { postAddCourses } from "../../../redux/action/courseAction";
import { getSpecialization } from "../../../redux/action/departmentAction";

function AddCourses() {
  const [specialization, setSpecialization] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [description, setDescription] = useState("");
  const [coordinator, setCoordinator] = useState("");
  const [isActive, setIsActive] = useState("");

  const dispatch = useDispatch();
  const toast = useToast();

  const submitHandler = (e) => {
    e.preventDefault();
    const addcourseData = {
      specialization: specialization,
      name: courseName,
      code: courseCode,
      description: description,
      coordinator: coordinator,
      isActive: isActive,
    };
    dispatch(postAddCourses(addcourseData, toast));
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    dispatch(getSpecialization());
  }, [dispatch]);

  const getSpecilize = useSelector((state) => state.getSpecilize);

  const { specializationid } = getSpecilize;

  return (
    <div className={styles.addCoursesContainer}>
      <Sidebar />
      <Header />
      <div className={styles.addCourse}>
        <div className={styles.addCourseTitle}>
          <span>Add Course</span>
        </div>
        <div className={styles.addCourseContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.addCourseForm}>
              <select
                onChange={(e) => setSpecialization(e.target.value)}
                value={specialization}
                required={true}
                className={styles.addCourseSelect}
              >
                <option>Specialization...</option>
                {specializationid &&
                  specializationid.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>

              <input
                type="text"
                onChange={(e) => setCourseName(e.target.value)}
                value={courseName}
                placeholder="Course Name"
                required={true}
              />
              <input
                type="text"
                onChange={(e) =>
                  setCourseCode(e.currentTarget.value.slice(0, 11))
                }
                value={courseCode}
                placeholder="Course Code"
                required={true}
              />

              <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Description (optional)"
              />

              <select
                onChange={(e) => setCoordinator(e.target.value)}
                value={coordinator}
                required={true}
                className={styles.addCourseSelect}
              >
                <option>Coordinator...</option>
                <option>1</option>
              </select>

              <div className={styles.specializationCheckbox}>
                <div className={styles.checkboxDiv}>
                  <input
                    onChange={handleClick}
                    type="checkbox"
                    value={isActive}
                    disable={isActive ? "false" : "true"}
                    className={styles.checkInput}
                  />
                  <label>Publish</label>
                </div>
              </div>

              <div className={styles.btnSpec}>
                <button type="submit" className={styles.stBtn}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCourses;
