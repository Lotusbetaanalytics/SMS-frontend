import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import { totalStudent } from "../../../redux/action/getAllUsersAction";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../../redux/action/courseAction";

function RegisterCourses() {
  const [studentName, setStudentName] = useState("");
  const [selectCourse, setSelectCourse] = useState("");
  const [selectSession, setSelectSession] = useState("");
  const [selectSemester, setSelectSemester] = useState("");
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(totalStudent());
  }, [dispatch]);

  const { success, allStudent } = useSelector((state) => state.totalStudentNo);

  React.useEffect(() => {
    if (success) {
      setUsers(allStudent);
    }
  }, [allStudent, success, studentName]);

  const filterName = (name) => {
    return setFiltered(
      allStudent.filter(({ user }) => {
        console.log(user.full_name.includes(name));
        return user.full_name.includes(name);
      })
    );
  };
  console.log(filtered);
  const onSuggestHandler = (name) => {
    setStudentName(name);
    setFiltered([]);
  };

  useEffect(() => {
    dispatch(getCourse());
  });

  const courseGet = useSelector((state) => state.courseGet);
  const { getCourseId } = courseGet;
  console.log(getCourseId);

  return (
    <div className={styles.registerCourseContainer}>
      <Sidebar />
      <Header />
      <div className={styles.registerCourse}>
        <div className={styles.registerCourseTitle}>
          <span>Register Course</span>
        </div>
        <div className={styles.registerCourseContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.registerCourseForm}>
              <input
                type="text"
                onChange={(e) => {
                  setStudentName(e.target.value);
                  filterName(e.target.value);
                }}
                value={studentName}
                placeholder="Student Name"
                required={true}
                onBlur={() => {
                  setTimeout(() => {
                    setStudentName([]);
                  }, 100);
                }}
              />
              <div>
                {filtered &&
                  filtered.map((student) => {
                    return (
                      <div
                        key={student._id}
                        className={styles.searchName}
                        onClick={() => onSuggestHandler(student.user.full_name)}
                      >
                        <p>{student.user.full_name}</p>
                      </div>
                    );
                  })}
              </div>

              <select
                onChange={(e) => setSelectCourse(e.target.value)}
                value={selectCourse}
                required={true}
                className={styles.registerCourseSelect}
              >
                <option>Select Course</option>
                {getCourseId &&
                  getCourseId.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>

              <select
                onChange={(e) => setSelectSession(e.target.value)}
                value={selectSession}
                required={true}
                className={styles.registerCourseSelect}
              >
                <option>Select Session</option>
                <option>Year 3</option>
              </select>

              <select
                onChange={(e) => setSelectSemester(e.target.value)}
                value={selectSemester}
                required={true}
                className={styles.registerCourseSelect}
              >
                <option>Select Semester</option>
                <option>2nd Semester</option>
              </select>
            </div>

            <div className={styles.registerBtn}>
              <button type="submit" className={styles.stBtn} disable="true">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterCourses;
