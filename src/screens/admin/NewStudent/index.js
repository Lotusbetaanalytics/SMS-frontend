import React, { useEffect, useState } from "react";
import { Button, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
// import Sidebar from "../../../components/Sidebar";
import { createNewStudent } from "../../../redux/action/createStudentAction";
import { getSpecialization } from "../../../redux/action/departmentAction";
import styles from "./styles.module.css";
import SidebarNav from "../../../components/SidebarNav";
// import { CREATE_STUDENT_RESET } from "../../../redux/constants/createStudentConstants";

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
  const navigate = useNavigate();

  const postNewStudent = useSelector((state) => state.postNewStudent);
  const { loading, success } = postNewStudent;
  console.log(postNewStudent);

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

  if (success) {
    window.location.reload();
  }

  useEffect(() => {
    dispatch(getSpecialization());
  }, [dispatch]);

  const getSpecilize = useSelector((state) => state.getSpecilize);
  const { specializationid } = getSpecilize;

  return (
    <div className={styles.newStudentContainer}>
      <SidebarNav />
      <Header />
      <div className={styles.newStudent}>
        <div className={styles.newStudentLink}>
          <div className={styles.newStudentTitle}>
            <Link to="/staff/viewstudent">
              <button>View Student Details</button>
            </Link>
          </div>
        </div>
        <div className={styles.newStudentContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.newStudentForm}>
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
                <label>Matric No.</label>
                <input
                  type="number"
                  onChange={(e) =>
                    setMatric_no(e.currentTarget.value.slice(0, 11))
                  }
                  value={matric_no}
                  required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Student Identity Number</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setStudent_id(e.currentTarget.value.slice(0, 11))
                  }
                  value={student_id}
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
                <label>Specialization</label>
                <select
                  onChange={(e) => setSpecialization(e.target.value)}
                  value={specialization}
                  required={true}
                  className={styles.newStudentSelect}
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

            <div className={styles.studentBtn}>
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
                  Create Student
                </button>
              )}
            </div>
          </form>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default NewStudent;
