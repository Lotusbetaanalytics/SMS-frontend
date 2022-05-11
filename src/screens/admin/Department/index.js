import React, { useEffect, useState } from "react";
// import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import { postDepartment } from "../../../redux/action/departmentAction";
import { useDispatch, useSelector } from "react-redux";
import { Button, useToast } from "@chakra-ui/react";
import { getfaculty } from "../../../redux/action/facultyAction";
import { totalStaff } from "../../../redux/action/getAllUsersAction";
import SidebarNav from "../../../components/SidebarNav";
// import { CREATE_DEPARTMENT_RESET } from "../../../redux/constants/departmentConstants";

function Department() {
  const [facultyName, setFacultyName] = useState("");
  const [nameOfDepartment, setNameOfDepartment] = useState("");
  const [departmentCode, setDepartmentCode] = useState("");
  const [headOfDepartment, setHeadOfDepartment] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [isActive, setIsActive] = useState(false);

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
      is_active: isActive,
    };
    dispatch(postDepartment(departmentData, toast));
    // dispatch({ type: CREATE_DEPARTMENT_RESET });
    console.log(departmentData);
  };

  useEffect(() => {
    dispatch(getfaculty());
  }, [dispatch]);

  const listFaculty = useSelector((state) => state.listFaculty);
  const { faculty } = listFaculty;
  // console.log(faculty);

  useEffect(() => {
    dispatch(totalStaff());
  }, [dispatch]);

  const totalStaffNo = useSelector((state) => state.totalStaffNo);
  const { allStaff } = totalStaffNo;

  const departmentPost = useSelector((state) => state.departmentPost);
  const { loading } = departmentPost;

  // if (success) {
  //   window.location.reload();
  // }

  return (
    <div className={styles.newDepartmentContainer}>
      <SidebarNav />
      <Header />
      <div className={styles.newDepartment}>
        <div className={styles.newDepartmentTitle}>
          <span>Create New Department</span>
        </div>
        <div className={styles.newDepartmentContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.newDeparmentForm}>
              <div className={styles.newForm}>
                <label>Faculty Name</label>
                <select
                  onChange={(e) => setFacultyName(e.target.value)}
                  value={facultyName}
                  required={true}
                  className={styles.newDepartmentSelect}
                >
                  <option></option>
                  {faculty &&
                    faculty.map((item, i) => (
                      <option key={i} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className={styles.newForm}>
                <label>Name of Department</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setNameOfDepartment(e.currentTarget.value.slice(0, 30))
                  }
                  value={nameOfDepartment}
                  required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Department Code</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setDepartmentCode(e.currentTarget.value.slice(0, 15))
                  }
                  value={departmentCode}
                  required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Head of Department</label>
                <select
                  onChange={(e) => setHeadOfDepartment(e.target.value)}
                  value={headOfDepartment}
                  required={true}
                  className={styles.newDepartmentSelect}
                >
                  <option></option>
                  {allStaff &&
                    allStaff.map((item, i) => (
                      <option key={i} value={item.id}>
                        {item.user.full_name}
                      </option>
                    ))}
                </select>
              </div>

              <div className={styles.newForm}>
                <label>Description (optional)</label>
                <input
                  type="text"
                  onChange={(e) => setDescriptionInput(e.target.value)}
                  value={descriptionInput}
                  required={true}
                />
              </div>
            </div>

            <div className={styles.departBtn}>
              {loading ? (
                <Button
                  isLoading
                  loadingText="Validating Credentials..."
                  colorScheme="teal"
                  variant="outline"
                  isFullWidth
                  style={{ height: "4rem" }}
                />
              ) : (
                <button type="submit" className={styles.stBtn}>
                  Create Department
                </button>
              )}
              <div className={styles.facultyRadioContainer}>
                <div className={styles.radioBtn} onChange={handleClick}>
                  <input
                    type="checkbox"
                    value={isActive}
                    disable={isActive ? "false" : "true"}
                  />
                  <span>Publish Departement</span>
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
