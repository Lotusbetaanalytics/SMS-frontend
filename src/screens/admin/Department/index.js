import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import { postDepartment } from "../../../redux/action/departmentAction";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { getfaculty } from "../../../redux/action/facultyAction";

function Department() {
  const [facultyName, setFacultyName] = useState("");
  const [nameOfDepartment, setNameOfDepartment] = useState("");
  const [departmentCode, setDepartmentCode] = useState("");
  const [headOfDepartment, setHeadOfDepartment] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [isActive, setIsActive] = useState("");

  const dispatch = useDispatch();
  const toast = useToast();

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const departmentData = {
      faculty: facultyName,
      name: nameOfDepartment,
      code: departmentCode,
      description: descriptionInput,
      head: headOfDepartment,
      isActive: isActive,
    };
    dispatch(postDepartment(departmentData, toast));
    console.log(departmentData);
  };

  useEffect(() => {
    dispatch(getfaculty());
  }, [dispatch]);

  const listFaculty = useSelector((state) => state.listFaculty);
  const { faculty } = listFaculty;
  console.log(faculty);

  return (
    <div className={styles.newDepartmentContainer}>
      <Sidebar />
      <Header />
      <div className={styles.newDepartment}>
        <div className={styles.newDepartmentTitle}>
          <span>Create New Department</span>
        </div>
        <div className={styles.newDepartmentContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.newDeparmentForm}>
              <select
                onChange={(e) => setFacultyName(e.target.value)}
                value={facultyName}
                required={true}
                className={styles.newDepartmentSelect}
              >
                <option>Faculty..</option>
                {faculty &&
                  faculty.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>

              <input
                type="text"
                onChange={(e) =>
                  setNameOfDepartment(e.currentTarget.value.slice(0, 30))
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
                onChange={(e) => setDescriptionInput(e.target.value)}
                value={descriptionInput}
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
