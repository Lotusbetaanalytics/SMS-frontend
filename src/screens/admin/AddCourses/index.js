import React, { useEffect, useState } from "react";
// import SidebarNavigation from "../../../components/SidebarNavigation";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, useToast } from "@chakra-ui/react";
import { postAddCourses } from "../../../redux/action/courseAction";
import { getSpecialization } from "../../../redux/action/departmentAction";
// import SidebarOne from "../../../components/SidebarNavigation/SidebarOne";
import SidebarNav from "../../../components/SidebarNav";

function AddCourses() {
  const [specialization, setSpecialization] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [description, setDescription] = useState("");
  const [coordinator, setCoordinator] = useState("");
  const [isActive, setIsActive] = useState(false);

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
      is_active: isActive,
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

  const postNewCourse = useSelector((state) => state.postNewCourse);
  const { loading } = postNewCourse;

  return (
    <div className={styles.addCoursesContainer}>
      <SidebarNav />
      <Header />
      <div className={styles.addCourse}>
        <div className={styles.addCourseTitle}>
          <span>Add Course</span>
        </div>
        <div className={styles.addCourseContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.addCourseForm}>
              <div className={styles.newForm}>
                <label>Specialization</label>
                <select
                  onChange={(e) => setSpecialization(e.target.value)}
                  value={specialization}
                  required={true}
                  className={styles.addCourseSelect}
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

              <div className={styles.newForm}>
                <label>Course Name</label>
                <input
                  type="text"
                  onChange={(e) => setCourseName(e.target.value)}
                  value={courseName}
                  required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Course Code</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setCourseCode(e.currentTarget.value.slice(0, 11))
                  }
                  value={courseCode}
                  required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Description (optional)</label>
                <input
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>

              <div className={styles.newForm}>
                <label>Coordinator</label>
                <select
                  onChange={(e) => setCoordinator(e.target.value)}
                  value={coordinator}
                  required={true}
                  className={styles.addCourseSelect}
                >
                  <option></option>
                  <option>1</option>
                </select>
              </div>
            </div>
            <div className={styles.btnSpec}>
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
                  Submit
                </button>
              )}

              <div className={styles.toggleBtnContainer}>
                <div className={styles.toggleBtn} onChange={handleClick}>
                  <input
                    type="checkbox"
                    value={isActive}
                    disable={isActive ? "false" : "true"}
                  />
                  <span className={styles.toggleRound}>Publish Add Course</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCourses;
