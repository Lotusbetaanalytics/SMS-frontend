import { useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import { createNewStudent } from "../../../redux/action/createStudentAction";
import { getSpecialization } from "../../../redux/action/departmentAction";
import styles from "./styles.module.css";

function NewStudent() {
  const [first_Name, setFirst_Name] = useState("");
  const [middle_Name, setMiddle_Name] = useState("");
  const [last_Name, setLast_Name] = useState("");
  const [matric_no, setMatric_no] = useState("");
  const [student_id, setStudent_id] = useState("");
  const [email, setEmail] = useState("");
  const [specialization, setSpecialization] = useState("");

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
      matric_no,
      student_id,
      specialization,
    };
    dispatch(createNewStudent(data, toast));
  };
  const postNewStudent = useSelector((state) => state.postNewStudent);
  const { success, error, loading } = postNewStudent;
  console.log(postNewStudent);

  useEffect(() => {
    dispatch(getSpecialization());
  }, [dispatch]);

  const getSpecilize = useSelector((state) => state.getSpecilize);
  const { specializationid } = getSpecilize;

  return (
    <div className={styles.newStudentContainer}>
      <Sidebar />
      <Header />
      <div className={styles.newStudent}>
        <div className={styles.newStudentLink}>
          <div className={styles.newStudentTitle}>
            <Link to="/staff/viewstudent">
              <span>View Student Details</span>
            </Link>
          </div>
        </div>

        <div className={styles.newStudentContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.newStudentForm}>
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
                type="number"
                onChange={(e) =>
                  setMatric_no(e.currentTarget.value.slice(0, 11))
                }
                value={matric_no}
                placeholder="Matric No."
                required={true}
              />
              <input
                type="text"
                onChange={(e) =>
                  setStudent_id(e.currentTarget.value.slice(0, 11))
                }
                value={student_id}
                placeholder="Student Identity Number"
                required={true}
              />

              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email Address"
                required={true}
              />

              <select
                onChange={(e) => setSpecialization(e.target.value)}
                value={specialization}
                required={true}
                className={styles.newStudentSelect}
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

            <div className={styles.studentBtn}>
              <button type="submit" className={styles.stBtn}>
                Create Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewStudent;
