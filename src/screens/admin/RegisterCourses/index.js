import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import { totalStudent } from "../../../redux/action/getAllUsersAction";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourse,
  getSemester,
  getSession,
  postRegisterCourses,
} from "../../../redux/action/courseAction";
import { useToast } from "@chakra-ui/react";

function RegisterCourses() {
  const [studentName, setStudentName] = useState("");
  const [selectCourse, setSelectCourse] = useState("");
  const [selectSession, setSelectSession] = useState("");
  const [selectSemester, setSelectSemester] = useState("");
  const [isActive, setIsActive] = useState("");
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const dispatch = useDispatch();
  const toast = useToast();

  const submitHandler = (e) => {
    e.preventDefault();
    const courseData = {
      course: selectCourse,
      student: studentName,
      session: selectSession,
      semester: selectSemester,
      isActive: isActive,
    };
    dispatch(postRegisterCourses(courseData, toast));
    console.log(courseData);
  };

  // useEffect(() => {
  //   dispatch(totalStudent());
  // }, [dispatch]);

  // const { success, allStudent } = useSelector((state) => state.totalStudentNo);

  // React.useEffect(() => {
  //   if (success) {
  //     setUsers(allStudent);
  //   }
  // }, [allStudent, success, studentName]);

  // const filterName = (name) => {
  //   return setFiltered(
  //     allStudent.filter(({ user }) => {
  //       console.log(user.full_name.includes(name));
  //       return user.full_name.includes(name);
  //     })
  //   );
  // };
  // console.log(filtered);
  // const onSuggestHandler = (name) => {
  //   setStudentName(name);
  //   setFiltered([]);
  // };

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  const [sample, setSample] = React.useState([]);

  const courseGet = useSelector((state) => state.courseGet);
  const { getCourseId, success: okay } = courseGet;
  console.log(getCourseId);

  React.useEffect(() => {
    if (okay) {
      setSample(getCourseId.results);
    }
  }, [okay]);
  console.log(sample);

  useEffect(() => {
    dispatch(getSemester());
  }, [dispatch]);

  const semesterGet = useSelector((state) => state.semesterGet);
  const { getSemesterId } = semesterGet;

  useEffect(() => {
    dispatch(getSession());
  }, [dispatch]);

  const sessionGet = useSelector((state) => state.sessionGet);
  const { getSessionId } = sessionGet;
  console.log(getSessionId);

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
              {/* <input
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
              </div> */}

              <select
                onChange={(e) => setSelectCourse(e.target.value)}
                value={selectCourse}
                required={true}
                className={styles.registerCourseSelect}
              >
                <option>Select Course...</option>
                {sample.map((item, i) => (
                  <option key={i} value={item.id}>
                    {item.code}
                  </option>
                ))}
              </select>

              {/* <select
                onChange={(e) => setSelectSession(e.target.value)}
                value={selectSession}
                required={true}
                className={styles.registerCourseSelect}
              >
                <option>Select Session...</option>
                {getSessionId &&
                  getSessionId.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.year}
                    </option>
                  ))}
              </select> */}

              <select
                onChange={(e) => setSelectSemester(e.target.value)}
                value={selectSemester}
                required={true}
                className={styles.registerCourseSelect}
              >
                <option>Select Semester...</option>
                {getSemesterId &&
                  getSemesterId.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.semester}
                    </option>
                  ))}
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
